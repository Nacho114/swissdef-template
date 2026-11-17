<script lang="ts">
  import { cart } from "../../../store"; // Import the cart store
  import { format_for_stripe, getProductById } from "$lib/products";
  import { _ } from "svelte-i18n";
  import { localize } from "$lib/nav";
  import { dev } from "$app/environment"; // `dev` is `true` in development and `false` in production.
  import { with_iva } from "$lib/products";

  export let totalCost: number;
  export let shippingCost: number;

  const stripe_aws_link = dev
    ? import.meta.env.VITE_TEST_AWS_STRIPE_LINK // Use test link in development
    : import.meta.env.VITE_AWS_STRIPE_LINK; // Use production link in production

  let pending = false;
  let failed = false;

  $: line_items = Object.entries($cart)
    .map(([id, quantity]) => {
      const product = getProductById(id);
      if (product == undefined) {
        console.log("product undefined!");
        return null;
      }
      const unit_amount_raw = with_iva(product.price);
      const unit_amount = format_for_stripe(unit_amount_raw);

      if (product) {
        return {
          price_data: {
            currency: "chf", // Assuming all products are in CHF
            product_data: {
              name: product.id, // Using slug as the product name
              description: `${product.type}`, // Optional: you can customize this description
            },
            unit_amount: unit_amount, // Convert CHF to cents for Stripe compatibility (assuming price is in CHF)
          },
          quantity: quantity,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  async function handleCheckout() {
    if (pending) return;
    pending = true;
    failed = false;
    const origin = dev
      ? window.location.origin
      : "https://www.swissdefibrillator.ch";
    const successUrl = new URL($localize("/success"), origin);
    successUrl.searchParams.set("amount", String(totalCost));
    const cancelUrl = new URL($localize("/failure"), origin);

    try {
      const response = await fetch(stripe_aws_link, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          line_items: line_items,
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Standard delivery",
            fixed_amount: {
              amount: format_for_stripe(shippingCost),
              currency: "chf",
            },
          },
          successUrl: successUrl.href,
          cancelUrl: cancelUrl.href,
        }),
      });

      if (!response.ok) throw new Error("Checkout request failed");
      const { url } = await response.json();
      if (typeof url !== "string" || new URL(url).protocol !== "https:") {
        throw new Error("Invalid checkout URL");
      }
      window.location.assign(url);
    } catch {
      failed = true;
      pending = false;
    }
  }
</script>

<button
  id="checkout-btn"
  class="checkout-btn"
  disabled={pending}
  aria-busy={pending}
  on:click={handleCheckout}
>
  <slot />
</button>
{#if failed}<p role="alert" class="checkout-error">
    {$_("checkout_retry_error")}
  </p>{/if}

<style>
  .checkout-error {
    color: var(--global-color-primary-dark);
    margin-bottom: 0;
  }
  .checkout-btn:disabled {
    opacity: 0.65;
    cursor: wait;
  }
  .checkout-btn {
    width: 100%;
    margin-top: 24px;
    padding: 12px;
    background: #000;
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--text-base);
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .checkout-btn:hover {
    background: #222;
  }
</style>

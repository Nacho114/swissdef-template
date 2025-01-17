<script lang="ts">
  import { cart } from "../../store"; // Import the cart store
  import { getProductById } from "$lib/products";
  import { dev } from "$app/environment"; // `dev` is `true` in development and `false` in production.
  import { with_iva } from "$lib/products";

  export let shippingCost: number;

  const stripe_aws_link = dev
    ? import.meta.env.VITE_TEST_AWS_STRIPE_LINK // Use test link in development
    : import.meta.env.VITE_AWS_STRIPE_LINK; // Use production link in production

  let success_url = dev
    ? "http://localhost:5173/success"
    : "https://www.swissdefibrillator.ch/success";

  let failure_url = dev
    ? "http://localhost:5173/failure"
    : "https://www.swissdefibrillator.ch/failure";

  $: line_items = Object.entries($cart)
    .map(([id, quantity]) => {
      const product = getProductById(id);
      if (product) {
        return {
          price_data: {
            currency: "chf", // Assuming all products are in CHF
            product_data: {
              name: product.id, // Using slug as the product name
              description: `${product.type}`, // Optional: you can customize this description
            },
            unit_amount: with_iva(product.price) * 100, // Convert CHF to cents for Stripe compatibility (assuming price is in CHF)
          },
          quantity: quantity,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  // Auxiliary function to report the conversion event
  function gtagReportConversion() {
    const total_cost = Object.entries($cart).reduce(
      (accumulator, [id, quantity]) => {
        const product = getProductById(id);
        return product ? accumulator + product.price * quantity : accumulator;
      },
      0,
    );
    gtag("event", "conversion", {
      send_to: "AW-935906638/xTIUCLak3_wZEM6ao74D",
      value: total_cost + shippingCost,
      currency: "CHF",
    });
  }

  async function handleCheckout() {
    try {
      gtagReportConversion();

      const response = await fetch(stripe_aws_link, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          line_items: line_items,
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Standard delivery",
            fixed_amount: {
              amount: shippingCost * 100,
              currency: "chf",
            },
          },
          successUrl: success_url,
          cancelUrl: failure_url,
        }),
      });

      const { url } = await response.json(); // Extract 'url' instead of sessionId
      window.location.href = url; // Redirect to Stripe checkout
    } catch (err) {
      console.error("Checkout error", err);
    }
  }
</script>

<button class="checkout-btn" on:click={handleCheckout}> <slot /> </button>

<style>
  .checkout-btn {
    width: 100%;
    margin-top: 24px;
    padding: 12px;
    background: #000;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .checkout-btn:hover {
    background: #222;
  }
</style>

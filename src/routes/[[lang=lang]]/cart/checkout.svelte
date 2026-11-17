<script lang="ts">
  import { cart } from "../../../store"; // Import the cart store
  import { _ } from "svelte-i18n";
  import { localize } from "$lib/nav";

  let pending = false;
  let failed = false;

  async function handleCheckout() {
    if (pending) return;
    pending = true;
    failed = false;
    try {
      const response = await fetch($localize("/cart/checkout"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify($cart),
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

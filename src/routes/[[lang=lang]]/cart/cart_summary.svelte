<script lang="ts">
  import { _ } from "svelte-i18n";
  import Checkout from "./checkout.svelte";
  import { formatPrice } from "$lib/math";
  import { calculateCheckoutTotals, type CheckoutItem } from "$lib/checkout";

  export let items: CheckoutItem[];

  $: totals = calculateCheckoutTotals(items);
</script>

<div class="cart-summary">
  <h2>{$_("cart_order_summary")}</h2>

  <div class="summary-items">
    <div class="summary-line">
      <span>{$_("cart_subtotal")}</span>
      <span>{formatPrice(totals.subtotal / 100)}</span>
    </div>

    <div class="summary-line">
      <span>{$_("cart_shipping")}</span>
      <span>{formatPrice(totals.shipping / 100)}</span>
    </div>

    <div class="summary-line">
      <span>VAT</span>
      <span>{formatPrice(totals.vat / 100)}</span>
    </div>

    <div class="summary-line total">
      <span>{$_("cart_total")}</span>
      <span>{formatPrice(totals.total / 100)}</span>
    </div>
  </div>

  <Checkout>{$_("cart_checkout")}</Checkout>
</div>

<style>
  .cart-summary {
    width: 320px;
    background: white;
    padding: 24px;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  h2 {
    margin: 0 0 20px 0;
    font-size: var(--text-md);
    font-weight: 500;
  }

  .summary-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .summary-line {
    display: flex;
    justify-content: space-between;
    color: var(--color-text-muted);
    font-size: var(--text-sm);
  }

  .total {
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid #eee;
    color: black;
    font-weight: 500;
    font-size: var(--text-md);
  }
  .cart-summary {
    width: 320px;
    background: white;
    padding: 24px;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  h2 {
    margin: 0 0 20px 0;
    font-size: var(--text-md);
    font-weight: 500;
  }

  .summary-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .summary-line {
    display: flex;
    justify-content: space-between;
    color: var(--color-text-muted);
    font-size: var(--text-sm);
  }

  .total {
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid #eee;
    color: black;
    font-weight: 500;
    font-size: var(--text-md);
  }

  @media (max-width: 1000px) {
    .cart-summary {
      width: 100%;
      padding: 16px;
      border-radius: 0;
      box-shadow: none;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }

    h2 {
      margin: 0 0 16px 0;
      font-size: var(--text-md);
      text-align: center;
    }

    .summary-items {
      gap: 12px;
    }

    .total {
      margin-top: 12px;
      padding-top: 12px;
    }
  }
</style>

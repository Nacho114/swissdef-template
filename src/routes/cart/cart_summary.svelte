<script lang="ts">
  export let subtotal: number = 0;
  const shippingCost = 4.99;
  const taxRate = 0.08; // 8% tax rate

  $: tax = subtotal * taxRate;
  $: total = subtotal + shippingCost + tax;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const handleCheckout = () => {
    // Handle checkout process
  };
</script>

<div class="cart-summary">
  <h2>Order Summary</h2>

  <div class="summary-items">
    <div class="summary-line">
      <span>Subtotal</span>
      <span>{formatPrice(subtotal)}</span>
    </div>

    <div class="summary-line">
      <span>Shipping</span>
      <span>{formatPrice(shippingCost)}</span>
    </div>

    <div class="summary-line">
      <span>Estimated Tax</span>
      <span>{formatPrice(tax)}</span>
    </div>

    <div class="summary-line total">
      <span>Total</span>
      <span>{formatPrice(total)}</span>
    </div>
  </div>

  <button class="checkout-btn" on:click={handleCheckout}>
    Go to Checkout
  </button>
</div>

<style>
  .cart-summary {
    width: 320px;
    background: white;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  h2 {
    margin: 0 0 20px 0;
    font-size: 1.25rem;
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
    color: #666;
    font-size: 0.95rem;
  }

  .total {
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid #eee;
    color: black;
    font-weight: 500;
    font-size: 1.1rem;
  }

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

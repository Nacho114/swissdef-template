<script lang="ts">
  import { cart } from "../../store";
  import CartItem from "./cart_item.svelte";
  import { getProductById, MAX_SHIPPING_COST } from "$lib/products";
  import Container from "$lib/components/container.svelte";
  import CartSummary from "./cart_summary.svelte";
  import { _ } from "svelte-i18n";

  // Reactive variable to check if cart has items
  $: hasItems = Object.keys($cart).length > 0;

  // Reactive statement to update cart items
  $: cartItems = Object.entries($cart)
    .map(([id, quantity]) => {
      const product = getProductById(id);
      if (product) {
        return {
          id: product.id,
          slug: product.slug,
          img: product.img,
          price: product.price,
          shipping_price: product.shipping_price,
          quantity,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  // Calculate subtotal reactively
  $: subtotal = cartItems.reduce((sum, item) => {
    return sum + item?.price * item?.quantity;
  }, 0);

  $: shippingCost = Math.min(
    cartItems.reduce((sum, item) => {
      return sum + item?.shipping_price * item?.quantity;
    }, 0),
    MAX_SHIPPING_COST,
  );
</script>

<Container>
  <h1>{$_("cart_title")}</h1>

  {#if hasItems}
    <div class="cart-container">
      <div class="cart-items">
        {#each cartItems as item}
          <CartItem {...item} />
        {/each}
      </div>
      <CartSummary {subtotal} {shippingCost} />
    </div>
  {:else}
    <div class="empty-cart-container">
      <h4>{$_("cart_empty_text")}</h4>
    </div>
  {/if}
</Container>

<style>
  .cart-container {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  .empty-cart-container {
    background-color: #f5f5f5;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    margin: 1rem 0;
    text-align: center;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 1200px) {
    .cart-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .cart-container {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 16px;
    }

    .cart-items {
      gap: 12px; /* Increase space between items for mobile */
    }

    .empty-cart-container {
      padding: 1rem;
      margin: 1.5rem 0;
    }

    h1 {
      font-size: 1.5rem; /* Make the title smaller on mobile */
      text-align: center;
    }

    h4 {
      font-size: 1.2rem;
      text-align: center;
    }
  }
</style>

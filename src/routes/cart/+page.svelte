<script lang="ts">
  import { cart, addToCart } from "../../store";
  import CartItem from "./cart_item.svelte";
  import { getProductById } from "$lib/products";
  import Container from "$lib/components/container.svelte";
  import CartSummary from "./cart_summary.svelte";
  import { _ } from "svelte-i18n";

  // Initialize cart with some items (if needed)
  addToCart("philips_hs1", 2);
  addToCart("philips_frx", 1);

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
</script>

<Container>
  <h1>Your Cart</h1>
  <div class="cart-container">
    <div class="cart-items">
      {#each cartItems as item}
        <CartItem {...item} />
      {/each}
    </div>
    <CartSummary {subtotal} />
  </div>
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
</style>

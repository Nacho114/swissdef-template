<script lang="ts">
  import { cart, addToCart } from "../../store"; // Import the cart store
  import CartItem from "./cart_item.svelte"; // Import the CartItem component
  import { getProductById } from "$lib/products"; // Import the product data function
  import { get } from "svelte/store"; // Import get to fetch the store value
  import Container from "$lib/components/container.svelte";
  import CartSummary from "./cart_summary.svelte";
  import { _ } from "svelte-i18n";

  addToCart("philips_hs1", 2);
  addToCart("philips_frx", 1);

  let cartItems: any = [];

  // Fetch the cart contents and corresponding products
  $: {
    const currentCart = get(cart); // Get the current cart once
    cartItems = [];

    for (const [id, quantity] of Object.entries(currentCart)) {
      const product = getProductById(id);
      if (product) {
        let id = product.id;
        let slug = product.slug;
        let img = product.img;
        let price = product.price;
        cartItems.push({ id, slug, img, price, quantity });
      }
    }
  }
  let subtotal = 2;
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

  @media (max-width: 768px) {
    .cart-container {
      grid-template-columns: 1fr;
    }
  }
</style>

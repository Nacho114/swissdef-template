<!-- YourComponent.svelte -->
<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import ToggleButtons from "$lib/components/toggle_button.svelte";
  import ProductCard from "$lib/components/product_card.svelte";
  import { _ } from "svelte-i18n";
  import { products } from "$lib/products";

  let more_products = products.concat(products).concat(products);
</script>

<div class="toggle-container">
  <ToggleButtons button1="Defibrillators" button2="Accessories" />
</div>

<Container>
  <div class="product-grid">
    {#each more_products as { img, slug }}
      <ProductCard
        imagePath={`/assets/products/${img}.jpg`}
        title={$_(slug + "_title")}
        summary={$_(slug + "_summary")}
        price={"2"}
      />
    {/each}
  </div>
</Container>

<style>
  .toggle-container {
    text-align: center; /* Center the toggle button */
    margin-bottom: 2rem; /* Space below the toggle buttons */
  }

  .product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; /* Space between cards */
    justify-content: space-between; /* Distribute space around items */
    margin: 0 auto; /* Center the grid */
  }

  /* ProductCard component will take care of its own styling internally. */

  @media (max-width: 600px) {
    /* On small screens, let each card take full width minus the gap */
    .product-grid {
      justify-content: center;
    }
  }
</style>

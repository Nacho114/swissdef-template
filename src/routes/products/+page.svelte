
<!-- YourComponent.svelte -->
<script lang="ts">
  import { products } from "$lib/products";
  import ToggleButtons from '$lib/components/toggle_button.svelte';
  import ProductCard from "$lib/components/product_card.svelte";
  import { _ } from "svelte-i18n";
</script>

<div class="toggle-container">
  <ToggleButtons button1="Defibrillators" button2="Accessories" />
</div>

<div class="product-grid">
  {#each products as { img, slug }}
    <ProductCard 
      imagePath={`/assets/products/${img}.jpg`} 
      title={$_(slug + "_title")} 
      summary={$_(slug + "_summary")} 
      price={"2"} 
    />
  {/each}
</div>

<style>
  .toggle-container {
    text-align: center; /* Center the toggle button */
    margin-bottom: 2rem; /* Space below the toggle buttons */
  }

  .product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; /* Space between cards */
    justify-content: center; /* Distribute space around items */
    margin: 0 auto; /* Center the grid */
    max-width: 1200px; /* Maximum width of the grid */
  }

  /* ProductCard component will take care of its own styling internally. */

  @media (max-width: 600px) {
    /* On small screens, let each card take full width minus the gap */
    .product-grid {
      justify-content: center;
    }
  }
</style>


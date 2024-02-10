<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import ToggleButtons from "$lib/components/toggle_button.svelte";
  import ProductCard from "./product_card.svelte";
  import { _ } from "svelte-i18n";
  import { defibrillators, accessories } from "$lib/products";

  let toggled_products = defibrillators; // default to defibrillators

  $: defibrillator_button_name = $_("section_general_defibrillator");
  $: accessories_button_name = $_("section_general_accessories");

  // Function to handle toggle change
  function handleToggleChange(selectedProduct: string) {
    if (selectedProduct === defibrillator_button_name) {
      toggled_products = defibrillators;
    } else if (selectedProduct === accessories_button_name) {
      toggled_products = accessories;
    }
  }
</script>

<Container>
  <div class="header">
    <h1>Products</h1>
    <div class="toggle-container">
      <ToggleButtons
        button1={defibrillator_button_name}
        button2={accessories_button_name}
        on:toggleChange={(e) => handleToggleChange(e.detail)}
      />
    </div>
  </div>

  <div class="product-grid">
    {#each toggled_products as { img, slug }}
      <a href="/products/{slug}" class="product-link">
        <ProductCard {slug} imagePath={`/assets/products/${img}_s.jpg`} />
      </a>
    {/each}
  </div>
</Container>

<style>
  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  h1 {
    grid-column: 1 / 2;
    text-align: left;
  }

  .toggle-container {
    grid-column: 2 / 3;
    text-align: center;
  }

  .product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; /* Space between cards */
    justify-content: flex-start; /* Distribute space around items */
    margin: 0 auto; /* Center the grid */
    margin-top: 2vw;
  }

  .product-link {
    text-decoration: none;
    color: black;
  }

  /* ProductCard component will take care of its own styling internally. */

  @media (max-width: 600px) {
    /* On small screens, let each card take full width minus the gap */
    .product-grid {
      justify-content: center;
      flex-direction: column;
      margin-top: 10vw;
    }

    .header {
      grid-template-columns: 1fr;
      text-align: center;
    }

    h1,
    .toggle-container {
      grid-column: 1;
    }
  }
</style>

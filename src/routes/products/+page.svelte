<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import ToggleButtons from "$lib/components/toggle_button.svelte";
  import ProductCard from "$lib/components/product_card.svelte";
  import { _ } from "svelte-i18n";
  import { defibrillators, accessories } from "$lib/products";

  let _defibrillators = defibrillators
    .concat(defibrillators)
    .concat(defibrillators);
  let _accessories = accessories.concat(accessories);
  let more_products = _defibrillators; // default to defibrillators

  $: defibrillator_button_name = $_("defibrillator");
  $: accessories_button_name = $_("accessories");

  // Function to handle toggle change
  function handleToggleChange(selectedProduct: string) {
    // TODO: Use i18 here also! Else it will break
    if (selectedProduct === defibrillator_button_name) {
      more_products = _defibrillators;
    } else if (selectedProduct === accessories_button_name) {
      more_products = _accessories;
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
    justify-content: space-between; /* Distribute space around items */
    margin: 0 auto; /* Center the grid */
    margin-top: 2vw;
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

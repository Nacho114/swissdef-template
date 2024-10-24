<script lang="ts">
  import ProductsAccessories from "../products/products_accessories.svelte";
  import { accessories } from "$lib/products";

  let toggled_products = accessories; // default to defibrillators
  let firstSelected = false;
</script>

<ProductsAccessories {toggled_products} {firstSelected} />

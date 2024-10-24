<script lang="ts">
  import ProductsAccessories from "./products_accessories.svelte";
  import { defibrillators } from "$lib/products";

  let toggled_products = defibrillators; // default to defibrillators
  let firstSelected = true;
</script>

<ProductsAccessories {toggled_products} {firstSelected} />

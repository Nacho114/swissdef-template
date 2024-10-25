<script lang="ts">
  import { _ } from "svelte-i18n";
  import ProductsAccessories from "./products_accessories.svelte";
  import { defibrillators } from "$lib/products";

  let toggled_products = defibrillators; // default to defibrillators
  let firstSelected = true;
</script>

<svelte:head>
  <title>{$_("meta_title_defibrillators")}</title>
  <meta name="description" content={$_("meta_description_defibrillators")} />
  <meta name="keywords" content={$_("meta_keywords_defibrillators")} />
</svelte:head>

<ProductsAccessories {toggled_products} {firstSelected} />

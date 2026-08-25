<script lang="ts">
  import { _ } from "svelte-i18n";
  import ProductsAccessories from "../products/products_accessories.svelte";
  import { accessories } from "$lib/products";

  let toggled_products = accessories; // default to defibrillators
  let firstSelected = false;
</script>

<svelte:head>
  <title>{$_("meta_title_accessories")}</title>
  <meta name="description" content={$_("meta_description_accessories")} />
  <meta name="keywords" content={$_("meta_keywords_accessories")} />
</svelte:head>

<ProductsAccessories {toggled_products} {firstSelected} />

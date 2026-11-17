<script lang="ts">
  import { _ } from "svelte-i18n";
  import ProductsAccessories from "../products/products_accessories.svelte";
  import { accessories, defibrillators, ProductType } from "$lib/products";

  const toggled_products = [
    ...defibrillators.filter(({ type }) => type === ProductType.Accessory),
    ...accessories,
  ];
  let firstSelected = false;
</script>

<svelte:head>
  <title>{$_("meta_title_accessories")}</title>
  <meta name="description" content={$_("meta_description_accessories")} />
  <meta name="keywords" content={$_("meta_keywords_accessories")} />
</svelte:head>

<ProductsAccessories {toggled_products} {firstSelected} />

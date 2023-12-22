<script lang="ts">
  import type { Product } from "$lib/products";
  import Container from "$lib/components/container.svelte";
  import ProductInfo from "$lib/components/product_info.svelte";
  import InfoListCard from "$lib/components/info_list_card.svelte";
  import { _ } from "svelte-i18n";
  export let data: Product;

  let image_path = `/assets/products/${data.img}.jpg`;
  let price = data.price;
  $: title = $_(`section_products_${data.slug}_title`);
  $: summary = $_(`section_products_${data.slug}_summary`);
  $: about = $_(`section_products_${data.slug}_about`);
  $: features = $_(`section_products_${data.slug}_features`);
</script>

<Container>
  <div class="info">
    <ProductInfo {image_path} {title} {price} {summary} />
    <InfoListCard title="Description" infoListString={about} />
    <InfoListCard title="Specification" infoListString={features} />
    <InfoListCard title="Returns & Warrant" infoListString={features} />
  </div>
</Container>

<style>
  .info {
    display: flex;
    flex-direction: column;
    gap: 4vw;
    align-items: center;
    width: 100%; /* Set width to span the entire container */
  }
</style>

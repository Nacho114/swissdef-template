<script lang="ts">
  import type { Product } from "$lib/products";
  import Container from "$lib/components/container.svelte";
  import ProductHero from "../product_hero.svelte";
  import MdProductPage from "$lib/components/md_product_page.svelte";
  import { _ } from "svelte-i18n";
  export let data: Product;

  let image_path = `/assets/products/${data.img}.webp`;
  let price = data.price;
  $: title = $_(`section_products_${data.slug}_title`);
  $: summary = $_(`section_products_${data.slug}_summary`);

  let file_name = `/markdown/products/${data.slug}/info`;
  let id = data.id;

  $: productJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: summary,
    image: `https://www.swissdefibrillator.ch${image_path}`,
    offers: {
      "@type": "Offer",
      url: `https://www.swissdefibrillator.ch/products/${data.slug}`,
      priceCurrency: "CHF",
      price: price.toFixed(2),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Swiss Defibrillator",
      },
    },
  });
</script>

<svelte:head>
  <title>{title} | Swiss Defibrillator</title>
  <meta name="description" content={summary} />
  {@html `<script type="application/ld+json">${productJsonLd}${"<"}/script>`}
</svelte:head>

<Container>
  <div class="info">
    <ProductHero {id} {image_path} {title} {price} {summary} ptype={data.type} />
    <MdProductPage {file_name} clean={true} />
  </div>
</Container>

<style>
  .info {
    display: flex;
    flex-direction: column;
    gap: 4vw;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: var(--border-radius);
    padding: 0;
  }
</style>

<script lang="ts">
  import type { Product } from "$lib/products";
  import Container from "$lib/components/container.svelte";
  import ProductInfo from "../product_info.svelte";
  import MdProductPage from "$lib/components/md_product_page.svelte";
  import { _ } from "svelte-i18n";
  export let data: Product;

  let image_path = `/assets/products/${data.img}.webp`;
  let price = data.price;
  $: title = $_(`section_products_${data.slug}_title`);
  $: summary = $_(`section_products_${data.slug}_summary`);

  let file_name = `/markdown/products/${data.slug}/info`;
  let id = data.id;

  // DEV-ONLY design-variant switcher — remove before merging to main
  const variantLabels = [
    "Original",
    "V1 · Red CTA",
    "V2 · One card",
    "V3 · Clean details",
  ];
  let variant = 0;
  const prevVariant = () =>
    (variant = (variant + variantLabels.length - 1) % variantLabels.length);
  const nextVariant = () => (variant = (variant + 1) % variantLabels.length);

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
  <div class="info" class:plain={variant === 3}>
    <ProductInfo
      {id}
      {image_path}
      {title}
      {price}
      {summary}
      redCta={variant >= 1}
      unified={variant >= 2}
    />
    <MdProductPage {file_name} clean={variant === 3} />
  </div>
</Container>

<!-- DEV-ONLY design-variant switcher — remove before merging to main -->
<div class="variant-switcher">
  <button on:click={prevVariant} aria-label="Previous variant">◀</button>
  <span>{variantLabels[variant]}</span>
  <button on:click={nextVariant} aria-label="Next variant">▶</button>
</div>

<style>
  .info.plain {
    background-color: white;
  }

  /* DEV-ONLY switcher */
  .variant-switcher {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--color-text);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius-pill);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    z-index: 2000;
    font-size: var(--text-sm);
  }

  .variant-switcher button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: var(--text-base);
    padding: 0 0.25rem;
  }

  .variant-switcher span {
    min-width: 130px;
    text-align: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4vw;
    align-items: center;
    justify-content: center;
    background-color: Var(
      --global-color-gray-light-bg
    ); /* Light gray background */
    border-radius: Var(--border-radius);
    padding: 3vw;
    padding-left: 7vw;
    padding-right: 7vw;
  }
</style>

<script lang="ts">
  import { localize } from "$lib/nav";
  import Container from "$lib/components/container.svelte";
  import ProductCard from "./product_card.svelte";
  import { _ } from "svelte-i18n";
  import { defibrillators, ProductType } from "$lib/products";
  export let toggled_products = defibrillators;
  export let firstSelected: boolean;
  const compatibleParts: Record<string, string[]> = {
    philips_hs1: [
      "philips_hs1_electrodes",
      "philips_hs1_electrodes_child",
      "philips_hs1_frx_batteries",
    ],
    philips_frx: [
      "philips_frx_electrodes",
      "philips_frx_child_key",
      "philips_hs1_frx_batteries",
    ],
  };
  $: displayedProducts = firstSelected
    ? toggled_products.filter(({ type }) => type === ProductType.Defibrillator)
    : toggled_products;
</script>

<Container>
  <section class="catalogue">
    <header>
      <h1>
        {$_(firstSelected ? "products_compare" : "section_general_accessories")}
      </h1>
      <p>{$_("products_intro")}</p>
      <a class="help" href={$localize("/contact?service=products")}
        >{$_("products_help")}</a
      >
    </header>
    <nav class="categories" aria-label={$_("section_general_products")}>
      <a
        href={$localize("/products")}
        class:active={firstSelected}
        aria-current={firstSelected ? "page" : undefined}
        >{$_("section_general_defibrillator")}</a
      >
      <a
        href={$localize("/accessories")}
        class:active={!firstSelected}
        aria-current={!firstSelected ? "page" : undefined}
        >{$_("section_general_accessories")}</a
      >
    </nav>
    <div class="product-grid">
      {#each displayedProducts as { img, slug, price }}
        <article>
          <a href={$localize(`/products/${slug}`)} class="product-link">
            <ProductCard
              {slug}
              {price}
              imagePath={`/assets/products/${img}_s.webp`}
            />
          </a>
          {#if firstSelected && compatibleParts[slug]}
            <h3>{$_("products_compatible_parts")}</h3>
            <ul class="compatible-parts">
              {#each compatibleParts[slug] as part}
                <li>
                  <a href={$localize(`/products/${part}`)}
                    >{$_(`section_products_${part}_title`)}</a
                  >
                </li>
              {/each}
            </ul>
          {/if}
        </article>
      {/each}
    </div>
  </section>
</Container>

<style>
  .catalogue {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 0 4rem;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
  }
  header {
    max-width: 720px;
    margin-bottom: 2rem;
  }
  h1 {
    margin: 0 0 1rem;
    font-size: var(--text-2xl);
  }
  header p {
    margin: 0 0 1rem;
    color: var(--color-text-muted);
    font-size: var(--text-md);
    line-height: 1.6;
  }
  .help {
    color: var(--global-color-primary);
    text-underline-offset: 4px;
    display: inline-block;
    padding: 0.5rem 0;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
  }
  .categories a {
    color: var(--color-text-muted);
    text-decoration: none;
    padding: 0.75rem 0;
    border-bottom: 3px solid transparent;
    margin-bottom: -1px;
  }
  .categories a.active {
    color: var(--color-text);
    border-color: var(--global-color-primary);
  }
  h3 {
    margin: 1.25rem 0 0.5rem;
    font-size: var(--text-base);
  }
  .compatible-parts {
    padding-left: 1.25rem;
    margin: 0 0 1.5rem;
  }
  .compatible-parts a {
    display: inline-block;
    padding-block: 0.35rem;
    color: var(--global-color-primary);
    text-underline-offset: 3px;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }
  .product-link {
    text-decoration: none;
    color: var(--color-text);
    display: flex;
    min-width: 0;
  }
  a:focus-visible {
    outline: 3px solid var(--global-color-primary);
    outline-offset: 4px;
  }
  @media (max-width: 1000px) {
    h3 {
      margin: 1.25rem 0 0.5rem;
      font-size: var(--text-base);
    }
    .compatible-parts {
      padding-left: 1.25rem;
      margin: 0 0 1.5rem;
    }
    .compatible-parts a {
      display: inline-block;
      padding-block: 0.35rem;
      color: var(--global-color-primary);
      text-underline-offset: 3px;
    }
    .product-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 600px) {
    .catalogue {
      padding: 2rem 20px 3rem;
    }
    h3 {
      margin: 1.25rem 0 0.5rem;
      font-size: var(--text-base);
    }
    .compatible-parts {
      padding-left: 1.25rem;
      margin: 0 0 1.5rem;
    }
    .compatible-parts a {
      display: inline-block;
      padding-block: 0.35rem;
      color: var(--global-color-primary);
      text-underline-offset: 3px;
    }
    .product-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    h1 {
      font-size: var(--text-xl);
    }
  }
</style>

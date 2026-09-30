<script lang="ts">
  import { localize } from "$lib/nav";
  import Container from "$lib/components/container.svelte";
  import ProductCard from "./product_card.svelte";
  import { _ } from "svelte-i18n";
  import { defibrillators } from "$lib/products";
  export let toggled_products = defibrillators;
  export let firstSelected: boolean;
</script>

<Container>
  <section class="catalogue">
    <header>
      <h1>{$_("section_general_products")}</h1>
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
      {#each toggled_products as { img, slug }}
        <a href={$localize(`/products/${slug}`)} class="product-link">
          <ProductCard {slug} imagePath={`/assets/products/${img}_s.webp`} />
        </a>
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
    .product-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 600px) {
    .catalogue {
      padding: 2rem 20px 3rem;
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

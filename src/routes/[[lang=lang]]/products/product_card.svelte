<!-- ProductCard.svelte -->
<script lang="ts">
  export let slug: string;
  export let imagePath: string;
  import { _ } from "svelte-i18n";

  // Reactive statement that updates the i18n keys when language changes
  let title: string;
  let summary: string;

  let maxWords = 28; // Adjust the number of words you want to display
  let truncatedSummary: string;

  $: {
    title = $_(`section_products_${slug}_title`);
    summary = $_(`section_products_${slug}_summary`);
    truncatedSummary = summarizeText(summary, maxWords);
  }

  function summarizeText(text: string, maxWords: number): string {
    const words = text.split(" ");
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(" ") + (words.length > maxWords ? "..." : "");
  }
</script>

<div class="product-card">
  <div class="product-content">
    <div class="image-container">
      <img src={imagePath} alt={title} class="product-image" loading="lazy" />
    </div>
    <div class="product-info-container">
      <div class="product-info">
        <h2 class="product-title">{title}</h2>
        <p class="product-summary">{truncatedSummary}</p>
        <span class="view-product">{$_("products_view")}</span>
      </div>
    </div>
  </div>
</div>

<style>
  .product-card {
    width: 100%;
    border-top: 2px solid #ddd;
    padding-top: 1rem;
    display: flex;
  }
  .product-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .image-container {
    height: 230px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--global-color-gray-light-bg);
    box-sizing: border-box;
  }
  .product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
  }
  .product-info-container {
    flex: 1;
    display: flex;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.25rem 0 0;
    text-align: left;
  }
  .product-title {
    font-size: var(--text-lg);
    margin: 0 0 0.75rem;
  }
  .product-summary {
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0 0 1rem;
  }
  .view-product {
    color: var(--global-color-primary);
    text-decoration: underline;
    text-underline-offset: 4px;
    margin-top: auto;
    padding: 0.5rem 0;
  }
  @media (max-width: 600px) {
    .image-container {
      height: 210px;
    }
  }
</style>

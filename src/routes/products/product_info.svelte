<script lang="ts">
  import { _ } from "svelte-i18n";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import Box from "$lib/components/box.svelte";
  import BasketCounter from "./basket_counter.svelte";
  import { formatPrice } from "$lib/math";

  export let id: string;
  export let image_path: string;
  export let title: string;
  export let price: number;
  export let summary: string;
</script>

<div class="container">
  <Box>
    <div class="product-image">
      <img src={image_path} alt={title} />
    </div>
  </Box>

  <Box>
    <article class="product-info">
      <div class="header">
        <h1>{title}</h1>
        <div class="price-vat-group">
          <h2 class="price">{formatPrice(price)}</h2>
          <h3 class="vat">{$_("section_products_vat_included")}</h3>
        </div>
      </div>

      <p class="summary">{summary}</p>
      <div class="buttons">
        <div class="top-buttons">
          <BasketCounter {id} />

          <a href="/cart">
            <Button>
              {$_("section_products_order")}
              <ChevronRight />
            </Button>
          </a>
        </div>
        <a href="/maintenance">
          <Button isBlueColor={true}>
            {$_("section_products_add_maintenance")}
            <ChevronRight />
          </Button>
        </a>
      </div>
    </article>
  </Box>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .product-info {
    padding: 10px;
  }

  .product-image {
    width: 30vw; /* Fixed viewport width */
    height: 100%; /* Fixed viewport height to maintain aspect ratio */
    padding: 1vw; /* Padding around the image */
    display: flex;
    justify-content: center; /* Centers image horizontally */
    align-items: center; /* Centers image vertically */
    margin: auto;
    overflow: hidden;
  }

  .product-image img {
    max-width: 100%; /* Ensures the image doesn't exceed container's width */
    max-height: 100%; /* Ensures the image doesn't exceed container's height */
    object-fit: cover; /* Covers the area, maintains aspect ratio, and clips excess */
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end; /* Align price and VAT to the bottom */
  }

  .price-vat-group {
    /* Control the grouping of price and VAT */
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Aligns price and VAT text to the right */
  }

  .price,
  .vat {
    margin: 0;
    padding: 0;
  }

  .price {
    margin: 1px;
  }

  .vat {
    color: gray;
    font-size: smaller; /* Optional: Make VAT text slightly smaller */
  }

  .product-info {
    width: 30vw;
    padding: 1rem;
    padding-right: 3rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .top-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1.2rem;
    color: gray;
  }

  @media (max-width: 1400px) {
    .buttons {
      flex-direction: column; /* Adjust if you want buttons side by side or use column for stacked */
      width: 100%; /* Adjust based on content, could also be a percentage */
      gap: 1.4rem;
    }

    .header {
      flex-direction: column;
      align-items: start;
    }
  }

  @media (max-width: 1000px) {
    .container {
      flex-direction: column-reverse;
      align-items: center;
      gap: 4vw;
      width: 100%;
    }

    .product-info {
      width: 90%;
      margin: auto;
      padding: 20px;
    }

    .product-image {
      width: 90%;
    }

    .product-image img {
      max-width: 100%; /* Allows the image to scale down */
      max-height: auto; /* Adjust based on your design needs */
      object-fit: cover; /* Keeps the aspect ratio, but you can change it to 'contain' if you don't want the image to be cropped */
    }

    .price-vat-group {
      /* Control the grouping of price and VAT */
      display: flex;
      align-items: flex-start;
    }

    p {
      font-size: 16px; /* Adjust font size for readability, avoid using vw for text if too small */
      text-align: justify; /* Optional: adjust text alignment for better readability */
    }
  }
</style>

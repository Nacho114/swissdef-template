<script lang="ts">
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";

  export let image_path: string;
  export let title: string;
  export let price: number;
  export let summary: string;
</script>

<div class="container">
  <div class="product-image">
    <span class="welcome">
      <picture>
        <img src={image_path} alt={title} />
      </picture>
    </span>
  </div>

  <article class="product-info">
    <div class="header">
      <h1>{title}</h1>
      <div class="price-vat-group">
        <h2 class="price">CHF {price}</h2>
        <h3 class="vat">VAT Included</h3>
      </div>
    </div>

    <p class="summary">{summary}</p>
    <div class="buttons">
      <Button>
        <div class="button-content">
          Order
          <ChevronRight />
        </div>
      </Button>
      <Button isBlueColor={true}>
        <div class="button-content">
          Add Maintenance
          <ChevronRight />
        </div>
      </Button>
    </div>
  </article>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center; /* Distributes space evenly */
    gap: 10vw;
    background: #fff;
    border-radius: 8px;
    box-shadow: var(--box-shadow); /* Optional: adds a shadow for depth */
    margin: auto;
    width: 100%;
  }

  .product-image {
    width: 30vw; /* Fixed viewport width */
    height: 30vw; /* Fixed viewport height to maintain aspect ratio */
    padding: 1vw; /* Padding around the image */
    display: flex;
    justify-content: center; /* Centers image horizontally */
    align-items: center; /* Centers image vertically */
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

  .vat {
    color: gray;
    font-size: smaller; /* Optional: Make VAT text slightly smaller */
  }

  .product-info {
    width: 30vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .button-content {
    display: flex; /* Enables flexbox */
    justify-content: center; /* Horizontally center the items in the container */
    align-items: center;
  }

  p {
    font-size: 1.5vw;
    color: gray;
  }

  @media (max-width: 800px) {
    .container {
      flex-direction: column;
      align-items: center;
      gap: 2rem; /* Adjust gap for vertical layout */
    }

    .product-image {
      width: 80vw; /* Adjust width for small screens */
      height: 80vw; /* Adjust height for small screens */
    }

    .product-info {
      width: 80vw; /* Adjust the width for smaller screens */
      /* Other styling adjustments for smaller screens */
    }

    .header {
      flex-direction: column;
      align-items: center; /* Align title and price vertically */
    }

    .buttons {
      flex-direction: column; /* Stack buttons vertically */
      gap: 1rem; /* Add space between buttons */
    }

    /* Other adjustments for smaller screen sizes */
    p {
      font-size: 4vw; /* Adjust font size for readability on small screens */
    }
  }
</style>

<!-- ProductCard.svelte -->
<script lang="ts">
  export let slug: string;
  export let imagePath: string;
  export let price: number;
  import { _ } from "svelte-i18n";

  // Reactive statement that updates the i18n keys when language changes
  $: title = $_(`section_products_${slug}_title`);
  $: summary = $_(`section_products_${slug}_summary`);
</script>

<div class="product-card">
  <div class="image-container">
    <img src={imagePath} alt={title} class="product-image" />
  </div>
  <div class="product-info-container">
    <div class="product-info">
      <h2 class="product-title">{title}</h2>
      <p class="product-summary">{summary}</p>
      <p class="product-price">{price}</p>
    </div>
  </div>
</div>

<style>
  .product-card {
    width: 28vw; /* 3 per row, adjust margin as needed */
    height: 50vw;
    padding: 0.5vw;
    box-shadow: var(--box-shadow); /* Optional: adds a shadow for depth */
    border-radius: 8px; /* Optional: rounds the corners */
    overflow: hidden; /* Ensures the content respects border radius */
    background-color: var(--global-color-light); /* White background */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer; /* Changes cursor to hand pointer on hover */
    transition:
      box-shadow 0.3s,
      transform 0.3s; /* Smooth transition for shadow and transform */
  }

  .product-card:hover {
    /* Add a more defined shadow on hover */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);

    /* Move the card slightly to the top left */
    transform: translate(-5px, -5px);
  }

  .image-container {
    width: 24vw; /* or another appropriate size */
    height: 20vw; /* or another appropriate size */
    padding: 1vw; /* Adjust padding to create uniformity */
    display: flex; /* Ensures image is centered */
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
    background-color: white; /* Matches the image background */
  }

  .product-image {
    max-width: 100%; /* Ensures the image doesn't exceed container's width */
    max-height: 100%; /* Ensures the image doesn't exceed container's height */
    object-fit: contain; /* Maintains aspect ratio and fits within the container */
  }

  .product-info-container {
    border-radius: 4px;
    width: 100%;
    background-color: white;
  }

  .product-info {
    padding: 1rem; /* Padding inside the card */
    padding-left: 2vw;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .product-title {
    font-size: 1.2rem; /* Adjust font size as needed */
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .product-summary {
    font-size: 1rem; /* Adjust font size as needed */
    margin-bottom: 1rem;
  }

  .product-price {
    font-weight: bold; /* Highlights the price */
    font-size: 1.2rem; /* Adjust font size as needed */
    color: #333; /* Dark text for contrast */
  }

  @media (max-width: 1300px) {
    .product-card {
      width: 40vw; /* 3 per row, adjust margin as needed */
      height: auto;
    }
  }

  @media (max-width: 600px) {
    .product-card {
      width: 85vw; /* 3 per row, adjust margin as needed */
      height: auto;
    }
  }
</style>

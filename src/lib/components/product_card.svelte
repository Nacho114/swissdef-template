<!-- ProductCard.svelte -->
<script lang="ts">
  export let imagePath: string;
  export let title: string;
  export let summary: string;
  export let price: string;
</script>

<div class="product-card">
  <img src={imagePath} alt={title} class="product-image"/>
  <div class="product-info">
    <h2 class="product-title">{title}</h2>
    <p class="product-summary">{summary}</p>
    <p class="product-price">{price}</p>
  </div>
</div>

<style>
  .product-card {
    width: calc(100% / 3 - 2rem); /* 3 per row, adjust margin as needed */
    margin: 1rem; /* Spacing between cards */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow for depth */
    border-radius: 8px; /* Optional: rounds the corners */
    overflow: hidden; /* Ensures the content respects border radius */
    background-color: #fff; /* White background */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .product-image {
    max-width: 100%; /* Ensures the image doesn't exceed the card's width */
    height: auto; /* Maintains aspect ratio */
  }

  .product-info {
    padding: 1rem; /* Padding inside the card */
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
</style>

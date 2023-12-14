<!-- ProductCard.svelte -->
<script lang="ts">
  export let imagePath: string;
  export let title: string;
  export let summary: string;
  export let price: string;
</script>

<div class="product-card">
  <img src={imagePath} alt={title} class="product-image" />
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
    padding: 0.5vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Optional: adds a shadow for depth */
    border-radius: 8px; /* Optional: rounds the corners */
    overflow: hidden; /* Ensures the content respects border radius */
    background-color: var(--global-color-light); /* White background */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .product-image {
    padding-top: 4vw;
    max-width: 80%; /* Ensures the image doesn't exceed the card's width */
    height: auto; /* Maintains aspect ratio */
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
    }
  }

  @media (max-width: 600px) {
    .product-card {
      width: 70vw; /* 3 per row, adjust margin as needed */
    }
  }
</style>

<!-- ProductCard.svelte -->
<script lang="ts">
  export let slug: string;
  export let imagePath: string;
  import { _ } from "svelte-i18n";

  // Reactive statement that updates the i18n keys when language changes
  let title: string;
  let summary: string;

  let maxWords = 40; // Adjust the number of words you want to display
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
      </div>
    </div>
  </div>
</div>

<style>
  .product-card {
    width: 28vw; /* 3 per row, adjust margin as needed */
    height: 45vw;
    padding: 0.5vw;
    box-shadow: var(--box-shadow); /* Optional: adds a shadow for depth */
    border-radius: 8px; /* Optional: rounds the corners */
    overflow: hidden; /* Ensures the content respects border radius */
    background-color: var(--global-color-light); /* White background */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  .product-content {
    border-radius: 8px; /* TODO make this a var to standarize borders */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 98%;
    height: 98%;
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
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .product-summary {
    margin-bottom: 1rem;
    overflow: hidden;
  }

  @media (max-width: 1300px) {
    .product-card {
      width: 40vw; /* 3 per row, adjust margin as needed */
      height: 600px;
    }
  }

  @media (max-width: 600px) {
    .product-card {
      width: var(
        --main-mobile-container-width
      ); /* 3 per row, adjust margin as needed */
      height: auto;
    }

    .image-container {
      width: 80vw; /* Increase the width to make image larger */
      height: 40vw; /* Adjust height accordingly to maintain aspect ratio */
      padding: 2vw; /* Optionally adjust padding for aesthetics */
    }

    .product-info {
      padding: 1rem; /* Increase padding for smaller screens */
    }

    .product-image {
      max-width: 100%; /* Ensures image fits within the new container size */
      max-height: 100%; /* Adjusts height to fit within the new container size */
    }
  }
</style>

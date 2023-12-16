<!-- ServiceCard.svelte -->
<script lang="ts">
  import Yes from "virtual:icons/healthicons/yes-negative";
  import No from "virtual:icons/healthicons/no-negative";

  export let title: string;
  export let price: string;
  export let duration: string;
  export let description: string;
  export let features: { name: string; included: boolean }[];
</script>

<div class="service-card">
  <h2 class="service-title">{title}</h2>
  <div class="service-price">{price}</div>
  <div class="service-duration">{duration}</div>
  <p class="service-description">{description}</p>
  <div class="service-features">
    <h3>All Features</h3>
    <ul>
      {#each features as feature}
        <li class="feature-item">
          {#if feature.included}
            <Yes class="icon included" />
          {:else}
            <No class="icon not-included" />
          {/if}
          {feature.name}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .service-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin: 1rem;
    max-width: 400px;
  }

  .service-title {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .service-price {
    font-size: 2rem;
    color: #4caf50; /* Green for price */
    margin-bottom: 0.5rem;
  }

  .service-duration {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .service-description {
    color: #666;
    margin-bottom: 1rem;
  }

  .service-features h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .service-features ul {
    list-style: none;
    padding: 0;
  }

  .feature-item {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

</style>

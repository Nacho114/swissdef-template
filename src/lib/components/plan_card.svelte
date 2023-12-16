<!-- ServiceCard.svelte -->
<script lang="ts">
  import Yes from "virtual:icons/healthicons/yes-negative";
  import No from "virtual:icons/healthicons/no-negative";
  import { _ } from "svelte-i18n";

  export let slug: string;
  export let price: number;
  export let duration: number;

  $: featuresString = $_(`maintenance_${slug}_features`);

  let features: Array<{ name: string; included: boolean }> = [];
  // Reactive statement for features
  $: {
    features = parseFeatures(featuresString);
  }

  // This function parses the feature string and is called inside the reactive block above
  function parseFeatures(featuresString: string) {
    return featuresString.split("\n").map((feature) => {
      const [name, included] = feature.split("||");
      return { name: name.trim(), included: included.trim() === "true" };
    });
  }

  $: title = $_(`maintenance_${slug}_title`);
  let price_info = `${price} CHF`;
  let duration_info = `${duration}h`;
  $: description = $_(`maintenance_${slug}_description`);
</script>

<div class="service-card">
  <h2 class="service-title">{title}</h2>
  <div class="service-price">{price_info}</div>
  <div class="service-duration">{duration_info}</div>
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

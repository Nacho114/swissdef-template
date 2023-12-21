<script lang="ts">
  import { _ } from "svelte-i18n";
  import PlanInformation from "./plan_information.svelte";

  export let slug: string;
  export let price: number;
  export let duration: number;

  $: featuresString = $_(`maintenance_${slug}_features`);
  $: title = $_(`maintenance_${slug}_title`);
  $: description = $_(`maintenance_${slug}_description`);

  let price_info = `${price} CHF`;
  let duration_info = `${duration}h`;
</script>

<div class="service-card">
  <h2 class="service-title">{title}</h2>
  <div class="service-price">{price_info}</div>
  <div class="service-duration">{duration_info}</div>
  <p class="service-description">{description}</p>
  <PlanInformation {featuresString} />
  <PlanInformation {featuresString} />
</div>

<style>
  .service-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    max-width: 400px;
  }

  .service-title {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .service-price {
    font-size: 2rem;
    color: black;
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
</style>

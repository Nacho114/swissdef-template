<script lang="ts">
  import { _ } from "svelte-i18n";
  import PlanInformation from "./plan_information.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";

  export let slug: string;
  export let price: number;
  export let duration: string;
  export let service_type: string;

  $: featuresString = $_(`${service_type}_${slug}_features`);
  $: title = $_(`${service_type}_${slug}_title`);
  $: description = $_(`${service_type}_${slug}_description`);

  let price_info = `${price} CHF`;
  let duration_info = `${duration}h`;
</script>

<div class="service-card">
  <h2 class="service-title">{title}</h2>
  <div class="service-price">
    <div class="service-price">
      <span class="price-amount">{price_info}</span>
      <span class="price-unit">per person</span>
    </div>
  </div>
  <div class="service-duration">{duration_info}</div>

  <p class="service-description">{description}</p>
  <a href="/contact">
    <div class="button">
      <Button fullWidth={true}>
        {$_("section_general_order")}
        <ChevronRight />
      </Button>
    </div></a
  >

  <PlanInformation {featuresString} />
</div>

<style>
  .service-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Optional: adds a shadow for depth */
    padding: 2rem;
    max-width: 400px;
    cursor: pointer; /* Changes cursor to hand pointer on hover */
    transition:
      box-shadow 0.3s,
      transform 0.3s; /* Smooth transition for shadow and transform */
  }

  .service-card:hover {
    /* Add a more defined shadow on hover */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);

    /* Move the card slightly to the top left */
    transform: translate(-5px, -5px);
  }

  .service-title {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .service-price {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .price-amount {
    font-size: 2rem;
    color: black;
  }

  .price-unit {
    font-size: 1rem; /* This is 1/3 of the price size */
    color: #666;
  }

  .service-duration {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .service-description {
    color: #666;
    margin-bottom: 1rem;
    min-height: 50px;
  }

  /* Add media query for smaller screens */
  @media (max-width: 1200px) {
    .service-title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    .service-price {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem; /* Smaller gap when stacked */
    }

    .price-amount {
      font-size: 1.3rem; /* Slightly smaller on mobile */
    }

    .price-unit {
      font-size: 0.9rem; /* Slightly smaller on mobile */
    }
  }
</style>

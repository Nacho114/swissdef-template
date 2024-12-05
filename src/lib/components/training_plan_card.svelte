<script lang="ts">
  import { _ } from "svelte-i18n";
  import PlanInformation from "./plan_information.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { formatPrice } from "$lib/math";

  export let slug: string;
  export let price: number;
  export let duration: string;
  export let service_type: string;

  $: featuresString = $_(`${service_type}_${slug}_features`);
  $: title = $_(`${service_type}_${slug}_title`);
  $: description = $_(`${service_type}_${slug}_description`);

  let price_info = `${formatPrice(price, false)}`;
  let duration_info = `${duration}h`;
</script>

<div class="service-card">
  <h2 class="service-title">{title}</h2>
  <div class="service-price">
    <span class="price-amount">{price_info}</span>
    <span class="price-unit">
      {$_("training_per_session")}
    </span>
  </div>
  <div class="service-duration">{duration_info}</div>

  <p class="service-description">{description}</p>
  <div class="button">
    <a href="/contact">
      <Button fullWidth={true}>
        {$_("section_general_book")}
        <ChevronRight />
      </Button>
    </a>
  </div>

  <PlanInformation {featuresString} />
</div>

<style>
  .service-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    width: 100%;
    max-width: 350px;
    transition:
      box-shadow 0.3s,
      transform 0.3s;
    text-decoration: none;
    display: block;
    color: inherit;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
    font-size: 1rem;
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

  @media (max-width: 768px) {
    .service-card {
      width: 100%;
      max-width: none;
      padding: 1.5rem;
      min-height: auto;
    }

    .service-title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .service-price {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .service-description {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>

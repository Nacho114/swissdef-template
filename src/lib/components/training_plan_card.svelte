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

<a href="/contact" class="service-card">
  <h2 class="service-title">{title}</h2>
  <div class="service-price">
    <span class="price-amount">{price_info}</span>
    <span class="price-unit">
      {$_("training_per_person")}
    </span>
  </div>
  <div class="service-duration">{duration_info}</div>

  <p class="service-description">{description}</p>
  <div class="button">
    <Button fullWidth={true}>
      {$_("section_general_book")}
      <ChevronRight />
    </Button>
  </div>

  <PlanInformation {featuresString} />
</a>

<style>
  .service-card {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    max-width: 400px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: inherit;
    display: block;
    transition: all 0.3s ease;
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

  @media (max-width: 1200px) {
    .service-title {
      font-size: 1.2rem;
    }
    .service-price {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
    }

    .price-amount {
      font-size: 1.3rem;
    }

    .price-unit {
      font-size: 0.9rem;
    }
  }
</style>

<script lang="ts">
  import { localize } from "$lib/nav";
  import { _ } from "svelte-i18n";
  import PlanInformation from "./plan_information.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { formatPrice } from "$lib/math";

  export let slug: string;
  export let price: number;
  export let duration: string;
  export let service_type: string;
  export let hideExcluded = false;
  export let highlight = false;

  $: featuresString = $_(`${service_type}_${slug}_features`);
  $: title = $_(`${service_type}_${slug}_title`);
  $: description = $_(`${service_type}_${slug}_description`);

  let price_info = `${formatPrice(price, false)}`;
  let duration_info = `${duration}h`;
</script>

<div class="service-card" class:highlight>
  {#if highlight}
    <div class="recommended-tag">{$_("training_recommended_tag")}</div>
  {/if}
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
    <a href={$localize("/contact")}>
      <Button id="book-training-btn" fullWidth={true}>
        {$_("section_general_book")}
        <ChevronRight />
      </Button>
    </a>
  </div>

  <PlanInformation {featuresString} {hideExcluded} />
</div>

<style>
  .service-card.highlight {
    border: 2px solid var(--global-color-primary);
    position: relative;
  }

  .recommended-tag {
    position: absolute;
    top: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--global-color-primary);
    color: white;
    font-size: var(--text-sm);
    padding: 0.15rem 0.9rem;
    border-radius: var(--border-radius-pill);
  }

  .service-card {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
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
    color: var(--color-text);
    font-size: var(--text-lg);
    margin-bottom: 0.5rem;
  }

  .service-price {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .price-amount {
    font-size: var(--text-xl);
    color: black;
  }

  .price-unit {
    font-size: var(--text-base);
    color: var(--color-text-muted);
  }

  .service-duration {
    font-size: var(--text-md);
    color: var(--color-text-muted);
    margin-bottom: 1rem;
  }

  .service-description {
    color: var(--color-text-muted);
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
      font-size: var(--text-lg);
      margin-bottom: 0.5rem;
    }

    .service-price {
      font-size: var(--text-xl);
      margin-bottom: 0.5rem;
    }

    .service-description {
      font-size: var(--text-base);
      margin-bottom: 1rem;
    }
  }
</style>

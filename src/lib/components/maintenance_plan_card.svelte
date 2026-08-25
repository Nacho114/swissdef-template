<script lang="ts">
  import { _ } from "svelte-i18n";
  import PlanInformation from "./plan_information.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { formatPrice } from "$lib/math";

  export let slug: string;
  export let price: number;
  export let service_type: string;
  export let payment_link: string;
  export let highlight = false;

  $: featuresString = $_(`${service_type}_${slug}_features`);
  $: title = $_(`${service_type}_${slug}_title`);
  $: description = $_(`${service_type}_${slug}_description`);

  let price_info = `${formatPrice(price, false)}`;
</script>

<div class="service-card" class:highlight>
  {#if highlight}
    <div class="recommended-tag">{$_("training_recommended_tag")}</div>
  {/if}
  <h2 class="service-title">{title}</h2>
  <div class="service-price">{price_info}</div>

  <p class="service-description">{description}</p>
  <a href={payment_link}>
    <div class="button">
      <Button id="maintenance-btn" fullWidth={true}>
        {$_("section_general_order")}
        <ChevronRight />
      </Button>
    </div></a
  >

  <PlanInformation {featuresString} />
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Optional: adds a shadow for depth */
    padding: 2rem;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
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
    color: var(--color-text);
    font-size: var(--text-lg);
    margin-bottom: 0.5rem;
  }

  .service-price {
    font-size: var(--text-xl);
    color: black;
    margin-bottom: 0.5rem;
  }
  .service-description {
    color: var(--color-text-muted);
    margin-bottom: 1rem;
    min-height: 50px;
  }
</style>

<script lang="ts">
  import { localize } from "$lib/nav";
  import { _ } from "svelte-i18n";
  import Check from "virtual:icons/healthicons/yes";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import Button from "$lib/components/button.svelte";
  import BasketCounter from "./basket_counter.svelte";
  import { formatPrice } from "$lib/math";

  export let id: string;
  export let image_path: string;
  export let title: string;
  export let price: number;
  export let summary: string;
  export let ptype = "";
  export let stage = false;
  export let refined = false;
  export let bar = false;

  let scrollY = 0;
  $: showBar = bar && scrollY > 500;

  $: eyebrow =
    ptype === "Defibrillator"
      ? $_("section_general_defibrillator")
      : $_("section_general_accessories");

  $: trustLinks = [
    {
      label: $_("section_general_warranty_and_returns"),
      href: "/warranty_and_returns",
    },
    { label: $_("section_general_maintenance"), href: "/maintenance" },
    { label: $_("section_general_training"), href: "/training" },
  ];
</script>

<svelte:window bind:scrollY />

<div class="hero">
  <div class="image-panel" class:stage>
    <img src={image_path} alt={title} loading="lazy" />
  </div>
  <div class="info-panel">
    {#if refined && ptype}
      <span class="eyebrow">{eyebrow}</span>
    {/if}
    <h1>{title}</h1>
    <div class="price-group">
      <span class="price">{formatPrice(price)}</span>
      <span class="vat">{$_("section_products_vat_included")}</span>
    </div>
    <p class="summary">{summary}</p>
    {#if refined}
      <div class="divider" />
      <div class="cta-row">
        <BasketCounter {id} {title} red={true} />
      </div>
      <a href={$localize("/maintenance")} class="maintenance-link">
        {$_("section_products_add_maintenance")}
        <ChevronRight />
      </a>
    {:else}
      <div class="cta-block">
        <BasketCounter {id} {title} red={true} />
        <a href={$localize("/maintenance")}>
          <Button id="maintenance-btn-from-products" isBlackColor={true}>
            {$_("section_products_add_maintenance")}
            <ChevronRight />
          </Button>
        </a>
      </div>
    {/if}
    <div class="trust-row">
      {#each trustLinks as link}
        <a href={$localize(link.href)} class="trust-link">
          <span class="trust-check"><Check /></span>
          {link.label}
        </a>
      {/each}
    </div>
  </div>
</div>

{#if showBar}
  <div class="buy-bar">
    <img src={image_path} alt="" class="bar-thumb" />
    <div class="bar-info">
      <span class="bar-title">{title}</span>
      <span class="bar-price">{formatPrice(price)}</span>
    </div>
    <div class="bar-cta">
      <BasketCounter {id} {title} red={true} />
    </div>
  </div>
{/if}

<style>
  h1 {
    margin: 0;
    font-size: var(--text-2xl);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: var(--text-sm);
    color: var(--color-text-muted);
  }

  .price {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--color-text);
  }

  .vat {
    color: var(--color-text-muted);
    font-size: var(--text-sm);
  }

  .summary {
    font-size: var(--text-md);
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0;
  }

  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    width: 100%;
    padding: 2rem 0 3rem;
  }

  .image-panel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-panel.stage {
    background: var(--global-color-gray-light-bg);
    border-radius: var(--border-radius-lg);
    padding: 2.5rem;
    align-self: stretch;
  }

  .image-panel img {
    max-width: 100%;
    max-height: 480px;
    object-fit: contain;
    mix-blend-mode: multiply;
  }

  .info-panel {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 480px;
  }

  .price-group {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
  }

  .divider {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .cta-block {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .cta-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .maintenance-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--color-text);
    font-size: var(--text-base);
    text-decoration: none;
    border-bottom: 1px solid currentColor;
    width: fit-content;
  }

  .trust-row {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding-top: 1.25rem;
    margin-top: 0.5rem;
  }

  .trust-link {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--color-text-muted);
    font-size: var(--text-sm);
    text-decoration: none;
  }

  .trust-link:hover {
    color: var(--color-text);
  }

  .trust-check {
    display: flex;
    color: rgb(0, 146, 22);
  }

  .buy-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
    padding: 0.6rem 1.5rem;
    z-index: 1500;
  }

  .bar-thumb {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  .bar-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .bar-title {
    font-weight: 600;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bar-price {
    color: var(--color-text-muted);
    font-size: var(--text-sm);
  }

  .bar-cta {
    margin-left: auto;
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .info-panel {
      max-width: none;
      padding: 0 0.5rem;
    }

    .image-panel.stage {
      padding: 1.5rem;
    }

    .bar-info {
      display: none;
    }
  }
</style>

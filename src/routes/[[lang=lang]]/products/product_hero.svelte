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
  export let mode: "shop" | "split" | "focus" = "shop";

  let scrollY = 0;
  $: showBar = mode === "focus" && scrollY > 500;

  $: trustLinks = [
    { label: $_("section_general_warranty_and_returns"), href: "/warranty_and_returns" },
    { label: $_("section_general_maintenance"), href: "/maintenance" },
    { label: $_("section_general_training"), href: "/training" },
  ];
</script>

<svelte:window bind:scrollY />

{#if mode === "focus"}
  <div class="focus-hero">
    <div class="focus-image">
      <img src={image_path} alt={title} loading="lazy" />
    </div>
    <h1>{title}</h1>
    <p class="summary">{summary}</p>
    <div class="focus-price">
      <span class="price">{formatPrice(price)}</span>
      <span class="vat">{$_("section_products_vat_included")}</span>
    </div>
    <div class="focus-cta">
      <BasketCounter {id} {title} red={true} />
    </div>
    <a href={$localize("/maintenance")} class="maintenance-link">
      {$_("section_products_add_maintenance")}
      <ChevronRight />
    </a>
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
{:else}
  <div class="hero" class:split={mode === "split"}>
    <div class="image-panel">
      <img src={image_path} alt={title} loading="lazy" />
    </div>
    <div class="info-panel">
      <h1>{title}</h1>
      <div class="price-group">
        <span class="price">{formatPrice(price)}</span>
        <span class="vat">{$_("section_products_vat_included")}</span>
      </div>
      <p class="summary">{summary}</p>
      <div class="cta-block">
        <BasketCounter {id} {title} red={true} />
        <a href={$localize("/maintenance")}>
          <Button id="maintenance-btn-from-products" isBlackColor={true}>
            {$_("section_products_add_maintenance")}
            <ChevronRight />
          </Button>
        </a>
      </div>
      {#if mode === "shop"}
        <div class="trust-row">
          {#each trustLinks as link}
            <a href={$localize(link.href)} class="trust-link">
              <span class="trust-check"><Check /></span>
              {link.label}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  h1 {
    margin: 0;
    font-size: var(--text-2xl);
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

  /* --- shop & split --- */
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

  .image-panel img {
    max-width: 100%;
    max-height: 480px;
    object-fit: contain;
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

  .cta-block {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
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

  /* split: full-bleed two-tone panels */
  .hero.split {
    gap: 0;
    padding: 0;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    align-items: stretch;
  }

  .hero.split .image-panel {
    background: var(--global-color-gray-light-bg);
    padding: 4rem 2rem;
  }

  .hero.split .info-panel {
    padding: 4rem 3rem;
    justify-content: center;
    justify-self: start;
  }

  /* --- focus --- */
  .focus-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 2rem 1rem 3rem;
    width: 100%;
  }

  .focus-image img {
    max-height: 420px;
    max-width: min(90vw, 640px);
    object-fit: contain;
  }

  .focus-hero .summary {
    max-width: 640px;
  }

  .focus-price {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
  }

  .maintenance-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--color-text);
    font-size: var(--text-base);
    text-decoration: none;
    border-bottom: 1px solid currentColor;
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
    .hero,
    .hero.split {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .hero.split .image-panel,
    .hero.split .info-panel {
      padding: 2rem 1.5rem;
    }

    .info-panel {
      max-width: none;
      padding: 0 0.5rem;
    }

    .bar-info {
      display: none;
    }
  }
</style>

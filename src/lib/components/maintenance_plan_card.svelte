<script lang="ts">
  import { _ } from "svelte-i18n";
  import { localize } from "$lib/nav";
  import { formatPrice } from "$lib/math";
  export let slug: string;
  export let price: number;
  export let service_type: string;
  export let payment_link: string;
  $: featuresString = $_(`${service_type}_${slug}_overview_features`);
  $: title = $_(`${service_type}_${slug}_title`);
  $: description = $_(`${service_type}_${slug}_description`);
</script>

<article>
  <h2>{title}</h2>
  <p class="description">{description}</p>
  <p class="price">{formatPrice(price, false)}</p>
  <ul>
    {#each featuresString.split("\n") as feature}<li>{feature}</li>{/each}
  </ul>
  <div class="actions">
    <a href={$localize(`/maintenance/${slug}`)}>{$_("maintenance_details")}</a>
    <a href={payment_link}>{$_("maintenance_order")}</a>
  </div>
</article>

<style>
  article {
    border-top: 3px solid #ddd;
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  h2 {
    margin: 0 0 0.75rem;
    font-size: var(--text-xl);
  }
  .description {
    margin: 0 0 1rem;
    line-height: 1.6;
    color: var(--color-text-muted);
  }
  .price {
    margin: 0 0 1.5rem;
    font-size: var(--text-xl);
  }
  ul {
    margin: 0 0 1.5rem;
    padding-left: 1.25rem;
  }
  li {
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    margin-top: auto;
  }
  a {
    color: var(--global-color-primary);
    text-underline-offset: 4px;
    padding: 0.5rem 0;
  }
  a:focus-visible {
    outline: 3px solid var(--global-color-primary);
    outline-offset: 4px;
  }
</style>

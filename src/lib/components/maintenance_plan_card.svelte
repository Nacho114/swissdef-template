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

<article class:onsite={slug === "basic_plan"}>
  <h2>{title}</h2>
  <p class="description">{description}</p>
  <p class="price">{formatPrice(price, false)}</p>
  <ul>
    {#each featuresString.split("\n") as feature}<li>{feature}</li>{/each}
  </ul>
  <div class="actions">
    <a class="enquiry" href={$localize("/contact?service=maintenance")}
      >{$_("maintenance_enquire")}</a
    >
    <a class="order" href={payment_link}>{$_("maintenance_order")}</a>
  </div>
  <a class="details-link" href={$localize(`/maintenance/${slug}`)}
    >{$_("maintenance_details")}</a
  >
</article>

<style>
  article {
    border: 1px solid #d8d8d8;
    border-top: 5px solid #747474;
    border-radius: 6px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  article.onsite {
    border-top-color: var(--global-color-primary);
  }
  h2 {
    font-family: Oswald-SemiBold, sans-serif;
    line-height: 1.2;
    margin: 0 0 1rem;
    font-size: 1.65rem;
  }
  .description {
    margin: 0 0 1rem;
    line-height: 1.6;
    color: var(--color-text-muted);
  }
  .price {
    margin: 0 0 1.5rem;
    font-size: 1.6rem;
    font-weight: 600;
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
    gap: 0.75rem;
    align-items: center;
    margin-top: auto;
  }
  a {
    color: var(--global-color-primary);
    text-underline-offset: 4px;
    padding: 0.5rem 0;
  }
  .enquiry {
    background: var(--global-color-primary);
    color: white;
    padding: 0.9rem 1.25rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    text-align: center;
  }
  .order {
    border: 1px solid #bbb;
    color: var(--color-text);
    padding: calc(0.9rem - 1px) 1.25rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    text-align: center;
  }
  .order:hover {
    background: #f5f5f5;
    border-color: var(--color-text);
  }
  .details-link {
    align-self: start;
    margin-top: 0.75rem;
  }
  @media (max-width: 700px) {
    article {
      padding: 1.5rem;
    }
  }
  a:focus-visible {
    outline: 3px solid var(--global-color-primary);
    outline-offset: 4px;
  }
</style>

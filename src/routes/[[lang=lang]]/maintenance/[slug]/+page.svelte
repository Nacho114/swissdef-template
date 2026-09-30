<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import Container from "$lib/components/container.svelte";
  import { localize } from "$lib/nav";
  import { formatPrice } from "$lib/math";
  import type { PageData } from "./$types";
  import { _ } from "svelte-i18n";

  export let data: PageData;

  $: title = $_(`maintenance_${data.slug}_title`);
  $: description = $_(`maintenance_${data.slug}_description`);
  $: serviceJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AED maintenance",
    name: title,
    description,
    areaServed: "CH",
    provider: {
      "@type": "Organization",
      name: "Swiss Defibrillator",
      url: "https://www.swissdefibrillator.ch",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.swissdefibrillator.ch${$localize(`/maintenance/${data.slug}`)}`,
      price: data.price.toFixed(2),
      priceCurrency: "CHF",
    },
  }).replace(/</g, "\\u003c");
</script>

<svelte:head>
  <title>{title} | Swiss Defibrillator</title>
  <meta name="description" content={description} />
  {@html `<script type="application/ld+json">${serviceJsonLd}${"<"}/script>`}
</svelte:head>

<Container>
  <section class="service">
    <a class="back" href={$localize("/maintenance")}
      >{$_("maintenance_compare")}</a
    >
    <header>
      <div>
        <h1>{title}</h1>
        <p class="intro">{description}</p>
      </div>
      <div class="service-actions">
        <p class="price">{formatPrice(data.price, false)}</p>
        <a class="enquiry" href={$localize("/contact?service=maintenance")}
          >{$_("maintenance_enquire")}</a
        >
        <a class="order" href={data.payment_link}>{$_("maintenance_order")}</a>
      </div>
    </header>
    <div class="details">
      <SvelteMarkdown source={data.markdown.replace(/^# /gm, "## ")} />
    </div>
  </section>
</Container>

<style>
  .service {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0 4rem;
    box-sizing: border-box;
    text-align: left;
  }
  a {
    color: var(--global-color-primary);
    text-underline-offset: 4px;
    padding: 0.5rem 0;
  }
  .back {
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
  h1 {
    margin: 0 0 1rem;
    font-size: var(--text-2xl);
  }
  .intro {
    color: var(--color-text-muted);
    font-size: var(--text-md);
    line-height: 1.6;
    margin: 0;
  }
  .service-actions {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
  .price {
    font-size: var(--text-xl);
    margin: 0 0 0.5rem;
  }
  .enquiry {
    display: inline-block;
    background: var(--global-color-primary);
    color: white;
    padding: 0.75rem 1.25rem;
    border-radius: var(--border-radius);
    text-decoration: none;
  }
  .order {
    border: 1px solid #bbb;
    color: var(--color-text);
    padding: 0.75rem 1.25rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    text-align: center;
  }
  .order:hover {
    background: #f5f5f5;
  }
  .details {
    max-width: 800px;
  }
  .details :global(h2) {
    font-size: var(--text-xl);
    margin: 2rem 0 1rem;
  }
  .details :global(p),
  .details :global(li) {
    line-height: 1.7;
  }
  .details :global(a) {
    color: var(--global-color-primary);
  }
  a:focus-visible {
    outline: 3px solid var(--global-color-primary);
    outline-offset: 4px;
  }
  @media (max-width: 700px) {
    header {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .service {
      padding: 2rem 20px 3rem;
    }
    h1 {
      font-size: var(--text-xl);
    }
  }
</style>

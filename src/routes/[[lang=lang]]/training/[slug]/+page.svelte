<script lang="ts">
  import { page } from "$app/stores";
  import { localize } from "$lib/nav";
  import { _ } from "svelte-i18n";
  import SvelteMarkdown from "svelte-markdown";
  import TrainingContent from "$lib/components/training-content.svelte";
  import { getTrainingCopy, type BlsCourse } from "$lib/training-copy";
  import type { PageData } from "./$types";
  export let data: PageData;
  $: copy = getTrainingCopy($page.params.lang);
  $: course = ["basic", "lite"].includes(data.slug)
    ? (data.slug as BlsCourse)
    : undefined;
  $: title = course
    ? copy.courses[course].name
    : $_(`training_${data.slug}_title`);
  $: description = course
    ? `${copy.courses[course].audience} ${data.duration} ${copy.hours}. CHF ${data.price} ${copy.groupPrice}. ${copy.languages}`
    : $_(`training_${data.slug}_description`);
  $: courseJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    url: `https://www.swissdefibrillator.ch${$localize(`/training/${data.slug}`)}`,
    provider: {
      "@type": "Organization",
      name: "Swiss Defibrillator",
      url: "https://www.swissdefibrillator.ch",
    },
    inLanguage: ["en", "fr", "de"],
    offers: {
      "@type": "Offer",
      url: `https://www.swissdefibrillator.ch${$localize(`/training/${data.slug}`)}`,
      price: data.price.toFixed(2),
      priceCurrency: "CHF",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: data.price.toFixed(2),
        priceCurrency: "CHF",
        valueAddedTaxIncluded: false,
      },
    },
  }).replace(/</g, "\\u003c");
</script>

<svelte:head>
  <title>{title} | {copy.coverageTitle} | Swiss Defibrillator</title>
  <meta name="description" content={description} />
  {@html `<script type="application/ld+json">${courseJsonLd}${"<"}/script>`}
</svelte:head>
{#if course}
  <TrainingContent {course} />
{:else}
  <div class="secondary-course">
    <a href={$localize("/training")}>{copy.back}</a>
    <SvelteMarkdown source={data.markdown} />
    <a
      class="quote"
      href={$localize(`/contact?service=training&course=${data.slug}`)}
      >{copy.quote}</a
    >
  </div>
{/if}

<style>
  .secondary-course {
    max-width: 850px;
    margin: 3rem auto;
    padding: 0 1.5rem;
    line-height: 1.7;
  }
  .secondary-course :global(h1),
  .secondary-course :global(h2) {
    font-family: Oswald-SemiBold, sans-serif;
    line-height: 1.3;
  }
  .secondary-course :global(img) {
    max-width: 100%;
  }
  .secondary-course :global(a) {
    color: var(--global-color-primary);
  }
  .secondary-course .quote {
    display: inline-block;
    padding: 1rem 1.5rem;
    background: var(--global-color-primary);
    color: white;
    border-radius: var(--border-radius);
  }
</style>

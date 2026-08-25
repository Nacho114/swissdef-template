<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";

  const NUM_QUESTIONS = 5;
  const ids = Array.from({ length: NUM_QUESTIONS }, (_v, i) => i + 1);

  $: faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ids.map((i) => ({
      "@type": "Question",
      name: $_(`faq_q${i}`),
      acceptedAnswer: {
        "@type": "Answer",
        text: $_(`faq_a${i}`),
      },
    })),
  });
</script>

<svelte:head>
  <title>{$_("meta_title_faq")}</title>
  <meta name="description" content={$_("meta_description_faq")} />
  {@html `<script type="application/ld+json">${faqJsonLd}${"<"}/script>`}
</svelte:head>

<Container>
  <div class="faq">
    <h1>{$_("faq_page_title")}</h1>
    <p class="subtitle">{$_("faq_page_subtitle")}</p>

    {#each ids as i}
      <section class="faq-item">
        <h2>{$_(`faq_q${i}`)}</h2>
        <p>{$_(`faq_a${i}`)}</p>
      </section>
    {/each}
  </div>
</Container>

<style>
  .faq {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: var(--global-color-gray-dark, #555);
    margin-bottom: 2rem;
  }

  .faq-item {
    background-color: var(--global-color-gray-light-bg, #f7f7f7);
    border-radius: var(--border-radius, 8px);
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .faq-item h2 {
    font-size: 1.15rem;
    margin-bottom: 0.75rem;
  }

  .faq-item p {
    line-height: 1.6;
    white-space: pre-line;
  }
</style>

<script lang="ts">
  import MdInfoPage from "$lib/components/md_info_page.svelte";
  import { Maintenance } from "$lib/maintenance";
  import { _ } from "svelte-i18n";

  export let data: Maintenance;

  let file_name = `/markdown/maintenance/${data.slug}`;

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
      url: `https://www.swissdefibrillator.ch/maintenance/${data.slug}`,
      price: data.price.toFixed(2),
      priceCurrency: "CHF",
    },
  });
</script>

<svelte:head>
  <title>{title} | Swiss Defibrillator</title>
  <meta name="description" content={description} />
  {@html `<script type="application/ld+json">${serviceJsonLd}${"<"}/script>`}
</svelte:head>

<MdInfoPage {file_name} />

<style>
</style>

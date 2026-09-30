<script lang="ts">
  import { page } from "$app/stores";
  import { homeCopy } from "$lib/sections/home/copy";
  $: copy = homeCopy($page.params.lang);
  import Container from "$lib/components/container.svelte";
  import LandingHeader from "$lib/sections/home/landing_header.svelte";
  import TrustedBrands from "$lib/sections/home/trusted_brands.svelte";
  import Services from "$lib/sections/home/services.svelte";
</script>

<svelte:head>
  <title>{copy.title}</title>
  <meta name="description" content={copy.description} />
  <meta property="og:title" content={copy.title} />
  <meta property="og:description" content={copy.description} />
  <meta
    property="og:url"
    content={"https://www.swissdefibrillator.ch" + $page.url.pathname}
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.swissdefibrillator.ch/assets/og-image.jpg"
  />
  <link rel="icon" href="/favicon.ico" sizes="any" type="image/ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="google-adsense-account" content="ca-pub-6623481991173522" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Swiss Defibrillator",
      "url": "https://www.swissdefibrillator.ch",
      "logo": "https://www.swissdefibrillator.ch/assets/logo.svg",
      "image": "https://www.swissdefibrillator.ch/assets/og-image.jpg",
      "description": "On-site BLS-AED-SRC training for companies, hotels, schools and organisations throughout Switzerland in English, French and German, with AED maintenance and Philips defibrillators.",
      "telephone": "+41 79 441 24 06",
      "email": "info@swissdefibrillator.ch",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Route de l'Aiglon 5",
        "addressLocality": "Leysin",
        "postalCode": "1854",
        "addressCountry": "CH"
      },
      "areaServed": "CH",
      "availableLanguage": ["German", "French", "English"],
      "knowsAbout": [
        "Automated external defibrillators (AED)",
        "First aid training",
        "AED maintenance",
        "Cardiac arrest response"
      ]
    }
  </script>
</svelte:head>

<LandingHeader />

<div class="services">
  <Container>
    <Services />
  </Container>
</div>

<TrustedBrands />

<style>
  .services {
    padding-top: 3vw;
  }

  :global(body) {
    overflow-x: hidden;
    width: 100%;
  }

  :global(img) {
    max-width: 100%;
    height: auto;
  }

  :global(*) {
    box-sizing: border-box;
    max-width: 100%;
  }
</style>

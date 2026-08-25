<script lang="ts">
  import { _ } from "svelte-i18n";
  import Container from "$lib/components/container.svelte";
  import LandingHeader from "$lib/sections/home/landing_header.svelte";
  import TrustedBrands from "$lib/sections/home/trusted_brands.svelte";
  import Services from "$lib/sections/home/services.svelte";
  import StatisticsChart from "$lib/components/StatisticsChart.svelte";
</script>

<svelte:head>
  <title>{$_("meta_title_home")}</title>
  <meta name="description" content={$_("meta_description_home")} />
  <meta name="keywords" content={$_("meta_keywords_home")} />
  <meta
    property="og:title"
    content="Swissdefibrillator - Your Partner for Heart Safety"
  />
  <meta
    property="og:description"
    content="Offering a range of defibrillators and first aid training services to equip companies in Switzerland for heart safety."
  />
  <meta property="og:url" content="https://www.swissdefibrillator.ch" />
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
      "description": "Swiss supplier of Philips AED defibrillators, accessories, first aid training and AED maintenance services for companies in Switzerland.",
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
      "availableLanguage": ["German", "French", "Italian", "English"],
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
<TrustedBrands />

<div class="services">
  <Container>
    <Services />
  </Container>
</div>

<Container>
  <StatisticsChart />
</Container>

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

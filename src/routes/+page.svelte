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
  <link rel="canonical" href="https://www.swissdefibrillator.com" />
  <meta
    property="og:title"
    content="Swissdefibrillator - Your Partner for Heart Safety"
  />
  <meta
    property="og:description"
    content="Offering a range of defibrillators and first aid training services to equip companies in Switzerland for heart safety."
  />
  <meta property="og:url" content="https://www.swissdefibrillator.com" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.swissdefibrillator.com/assets/og-image.jpg"
  />
  <link rel="icon" href="/favicon.ico" sizes="any" type="image/ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Swissdefibrillator",
      "url": "https://www.swissdefibrillator.com",
      "logo": "https://www.swissdefibrillator.com/favicon.ico",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+41 79 441 24 06",
          "contactType": "customer service",
          "email": "info@swissdefibrillator.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Route de l'Aiglon",
            "addressLocality": "Leysin",
            "postalCode": "1854",
            "addressCountry": "CH"
          },
          "areaServed": "CH",
          "availableLanguage": ["German", "French", "Italian", "English"]
        }
      ],
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": [
          {
            "@type": "Product",
            "name": "Philips HS-1 Defibrillator",
            "description": "Portable, user-friendly, life-saving device. Designed for rapid response."
          },
          {
            "@type": "Product",
            "name": "Philips HeartStart FRx Defibrillator",
            "description": "Offers intuitive and clear step-by-step voice instructions for emergency use."
          }
        ]
      },
      "offers": {
        "@type": "Service",
        "serviceType": [
          "Maintenance courses for defibrillators",
          "First aid courses for companies"
        ]
      }
    }
  </script>
</svelte:head>

<!-- Noise Filter -->
<div class="noise-container">
  <svg class="noise-svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)"/>
  </svg>
</div>

<!-- Background Blur Elements -->
<div class="blur-element blur-blue" />
<div class="blur-element blur-purple" />

<main class="landing-page">
  <LandingHeader />
  
  <section class="trusted-brands-section">
    <Container>
      <TrustedBrands />
    </Container>
  </section>

  <section class="services-section">
    <Container>
      <Services />
    </Container>
  </section>

  <section class="statistics-section">
    <Container>
      <StatisticsChart />
    </Container>
  </section>
</main>

<style>
  :global(body) {
    background: #ffffff;
    color: #1a1a1a;
    min-height: 100vh;
  }

  .landing-page {
    position: relative;
    z-index: 1;
  }

  /* Remove noise effect */
  .noise-container {
    display: none;
  }

  /* Subtle background magicccxxx */
  .blur-element {
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.04;
    pointer-events: none;
  }

  .blur-blue {
    top: -10%;
    right: -10%;
    background: #007AFF;
  }

  .blur-purple {
    bottom: -10%;
    left: -10%;
    background: #5856D6;
  }

  /* Section styling */
  section {
    padding: 4rem 0; /* Reduced from 6rem to 4rem */
    position: relative;
    background: #ffffff;
  }

  .trusted-brands-section {
    background: #f5f5f7;
  }

  .services-section {
    position: relative;
    overflow: hidden;
  }

  .statistics-section {
    background: #f5f5f7;
  }

  @media (max-width: 768px) {
    section {
      padding: 2rem 0; /* Reduced from 3rem to 2rem */
    }
  }
</style>

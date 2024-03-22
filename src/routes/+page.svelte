<script lang="ts">
  import { _ } from "svelte-i18n";
  import Container from "$lib/components/container.svelte";
  import LandingHeader from "$lib/sections/home/landing_header.svelte";
  import TrustedBrands from "$lib/sections/home/trusted_brands.svelte";
  import Services from "$lib/sections/home/services.svelte";
  import StatisticsChart from "$lib/components/StatisticsChart.svelte";
</script>

<svelte:head>
  <title
    >Swissdefibrillator - Leading Defibrillator Provider in Switzerland</title
  >
  <meta
    name="description"
    content="Swissdefibrillator offers top-quality defibrillators, first aid training courses, and maintenance services throughout Switzerland. Ensure safety in your workplace with our certified equipment and training."
  />
  <meta
    name="keywords"
    content="defibrillator, Switzerland, first aid training, AED, emergency equipment, defibrillator maintenance, heart safety, Swiss defibrillator provider"
  />
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
</style>

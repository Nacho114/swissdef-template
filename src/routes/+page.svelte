<script lang="ts">
  import { _ } from "svelte-i18n";
  import Container from "$lib/components/container.svelte";
  import LandingHeader from "$lib/sections/home/landing_header.svelte";
  import TrustedBrands from "$lib/sections/home/trusted_brands.svelte";
  import Services from "$lib/sections/home/services.svelte";
  import StatisticsChart from "$lib/sections/home/StatisticsChart.svelte"; 
</script>

<LandingHeader />

<TrustedBrands />

<div class="services">
  <Container>
    <Services />
  </Container>
</div>

<!-- Inserted StatisticsChart component -->
<StatisticsChart />

<style>
  .services {
    padding-top: 3vw;
  }

  
  /* Media query for small screens */
  @media (max-width: 600px) {
    /* Adjustments for mobile, if necessary */
  }
</style>

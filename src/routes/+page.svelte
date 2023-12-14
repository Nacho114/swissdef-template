<script lang="ts">
  import { _ } from "svelte-i18n";
  import Container from "$lib/components/container.svelte";
  import LandingHeader from "$lib/sections/home/landing_header.svelte";
  import TrustedBrands from "$lib/sections/home/trusted_brands.svelte";
  import Services from "$lib/sections/home/services.svelte";
</script>

<LandingHeader />

<TrustedBrands />

<div class="services">
  <Container>
    <Services />
  </Container>
</div>

<img class="statistics" src="/assets/home/statistics.png" alt="info info" />

<img
  class="statistics-mobile"
  src="/assets/home/statistics-mobile.png"
  alt="Statistics"
/>

<style>
  .services {
    padding-top: 3vw;
  }

  .statistics {
    padding-top: 3vw;
    padding-bottom: 3vw;
    display: block;
    margin: 0 auto;
    width: 95vw;
    height: auto;
  }

  /* Hide mobile image on larger screens */
  .statistics-mobile {
    display: none;
    padding-top: 3vw;
    padding-bottom: 3vw;
    margin: 0 auto;
    width: 95vw;
    height: auto;
  }

  /* Media query for small screens */
  @media (max-width: 600px) {
    /* Hide regular image */
    .statistics {
      display: none;
    }

    /* Show mobile image */
    .statistics-mobile {
      display: block;
    }
  }
</style>

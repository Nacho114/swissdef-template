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
</style>

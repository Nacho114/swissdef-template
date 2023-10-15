<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Container from '$lib/components/container.svelte';
  import LandingHeader from '$lib/sections/home/landing_header.svelte';
  import TrustedBrands from '$lib/sections/home/trusted_brands.svelte';
  import Services from '$lib/sections/home/services.svelte';
</script>

<LandingHeader />

<TrustedBrands />

<div class="services">
  <Container>
    <Services />
  </Container>
</div>

<style>

.services {
  padding-top: 3vw;
}

</style>


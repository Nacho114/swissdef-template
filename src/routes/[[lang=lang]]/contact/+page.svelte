<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import Contact from "./contact.svelte";
  import { page } from "$app/stores";
  import { getEnquiryCopy } from "$lib/enquiry-copy";
  $: copy = getEnquiryCopy($page.params.lang);
</script>

<svelte:head>
  <title>{copy.metaTitle}</title>
  <meta name="description" content={copy.metaDescription} />
</svelte:head>

<Container>
  <Contact />
</Container>

<style>
</style>

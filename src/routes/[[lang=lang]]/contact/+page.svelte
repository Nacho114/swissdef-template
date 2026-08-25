<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import Contact from "./contact.svelte";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$_("meta_title_contact")}</title>
  <meta name="description" content={$_("meta_description_contact")} />
  <meta name="keywords" content={$_("meta_keywords_contact")} />
</svelte:head>

<Container>
  <Contact />
</Container>

<style>
</style>
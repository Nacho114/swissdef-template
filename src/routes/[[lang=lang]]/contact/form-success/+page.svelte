<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { page } from "$app/stores";
  import { localize } from "$lib/nav";
  import { getEnquiryCopy } from "$lib/enquiry-copy";
  $: copy = getEnquiryCopy($page.params.lang);
</script>

<svelte:head
  ><title>{copy.success} | Swiss Defibrillator</title><meta
    name="robots"
    content="noindex"
  /></svelte:head
>
<Container>
  <div class="message-container">
    <h1>{copy.success}</h1>
    <p>{copy.successBody}</p>
    <a href={$localize("/contact")}>{copy.back}</a>
  </div>
</Container>

<style>
  .message-container {
    text-align: center;
    padding: 4rem 1rem;
  }
  p {
    line-height: 1.6;
  }
  a {
    color: var(--global-color-primary);
  }
</style>

<script lang="ts">
  import type { Training } from "$lib/training";
  import Container from "$lib/components/container.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import { onMount } from "svelte";

  export let data: Training;

  let source = "";

  onMount(async () => {
    //TODO: HARDCODED PATH
    const res = await fetch("/markdown/training/bls-aed.md");
    source = await res.text();
  });
</script>

<Container>
  <div class="container">
    <SvelteMarkdown {source} />
  </div>
  TODO
  {data.slug}
</Container>

<style>
  .container {
    /* Applying styles specifically to markdown content within .container */
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
  }

  .container :global(h1) {
    font-family: Oswald-SemiBold;
    text-align: left;
    color: var(--global-color-primary);
    font-size: 2.5em;
    /* add any other styles for h1 here */
  }

  .container :global(h2) {
    font-family: Oswald-SemiBold;
    text-align: left;
    color: var(--global-color-primary);
    font-size: 2em;
    /* add any other styles for h2 here */
  }

  .container :global(h3),
  .container :global(h4),
  .container :global(h5),
  .container :global(h6) {
    /* Adjust font sizes as needed */
    text-align: left;
    color: var(--global-color-primary);
    font-family: Oswald-SemiBold;
  }

  .container :global(p) {
    line-height: 1.6;
    text-align: justify;
    /* add any other styles for p here */
  }

  .container :global(ul),
  .container :global(ol) {
    padding-left: 20px;
    /* add any other styles for lists here */
  }

  .container :global(li) {
    line-height: 1.6;
    /* add any other styles for list items here */
  }

  .container :global(a) {
    color: var(--global-color-blue);
    text-decoration: none;
    /* add any other styles for anchor tags here */
  }

  .container :global(a:hover) {
    text-decoration: underline;
  }

  /* Add additional global styles for other markdown elements as needed */

  @media (max-width: 600px) {
    .container {
      width: 85vw;
    }
  }
</style>

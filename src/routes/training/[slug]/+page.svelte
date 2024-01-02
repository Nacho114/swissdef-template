<script lang="ts">
  import { onMount } from "svelte";
  import { locale } from "svelte-i18n";
  import type { Training } from "$lib/training";
  import Container from "$lib/components/container.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import { fade } from "svelte/transition";

  export let data: Training;
  let source = "";
  let previousLocale: string | undefined | null = undefined;

  // Function to load markdown based on the current locale
  async function loadMarkdown(currentLocale: string | undefined | null) {
    console.log("Loading markdown for locale: ", currentLocale);
    // Provide a default value for locale if it's undefined or null
    currentLocale = currentLocale || "en"; // replace 'default' with your default locale

    try {
      const filePath = `/markdown/training/bls-aed_${currentLocale}.md`;
      const res = await fetch(filePath);
      source = await res.text();
    } catch (error) {
      console.error("Failed to load markdown:", error);
      source = "Content not found"; // Fallback text
    }
  }

  // Reactive statement to reload content when locale changes
  $: if ($locale !== previousLocale && previousLocale !== undefined) {
    previousLocale = $locale;
    loadMarkdown($locale);
  }

  // Initialize previousLocale and load content on component mount
  onMount(() => {
    previousLocale = $locale; // Track the initial locale
    loadMarkdown($locale); // Load the initial markdown
  });

  console.log(data.slug);
</script>

<Container>
  <div class="box" in:fade={{ duration: 300 }}>
    <!-- Conditional rendering with fade transition for the content -->
    {#if source !== ""}
      <div class="container" in:fade={{ duration: 300, delay: 300 }}>
        <SvelteMarkdown {source} />
      </div>
    {:else}
      <!-- Maybe some loading indicator here if you want -->
    {/if}
  </div>
</Container>

<style>
  .box {
    min-height: 100vh; /* Make box at least as tall as the viewport */
    margin-top: 1vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    width: 85vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Optional: adds a shadow for depth */
  }
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
    .box {
      border-radius: 0; /* Removes the border radius */
      box-shadow: none; /* Removes the box shadow */
    }
  }
</style>

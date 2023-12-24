<script lang="ts">
  import InfoCard from "./info_card.svelte";

  // Define the Feature type
  type Feature = {
    key?: string; // The key is now optional
    value: string;
  };

  export let title = "";
  export let infoListString: string;

  // Function to parse the provided info string into an array
  function parseInfoList(infoString: string): string[] {
    return infoString.split("\n");
  }

  // Function to extract key-value pairs or single values from a string
  function getInfoKeyValuePair(line: string): Feature {
    const separatorIndex = line.indexOf(": ");
    if (separatorIndex === -1) {
      // No key present, only a value
      return { value: line.trim() };
    } else {
      // Split the line into key and value
      const key = line.substring(0, separatorIndex).trim();
      const value = line.substring(separatorIndex + 2).trim();
      return { key, value };
    }
  }

  let infoList: string[] = [];
  let infoKeyValuePairs: Feature[] = [];
  $: if (infoListString) {
    infoList = parseInfoList(infoListString);
    infoKeyValuePairs = infoList.map(getInfoKeyValuePair);
  }
</script>

<div class="container">
  <InfoCard {title}>
    <ul>
      {#each infoKeyValuePairs as info}
        <li>
          {#if info.key}
            <strong>{info.key}:</strong>
          {/if}
          {info.value}
        </li>
      {/each}
    </ul>
  </InfoCard>
</div>

<style>
  .container {
    width: 100%;
  }

  @media (max-width: 600px) {
    .container {
      width: var(--main-mobile-container-width);
    }

    ul {
      padding-left: 10px; /* Reduced padding for smaller screens */
    }
  }
</style>

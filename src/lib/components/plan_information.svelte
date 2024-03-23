<script lang="ts">
  import Yes from "virtual:icons/healthicons/yes";
  import No from "virtual:icons/healthicons/no";
  import { _ } from "svelte-i18n";

  export let featuresString: string;

  let features: Array<{ name: string; included: boolean }> = [];

  $: {
    features = parseFeatures(featuresString);
  }

  function parseFeatures(featuresString: string) {
    return featuresString.split("\n").map((feature) => {
      const [name, included] = feature.split("||");
      return { name: name.trim(), included: included.trim() === "true" };
    });
  }
</script>

<div class="service-features">
  <h3>{$_("section_general_all_features")}</h3>
  <ul>
    {#each features as feature}
      <li class="feature-item">
        {#if feature.included}
          <div class="yes-icon">
            <Yes />
          </div>
        {:else}
          <div class="no-icon">
            <No />
          </div>
        {/if}
        {feature.name}
      </li>
    {/each}
  </ul>
</div>

<style>
  .service-features {
    margin-bottom: 1rem;
  }

  .service-features h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  .service-features ul {
    list-style: none;
    padding: 0;
  }

  .feature-item {
    display: flex;
    align-items: center;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .yes-icon,
  .no-icon {
    display: flex;
    margin-right: 0.5rem;
  }

  .yes-icon {
    color: rgb(0, 146, 22);
  }

  .no-icon {
    color: #ca0000;
  }
</style>

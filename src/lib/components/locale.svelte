<script lang="ts">
  import { locale, locales } from 'svelte-i18n';
  import FlagEn from 'virtual:icons/circle-flags/en'
  import FlagDe from 'virtual:icons/circle-flags/de'
  import FlagFr from 'virtual:icons/circle-flags/fr'
  import NavArrowDown from 'virtual:icons/iconoir/nav-arrow-down'

  // Create a mapping of locale keys to flag components
  const flags = {
    en: FlagEn,
    de: FlagDe,
    fr: FlagFr,
  }

  // Dynamic component to hold the flag of the selected locale
  let FlagComponent: any;
  $: FlagComponent = flags[$locale];
</script>

<div class="select-wrapper">
  {#if FlagComponent}
    <div class="flag">
      <svelte:component this={FlagComponent} />
    </div>
  {/if}
  <select bind:value={$locale} class="locale-select">
    {#each $locales as locale}
      <option value={locale}>{locale.toUpperCase()}</option>
    {/each}
  </select>
  <div class="dropdown-icon">
    <NavArrowDown />
  </div>
</div>

<style>


.flag {
  margin-right: 8px; /* Or the amount of space you prefer */
  display: flex;
  align-items: center; /* Vertical alignment */
  width: 30px; /* Or your preferred width */
  height: 30px; /* Or your preferred height */
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center; 
}

.locale-select {
  background-color: white; 
  appearance: none;
  outline: none;
  border: none;
  padding-right: 24px; /* Space for the icon */
  min-width: 60px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.dropdown-icon {
  position: absolute;
  right: 5px;
  transform: translateY(5%); /* Adjust to the exact center */
  pointer-events: none; /* Ensures the dropdown can still be clicked on */
  width: 24px;
  height: 24px;
}

</style>

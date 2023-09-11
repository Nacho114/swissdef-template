<script>
	import './styles.css';
  import '$lib/i18n.ts';
  import { locale, locales } from 'svelte-i18n';
</script>

<nav>
  <ul>
    <li>
      <a href="/">home</a>
      <a href="/products">products</a>
      <a href="/training">training</a>
    </li>
  </ul>
</nav>

<select bind:value={$locale}>
  {#each $locales as locale}
    <option value={locale}>{locale}</option>
  {/each}
</select>

<slot />

<style>

</style>

<script lang="ts">
  import { products } from "$lib/products";
  import { _ } from 'svelte-i18n';
</script>

<ul>
	{#each products as { slug }}
		<li><a href="/products/{slug}">{$_(slug + '_title')}</a></li>
	{/each}
</ul>



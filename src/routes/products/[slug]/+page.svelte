<script lang="ts">
  import type { Product } from "$lib/products";
  import { _ } from 'svelte-i18n';
	export let data: Product;
</script>

<h1>{data.slug + '_title'}</h1>
<p> 
  {$_(data.slug + '_summary')}
</p>

<span class="welcome">
  <picture>
    <img src="/assets/{data.slug}.jpg" alt="info info" />
  </picture>
</span>

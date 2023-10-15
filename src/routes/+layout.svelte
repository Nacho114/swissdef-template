<script>
	import './styles.css';
  import '$lib/i18n.ts';
  import Header from '$lib/sections/layout/header.svelte';
</script>

<div class="header">
  <Header />
</div>

<slot />

<style>

.header {
  margin-top: 6px;
  margin-bottom: 20px;
  padding-left: var(--main-padding-left);
  padding-right: 30px;
}

</style>

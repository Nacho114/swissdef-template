<script>
	import './styles.css';
  import '$lib/i18n.ts';
  import Header from '$lib/components/header.svelte';
</script>

<div class='main'>

  <Header />

  <slot />
</div>

<style>
.main {
  padding-left: 60px;
  padding-right: 30px;
}
</style>

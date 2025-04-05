<script lang="ts">
  import MdInfoPage from "$lib/components/md_info_page.svelte";
  import { locale } from 'svelte-i18n';

  export let data;

  $: file_name = `/markdown/maintenance/${data.data.slug}_${$locale || 'en'}.md`;
</script>

<MdInfoPage {file_name} />

<style>
</style>

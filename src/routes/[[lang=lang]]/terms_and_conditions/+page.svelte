<script lang="ts">
  import MdInfoPage from "$lib/components/md_info_page.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<MdInfoPage source={data.markdown} />

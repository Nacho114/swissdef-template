<script lang="ts">
  import MdInfoPage from "$lib/components/md_info_page.svelte";
  import { Maintenance } from "$lib/maintenance";

  export let data: Maintenance;

  let file_name = `/markdown/maintenance/${data.slug}`;
</script>

<MdInfoPage {file_name} />

<style>
</style>

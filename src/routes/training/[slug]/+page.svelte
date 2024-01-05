<script lang="ts">
  import MdInfoPage from "$lib/components/md_info_page.svelte";
  import type { Training } from "$lib/training";

  export let data: Training;
  let file_name = "/markdown/training/bls-aed";

  console.log(data.slug);
</script>

<MdInfoPage {file_name} />

<style>
</style>

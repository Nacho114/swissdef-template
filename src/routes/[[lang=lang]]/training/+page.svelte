<script lang="ts">
  import { page } from "$app/stores";
  import TrainingContent from "$lib/components/training-content.svelte";
  import { getTrainingCopy } from "$lib/training-copy";
  $: copy = getTrainingCopy($page.params.lang);
</script>

<svelte:head>
  <title>{copy.title} | Swiss Defibrillator</title>
  <meta name="description" content={copy.description} />
</svelte:head>
<TrainingContent />

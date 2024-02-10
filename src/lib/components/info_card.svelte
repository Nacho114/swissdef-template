<script lang="ts">
  import Box from "./box.svelte";
  export let title = "";
  export let text = "";
</script>

<Box>
  <div class="info-card">
    {#if title}
      <h2 class="card-title">{title}</h2>
    {/if}
    {#if text}
      <p class="card-text">{text}</p>
    {/if}
    <slot />
  </div>
</Box>

<style>
  .info-card {
    padding: 1rem;
    padding-top: 2vw;
    padding-bottom: 2vw;
  }

  .card-title {
    font-size: 1.5rem;
    color: #333;
    margin-top: 0;
  }

  .card-text {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
</style>

<script lang="ts">
  export let title = "";
  export let text = "";
</script>

<div class="info-card">
  {#if title}
    <h2 class="card-title">{title}</h2>
  {/if}
  {#if text}
    <p class="card-text">{text}</p>
  {/if}
  <slot />
</div>

<style>
  .info-card {
    background-color: white;
    border-radius: 4px;
    box-shadow: var(--box-shadow); /* Optional: adds a shadow for depth */
    padding: 1rem;
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

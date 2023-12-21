<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import PlanCard from "$lib/components/plan_card.svelte";
  import { _ } from "svelte-i18n";
  import { maintenances } from "$lib/maintenance";
</script>

<Container>
  <div class="maintenance-cards-container">
    <h1>Maintenance</h1>
    <div class="maintenance-cards-content">
      {#each maintenances as m}
        <PlanCard slug={m.slug} price={m.price} duration={m.duration} />
      {/each}
    </div>
  </div>
</Container>

<style>
  .maintenance-cards-container {
    display: flex;
    flex-direction: column;
    gap: 4vw;
    justify-content: center;
  }

  .maintenance-cards-content {
    display: flex;
    justify-content: center;
    gap: 3vw;
  }
</style>

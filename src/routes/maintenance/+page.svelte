<script lang="ts">
  import PlanCard from "$lib/components/plan_card.svelte";
  import { _ } from "svelte-i18n";
  import { maintenances } from "$lib/maintenance";
</script>

<div class="service-cards-container">
  {#each maintenances as m}
    <PlanCard slug={m.slug} price={m.price} duration={m.duration} />
  {/each}
</div>

<style>
  .service-cards-container {
    display: flex;
    justify-content: center;
  }
</style>

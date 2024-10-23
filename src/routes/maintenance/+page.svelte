<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
  import { maintenances } from "$lib/maintenance";
  import MaintenancePlanCard from "$lib/components/maintenance_plan_card.svelte";
</script>

<Container>
  <div class="maintenance-cards-container">
    <h1>{$_("section_general_maintenance")}</h1>
    <div class="maintenance-cards-content">
      {#each maintenances as m}
        <a href="/maintenance/{m.slug}" class="product-link">
          <MaintenancePlanCard
            service_type={"maintenance"}
            slug={m.slug}
            price={m.price}
          />
        </a>
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

  .product-link {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 600px) {
    .maintenance-cards-content {
      display: flex;
      flex-direction: column; /* Stack left and right side on top of each other */
      width: 85vw;
    }
  }
</style>

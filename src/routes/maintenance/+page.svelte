<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import PlanCard from "$lib/components/plan_card.svelte";
  import { _ } from "svelte-i18n";
  import { maintenances } from "$lib/maintenance";
</script>

<Container>
  <div class="maintenance-cards-container">
    <h1>{$_("section_general_maintenance")}</h1>
    <div class="maintenance-cards-content">
      {#each maintenances as m}
        <a href="/maintenance/{m.slug}" class="product-link">
          <PlanCard
            service_type={"maintenance"}
            slug={m.slug}
            price={m.price}
            duration={m.duration}
          />
        </a>
      {/each}
    </div>
  </div>
</Container>

<Container>
  <div class="maintenance-cards-container">
    <h1>{$_("section_additional_maintenance")}</h1>
    <div class="maintenance-cards-content">
    
    </div>
  </div>
</Container>

<Container>
  <div class="maintenance-cards-container">
    <h1>{$_("section_special_offers")}</h1>
    <div class="maintenance-cards-content">
      
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
      flex-direction: column;
      width: 85vw;
    }
  }
</style>
<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
  import { maintenances } from "$lib/maintenance";
  import MaintenancePlanCard from "$lib/components/maintenance_plan_card.svelte";
</script>

<svelte:head>
  <title>{$_("meta_title_maintenance")}</title>
  <meta name="description" content={$_("meta_description_maintenance")} />
  <meta name="keywords" content={$_("meta_keywords_maintenance")} />
</svelte:head>

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
            payment_link={m.payment_link}
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

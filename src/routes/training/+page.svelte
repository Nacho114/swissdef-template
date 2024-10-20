<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import PlanCard from "$lib/components/plan_card.svelte";
  import { _ } from "svelte-i18n";
  import { trainings } from "$lib/training";
</script>

<Container>
  <div class="training-cards-container">
    <div class="header">
      <h1>{$_("section_general_training")}</h1>
      <p>
        {$_("training_subtitle")}
      </p>
    </div>

    <div class="training-cards-content">
      {#each trainings as training}
        <a href="/training/{training.slug}" class="product-link">
          <PlanCard
            service_type={"training"}
            slug={training.slug}
            price={training.price}
            duration={training.duration}
          />
        </a>
      {/each}
    </div>
  </div>
</Container>

<style>
  .training-cards-container {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    justify-content: center;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .product-link {
    text-decoration: none;
    color: black;
  }

  h1 {
    grid-column: 1 / 2;
    text-align: left;
  }

  .training-cards-content {
    display: flex;
    justify-content: center;
    gap: 3vw;
  }

  @media (max-width: 600px) {
    .header {
      display: flex;
      flex-direction: column; /* Stack left and right side on top of each other */
      width: 85vw;
    }

    .training-cards-content {
      display: flex;
      flex-direction: column; /* Stack left and right side on top of each other */
      width: 85vw;
    }
    .training-cards-container {
      gap: 8vw;
    }
  }
</style>

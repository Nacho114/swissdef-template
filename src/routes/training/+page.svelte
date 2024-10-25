<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
  import { trainings } from "$lib/training";
  import TrainingPlanCard from "$lib/components/training_plan_card.svelte";
</script>

<Container>
  <div class="training-cards-container">
    <div class="header">
      <h1>{$_("section_general_training")}</h1>
      <div class="subtitle-container">
        <p class="subtitle">
          {$_("training_subtitle")}
        </p>
      </div>
    </div>

    <div class="training-cards-content">
      {#each trainings as training}
        <a href="/training/{training.slug}" class="product-link">
          <div class="training-plan-container">
            <TrainingPlanCard
              service_type={"training"}
              slug={training.slug}
              price={training.price}
              duration={training.duration}
            />
          </div>
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

  .subtitle-container {
    background-color: #f5f5f5;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    margin: 1rem 0;
  }

  .subtitle {
    text-align: center;
    color: #666;
    margin: 0;
    line-height: 1.5;
  }

  .product-link {
    text-decoration: none;
    color: black;
  }

  .training-cards-content {
    display: flex;
    justify-content: center;
    gap: 3vw;
    flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
  }

  .product-link {
    flex: 1 1 30%; /* Ensures all links take up 30% of the width, but remain flexible */
    max-width: 300px; /* Optional: To limit the maximum size */
    min-width: 250px; /* Ensure a minimum width for consistency */
    display: flex;
    align-items: stretch; /* Ensures the card stretches to fill the available space */
  }

  .training-plan-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; /* Make the card fill the full height of its container */
    padding: 1rem; /* Optional: Ensure some padding around the card */
    box-sizing: border-box; /* Ensures padding doesn't break layout */
  }

  h1 {
    grid-column: 1 / 2;
    text-align: left;
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

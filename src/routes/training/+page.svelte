<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import ToggleButtons from "$lib/components/toggle_button.svelte";
  import PlanCard from "$lib/components/plan_card.svelte";
  import { _ } from "svelte-i18n";
  import { popularTrainings, extraTrainings } from "$lib/training"; // Assuming you have these arrays

  // Initializing training to the default set
  let toggledTrainings = popularTrainings;

  // Define toggle button names
  $: popular_button_name = $_("training_toggle_main");
  $: extra_button_name = $_("training_toggle_extra");

  // Function to handle toggle change
  function handleToggleChange(selectedTrainingType: string) {
    if (selectedTrainingType === popular_button_name) {
      toggledTrainings = popularTrainings;
    } else if (selectedTrainingType === extra_button_name) {
      toggledTrainings = extraTrainings;
    }
  }
</script>

<Container>
  <div class="training-cards-container">
    <div class="header">
      <h1>Training</h1>
      <div class="toggle-container">
        <ToggleButtons
          button1={popular_button_name}
          button2={extra_button_name}
          on:toggleChange={(e) => handleToggleChange(e.detail)}
        />
      </div>
    </div>
    <div class="training-cards-content">
      {#each toggledTrainings as training}
        <PlanCard
          service_type={"training"}
          slug={training.slug}
          price={training.price}
          duration={training.duration}
        />
      {/each}
    </div>
  </div>
</Container>

<style>
  .training-cards-container {
    display: flex;
    flex-direction: column;
    gap: 4vw;
    justify-content: center;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  h1 {
    grid-column: 1 / 2;
    text-align: left;
  }

  .toggle-container {
    grid-column: 2 / 3;
    text-align: center;
  }

  .training-cards-content {
    display: flex;
    justify-content: center;
    gap: 3vw;
  }
</style>

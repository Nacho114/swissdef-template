<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { _ } from "svelte-i18n";
</script>

<Container style="background-color: #F2EEF5;">
  <div class="landing-header">
    <div class="header-text">
      <h1>{$_("section_home_landing_header_title")}</h1>
      <p class="subtitle">One life-saving device at a time</p>
      <Button>
        <div class="button">
          Book an appointment
          <ChevronRight />
        </div>
      </Button>
    </div>

    <div class="header-image">
      <img src="/assets/home/phillips_hs1_home.png" alt="info info" />
    </div>
  </div>
</Container>

<style>
  /* Flex layout for header */
  .landing-header {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem; /* Margin between text and image */
  }

  /* Text styling inside header */
  .landing-header h1 {
    font-size: max(4vw, 20px); /* Sets a minimum font size of 24px */
    max-width: 90%;
    margin-bottom: 20px;
  }

  .landing-header p {
    font-weight: 50;
    font-size: max(1.5vw, 14px); /* Sets a minimum font size of 24px */
    margin-bottom: 20px;
  }

  .subtitle {
    color: Var(--global-color-gray-light);
    box-sizing: border-box;
  }

  /* Text container */
  .header-text {
    flex: 1;
    text-align: left;
    line-height: 1.1;
  }

  /* Image container */
  .header-image {
    flex: 1;
    padding-right: 20px;
    max-width: 50%;
  }

  .header-image img {
    width: 100%;
    height: auto;
  }

  /* Button styling */
  .button {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: max(1.5vw, 12px); /* Sets a minimum font size of 12px */
  }

  @media (max-width: 600px) {
    .landing-header {
      flex-direction: column; /* Stack items in a column */
    }

    .header-text {
      /* Hack due to weird behavior of subtitle */
      width: 55vw;
    }
  }
</style>

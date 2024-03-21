<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { _ } from "svelte-i18n";
</script>

<Container>
  <div class="landing-header">
    <div class="header-text">
      <h1>{$_("section_home_landing_header_title")}</h1>
      <p class="subtitle">One life-saving device at a time</p>
          <a href="/contact">
      <Button fullWidth={false}>
        <div class="button">
          Book an appointment
          <ChevronRight />
        </div>
      </Button>
        </a>
    </div>
    <div class="header-image">
      <img src="/assets/home/phillips_hs1_home_l.png" alt="Phillips device" />
    </div>
  </div>
</Container>

<style>
  /* Flex layout for header */
  .landing-header {
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem; /* Margin between text and image */
  }

  /* Text styling inside header */
  .landing-header h1 {
    font-size: max(
      4vw,
      var(--global-mobile-font-h1)
    ); /* Sets a minimum font size of 24px */
    max-width: 90%;
    margin-bottom: 20px;
  }

  .landing-header p {
    font-weight: 50;
    font-size: max(
      1.5vw,
      var(--global-mobile-font-p)
    ); /* Sets a minimum font size of 24px */
    margin-bottom: 20px;
  }

  .subtitle {
    color: Var(--global-color-gray-light);
    box-sizing: border-box;
  }

  /* Text container */
  .header-text {
    text-align: left;
    line-height: 1.1;
    width: 33vw;
  }

  /* Image container */
  .header-image {
    padding-right: 20px;
    width: 36vw;
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
    width: auto;
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

    .header-image {
      width: 50%;
    }
  }
</style>

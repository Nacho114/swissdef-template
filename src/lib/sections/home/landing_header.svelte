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
      <p class="subtitle">{$_("section_home_landing_header_subtitle")}</p>
      <a href="/contact">
        <Button fullWidth={false}>
          <div class="button">
            {$_("section_home_landing_header_button")}
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

  /* Keep existing styles but modify these specific parts */
  @media (max-width: 600px) {
    .landing-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0 20px; /* Add some padding on the sides */
    }

    .header-text {
      width: 100%; /* Take full width */
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header-text h1 {
      text-align: center;
      max-width: 100%;
    }

    .header-text p {
      text-align: center;
      max-width: 90%;
    }

    .header-image {
      width: 80%; /* Increase image width */
      max-width: 400px; /* Prevent image from getting too large */
      padding-right: 0; /* Remove padding that was affecting centering */
      margin: 0 auto; /* Center the image container */
    }

    .button {
      justify-content: center; /* Center the button content */
    }
  }

  /* Add additional breakpoint for very small screens */
  @media (max-width: 380px) {
    .header-text h1 {
      font-size: 28px; /* Set explicit size for very small screens */
    }

    .header-text p {
      font-size: 16px;
    }

    .header-image {
      width: 90%; /* Even more width on very small screens */
    }
  }
</style>

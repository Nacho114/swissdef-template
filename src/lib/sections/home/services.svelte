<script>
  import { _ } from "svelte-i18n";
  import Button from "$lib/components/button.svelte";
  import ServiceCard from "./service_card.svelte";
</script>

<div class="services-section">
  <div class="card-section">
    <a href="/training">
      <ServiceCard
        src="/assets/home/training.png"
        summary={$_("section_home_services_training_summary")}
        alt="Training"
        title={$_("section_general_training")}
      /></a
    >
    <a href="/maintenance">
      <ServiceCard
        src="/assets/home/maintenance.png"
        summary={$_("section_home_services_maintenance_summary")}
        alt="Maintenance"
        title={$_("section_general_maintenance")}
      /></a
    >
    <a href="/products">
      <ServiceCard
        src="/assets/home/defibrillator.png"
        summary={$_("section_home_services_defibrillators_summary")}
        alt="Defibrillators"
        title={$_("section_general_defibrillators")}
      /></a
    >
  </div>

  <div class="cta">
    <h1>
      {$_("section_home_services_title")}
    </h1>
    <p>
      {$_("section_home_services_subtitle")}
    </p>
    <div class="mobile-links">
      <a href="/products">{$_("section_general_products")}</a>
      <a href="/training">{$_("section_general_training")}</a>
      <a href="/maintenance">{$_("section_general_maintenance")}</a>
    </div>
    <div class="learn-more-button">
      <a href="/contact">
        <Button isOutlined={true}>
          {$_("section_home_services_learn_more_button")}
        </Button>
      </a>
    </div>
  </div>
</div>

<style>
  .services-section {
    display: flex;
  }

  .card-section {
    flex: 2;
    display: flex;
  }

  .cta {
    flex: 1;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 2vw;
  }

  .cta p {
    font-size: max(1.3vw, 16px);
    font-weight: 100;
    color: Var(--global-color-gray-light);
    margin-bottom: 1rem;
  }

  .mobile-links {
    display: none; /* Hide the links by default */
    text-align: center; /* Center align the links */
    padding: 1rem 0; /* Add some vertical padding */
  }

  .mobile-links a {
    display: inline-block; /* Display links inline-block for better control */
    margin: 0.5rem; /* Add margin around each link */
    padding: 0.5rem 1rem; /* Padding for clickable area */
    background-color: #d45a4d; /* A nice shade of red */
    color: white; /* White text color */
    border-radius: 25px; /* Rounded corners for the links */
    text-decoration: none; /* Remove underline from links */
    transition:
      background-color 0.3s,
      color 0.3s; /* Smooth transition for hover effect */
  }

  .mobile-links a:hover,
  .mobile-links a:focus {
    background-color: #bf4e44; /* Slightly darker shade on hover/focus */
    color: #ffffff; /* Keep text color white on hover/focus */
  }

  .mobile-links a:visited {
    color: white; /* Ensure visited links remain white */
  }

  @media (max-width: 600px) {
    .mobile-links {
      display: block; /* Show the links on small screens */
    }
    .card-section {
      display: none; /* Hide the services section on small screens */
    }
    .learn-more-button {
      display: none;
    }
  }
</style>

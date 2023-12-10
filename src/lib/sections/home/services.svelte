<script>
  import Button from "$lib/components/button.svelte";
  import ServiceCard from "./service_card.svelte";
</script>

<div class="services-section">
  <div class="card-section">
    <ServiceCard
      src="/assets/home/training.png"
      summary="Hands-on sessions to master defibrillator usage."
      alt="Training"
      title="TRAINING"
    />
    <ServiceCard
      src="/assets/home/maintenance.png"
      summary="Regular checks to ensure device reliability."
      alt="Training"
      title="MAINTENANCE"
    />
    <ServiceCard
      src="/assets/home/defibrillator.png"
      summary="Life-saving devices for cardiac emergencies."
      alt="Training"
      title="DEFIBRILLATORS"
    />
  </div>

  <div class="cta">
    <h1>All In One Place</h1>
    <p>We offer a vibe array of services to suit your needs</p>
    <Button isOutlined={true}>Learn More</Button>
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
    font-size: 1.3vw;
    font-weight: 100;
    color: Var(--global-color-gray-light);
    margin-bottom: 1rem;
  }
</style>

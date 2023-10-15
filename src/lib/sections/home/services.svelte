
<script>
  import Button from '$lib/components/button.svelte';
  import ServiceCard from './service_card.svelte';
</script>

<div class="services-section">
  <div class="card-section">
    <ServiceCard src="/assets/services/ambulance.png" summary="Hello" alt="Training" title="TRAINING"/>
    <ServiceCard src="/assets/services/ambulance.png" summary="Ensure your defibrillator is always ready to be used." alt="Training" title="TRAINING"/>
    <ServiceCard src="/assets/services/ambulance.png" summary="Hello" alt="Training" title="TRAINING"/>
  </div>
  
  <div class="cta">
    <h1>ALL In One Place</h1>
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

  .cta h2 {
    font-size: 2vw;
    margin-bottom: 1rem;
  }

  .cta p {
    font-size: 1.3vw;
    font-weight: 100;
    color: Var(--global-color-gray-light);
    margin-bottom: 1rem;
  }
</style>


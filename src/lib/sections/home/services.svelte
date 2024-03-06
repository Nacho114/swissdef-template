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
      alt="Maintenance"
      title="MAINTENANCE"
    />
    <ServiceCard
      src="/assets/home/defibrillator.png"
      summary="Life-saving devices for cardiac emergencies."
      alt="Defibrillators"
      title="DEFIBRILLATORS"
    />
  </div>

  <div class="cta">
    <h1>All In One Place</h1>
    <p>We offer a wide array of services to suit your needs.</p>
    <div class="mobile-links">
      <a href="/products">Products</a>
      <a href="/training">Training</a>
    </div>
    <div class="learn-more-button">
      <Button isOutlined={true}>Learn More</Button>
    </div>
  </div>
</div>

<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/devonlp/30min?hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->

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
    padding: 2vw 3vw;
  }

  .cta p {
    font-size: max(1.3vw, 16px);
    font-weight: 100;
    color: var(--global-color-gray-light);
    margin-bottom: 1rem;
  }

  .mobile-links {
    display: none;
    text-align: center;
    padding: 1rem 0;
  }

  .mobile-links a {
    display: inline-block;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #d45a4d;
    color: white;
    border-radius: 25px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
  }

  .mobile-links a:hover,
  .mobile-links a:focus {
    background-color: #D82B1C;
    color: #ffffff;
  }

  .mobile-links a:visited {
    color: white;
  }

  @media (max-width: 600px) {
    .mobile-links {
      display: block;
    }
    .card-section {
      display: none;
    }
    .learn-more-button {
      display: none;
    }
  }
</style>

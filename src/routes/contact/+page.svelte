<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import ContactInfo from "./contact_info.svelte";
</script>

<Container>
  <div class="main-container">
    <div class="contact-info">
      <ContactInfo />
    </div>
    <div class="info-request">
      <!-- Calendly inline widget begin -->
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/thot-nacho/60-minute-meeting-with-thot-clone"
        style="min-width:320px;height:500px;"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
      <!-- Calendly inline widget end -->
    </div>
  </div>
</Container>

<style>
  .main-container {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  .contact-info {
    background-color: #000; /* Black background */
    border-radius: 5px;
    /* Adjust padding or other styles as needed */
  }

  .info-request {
    margin-top: 4vw;
    width: 100%; /* Adjust as needed */
  }

  .calendly-inline-widget {
    min-height: 650px; /* Adjust this value based on the typical height of the Calendly content or remove it altogether */
    height: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  @media (max-width: 600px) {
    .main-container {
      display: flex;
      flex-direction: column; /* Stack left and right side on top of each other */
      gap: 8px;
    }
  }
</style>

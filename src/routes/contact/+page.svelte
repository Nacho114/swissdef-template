<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { onMount } from 'svelte';

  // Function to dynamically load the Calendly script
  function loadCalendlyScript() {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
  
  // Load the script when the component mounts
  onMount(() => {
    loadCalendlyScript();
  });
</script>

<Container>
  <div class="calendly-inline-widget" data-url="https://calendly.com/devonlp/30min?hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
</Container>

<style>
  /* You can adjust or add additional styles here */
  .calendly-inline-widget {
    display: flex;
    justify-content: center;
    /* Ensure the widget is centered within the container */
  }
</style>

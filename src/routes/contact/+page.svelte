<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { onMount } from 'svelte';

 
  function loadCalendlyScript() {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
  

  onMount(() => {
    loadCalendlyScript();
  });
</script>

<Container>
  <div class="calendly-inline-widget" data-url="https://calendly.com/devonlp/30min?hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
</Container>

<style>
  
  .calendly-inline-widget {
    display: flex;
    justify-content: center;
   
  }
</style>

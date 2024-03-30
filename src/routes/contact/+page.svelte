<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import Contact from "./contact.svelte";
</script>

<Container>
  <div class="contact-info">
    <Contact />
  </div>
</Container>

<style>
  .contact-info {
    display: flex;
    justify-content: center;
  }
</style>

<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import ContactInfo from "./contact_info.svelte";
</script>

<Container>
  <div class="contact-info">
    <ContactInfo />
  </div>
</Container>

<style>
  .contact-info {
    display: flex;
    justify-content: center;
  }
</style>

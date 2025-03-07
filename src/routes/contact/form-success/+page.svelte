<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
</script>

<Container>
  <h1>Form Successful</h1>
  <div class="message-container">
    <h2>Thank you for your inquiry</h2>
    <p>We will get back to you as soon as possible.</p>
  </div>
</Container>

<style>
  .message-container {
    text-align: center;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 8px;
    margin: 20px 0;
  }
</style>

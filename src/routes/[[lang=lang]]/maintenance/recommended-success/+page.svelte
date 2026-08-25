<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
</script>

<Container>
  <h1>Order Confirmed</h1>
  <div class="message-container">
    <h2>Thank You for Your Order</h2>
    <p>
      Your defibrillator maintenance request has been received. Our team will
      contact you shortly to schedule the service.
    </p>
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

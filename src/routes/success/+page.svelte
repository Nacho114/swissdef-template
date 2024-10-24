<script>
  import Container from "$lib/components/container.svelte";
  import { clearCart } from "../../store";

  clearCart();
</script>

<Container>
  <h1>Payment Successful</h1>
  <div class="message-container">
    <h2>Thank you for your purchase!</h2>
    <p>Your payment was processed successfully.</p>
    <p>We hope you enjoy your new products!</p>
    <a href="/products" class="btn">Continue Shopping</a>
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

  .btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1rem;
    margin-top: 20px;
  }

  .btn:hover {
    background-color: #0056b3;
  }
</style>

<script>
  import Container from "$lib/components/container.svelte";
</script>

<Container>
  <h1>Payment Failed</h1>
  <div class="message-container">
    <h2>Oops, something went wrong!</h2>
    <p>Unfortunately, your payment could not be processed.</p>
    <p>Please try again or contact support if the issue persists.</p>
    <a href="/cart" class="btn">Try Again</a>
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
    background-color: #dc3545;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1rem;
    margin-top: 20px;
  }

  .btn:hover {
    background-color: #c82333;
  }
</style>

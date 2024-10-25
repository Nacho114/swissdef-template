<script>
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
</script>

<Container>
  <h1>{$_("payment_failed_title")}</h1>
  <div class="message-container">
    <h2>{$_("payment_failed_subtitle")}</h2>
    <p>{$_("payment_failed_description")}</p>
    <p>{$_("payment_failed_support")}</p>
    <a href="/cart" class="btn">{$_("payment_failed_try_again_button")}</a>
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

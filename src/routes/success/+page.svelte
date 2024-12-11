<script>
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
  import { clearCart } from "../../store";
  import { cart } from "../../store";
  import { getProductById } from "$lib/products";
  import { dev } from "$app/environment";

  $: cartItems = Object.entries($cart)
    .map(([id, quantity]) => {
      const product = getProductById(id);
      if (product) {
        return {
          id: product.id,
          slug: product.slug,
          img: product.img,
          price: product.price,
          shipping_price: product.shipping_price,
          quantity,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  // Calculate subtotal reactively
  $: subtotal = cartItems.reduce((sum, item) => {
    return sum + item?.price * item?.quantity;
  }, 0);

  if (!dev) {
    gtag("event", "conversion", {
      send_to: "AW-935906638/_Ew5CJacouoZEM6ao74D",
      value: subtotal,
      currency: "CHF",
      transaction_id: "",
    });
  } else {
    console.log(subtotal);
  }

  clearCart();
</script>

<Container>
  <h1>{$_("payment_successful_title")}</h1>
  <div class="message-container">
    <h2>{$_("payment_successful_subtitle")}</h2>
    <p>{$_("payment_successful_description")}</p>
    <p>{$_("payment_successful_email_sent")}</p>
    <a href="/products" class="btn"
      >{$_("payment_successful_continue_shopping")}</a
    >
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

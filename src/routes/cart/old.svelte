<script lang="ts">
  let line_items = [
    {
      price_data: {
        currency: "chf",
        product_data: {
          name: "Defibrillator",
          description: "Medical grade defibrillator",
        },
        unit_amount: 129999, // $1,999.99
      },
      quantity: 2,
    },
    {
      price_data: {
        currency: "chf",
        product_data: {
          name: "First Aid Kit",
          description: "Complete first aid kit",
        },
        unit_amount: 4199, // $49.99
      },
      quantity: 1,
    },
  ];

  async function handleCheckout() {
    try {
      const response = await fetch(
        "https://abssv4qftudjnbx7d2okcwrefi0ycmfi.lambda-url.eu-north-1.on.aws/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            line_items: line_items,
            successUrl: "http://google.com/",
            cancelUrl: "http://reddit.com/",
          }),
        },
      );

      const { url } = await response.json(); // Extract 'url' instead of sessionId
      window.location.href = url; // Redirect to Stripe checkout
    } catch (err) {
      console.error("Checkout error", err);
    }
  }
</script>

<div>
  <h2>Cart</h2>
  {#each line_items as item, index}
    <div>
      Item {index + 1}: {item.price_data.product_data.name} - {item.quantity}
    </div>
  {/each}

  <button on:click={handleCheckout}> Checkout </button>
</div>

<script lang="ts">
  import { addToCart, cart } from "../../store";
  import { onMount } from "svelte";

  export let id: string;

  export let count = 1;
  export let min = 1;
  export let max = 1000;

  // Check the cart on mount and set count accordingly
  onMount(() => {
    const unsubscribe = cart.subscribe((currentCart) => {
      // If there's an existing quantity in the cart for this id, set count to that
      if (currentCart[id] !== undefined) {
        count = currentCart[id];
      }
    });
    return () => unsubscribe();
  });

  // Set new quantity in cart when clicking 'Add' button
  const handleAddToCart = () => {
    addToCart(id, count); // Set the new count as the quantity
    console.log($cart);
  };

  const increment = () => {
    if (count < max) {
      count += 1;
    }
  };

  const decrement = () => {
    if (count > min) {
      count -= 1;
    }
  };
</script>

<div class="container">
  <button class="appointment-btn outlined">
    <div class="button-content">
      <button
        class="decrement-btn"
        on:click={decrement}
        disabled={count <= min}
        aria-label="Decrease count"
      >
        -
      </button>

      <span class="counter-display">{count}</span>

      <button
        class="increment-btn"
        on:click={increment}
        disabled={count >= max}
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  </button>

  <button class="simple-btn" on:click={handleAddToCart}> Add </button>
</div>

<style>
  .container {
    display: flex;
    gap: 1rem;
    flex-direction: row;
  }
  .simple-btn {
    background-color: white;
    color: black;
    border: 2px solid black;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 25px;
    cursor: pointer;
    transition:
      background-color 0.3s,
      color 0.3s;
    font-weight: 500;
    white-space: nowrap;
  }

  .simple-btn:hover {
    background-color: black;
    color: white;
  }

  .simple-btn:focus {
    outline: none;
  }

  .appointment-btn {
    background-color: transparent;
    color: #000000;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 25px;
    border: 2px solid #d45a4d;
    cursor: pointer;
    transition: background-color 0.3s;
    display: inline-block;
    text-align: center;
    font-weight: 500;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 7rem;
  }

  .button-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .decrement-btn,
  .increment-btn {
    background: none;
    border: none;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
    width: 40px;
    text-align: center;
    user-select: none;
  }

  .counter-display {
    margin: 0 10px;
    font-size: 18px;
    width: 40px;
    text-align: center;
  }

  .decrement-btn:disabled,
  .increment-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .appointment-btn.outlined {
    border: 2px solid black;
    padding: 12px;
    border-radius: 25px;
  }
</style>

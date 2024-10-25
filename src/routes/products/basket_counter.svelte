<script lang="ts">
  import { addToCart, cart } from "../../store";
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";

  export let id: string;
  export let title: string; // Product name to be displayed in the popup
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

  let showPopup = false;

  // Set new quantity in cart when clicking 'Add' button
  const handleAddToCart = (event: MouseEvent) => {
    addToCart(id, count); // Set the new count as the quantity
    event.stopPropagation();
    showPopup = true; // Show the popup
  };

  const handleClosePopup = () => {
    showPopup = false;
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

  // Close popup if clicking outside of it
  const handleClosePopupGlobal = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    // Ensure the popup stays open if clicked inside the popup or buttons
    if (!target.closest(".popup") && showPopup) {
      showPopup = false;
    }
  };

  // Add event listener to detect outside clicks
  onMount(() => {
    document.addEventListener("click", handleClosePopupGlobal);
    return () => {
      document.removeEventListener("click", handleClosePopupGlobal);
    };
  });
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

  <button class="simple-btn" on:click={handleAddToCart}
    >{$_("section_product_add_to_cart")}</button
  >
</div>

{#if showPopup}
  <div class="popup">
    <span class="popup-text"
      >{title} {$_("section_product_added_to_basket")}</span
    >
    <a href="/cart" class="popup-button">Go to basket</a>
    <button class="popup-close" on:click={handleClosePopup}>×</button>
  </div>
{/if}

<style>
  .popup {
    position: fixed;
    top: 34%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    align-items: center; /* Ensure all items have the same height */
    gap: 40px;
    z-index: 1000;
    width: 500px;
    justify-content: space-between;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .popup-text {
    flex: 1;
    text-align: left;
  }

  .popup-button,
  .popup-close {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup-close {
    font-size: 1.5rem;
    cursor: pointer;
    height: 42px;
  }

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

  @media (max-width: 600px) {
    .popup {
      flex-direction: column;
      gap: 1.5rem;
    }
    .popup-text {
      flex: 0;
      width: 8rem;
    }
  }
</style>

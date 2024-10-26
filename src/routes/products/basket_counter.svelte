<script lang="ts">
  import Button from "$lib/components/button.svelte";
  import { addToCart, cart } from "../../store";
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";

  export let id: string;
  export let title: string;
  export let count = 1;
  export let min = 1;
  export let max = 1000;

  onMount(() => {
    const unsubscribe = cart.subscribe((currentCart) => {
      if (currentCart[id] !== undefined) {
        count = currentCart[id];
      }
    });
    return () => unsubscribe();
  });

  let showPopup = false;

  const handleAddToCart = (event: MouseEvent) => {
    addToCart(id, count);
    event.stopPropagation();
    showPopup = true;
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

  const handleClosePopupGlobal = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".popup") && showPopup) {
      showPopup = false;
    }
  };

  onMount(() => {
    document.addEventListener("click", handleClosePopupGlobal);
    return () => {
      document.removeEventListener("click", handleClosePopupGlobal);
    };
  });
</script>

<div class="container">
  <div class="quantity-controls">
    <button
      class="control-btn"
      on:click={decrement}
      disabled={count <= min}
      aria-label="Decrease count"
    >
      -
    </button>

    <span class="counter-display">{count}</span>

    <button
      class="control-btn"
      on:click={increment}
      disabled={count >= max}
      aria-label="Increase count"
    >
      +
    </button>
  </div>

  <Button isBlackColor={true} on:click={handleAddToCart}>
    {$_("section_product_add_to_cart")}
  </Button>
</div>

{#if showPopup}
  <div class="popup">
    <span class="popup-text"
      >{title} {$_("section_product_added_to_basket")}</span
    >
    <div class="popup-buttons">
      <a href="/cart" class="popup-button"
        >{$_("section_product_go_to_checkout")}</a
      >
      <button class="popup-button" on:click={handleClosePopup}>x</button>
    </div>
  </div>
{/if}

<style>
  .container {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px 8px; /* Adjusted to match appointment-btn height */
    background-color: white;
    height: 45px; /* Match the total height of appointment-btn */
    box-sizing: border-box;
  }

  .control-btn {
    background: none;
    border: none;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    transition: opacity 0.2s;
    padding: 0;
  }

  .control-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .counter-display {
    margin: 0 8px;
    font-size: 16px;
    min-width: 24px;
    text-align: center;
    font-weight: 500;
    color: black;
  }

  .popup {
    position: fixed;
    top: 34%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #333333;
    color: white;
    padding: 30px;
    border: 1px solid #444;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 40px;
    z-index: 1000;
    width: 500px;
    justify-content: space-between;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .popup-text {
    flex: 1;
    text-align: left;
  }

  .popup-buttons {
    display: flex;
    gap: 1rem;
  }

  .popup-button {
    background-color: #444444;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
  }

  .popup-button:hover {
    background-color: #555555;
  }

  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }

    .quantity-controls {
      width: 100%;
      justify-content: space-between;
      padding: 12px 16px;
      height: 52px;
    }

    .control-btn {
      font-size: 24px;
      width: 40px;
      height: 40px;
    }

    .counter-display {
      font-size: 18px;
      margin: 0 24px;
    }

    .popup {
      flex-direction: column;
      gap: 1.5rem;
      width: 90%;
      padding: 20px;
    }

    .popup-text {
      flex: 0;
      width: 100%;
      text-align: center;
    }

    .popup-buttons {
      width: 100%;
      justify-content: center;
    }

    .popup-text,
    .popup-button {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 380px) {
    .quantity-controls {
      padding: 8px 4px;
      height: 45px;
    }

    .control-btn {
      font-size: 20px;
      width: 32px;
      height: 32px;
    }

    .counter-display {
      margin: 0 4px;
      font-size: 16px;
      min-width: 20px;
    }
  }
</style>

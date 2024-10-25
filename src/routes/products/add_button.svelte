<script lang="ts">
  import { addToCart, cart } from "../../store";

  export let id: string;
  export let quantity: number;

  const handleAddToCart = () => {
    addToCart(id, quantity);
  };
</script>

<button class="simple-btn" on:click={handleAddToCart}>
  <slot />
</button>

<style>
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
</style>

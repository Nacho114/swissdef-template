<script lang="ts">
  import { removeFromCart, addToCart } from "../../store";
  export let id: string;
  export let slug: string;
  export let img: string;
  export let price: number;
  export let quantity: number;
  import { _ } from "svelte-i18n";
  import { formatPrice } from "$lib/math";
  let title: string;
  $: {
    title = $_(`section_products_${slug}_title`);
  }
  const handleIncrement = () => {
    addToCart(id, quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity == 1) {
      removeFromCart(id);
    }
    addToCart(id, quantity - 1);
  };
  const handleRemove = () => {
    removeFromCart(id);
  };

  function shortenText(text: string, n: number): string {
    if (text.length <= n) {
      return text;
    }
    return text.slice(0, n) + "...";
  }
</script>

<div class="cart-item">
  <div class="product-details">
    <img
      src={`/assets/products/${img}_s.webp`}
      alt={slug}
      class="product-image"
    />
    <div class="item-info">
      <h2>{shortenText(title, 16)}</h2>
      <div class="price">{formatPrice(price)}</div>
    </div>
  </div>

  <div class="controls-group">
    <div class="quantity-controls">
      <button
        class="quantity-btn"
        on:click={handleDecrement}
        disabled={quantity <= 0}
      >
        -
      </button>
      <span class="quantity">{quantity}</span>
      <button class="quantity-btn" on:click={handleIncrement}> + </button>
    </div>
    <div class="subtotal">
      {formatPrice(price * quantity)}
    </div>
    <button class="remove-btn" on:click={handleRemove}> × </button>
  </div>
</div>

<style>
  .cart-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .product-details {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .controls-group {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto;
  }

  .product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }

  .item-info {
    flex-grow: 1;
    min-width: 200px;
  }

  .item-info h2 {
    margin: 0 0 4px 0;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .price {
    color: #666;
    font-size: 0.9rem;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 20px;
  }

  .quantity-btn {
    width: 28px;
    height: 28px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.2s;
  }

  .quantity-btn:hover:not(:disabled) {
    background: #f5f5f5;
    border-color: #ccc;
  }

  .quantity-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .quantity {
    min-width: 20px;
    text-align: center;
    font-size: 0.95rem;
  }

  .subtotal {
    font-weight: 500;
    min-width: 80px;
    text-align: right;
  }

  .remove-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #999;
    cursor: pointer;
    padding: 4px 8px;
    transition: color 0.2s;
  }

  .remove-btn:hover {
    color: #666;
  }
  @media (max-width: 750px) {
    .cart-item {
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 8px;
    }

    .product-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .item-info {
      min-width: 0;
      text-align: center;
    }

    .item-info h2 {
      margin: 0;
      font-size: 1rem;
    }

    .price {
      margin-top: 2px;
    }

    .controls-group {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      /* margin-left: 0; */
    }

    .quantity-controls {
      margin: 4px 0;
    }

    .product-image {
      width: 60px;
      height: 60px;
    }
  }
</style>

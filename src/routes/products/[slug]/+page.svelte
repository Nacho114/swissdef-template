<script lang="ts">
  import type { Product } from "$lib/products";
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
  export let data: Product;
</script>

<Container>
  <div class="container">
    <div class="product-card">
      <div class="product-image">
        <span class="welcome">
          <picture>
            <img src="/assets/products/{data.img}.jpg" alt="info info" />
          </picture>
        </span>
        <div class="image-picker">Image picker</div>
      </div>

      <div class="product-info">
        <h1>{data.slug + "_title"}</h1>
        <p>
          {$_(data.slug + "_summary")}
        </p>
      </div>
    </div>
  </div>
</Container>

<style>
  .container {
    background-color: var(--global-color-light);
    border-radius: 4px;
  }

  .product-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .product-image {
    width: 35vw;
  }
  .product-info {
    width: 35vw;
  }

  .image-picker {
    background-color: red;
  }
</style>

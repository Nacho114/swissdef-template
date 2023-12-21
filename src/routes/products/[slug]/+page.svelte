<script lang="ts">
  import type { Product } from "$lib/products";
  import Container from "$lib/components/container.svelte";
  import InfoListCard from "$lib/components/info_list_card.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { _ } from "svelte-i18n";
  export let data: Product;

  $: title = $_(`section_products_${data.slug}_title`);
  $: summary = $_(`section_products_${data.slug}_summary`);
  $: about = $_(`section_products_${data.slug}_about`);
  $: features = $_(`section_products_${data.slug}_features`);
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
        <h1>{title}</h1>
        <p>
          {summary}
        </p>
        <Button>
          <div class="button">
            Order
            <ChevronRight />
          </div>
        </Button>
      </div>
    </div>
    <div>
      <InfoListCard title="Description" infoListString={about}></InfoListCard>
    </div>
    <div>
      <InfoListCard title="Specification" infoListString={features}
      ></InfoListCard>
    </div>
    <div>
      <InfoListCard title="Returns & Warrant" infoListString={features}
      ></InfoListCard>
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
    gap: 4vw;
  }

  .product-image {
    width: 35vw;
    overflow: hidden; /* Optional, to prevent overflow if necessary */
  }

  .product-image img {
    width: 100%; /* Make image width responsive to container */
    height: auto; /* Maintain aspect ratio */
  }

  .product-info {
    width: 35vw;
  }

  .image-picker {
    background-color: red;
  }
</style>

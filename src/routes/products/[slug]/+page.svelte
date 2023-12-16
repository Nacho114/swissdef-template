<script lang="ts">
  import type { Product } from "$lib/products";
  import Container from "$lib/components/container.svelte";
  import InfoListCard from "$lib/components/info_list_card.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { _ } from "svelte-i18n";
  export let data: Product;

  function getI18nValue(
    attribute: "title" | "summary" | "features" | "about",
  ): string {
    return $_(`section_products_${data.slug}_${attribute}`);
  }
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
        <h1>{getI18nValue("title")}</h1>
        <p>
          {getI18nValue("summary")}
        </p>
        <Button>
          <div class="button">
            Order
            <ChevronRight />
          </div>
        </Button>
      </div>
    </div>
    <div class="about">
      <InfoListCard title="About" infoListString={getI18nValue("about")}
      ></InfoListCard>
    </div>
    <div class="features">
      <InfoListCard title="Features" infoListString={getI18nValue("features")}
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

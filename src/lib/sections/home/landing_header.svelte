<script lang="ts">
  import { localize } from "$lib/nav";
  import Container from "$lib/components/container.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { _ } from "svelte-i18n";
</script>

<Container>
  <div class="landing-header">
    <div class="header-content">
      <h1>
        <span class="gradient-text"
          >{$_("section_home_landing_header_title")}</span
        >
      </h1>

      <p class="subtitle">{$_("section_home_landing_header_subtitle")}</p>

      <div class="cta-group">
        <a href={$localize("/contact")} class="primary-cta">
          <Button fullWidth={false}>
            <div class="button-content">
              {$_("section_home_landing_header_button")}
              <ChevronRight />
            </div>
          </Button>
        </a>

        <a href={$localize("/products")} class="secondary-cta">
          {$_("section_general_products")}
          <ChevronRight />
        </a>
      </div>
    </div>

    <div class="header-image">
      <div class="image-container">
        <img
          src="/assets/home/phillips_hs1_home_m.webp"
          srcset="
    /assets/home/phillips_hs1_home_m.webp 600w,
    /assets/home/phillips_hs1_home_l.webp 1080w
  "
          sizes="(max-width: 600px) 600px, 1080px"
          alt={$_("alt_philips_hs1")}
          fetchpriority="high"
          class="product-image"
        />
        <div class="image-backdrop"></div>
      </div>
    </div>
  </div>
</Container>

<style>
  .landing-header {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
    padding: 4rem 0;
    align-items: center;
  }

  .header-content {
    max-width: 600px;
    margin: 0 auto;
  }

  h1 {
    font-size: var(--text-hero);
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .gradient-text {
    background: linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: var(--text-md);
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 2.5rem;
    max-width: 90%;
  }

  .cta-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
  }

  .button-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .secondary-cta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  .secondary-cta:hover {
    color: var(--color-text);
  }

  .header-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .product-image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    z-index: 2;
    transition: transform 0.3s ease;
  }

  .image-container:hover .product-image {
    transform: translateY(-5px);
  }

  .image-backdrop {
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    background: radial-gradient(
      circle at center,
      rgba(96, 165, 250, 0.1),
      transparent
    );
    filter: blur(40px);
    z-index: -1;
  }

  @media (max-width: 768px) {
    .landing-header {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2rem 0;
      text-align: center;
    }

    .header-content {
      padding: 0 1rem;
    }

    .subtitle {
      margin-left: auto;
      margin-right: auto;
    }

    .cta-group {
      justify-content: center;
    }

    .image-container {
      max-width: 400px;
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .cta-group {
      flex-direction: column;
      gap: 1rem;
    }

    .secondary-cta {
      justify-content: center;
    }
  }
</style>

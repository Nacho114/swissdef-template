<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import Button from "$lib/components/button.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { _ } from "svelte-i18n";
</script>

<Container>
  <div class="landing-header">
    <div class="header-content">
      <div class="badge">
        <span>{$_("Swiss Defibrillator")}</span>
      </div>
      
      <h1>
        <span class="gradient-text">{$_("section_home_landing_header_title")}</span>
      </h1>
      
      <p class="subtitle">{$_("section_home_landing_header_subtitle")}</p>
      
      <div class="cta-group">
        <a href="/contact" class="primary-cta">
          <Button fullWidth={false}>
            <div class="button-content">
              {$_("section_home_landing_header_button")}
              <ChevronRight />
            </div>
          </Button>
        </a>
        
        <a href="/products" class="secondary-cta">
          View Products
          <ChevronRight />
        </a>
      </div>
    </div>

    <div class="header-image">
      <div class="image-container">
        <img
          src="/assets/home/phillips_hs1_home_l.png"
          alt={$_('alt_philips_hs1')}
          class="product-image"
        />
        <div class="image-backdrop" />
      </div>
    </div>
  </div>
</Container>

<style>
  .landing-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 6rem 0;
    align-items: center;
  }

  .header-content {
    max-width: 600px;
  }

  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(96, 165, 250, 0.1);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: 2rem;
    margin-bottom: 2rem;
  }

  .badge span {
    background: linear-gradient(135deg, #60A5FA, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .gradient-text {
    background: linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }

  .cta-group {
    display: flex;
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
    color: #4a5568;
    text-decoration: none;
    transition: color 0.3s;
  }

  .secondary-cta:hover {
    color: #1a1a1a;
  }

  .header-image {
    position: relative;
  }

  .image-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  .product-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 2;
  }

  .image-backdrop {
    position: absolute;
    inset: 10%;
    background: radial-gradient(circle at center, rgba(96, 165, 250, 0.1), transparent);
    filter: blur(40px);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    .landing-header {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 3rem 0;
    }

    .header-content {
      margin: 0 auto;
    }

    h1 {
      font-size: 3rem;
    }

    .cta-group {
      justify-content: center;
    }

    .image-container {
      padding-bottom: 75%;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.125rem;
    }

    .cta-group {
      flex-direction: column;
      gap: 1rem;
    }

    .secondary-cta {
      margin-top: 0.5rem;
    }
  }
</style>

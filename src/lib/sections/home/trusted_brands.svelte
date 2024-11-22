<script lang="ts">
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";

  const logos = [
    { src: "/assets/home/clients/ibis.png", alt: "Ibis Logo" },
    { src: "/assets/home/clients/novotel.png", alt: "Novotel Logo" },
    { src: "/assets/home/clients/cdf-logo.png", alt: "CDF Logo" },
    { src: "/assets/home/clients/logitech.png", alt: "Logitech Logo", class: "logitech" }
  ];

  // logo loopy
  const allLogos = [...logos, ...logos, ...logos];
</script>

<div class="trusted-brands-section">
  <h2>
    {$_("section_home_trusted_brands_title")}
  </h2>
  
  <div class="logos-container">
    <div class="logos-track">
      {#each allLogos as logo}
        <div class="logo-wrapper">
          <img
            class={`logo ${logo.class || ''}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .trusted-brands-section {
    background: #f5f5f7;
    padding: 2rem 0;
    text-align: center;
    overflow: hidden;
  }

  h2 {
    font-weight: 500;
    color: #1d1d1f;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }

  .logos-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 1rem 0;
  }

  .logos-container::before,
  .logos-container::after {
    content: "";
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  .logos-container::before {
    left: 0;
    background: linear-gradient(to right, #f5f5f7, transparent);
  }

  .logos-container::after {
    right: 0;
    background: linear-gradient(to left, #f5f5f7, transparent);
  }

  .logos-track {
    display: flex;
    gap: 4rem;
    animation: scroll 30s linear infinite;
    width: max-content;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
    will-change: transform;
    padding-right: 4rem;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    min-width: 150px;
  }

  .logo {
    height: 45px;
    width: auto;
    opacity: 0.6;
    transition: all 0.3s ease;
    filter: grayscale(100%);
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
    will-change: opacity, filter;
  }

  .logo:hover {
    opacity: 1;
    filter: grayscale(0%);
  }

  .logo.logitech {
    height: 25px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-33.33% - 2rem));
    }
  }

  .logos-container:hover .logos-track {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    .trusted-brands-section {
      padding: 1.5rem 0;
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .logos-track {
      gap: 3rem;
    }

    .logo {
      height: 35px;
    }

    .logo.logitech {
      height: 18px;
    }
  }
</style>

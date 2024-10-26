<script lang="ts">
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";

  const logos = [
    { src: "/assets/home/clients/ibis.png", alt: "Ibis Logo" },
    { src: "/assets/home/clients/novotel.png", alt: "Novotel Logo" },
    { src: "/assets/home/clients/cdf-logo.png", alt: "CDF Logo" },
    { src: "/assets/home/clients/logitech.png", alt: "Logitech Logo", class: "logitech" }
  ];

  // Duplicate logos for nice loopyloop
  const allLogos = [...logos, ...logos];
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
    padding: 4rem 0;
    text-align: center;
    overflow: hidden;
  }

  h2 {
    font-weight: 500;
    color: #1d1d1f;
    font-size: 1.5rem;
    margin-bottom: 3rem;
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
    width: fit-content;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .logo {
    height: 60px;
    width: auto;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    filter: grayscale(100%);
  }

  .logo:hover {
    opacity: 1;
    filter: grayscale(0%);
  }

  .logo.logitech {
    height: 30px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* Pause animation on hover */
  .logos-container:hover .logos-track {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    .trusted-brands-section {
      padding: 3rem 0;
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    .logos-track {
      gap: 3rem;
    }

    .logo {
      height: 40px;
    }

    .logo.logitech {
      height: 20px;
    }
  }
</style>

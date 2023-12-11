<!-- Section container with light gray background -->
<div class="trusted-brands-section">
  <h2>Trusted By World’s Most Favourite Brands</h2>
  <div class="brand-logos">
    <img class="logo" src="/assets/home/clients/ibis.png" alt="Novotel Logo" />
    <img
      class="logo"
      src="/assets/home/clients/novotel.png"
      alt="Novotel Logo"
    />
    <img
      class="logo"
      src="/assets/home/clients/cdf-logo.png"
      alt="Novotel Logo"
    />
    <img
      class="logo"
      src="/assets/home/clients/logitech.png"
      alt="Novotel Logo"
    />
    <!-- Add other logos similarly -->
  </div>
</div>

<style>
  .trusted-brands-section {
    background-color: #f5f5f5; /* Light gray background */
    padding: 2rem; /* Adjust the padding as needed */
    padding-bottom: 4rem;
    text-align: center;
  }

  h2 {
    font-weight: 400; /* Less thick than the default h2 weight */
    color: var(--global-color-gray);
    font-size: max(3vw, 16px);
  }

  .brand-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem; /* Adjust the space between logos as needed */
    margin-top: 1.4rem; /* Space between the heading and the logos */
  }

  .brand-logos img {
    max-height: 60px; /* Set a max height for the logos for consistency. Adjust as needed. */
  }

    @media (max-width: 600px) {
    .brand-logos {
      align-items: center; /* Center logos horizontally */
      justify-content: center;
    }

    .brand-logos img {
      max-width: 120px; /* Set a max width for the logos */
      max-height: 60px; /* Keep max height for consistency */
      margin-bottom: 1rem; /* Space between stacked logos */
    }
  }
</style>

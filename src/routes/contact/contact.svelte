<script lang="ts">
  import { _ } from "svelte-i18n";
  import CircularButton from "$lib/components/circular_button.svelte";
  import Button from "$lib/components/button.svelte";
  import Facebook from "virtual:icons/gg/facebook";
  import Twitter from "virtual:icons/ant-design/twitter-outlined";
  import Instagram from "virtual:icons/ant-design/instagram";
  import Location from "virtual:icons/typcn/location";
  import Phone from "virtual:icons/solar/phone-linear";
  import Email from "virtual:icons/iconamoon/email";
  import { ContactInfo } from "$lib/info";

  // Contact card datarrr
  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      description: ContactInfo.getPhoneNumber(),
      href: `tel:${ContactInfo.getPhoneNumber()}`
    },
    {
      icon: Email, 
      title: "Email",
      description: ContactInfo.getEmail(),
      href: `mailto:${ContactInfo.getEmail()}`
    },
    {
      icon: Location,
      title: "Address",
      description: ContactInfo.getAddress(),
      href: "#"
    }
  ];
</script>

<!-- Noise Filter tinggg -->
<div class="noise-container">
  <svg class="noise-svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)"/>
  </svg>
</div>

<!-- Background Blur -->
<div class="blur-element blur-blue" />
<div class="blur-element blur-purple" />

<div class="contact-wrapper">
  <!-- Header Section -->
  <div class="header">
    <div class="badge">
      <span>{$_("contact_title")}</span>
    </div>
    
    <h1>Get in <span class="gradient-text">Touch</span></h1>
    <p class="subtitle">{$_("contact_sub_title")}</p>
  </div>

  <!-- Contact Griddy -->
  <div class="contact-grid">
    {#each contactCards as card}
      <a href={card.href} class="contact-card">
        <div class="card-content">
          <div class="card-icon">
            <svelte:component this={card.icon} />
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
        <div class="card-shine" />
      </a>
    {/each}
  </div>

  <!-- Support Card -->
  <div class="support-card">
    <div class="support-content">
      <div class="support-text">
        <h2>{$_("section_contact_closing_text")}</h2>
        <div class="social-icons">
          <CircularButton>
            <Facebook />
          </CircularButton>
          <CircularButton>
            <Twitter />
          </CircularButton>
          <CircularButton>
            <Instagram />
          </CircularButton>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Remove dark styles */
  :global(body) {
    background: #ffffff;
    color: #1a1a1a;
  }

  /*  noise effect blocker */
  .noise-container {
    display: none;
  }

  /*  background accents */
  .blur-element {
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.04;
    pointer-events: none;
  }

  .blur-blue {
    top: -10%;
    right: -10%;
    background: #007AFF;
  }

  .blur-purple {
    bottom: -10%;
    left: -10%;
    background: #5856D6;
  }

  /* Layout */
  .contact-wrapper {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 1.5rem;
  }

  /* Header Styles */
  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(0, 122, 255, 0.1);
    border: 1px solid rgba(0, 122, 255, 0.2);
    border-radius: 2rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(8px);
  }

  .badge span {
    background: linear-gradient(135deg, #007AFF, #5856D6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1d1d1f;
  }

  .gradient-text {
    background: linear-gradient(135deg, #007AFF, #5856D6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Contact Grid */
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  /* Card Styles */
  .contact-card {
    position: relative;
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 122, 255, 0.1);
    border-radius: 1.5rem;
    overflow: hidden;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(12px);
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }

  .contact-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(0, 122, 255, 0.2);
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }

  .card-icon {
    display: inline-flex;
    padding: 1rem;
    background: linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(88, 86, 214, 0.1));
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    color: #007AFF;
  }

  .contact-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1d1d1f;
    margin-bottom: 0.75rem;
  }

  .contact-card p {
    color: #6b7280;
    line-height: 1.6;
  }

  .card-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s;
  }

  .contact-card:hover .card-shine {
    transform: translateX(100%);
  }

  /* Support Card */
  .support-card {
    background: linear-gradient(135deg, rgba(0, 122, 255, 0.05), rgba(88, 86, 214, 0.05));
    border: 1px solid rgba(0, 122, 255, 0.1);
    border-radius: 2rem;
    padding: 4rem;
    text-align: center;
    backdrop-filter: blur(12px);
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .support-card h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1d1d1f;
    margin-bottom: 2rem;
    line-height: 1.3;
  }

  .social-icons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    .contact-wrapper {
      padding: 3rem 1rem;
    }

    .support-card {
      padding: 2rem;
    }
  }
</style>

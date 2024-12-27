<script lang="ts">
  import { _ } from "svelte-i18n";
  import Location from "virtual:icons/typcn/location";
  import Phone from "virtual:icons/solar/phone-linear";
  import Email from "virtual:icons/iconamoon/email";
  import WhatsApp from "virtual:icons/ri/whatsapp-fill";
  import { ContactInfo } from "$lib/info";

  import { onMount } from "svelte";

  onMount(() => {
    const script = document.createElement("script");
    // TODO: Hard coded number
    script.innerHTML = `
      gtag('config', 'AW-935906638/0ZkSCM_C8fwZEM6ao74D', {
        'phone_conversion_number': '0 79 441 24 06'
      });
    `;
    document.head.appendChild(script);
  });

  function gtag_report_conversion() {
    console.log("Hey");
    gtag("event", "conversion", {
      send_to: "AW-935906638/2pRNCM7l8vwZEM6ao74D",
    });
  }

  // Contact card datarrr
  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      description: ContactInfo.getPhoneNumber(),
      href: `tel:${ContactInfo.getPhoneNumber()}`,
    },
    {
      icon: Email,
      title: "Email",
      description: ContactInfo.getEmail(),
      href: `mailto:${ContactInfo.getEmail()}`,
    },
    {
      icon: Location,
      title: "Address",
      description: ContactInfo.getAddress(),
      href: "#",
    },
  ];
</script>

<div class="noise-container">
  <svg class="noise-svg">
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.8"
        numOctaves="4"
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
</div>
<div class="blur-element blur-blue" />
<div class="blur-element blur-purple" />

<div class="contact-wrapper">
  <div class="header">
    <h1>
      {$_("contact_page_title")}
      <span class="gradient-text">{$_("contact_page_title_highlight")}</span>
    </h1>
    <p class="subtitle">{$_("contact_sub_title")}</p>
  </div>

  <!-- Contact Griddy -->
  <div class="contact-grid">
    {#each contactCards as card}
      <a
        href={card.href}
        class="contact-card"
        on:click={gtag_report_conversion}
      >
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

  <!-- wazuppp section -->
  <div class="support-card">
    <div class="support-content">
      <div class="support-text">
        <div class="whatsapp-content">
          <WhatsApp class="whatsapp-icon" />
          <div>
            <h2>{$_("contact_whatsapp_support_title")}</h2>
            <p class="whatsapp-description">
              {$_("contact_whatsapp_support_description")}
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/+41794412406"
          class="whatsapp-button"
          on:click={gtag_report_conversion}
        >
          {$_("contact_whatsapp_message_button")}
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    background: #ffffff;
    color: #1a1a1a;
  }
  .noise-container {
    display: none;
  }

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
    background: #007aff;
  }

  .blur-purple {
    bottom: -10%;
    left: -10%;
    background: #5856d6;
  }

  .contact-wrapper {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 1.5rem;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1d1d1f;
  }

  .gradient-text {
    background: linear-gradient(135deg, #007aff, #5856d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

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
    background: linear-gradient(
      135deg,
      rgba(0, 122, 255, 0.1),
      rgba(88, 86, 214, 0.1)
    );
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    color: #007aff;
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

  .support-card {
    background: linear-gradient(
      135deg,
      rgba(37, 211, 102, 0.05),
      rgba(37, 211, 102, 0.1)
    );
    border: 1px solid rgba(37, 211, 102, 0.2);
    border-radius: 2rem;
    padding: 4rem;
    text-align: center;
    backdrop-filter: blur(12px);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
  }

  .support-content {
    max-width: 100%;
  }

  .whatsapp-content {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .whatsapp-icon {
    color: #25d366;
    width: 48px;
    height: 48px;
  }

  .support-card h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1d1d1f;
    margin-bottom: 0.5rem;
    line-height: 1.3;
    text-align: left;
  }

  .whatsapp-description {
    color: #6b7280;
    text-align: left;
    font-size: 1.1rem;
    margin-bottom: 0;
  }

  .whatsapp-button {
    display: inline-block;
    background-color: #25d366;
    color: white;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-decoration: none;
    font-weight: 600;
    margin: 2rem 0;
    transition: all 0.3s ease;
    max-width: 100%;
    box-sizing: border-box;
  }

  .whatsapp-button:hover {
    transform: translateY(-2px);
    background-color: #20bc5a;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
  }

  .social-icons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(37, 211, 102, 0.2);
  }

  @media (max-width: 768px) {
    .contact-wrapper {
      padding: 2rem 1rem;
    }

    h1 {
      font-size: 2.25rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1rem;
      padding: 0 1rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 0 0.5rem;
    }

    .contact-card {
      padding: 1.5rem;
    }

    .card-icon {
      padding: 0.75rem;
      margin-bottom: 1rem;
    }

    .contact-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .support-card {
      padding: 1.5rem;
      margin: 0 0.5rem;
      width: auto;
    }

    .whatsapp-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .whatsapp-icon {
      width: 36px;
      height: 36px;
    }

    .support-card h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    .whatsapp-description {
      text-align: center;
      font-size: 1rem;
    }

    .whatsapp-button {
      padding: 0.875rem 1rem;
      margin: 1rem auto;
      display: block;
      width: calc(100% - 2rem);
    }
  }

  @media (max-width: 380px) {
    .contact-wrapper {
      padding: 1.5rem 0.75rem;
    }

    h1 {
      font-size: 2rem;
    }

    .contact-card {
      padding: 1.25rem;
    }

    .support-card {
      padding: 1.25rem;
    }
  }
</style>

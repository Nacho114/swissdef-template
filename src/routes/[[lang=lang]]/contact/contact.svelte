<script lang="ts">
  import { _ } from "svelte-i18n";
  import Location from "virtual:icons/typcn/location";
  import Phone from "virtual:icons/solar/phone-linear";
  import Email from "virtual:icons/iconamoon/email";
  import WhatsApp from "virtual:icons/ri/whatsapp-fill";
  import { ContactInfo } from "$lib/info";
  import Form from "./form.svelte";

  // WhatsApp first — it's the preferred contact channel
  $: contactCards = [
    {
      icon: WhatsApp,
      id: "whatsapp-btn",
      title: "WhatsApp",
      description: $_("contact_whatsapp_message_button"),
      href: "https://wa.me/+41794412406",
      whatsapp: true,
    },
    {
      icon: Phone,
      id: "phone-btn",
      title: $_("contact_phone_title"),
      description: ContactInfo.getPhoneNumber(),
      href: `tel:${ContactInfo.getPhoneNumber()}`,
      whatsapp: false,
    },
    {
      icon: Email,
      id: "email-btn",
      title: $_("contact_email_title"),
      description: ContactInfo.getEmail(),
      href: `mailto:${ContactInfo.getEmail()}`,
      whatsapp: false,
    },
    {
      icon: Location,
      id: "address-btn",
      title: $_("contact_address_title"),
      description: ContactInfo.getAddress(),
      href: "https://maps.google.com/?q=Route+de+l'Aiglon+5,+1854+Leysin",
      whatsapp: false,
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

  <!-- Info column left, form right -->
  <div class="split-layout">
    <div class="info-column">
      {#each contactCards as card}
        <a id={card.id} href={card.href} class="info-inline">
          <div class="info-chip" class:whatsapp-chip={card.whatsapp}>
            <svelte:component this={card.icon} />
          </div>
          <div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </a>
      {/each}
    </div>
    <div class="form-column">
      <Form />
    </div>
  </div>
</div>

<style>
  :global(body) {
    background: #ffffff;
    color: var(--color-text);
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
    background: var(--global-color-gray);
  }

  .blur-purple {
    bottom: -10%;
    left: -10%;
    background: var(--global-color-gray);
  }

  .contact-wrapper {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1.5rem 0;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: var(--text-2xl);
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  .gradient-text {
    background: linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: var(--text-md);
    color: var(--color-text-muted);
    max-width: 600px;
    margin: 0 auto;
  }

  .info-inline {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    text-align: left;
    text-decoration: none;
    color: inherit;
  }

  .info-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--global-color-gray-light-bg);
    border-radius: var(--border-radius-lg);
    color: var(--color-text);
    flex-shrink: 0;
  }

  .whatsapp-chip {
    color: #25d366;
  }

  .info-inline h3 {
    margin: 0 0 0.25rem;
    font-size: var(--text-base);
    color: var(--color-text);
  }

  .info-inline p {
    margin: 0;
    color: var(--color-text-muted);
    font-size: var(--text-sm);
    white-space: pre-line;
  }

  .split-layout {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 3rem;
    align-items: start;
    width: 100%;
  }

  .info-column {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    padding-top: 1rem;
  }

  .form-column {
    min-width: 0;
  }

  @media (max-width: 900px) {
    .split-layout {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .info-column {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .info-column .info-inline {
      flex: 1 1 220px;
      max-width: 320px;
    }
  }

  @media (max-width: 768px) {
    .contact-wrapper {
      padding: 2rem 1rem;
    }

    h1 {
      font-size: var(--text-xl);
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: var(--text-base);
      padding: 0 1rem;
    }
  }

  @media (max-width: 380px) {
    .contact-wrapper {
      padding: 1.5rem 0.75rem;
    }
  }
</style>

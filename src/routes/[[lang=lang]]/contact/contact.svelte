<script lang="ts">
  import { _ } from "svelte-i18n";
  import Location from "virtual:icons/typcn/location";
  import WhatsApp from "virtual:icons/ri/whatsapp-fill";
  import { ContactInfo } from "$lib/info";
  import Form from "./form.svelte";
  import { page } from "$app/stores";
  import { getEnquiryCopy } from "$lib/enquiry-copy";
  $: copy = getEnquiryCopy($page.params.lang);
  $: maintenanceEnquiry =
    $page.url.searchParams.get("service") === "maintenance";
  $: productEnquiry = $page.url.searchParams.get("service") === "products";

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
      {productEnquiry
        ? copy.productTitle
        : maintenanceEnquiry
          ? $_("maintenance_contact_title")
          : copy.title}
    </h1>
    <p class="subtitle">
      {productEnquiry
        ? copy.productIntro
        : maintenanceEnquiry
          ? $_("maintenance_contact_intro")
          : copy.intro}
    </p>
    <nav class="quick-contact" aria-label={copy.formTitle}>
      <a class="enquiry-link" href="#enquiry-form">{copy.formTitle}</a>
      <a href={`tel:${ContactInfo.getPhoneNumber()}`}>{copy.callAction}</a>
      <a href={`mailto:${ContactInfo.getEmail()}`}>{copy.emailAction}</a>
    </nav>
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

  .subtitle {
    font-size: var(--text-md);
    color: var(--color-text-muted);
    max-width: 600px;
    margin: 0 auto;
  }

  .quick-contact {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.75rem 1.5rem;
    margin-top: 1.5rem;
  }
  .quick-contact a {
    color: var(--global-color-primary);
    padding: 0.6rem 0;
  }
  .quick-contact .enquiry-link {
    background: var(--global-color-primary);
    color: white;
    padding: 0.75rem 1.25rem;
    border-radius: var(--border-radius);
    text-decoration: none;
  }
  .quick-contact a:focus-visible {
    outline: 2px solid var(--global-color-primary);
    outline-offset: 3px;
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
      flex-direction: column;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .info-column .info-inline {
      flex: 0 0 auto;
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

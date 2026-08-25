<script lang="ts">
  import { _ } from "svelte-i18n";
  import Location from "virtual:icons/typcn/location";
  import Phone from "virtual:icons/solar/phone-linear";
  import Email from "virtual:icons/iconamoon/email";
  import WhatsApp from "virtual:icons/ri/whatsapp-fill";
  import { ContactInfo } from "$lib/info";
  import Form from "./form.svelte";

  // Contact card datarrr
  $: contactCards = [
    {
      icon: Phone,
      id: "phone-btn",
      title: $_("contact_phone_title"),
      description: ContactInfo.getPhoneNumber(),
      href: `tel:${ContactInfo.getPhoneNumber()}`,
    },
    {
      icon: Email,
      id: "email-btn",
      title: $_("contact_email_title"),
      description: ContactInfo.getEmail(),
      href: `mailto:${ContactInfo.getEmail()}`,
    },
    {
      icon: Location,
      id: "address-btn",
      title: $_("contact_address_title"),
      description: ContactInfo.getAddress(),
      href: "https://maps.google.com/?q=Route+de+l'Aiglon+5,+1854+Leysin",
    },
  ];

  $: whatsappCard = {
    icon: WhatsApp,
    id: "whatsapp-inline-btn",
    title: "WhatsApp",
    description: $_("contact_whatsapp_message_button"),
    href: "https://wa.me/+41794412406",
  };

  // DEV-ONLY design-variant switcher — remove before merging to main
  const variantLabels = [
    "Original",
    "V1 · Info on top",
    "V2 · Split layout",
    "V3 · All inline",
  ];
  let variant = 0;
  const prevVariant = () =>
    (variant = (variant + variantLabels.length - 1) % variantLabels.length);
  const nextVariant = () => (variant = (variant + 1) % variantLabels.length);
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

<div class="contact-wrapper" class:compact={variant !== 0}>
  <div class="header">
    <h1>
      {$_("contact_page_title")}
      <span class="gradient-text">{$_("contact_page_title_highlight")}</span>
    </h1>
    <p class="subtitle">{$_("contact_sub_title")}</p>
  </div>

  {#if variant === 0}
    <Form />

    <!-- Contact Griddy -->
    <div class="contact-grid">
      {#each contactCards as card}
        <a id={card.id} href={card.href} class="contact-card">
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
            id="whatsapp-btn"
            href="https://wa.me/+41794412406"
            class="whatsapp-button"
          >
            {$_("contact_whatsapp_message_button")}
          </a>
        </div>
      </div>
    </div>
  {:else if variant === 1}
    <!-- V1: training-style inline info row above the form -->
    <div class="info-inline-row">
      {#each contactCards as card}
        <a id={card.id} href={card.href} class="info-inline">
          <div class="info-chip"><svelte:component this={card.icon} /></div>
          <div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </a>
      {/each}
    </div>

    <Form />

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
            id="whatsapp-btn"
            href="https://wa.me/+41794412406"
            class="whatsapp-button"
          >
            {$_("contact_whatsapp_message_button")}
          </a>
        </div>
      </div>
    </div>
  {:else if variant === 2}
    <!-- V2: info column left, form right -->
    <div class="split-layout">
      <div class="info-column">
        {#each [...contactCards, whatsappCard] as card}
          <a id={card.id} href={card.href} class="info-inline">
            <div
              class="info-chip"
              class:whatsapp-chip={card.id === "whatsapp-inline-btn"}
            >
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
  {:else}
    <!-- V3: everything inline on top, no support card -->
    <div class="info-inline-row">
      {#each [...contactCards, whatsappCard] as card}
        <a id={card.id} href={card.href} class="info-inline">
          <div
            class="info-chip"
            class:whatsapp-chip={card.id === "whatsapp-inline-btn"}
          >
            <svelte:component this={card.icon} />
          </div>
          <div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </a>
      {/each}
    </div>

    <Form />
  {/if}
</div>

<!-- DEV-ONLY design-variant switcher — remove before merging to main -->
<div class="variant-switcher">
  <button on:click={prevVariant} aria-label="Previous variant">◀</button>
  <span>{variantLabels[variant]}</span>
  <button on:click={nextVariant} aria-label="Next variant">▶</button>
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
    padding: 6rem 1.5rem;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  h1 {
    font-size: var(--text-hero);
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
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: var(--border-radius-lg);
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
    border-color: rgba(0, 0, 0, 0.12);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }

  .card-icon {
    display: inline-flex;
    padding: 1rem;
    background: var(--global-color-gray-light-bg);
    border-radius: var(--border-radius-lg);
    margin-bottom: 1.5rem;
    color: var(--color-text);
  }

  .contact-card h3 {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.75rem;
  }

  .contact-card p {
    color: var(--color-text-muted);
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
    border-radius: var(--border-radius-lg);
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

  .support-card h2 {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.5rem;
    line-height: 1.3;
    text-align: left;
  }

  .whatsapp-description {
    color: var(--color-text-muted);
    text-align: left;
    font-size: var(--text-md);
    margin-bottom: 0;
  }

  .whatsapp-button {
    display: inline-block;
    background-color: #25d366;
    color: white;
    padding: 1rem 2rem;
    border-radius: var(--border-radius-lg);
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
      font-size: var(--text-md);
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

    .support-card h2 {
      font-size: var(--text-lg);
      text-align: center;
    }

    .whatsapp-description {
      text-align: center;
      font-size: var(--text-base);
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
      font-size: var(--text-xl);
    }

    .contact-card {
      padding: 1.25rem;
    }

    .support-card {
      padding: 1.25rem;
    }
  }
  /* --- variant styles --- */
  .contact-wrapper.compact h1 {
    font-size: var(--text-2xl);
  }

  .info-inline-row {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto 2.5rem;
  }

  .info-inline {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    flex: 1 1 220px;
    max-width: 320px;
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

  .info-column .info-inline {
    flex: 0 0 auto;
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
  }

  /* DEV-ONLY switcher */
  .variant-switcher {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--color-text);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius-pill);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    z-index: 2000;
    font-size: var(--text-sm);
  }

  .variant-switcher button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: var(--text-base);
    padding: 0 0.25rem;
  }

  .variant-switcher span {
    min-width: 130px;
    text-align: center;
  }
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import "./styles.css";
  import "$lib/i18n.ts";
  import Header from "$lib/sections/layout/header.svelte";
  import Footer from "$lib/sections/layout/footer.svelte";
  import Cart from "virtual:icons/lucide/shopping-cart";
  import { cart } from "../store";
  import { _ } from "svelte-i18n";
  import { page } from "$app/stores";

  $: isCartPage = $page.url.pathname === "/cart";
  $: hasItems = Object.keys($cart).length > 0;

  const hreflangs = [
    { lang: "en", url: "https://www.swissdefibrillator.ch/" },
    { lang: "fr", url: "https://www.swissdefibrillator.ch/" },
    { lang: "de", url: "https://www.swissdefibrillator.ch/" },
    { lang: "it", url: "https://www.swissdefibrillator.ch/" },
  ];

  onMount(() => {
    const script = document.createElement("script");
    script.src = "/cookieconsent-config.js";
    script.type = "module";
    document.body.appendChild(script);
  });

  console.log("Environment Mode:", process.env.NODE_ENV);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.css"
  />
  {#each hreflangs as { lang, url }}
    <link rel="alternate" hreflang={lang} href={url} />
  {/each}
  <link
    rel="alternate"
    hreflang="x-default"
    href="https://www.swissdefibrillator.ch/"
  />

  {#if process.env.NODE_ENV === "production"}
    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-SGMP530N48"
    ></script>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-935906638"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      // Configuring both Google tags
      gtag("config", "G-KG05X2V4BY");
    </script>
  {/if}</svelte:head
>

<div class="layout">
  <div class="header"><Header /></div>
  <div class="content">
    <slot />
  </div>
  <div class="footer"><Footer /></div>

  {#if hasItems && !isCartPage}
    <a href="/cart" class="floating-cart">
      <Cart width="24" height="24" />
      <span class="cart-text">{$_("section_general_checkout")}</span>
    </a>
  {/if}
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
  }

  .header {
    margin-top: 6px;
    margin-bottom: 20px;
  }

  .footer {
    margin-top: 6vw;
  }

  .floating-cart {
    position: fixed;
    bottom: 32px;
    right: 32px;
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: var(--global-color-primary);
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    z-index: 1000;
  }

  .floating-cart:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .cart-text {
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    .floating-cart {
      bottom: 30px;
      right: 30px;
      padding: 10px 20px;
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      padding-bottom: 80px;
    }
  }
</style>

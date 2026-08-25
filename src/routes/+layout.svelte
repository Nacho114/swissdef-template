<script lang="ts">
  import { onMount } from "svelte";
  import "./styles.css";
  import Header from "$lib/sections/layout/header.svelte";
  import Footer from "$lib/sections/layout/footer.svelte";
  import Cart from "virtual:icons/lucide/shopping-cart";
  import { cart } from "../store";
  import { _ } from "svelte-i18n";
  import { page } from "$app/stores";
  import { LANGS, stripLang, withLang, localize } from "$lib/nav";

  $: pathNoLang = stripLang($page.url.pathname);
  $: isCartPage = pathNoLang === "/cart";
  $: hasItems = Object.keys($cart).length > 0;

  const canonicalOrigin = "https://www.swissdefibrillator.ch";
  $: canonicalUrl = canonicalOrigin + $page.url.pathname;

  // Checkout/confirmation pages have no search value and should stay unindexed
  const noindexPaths = [
    "/cart",
    "/success",
    "/failure",
    "/contact/form-success",
    "/maintenance/recommended-success",
    "/maintenance/remote-success",
  ];
  $: noindex = noindexPaths.includes(pathNoLang);

  onMount(() => {
    const script = document.createElement("script");
    script.src = "/cookieconsent-config.js";
    script.type = "module";
    document.body.appendChild(script);
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.css"
  />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {/if}
  <link rel="canonical" href={canonicalUrl} />
  {#each LANGS as lang}
    <link
      rel="alternate"
      hreflang={lang}
      href={canonicalOrigin + withLang(pathNoLang, lang)}
    />
  {/each}
  <link rel="alternate" hreflang="x-default" href={canonicalOrigin + pathNoLang} />
</svelte:head>

<div class="layout">
  <div class="header"><Header /></div>
  <div class="content">
    <slot />
  </div>
  <div class="footer"><Footer /></div>

  {#if hasItems && !isCartPage}
    <a href={$localize("/cart")} class="floating-cart">
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

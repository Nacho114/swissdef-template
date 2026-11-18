<script lang="ts">
  import { tick } from "svelte";
  import { localize } from "$lib/nav";
  import { _ } from "svelte-i18n";
  import LOGO from "$lib/svg/logo.svelte";
  import Hamburger from "virtual:icons/pajamas/hamburger";
  import Cart from "virtual:icons/lucide/shopping-cart"; // Clean, minimal cart
  import Locale from "./locale.svelte";

  let menuOpen = false;
  let menuButton: HTMLButtonElement;
  let firstLink: HTMLAnchorElement;

  async function toggleMenu() {
    if (menuOpen) {
      closeMenu();
      return;
    }
    menuOpen = true;
    await tick();
    firstLink.focus();
  }

  function closeMenu() {
    menuOpen = false;
    menuButton.focus();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (menuOpen && event.key === "Escape") closeMenu();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="mobile-header">
  <button
    type="button"
    class="hamburger"
    aria-label={$_("mobile_menu_label")}
    aria-expanded={menuOpen}
    aria-controls="mobile-navigation"
    bind:this={menuButton}
    on:click={toggleMenu}
  >
    <Hamburger />
  </button>

  <a href={$localize("/")}>
    <LOGO />
  </a>

  <div
    id="mobile-navigation"
    class="side-menu"
    class:open={menuOpen}
    inert={!menuOpen}
  >
    <div class="side-menu-content">
      <nav>
        <ul>
          <li>
            <a href={$localize("/")} bind:this={firstLink} on:click={closeMenu}
              >{$_("section_general_home")}</a
            >
          </li>
          <li>
            <a href={$localize("/training")} on:click={closeMenu}
              >{$_("section_general_training")}</a
            >
          </li>
          <li>
            <a href={$localize("/maintenance")} on:click={closeMenu}
              >{$_("section_general_maintenance")}</a
            >
          </li>
          <li>
            <a href={$localize("/products")} on:click={closeMenu}
              >{$_("section_general_products")}</a
            >
          </li>
          <li>
            <a href={$localize("/contact")} on:click={closeMenu}
              >{$_("section_general_contact")}</a
            >
          </li>
        </ul>
      </nav>

      <div class="locale">
        <Locale />
      </div>

      <div class="cart-icon">
        <a
          href={$localize("/cart")}
          class="cart-link"
          aria-label={$_("section_general_checkout")}
          on:click={closeMenu}
        >
          <Cart />
        </a>
      </div>

      <div class="menu-bottom-links">
        <a href={$localize("/contact")} on:click={closeMenu}
          >{$_("section_general_contact")}</a
        >
        <a href={$localize("/warranty_and_returns")} on:click={closeMenu}
          >{$_("section_general_warranty_and_returns")}</a
        >
      </div>
    </div>
  </div>

  <button
    type="button"
    class="overlay"
    class:show={menuOpen}
    tabindex="-1"
    aria-label={$_("mobile_menu_close")}
    on:click={closeMenu}
  ></button>
</div>

<style>
  /* Styles for mobile header */
  .mobile-header {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  .hamburger {
    cursor: pointer;
    align-self: center;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    font-size: 1.8rem;
    border: 0;
    background: transparent;
    color: var(--global-color-gray);
  }

  /* side menu */
  .side-menu {
    position: fixed;
    left: -60%; /* Initially hidden */
    top: 0;
    width: 60%;
    height: 100dvh;
    overflow-y: auto;
    background-color: black;
    color: white;
    transition: left 0.3s; /* Smooth transition for opening/closing */
    z-index: 100; /* Ensure it's above other content */
  }

  .side-menu-content {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-left: 30px;
    height: 100%;
  }

  .side-menu.open {
    left: 0; /* Show the menu */
  }

  /* side menu overlay shadow*/
  .overlay {
    position: fixed;
    border: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent black */
    display: none; /* Hidden by default */
    z-index: 90; /* Below the side menu but above other content */
  }

  .overlay.show {
    display: block; /* Show the overlay */
  }

  /* Styles for the navigation menu inside the side menu */
  .side-menu nav {
    width: 100%; /* Full width of the side menu */
  }

  .side-menu ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none; /* Remove bullet points */
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
  }

  .side-menu a {
    display: block; /* Makes the entire area clickable */
    text-decoration: none; /* Removes underline from links */
    text-align: left;
    color: white; /* White text color */
    font-size: var(--text-md); /* Adjust font size as needed */
    transition: background-color 0.3s; /* Smooth transition for hover effect */
  }

  .side-menu a:hover {
    background-color: var(
      --color-text
    ); /* Slightly darker background on hover */
  }

  .locale {
    display: flex;
    justify-content: start;
    margin-top: 50px;
  }

  .menu-bottom-links {
    margin-top: auto; /* Pushes the container to the bottom */
    width: 100%; /* Ensures full width for center alignment */
    text-align: center; /* Centers the text */
    padding-bottom: 80px; /* Vertical padding */
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .menu-bottom-links a {
    display: block; /* Block-level for full width */
    text-decoration: none;
    color: white;
    font-size: var(--text-sm); /* Smaller font size */
  }

  .cart-icon {
    display: flex;
    justify-content: start;
    margin-top: 40px; /* Adjust space between the locale and cart */
  }

  .cart-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--global-color-gray); /* Match your theme */
  }
</style>

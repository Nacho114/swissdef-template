<script lang="ts">
  import LOGO from "$lib/svg/logo.svelte";
  import Hamburger from "virtual:icons/pajamas/hamburger";
  import Locale from "./locale.svelte";

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function handleKeydown(event: any) {
    // Check if the Enter key or Space key is pressed
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  }
  function handleOverlayKeydown(event: any) {
    // Check if the Enter key or Space key is pressed
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  }
</script>

<div class="mobile-header">
  <div
    class="hamburger"
    role="button"
    tabindex="0"
    on:click={toggleMenu}
    on:keydown={handleKeydown}
  >
    <Hamburger />
  </div>

  <a href="/">
    <LOGO />
  </a>

  <div class={menuOpen ? "side-menu open" : "side-menu"}>
    <div class="side-menu-content">
      <nav>
        <ul>
          <li><a href="/" on:click={toggleMenu}>Home</a></li>
          <li><a href="/products" on:click={toggleMenu}>Products</a></li>
          <li><a href="/training" on:click={toggleMenu}>Training</a></li>
        </ul>
      </nav>

      <div class="locale">
        <Locale />
      </div>

      <div class="menu-bottom-links">
        <a href="/contact" on:click={toggleMenu}>Contact Us</a>
        <a href="/warranty" on:click={toggleMenu}>Warranty</a>
      </div>
    </div>
  </div>

  <!-- This div will cover the rest of the screen -->
  <div
    class={menuOpen ? "overlay show" : "overlay"}
    role="button"
    tabindex="0"
    on:click={toggleMenu}
    on:keydown={handleOverlayKeydown}
  />
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
    margin-top: 35px;
    transform: scale(1.3); /* Scales the element by 150% */
    color: var(--global-color-gray);
  }

  /* side menu */
  .side-menu {
    position: fixed;
    left: -60%; /* Initially hidden */
    top: 0;
    width: 60%;
    height: 100vh;
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
    font-size: 20px; /* Adjust font size as needed */
    transition: background-color 0.3s; /* Smooth transition for hover effect */
  }

  .side-menu a:hover {
    background-color: #333; /* Slightly darker background on hover */
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
    font-size: 12px; /* Smaller font size */
  }
</style>

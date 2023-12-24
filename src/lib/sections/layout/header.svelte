<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import MobileHeader from "./header_mobile.svelte";
  import LOGO from "$lib/svg/logo.svelte";
  import Locale from "./locale.svelte";
</script>

<Container>
  <!-- Grouped content for large screens -->
  <div class="large-screen">
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/maintenance">Maintenance</a>
          <a href="/training">Training</a>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>

    <div class="logo">
      <a href="/">
        <LOGO />
      </a>
    </div>

    <div class="locale">
      <Locale />
    </div>
  </div>

  <!-- Content for mobile screens -->
  <div class="mobile-header">
    <MobileHeader />
  </div>
</Container>

<style>
  /* Navigation styling */

  a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Use the default text color */
    font-size: 14px;
  }

  .large-screen {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    padding-inline-start: 0;
  }

  li {
    display: flex;
    gap: 20px;
  }

  nav {
    margin-top: 10px;
  }

  nav a:hover {
    text-decoration: underline;
    text-decoration-color: var(--global-color-primary);
  }

  /* Logo styling */

  .logo {
    display: flex;
    justify-content: center;
  }

  /* Locale menu styling */

  .locale {
    display: flex;
    justify-content: end;
    margin-top: 10px;
  }

  .mobile-header {
    display: none; /* Hide mobile header on large screens */
  }

  @media screen and (max-width: 600px) {
    /* Hide large screen content */
    .large-screen {
      display: none;
    }

    /* Show mobile header */
    .mobile-header {
      display: block;
    }
  }
</style>

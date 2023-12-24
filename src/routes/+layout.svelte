<script lang="ts">
  import "./styles.css";
  import "$lib/i18n.ts";
  import Header from "$lib/sections/layout/header.svelte";
  import Footer from "$lib/sections/layout/footer.svelte";
</script>

<div class="layout">
  <div class="header"><Header /></div>
  <div class="content">
    <slot />
    <!-- Your page content goes here -->
  </div>
  <div class="footer"><Footer /></div>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1; /* Makes this part grow */
  }

  .header {
    margin-top: 6px;
    margin-bottom: 20px;
  }

  .footer {
    margin-top: 6vw;
  }
</style>

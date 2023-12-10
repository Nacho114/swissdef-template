export const prerender = true;
<script lang="ts">
  import "./styles.css";
  import "$lib/i18n.ts";
  import Header from "$lib/sections/layout/header.svelte";
  import Footer from "$lib/sections/layout/footer.svelte";
</script>

<div class="header">
  <Header />
</div>

<slot />

<div class="footer">
  <Footer />
</div>

<style>
  .header {
    margin-top: 6px;
    margin-bottom: 20px;
  }

  .footer {
    margin-top: 6vw;
  }
</style>

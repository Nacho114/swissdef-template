<script>
  import { _ } from "svelte-i18n";
  import Container from "$lib/components/container.svelte";
</script>

<Container>
  <div class="not-found-container">
    <h1>{$_("page_not_found_title")}</h1>
    <p>{$_("page_not_found_description")}</p>
    <a href="/" class="btn">{$_("page_not_found_home_button")}</a>
  </div>
</Container>

<style>
  .not-found-container {
    text-align: center;
    margin: 100px 0;
  }

  h1 {
    font-size: var(--text-2xl);
    margin-bottom: 1rem;
  }

  p {
    font-size: var(--text-md);
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--global-color-primary);
    color: white;
    text-decoration: none;
    border-radius: var(--border-radius);
    font-size: var(--text-base);
  }

  .btn:hover {
    background-color: var(--global-color-primary-dark);
  }
</style>

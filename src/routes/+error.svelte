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
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  .btn:hover {
    background-color: #0056b3;
  }
</style>

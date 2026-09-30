<script lang="ts">
  import { page } from "$app/stores";
  import { localize } from "$lib/nav";
  import { homeCopy } from "./copy";
  $: copy = homeCopy($page.params.lang);
  const paths = ["/training", "/maintenance", "/products"];
</script>

<section class="services-section" aria-labelledby="services-title">
  <h2 id="services-title">{copy.servicesTitle}</h2>
  <p class="intro">{copy.servicesIntro}</p>
  <div class="service-list">
    {#each copy.services as service, i}
      <article class:training={i === 0}>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <a href={$localize(paths[i])}>{service.link}</a>
      </article>
    {/each}
  </div>
</section>

<style>
  .services-section {
    padding: 1rem 0 3rem;
    text-align: left;
  }
  h2 {
    margin: 0 0 1rem;
  }
  .intro {
    color: var(--color-text-muted);
    font-size: var(--text-md);
    line-height: 1.6;
    margin: 0 0 2rem;
  }
  .service-list {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 2rem;
  }
  article {
    border-top: 3px solid #ddd;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  article.training {
    border-color: var(--global-color-primary);
  }
  h3 {
    font-size: var(--text-lg);
    margin: 0 0 0.5rem;
  }
  article p {
    color: var(--color-text-muted);
    line-height: 1.65;
    margin: 0 0 1.5rem;
    max-width: 45ch;
  }
  a {
    color: var(--global-color-primary);
    text-underline-offset: 4px;
    margin-top: auto;
    font-weight: 500;
    padding: 0.5rem 0;
  }
  a:focus-visible {
    outline: 3px solid var(--global-color-primary);
    outline-offset: 4px;
  }
  @media (max-width: 700px) {
    .service-list {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .services-section {
      padding: 1rem 20px 3rem;
    }
  }
</style>

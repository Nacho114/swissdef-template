<script lang="ts">
  import { page } from "$app/stores";
  import { localize } from "$lib/nav";
  import Container from "$lib/components/container.svelte";
  import { homeCopy } from "./copy";
  $: copy = homeCopy($page.params.lang);
</script>

<Container>
  <section class="landing-header" aria-labelledby="home-heading">
    <div class="header-content">
      <h1 id="home-heading">{copy.heading}</h1>
      <p class="subtitle">{copy.intro}</p>
      <div class="cta-group">
        <a
          href={$localize("/contact") + "?service=training"}
          class="primary-cta">{copy.request}</a
        >
        <a href={$localize("/training")} class="secondary-cta">{copy.explore}</a
        >
      </div>
    </div>
    <aside class="course-summary" aria-labelledby="course-summary-title">
      <h2 id="course-summary-title">{copy.panelTitle}</h2>
      <ul>
        <li>{copy.location}</li>
        <li>{copy.languages}</li>
        <li>{copy.courses}</li>
      </ul>
      <p>{copy.instructor}</p>
    </aside>
  </section>
</Container>

<style>
  .landing-header {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 5rem;
    padding: 3.5rem 0 4.5rem;
    align-items: center;
    text-align: left;
  }
  h1 {
    font-size: var(--text-hero);
    line-height: 1.15;
    margin: 0 0 1.5rem;
    max-width: 17ch;
  }
  .subtitle {
    font-size: var(--text-md);
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0 0 2rem;
    max-width: 52ch;
  }
  .cta-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
  }
  a {
    font-size: var(--text-base);
    font-weight: 500;
  }
  .primary-cta {
    background: var(--global-color-primary);
    color: white;
    padding: 14px 24px;
    border-radius: var(--border-radius-pill);
    text-decoration: none;
  }
  .primary-cta:hover {
    background: var(--global-color-primary-dark);
  }
  .secondary-cta {
    color: var(--color-text);
    text-underline-offset: 5px;
  }
  a:focus-visible {
    outline: 3px solid var(--global-color-primary);
    outline-offset: 5px;
  }
  .course-summary {
    background: var(--global-color-light);
    border-left: 5px solid var(--global-color-primary);
    padding: 2rem;
  }
  .course-summary h2 {
    font-size: var(--text-xl);
    margin: 0 0 1.5rem;
  }
  .course-summary ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .course-summary li {
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
    font-size: var(--text-md);
    line-height: 1.5;
  }
  .course-summary li:first-child {
    padding-top: 0;
  }
  .course-summary p {
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 1.5rem 0 0;
  }
  @media (max-width: 900px) {
    .landing-header {
      gap: 2rem;
    }
  }
  @media (max-width: 700px) {
    .landing-header {
      grid-template-columns: 1fr;
      padding: 2rem 0 3rem;
    }
    .course-summary {
      padding: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    .landing-header {
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
</style>

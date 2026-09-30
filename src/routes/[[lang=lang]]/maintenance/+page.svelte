<script lang="ts">
  import { localize } from "$lib/nav";
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
  import { maintenances } from "$lib/maintenance";
  import MaintenancePlanCard from "$lib/components/maintenance_plan_card.svelte";
</script>

<svelte:head>
  <title>{$_("meta_title_maintenance")}</title>
  <meta name="description" content={$_("meta_description_maintenance")} />
  <meta name="keywords" content={$_("meta_keywords_maintenance")} />
</svelte:head>

<Container>
  <section class="maintenance">
    <header>
      <h1>{$_("maintenance_heading")}</h1>
      <p>{$_("maintenance_intro")}</p>
      <a class="enquiry" href={$localize("/contact?service=maintenance")}
        >{$_("maintenance_enquire")}</a
      >
    </header>
    <div class="plans">
      {#each maintenances as m}
        <MaintenancePlanCard
          service_type="maintenance"
          slug={m.slug}
          price={m.price}
          payment_link={m.payment_link}
        />
      {/each}
    </div>
  </section>
</Container>

<style>
  .maintenance {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 0 4rem;
    box-sizing: border-box;
    text-align: left;
  }
  header {
    max-width: 720px;
    margin-bottom: 3rem;
  }
  h1 {
    margin: 0 0 1rem;
    font-size: var(--text-2xl);
  }
  header p {
    margin: 0 0 1.5rem;
    color: var(--color-text-muted);
    font-size: var(--text-md);
    line-height: 1.6;
  }
  .enquiry {
    display: inline-block;
    background: var(--global-color-primary);
    color: white;
    padding: 0.75rem 1.25rem;
    border-radius: var(--border-radius);
    text-decoration: none;
  }
  .plans {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
  }
  a:focus-visible {
    outline: 3px solid var(--global-color-primary);
    outline-offset: 4px;
  }
  @media (max-width: 700px) {
    .plans {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
  @media (max-width: 600px) {
    .maintenance {
      padding: 2rem 20px 3rem;
    }
    h1 {
      font-size: var(--text-xl);
    }
  }
</style>

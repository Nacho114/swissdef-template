<script lang="ts">
  import { localize } from "$lib/nav";
  import Container from "$lib/components/container.svelte";
  import { _ } from "svelte-i18n";
  import { trainings } from "$lib/training";
  import TrainingPlanCard from "$lib/components/training_plan_card.svelte";
  import Shield from "virtual:icons/heroicons/shield-check";
  import Users from "virtual:icons/heroicons/users-solid";
  import Clock from "virtual:icons/heroicons/clock-solid";
  import Certificate from "virtual:icons/heroicons/document-check";
</script>

<svelte:head>
  <title>{$_("meta_title_training")}</title>
  <meta name="description" content={$_("meta_description_training")} />
  <meta name="keywords" content={$_("meta_keywords_training")} />
</svelte:head>

<Container>
  <div class="training-section">
    <!-- Header -->
    <div class="header">
      <h1>
        {$_("training_page_title")}
        <span class="gradient-text">{$_("training_page_title_highlight")}</span>
      </h1>
      <p class="subtitle">{$_("training_page_subtitle")}</p>
    </div>

    <!-- Compliance callout directly under the subtitle -->
    <div class="callout">
      <div class="callout-icon"><Shield /></div>
      <div>
        <h4>{$_("training_compliance_title")}</h4>
        <p>{$_("training_subtitle")}</p>
      </div>
    </div>

    <!-- Features as a borderless inline row -->
    <div class="features-inline">
      <div class="feature-inline">
        <div class="feature-icon"><Users /></div>
        <div>
          <h3>{$_("training_feature_small_groups_title")}</h3>
          <p>{$_("training_feature_small_groups_description")}</p>
        </div>
      </div>
      <div class="feature-inline">
        <div class="feature-icon"><Clock /></div>
        <div>
          <h3>{$_("training_feature_schedule_title")}</h3>
          <p>{$_("training_feature_schedule_description")}</p>
        </div>
      </div>
      <div class="feature-inline">
        <div class="feature-icon"><Certificate /></div>
        <div>
          <h3>{$_("training_feature_certification_title")}</h3>
          <p>{$_("training_feature_certification_description")}</p>
        </div>
      </div>
    </div>

    <!-- Training Card -->
    <div class="training-grid">
      {#each trainings as training}
        <a href={$localize(`/training/${training.slug}`)} class="product-link">
          <TrainingPlanCard
            service_type={"training"}
            slug={training.slug}
            price={training.price}
            duration={training.duration}
            hideExcluded={true}
            highlight={training.slug === "basic"}
          />
        </a>
      {/each}
    </div>
  </div>
</Container>

<style>
  .product-link {
    text-decoration: none;
  }

  .training-section {
    padding: 3rem 0;
    background: linear-gradient(to bottom, #ffffff, #f8fafc);
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: var(--text-2xl);
    font-weight: 600;
    color: var(--color-text);
    margin: 0 0 1rem;
    line-height: 1.2;
  }

  .gradient-text {
    background: linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: var(--text-md);
    color: var(--color-text-muted);
    max-width: 600px;
    margin: 0 auto;
  }

  .callout {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    width: calc(100% - 2rem);
    max-width: calc(1400px - 2rem);
    box-sizing: border-box;
    margin: 0 auto 2.5rem;
    padding: 1rem 1.5rem;
    background: var(--global-color-gray-light-bg);
    border-left: 4px solid var(--global-color-primary);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    text-align: left;
  }

  .callout-icon {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-text);
    margin-top: 0.2rem;
  }

  .callout h4 {
    margin: 0 0 0.25rem;
    font-size: var(--text-base);
  }

  .callout p {
    margin: 0;
    color: var(--color-text-muted);
    font-size: var(--text-sm);
  }

  .features-inline {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    width: calc(100% - 2rem);
    max-width: calc(1400px - 2rem);
    margin: 0 auto 3rem;
    flex-wrap: wrap;
  }

  .feature-inline {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    flex: 1 1 260px;
    max-width: 360px;
    text-align: left;
  }

  .feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--global-color-gray-light-bg);
    border-radius: var(--border-radius-lg);
    color: var(--color-text);
    flex-shrink: 0;
  }

  .feature-inline h3 {
    margin: 0 0 0.25rem;
    font-size: var(--text-base);
  }

  .feature-inline p {
    margin: 0;
    color: var(--color-text-muted);
    font-size: var(--text-sm);
  }

  .training-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    width: 100%;
    padding: 1rem;
    justify-items: center;
  }

  @media (min-width: 1400px) {
    .training-grid {
      grid-template-columns: repeat(3, 1fr);
      max-width: 1400px;
      margin: 0 auto;
    }
  }

  @media (max-width: 1200px) and (min-width: 769px) {
    .training-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: var(--text-xl);
    }

    .training-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 0;
      width: 100%;
      max-width: var(--main-mobile-container-width);
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .subtitle {
      font-size: var(--text-md);
    }

    .training-grid {
      padding: 0;
      width: var(--main-mobile-container-width);
      gap: 2rem;
    }

    .training-section {
      padding: 2rem 1rem;
    }
  }
</style>

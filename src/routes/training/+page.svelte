<script lang="ts">
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

    <div class="features">
      <div class="feature-card">
        <div class="feature-icon">
          <Users />
        </div>
        <h3>{$_("training_feature_small_groups_title")}</h3>
        <p>{$_("training_feature_small_groups_description")}</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <Clock />
        </div>
        <h3>{$_("training_feature_schedule_title")}</h3>
        <p>{$_("training_feature_schedule_description")}</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <Certificate />
        </div>
        <h3>{$_("training_feature_certification_title")}</h3>
        <p>{$_("training_feature_certification_description")}</p>
      </div>
    </div>

    <!-- Info -->
    <div class="info-banner">
      <div class="info-icon">
        <Shield />
      </div>
      <div class="info-content">
        <h4>{$_("training_compliance_title")}</h4>
        <p>{$_("training_subtitle")}</p>
      </div>
    </div>

    <!-- Training Card -->
    <div class="training-grid">
      {#each trainings as training}
        <a href="/training/{training.slug}" class="product-link">
          <TrainingPlanCard
            service_type={"training"}
            slug={training.slug}
            price={training.price}
            duration={training.duration}
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
    padding: 6rem 0;
    background: linear-gradient(to bottom, #ffffff, #f8fafc);
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    color: #1d1d1f;
    margin: 0 0 1rem;
    line-height: 1.2;
  }

  .gradient-text {
    background: linear-gradient(135deg, #007aff, #5856d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .feature-card {
    background: white;
    padding: 2rem;
    border-radius: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .feature-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: linear-gradient(
      135deg,
      rgba(0, 122, 255, 0.1),
      rgba(88, 86, 214, 0.1)
    );
    border-radius: 1rem;
    margin-bottom: 1rem;
    color: #007aff;
  }

  .feature-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: #1d1d1f;
  }

  .feature-card p {
    font-size: 1rem;
    color: #6b7280;
    margin: 0;
  }

  .info-banner {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: white;
    border-radius: 1.5rem;
    padding: 2rem;
    margin-bottom: 4rem;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
  }

  .info-banner:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .info-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: linear-gradient(
      135deg,
      rgba(0, 122, 255, 0.1),
      rgba(88, 86, 214, 0.1)
    );
    border-radius: 1rem;
    color: #007aff;
    flex-shrink: 0;
  }

  .info-content h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1d1d1f;
    margin: 0 0 0.5rem;
  }

  .info-content p {
    font-size: 1rem;
    color: #6b7280;
    line-height: 1.6;
    margin: 0;
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
    .training-section {
      padding: 3rem 0;
    }

    h1 {
      font-size: 2.5rem;
    }

    .features {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .info-banner {
      flex-direction: column;
      text-align: center;
      padding: 1.5rem;
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
    .header {
      margin-bottom: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .feature-card,
    .info-banner {
      border-radius: 1rem;
      padding: 1.5rem;
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

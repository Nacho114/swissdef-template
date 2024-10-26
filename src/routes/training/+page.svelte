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
      <div class="badge">
        <span>{$_("section_general_training")}</span>
      </div>
      <h1>Professional <span class="gradient-text">First Aid Training</span></h1>
      <p class="subtitle">Expert-led training sessions to prepare your team for emergency situations</p>
    </div>

    <!-- Features Section -->
    <div class="features">
      <div class="feature-card">
        <div class="feature-icon">
          <Users />
        </div>
        <h3>Small Groups</h3>
        <p>Maximum attention and hands-on practice</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <Clock />
        </div>
        <h3>Flexible Schedule</h3>
        <p>Training sessions that fit your timeline</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <Certificate />
        </div>
        <h3>Certification</h3>
        <p>Official Swiss certification upon completion</p>
      </div>
    </div>

    <!-- Info Banner -->
    <div class="info-banner">
      <div class="info-icon">
        <Shield />
      </div>
      <div class="info-content">
        <h4>Swiss Compliance</h4>
        <p>{$_("training_subtitle")}</p>
      </div>
    </div>

    <!-- Training Cards Grid -->
    <div class="training-grid">
      {#each trainings as training}
        <a href="/training/{training.slug}" class="training-card-link">
          <div class="training-card">
            <TrainingPlanCard
              service_type={"training"}
              slug={training.slug}
              price={training.price}
              duration={training.duration}
            />
          </div>
        </a>
      {/each}
    </div>
  </div>
</Container>

<style>
  .training-section {
    padding: 6rem 0;
    background: linear-gradient(to bottom, #ffffff, #f8fafc);
  }

  /* Header Styles */
  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(0, 122, 255, 0.1);
    border: 1px solid rgba(0, 122, 255, 0.2);
    border-radius: 2rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(8px);
  }

  .badge span {
    background: linear-gradient(135deg, #007AFF, #5856D6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    color: #1d1d1f;
    margin: 0 0 1rem;
    line-height: 1.2;
  }

  .gradient-text {
    background: linear-gradient(135deg, #007AFF, #5856D6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Features Section */
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
    background: linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(88, 86, 214, 0.1));
    border-radius: 1rem;
    margin-bottom: 1rem;
    color: #007AFF;
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

  /* Info Banner */
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
    background: linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(88, 86, 214, 0.1));
    border-radius: 1rem;
    color: #007AFF;
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

  /* Training Grid */
  .training-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .training-card-link {
    text-decoration: none;
    color: inherit;
  }

  .training-card {
    height: 100%;
    transition: all 0.3s ease;
    background: white;
    border-radius: 1.5rem;
    border: 1px solid #e5e7eb;
    overflow: hidden;
  }

  .training-card:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 1024px) {
    .features {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .training-section {
      padding: 4rem 0;
    }

    h1 {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.125rem;
    }

    .info-banner {
      flex-direction: column;
      text-align: center;
      padding: 1.5rem;
    }

    .training-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>

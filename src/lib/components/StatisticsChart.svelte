<script lang="ts">
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  $: with_aed_label = $_("section_home_statistics_chart_label_with_aed");
  $: without_aed_label = $_("section_home_statistics_chart_label_without_aed");

  let chart;

  onMount(() => {
    const context = document.getElementById("statisticsChart").getContext("2d");
    chart = new Chart(context, {
      type: "line",
      data: {
        labels: Array.from({ length: 11 }, (_, i) => i),
        datasets: [
          {
            label: with_aed_label,
            data: [100, 95, 90, 88, 85, 84, 82, 80, 79, 78, 77],
            borderColor: "#2563EB", // Darker blue
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
          },
          {
            label: without_aed_label,
            data: [100, 88, 76, 65, 55, 45, 38, 30, 25, 20, 15],
            borderColor: "#DC2626", // Darker red
            backgroundColor: "rgba(220, 38, 38, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: "#4a5568",
            },
            title: {
              display: true,
              text: $_("section_home_statistics_chart_y_axis"),
              color: "#1a1a1a",
              font: {
                size: 14,
                weight: '500'
              }
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#4a5568",
            },
            title: {
              display: true,
              text: $_("section_home_statistics_chart_x_axis"),
              color: "#1a1a1a",
              font: {
                size: 14,
                weight: '500'
              }
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            align: "center",
            labels: {
              usePointStyle: true,
              padding: 20,
              color: "#1a1a1a",
              font: {
                family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                size: 13,
                weight: '500'
              }
            }
          },
        },
      },
    });
  });
</script>

<div class="statistics-section">
  <div class="statistics-header">
    <span class="badge">Statistics</span>
    <h2>{$_("section_home_statistics_title")}</h2>
    <p class="subtitle">{$_("section_home_statistics_subtitle")}</p>
  </div>

  <div class="chart-container">
    <canvas id="statisticsChart" />
  </div>

  <div class="info-grid">
    <div class="info-card">
      <span class="info-number">1</span>
      <h3>{$_("section_home_statistics_info_one_title")}</h3>
      <p>{$_("section_home_statistics_info_one_subtitle")}</p>
    </div>
    <div class="info-card">
      <span class="info-number">3</span>
      <h3>{$_("section_home_statistics_info_two_title")}</h3>
      <p>{$_("section_home_statistics_info_two_subtitle")}</p>
    </div>
    <div class="info-card">
      <span class="info-number">7</span>
      <h3>{$_("section_home_statistics_info_three_title")}</h3>
      <p>{$_("section_home_statistics_info_three_subtitle")}</p>
    </div>
    <div class="info-card">
      <span class="info-number">90</span>
      <h3>{$_("section_home_statistics_info_four_title")}</h3>
      <p>{$_("section_home_statistics_info_four_subtitle")}</p>
    </div>
  </div>

  <div class="cta-section">
    <p>{$_("section_home_statistics_footer")}</p>
  </div>
</div>

<style>
  .statistics-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .statistics-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(0, 122, 255, 0.1);
    color: #007AFF;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .statistics-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 1rem;
    background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
    color: #1a1a1a;
  }

  .subtitle {
    font-size: 1.125rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .chart-container {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    height: 400px;
    margin: 3rem 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
  }

  .info-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    color: #1a1a1a;
  }

  .info-card:hover {
    transform: translateY(-5px);
  }

  .info-number {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #007AFF;
    margin-bottom: 1rem;
  }

  .info-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #1a1a1a;
  }

  .info-card p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  .cta-section {
    text-align: center;
    margin-top: 4rem;
    padding: 3rem;
    background: linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, rgba(0, 122, 255, 0.1) 100%);
    border-radius: 1rem;
  }

  .cta-section p {
    font-size: 1.125rem;
    color: #1a1a1a;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .statistics-section {
      padding: 2rem 1rem;
    }

    .statistics-header h2 {
      font-size: 2rem;
    }

    .chart-container {
      height: 300px;
      padding: 1rem;
    }

    .info-grid {
      gap: 1rem;
    }

    .info-card {
      padding: 1.5rem;
    }

    .cta-section {
      padding: 2rem 1rem;
    }
  }
</style>

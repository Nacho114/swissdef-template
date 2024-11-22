<script lang="ts">
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  import annotationPlugin from 'chartjs-plugin-annotation';

  Chart.register(annotationPlugin);

  $: with_aed_label = $_("section_home_statistics_chart_label_with_aed");
  $: without_aed_label = $_("section_home_statistics_chart_label_without_aed");

  let chart;
  let canvas: HTMLCanvasElement;

  onMount(() => {
    const context = canvas?.getContext("2d");
    if (!context) return;
    
    chart = new Chart(context, {
      type: "line",
      data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [
          {
            label: with_aed_label,
            data: [99, 90, 85, 80, 75, 73, 70, 68, 67, 66, 65],
            borderColor: "#22C55E",
            backgroundColor: "rgba(34, 197, 94, 0.15)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 2.5,
            pointHoverRadius: 3.5,
            pointBackgroundColor: "#FFFFFF",
            pointBorderColor: "#22C55E",
            pointBorderWidth: 1.5,
          },
          {
            label: without_aed_label,
            data: [99, 70, 45, 25, 15, 10, 7, 5, 3, 2, 1],
            borderColor: "#DC2626",
            backgroundColor: "rgba(220, 38, 38, 0.15)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 2.5,
            pointHoverRadius: 3.5,
            pointBackgroundColor: "#FFFFFF",
            pointBorderColor: "#DC2626",
            pointBorderWidth: 1.5,
          }
        ],
      },
      options: {
        layout: {
          padding: {
            top: 15,
            right: 15,
            bottom: 10,
            left: 10
          }
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            grid: {
              display: true,
              color: "rgba(0, 0, 0, 0.06)",
              drawBorder: false,
            },
            border: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: "#4a5568",
              font: {
                size: 14,
                weight: "bold"
              },
              padding: 8,
              stepSize: 20,
              callback: function(value) {
                if (value >= 0 && value <= 100) {
                  return value + '%';
                }
                return '';
              }
            },
            title: {
              display: true,
              text: $_("section_home_statistics_chart_y_axis"),
              color: "#1a1a1a",
              font: {
                size: 16,
                weight: "bold"
              },
              padding: {
                bottom: 20
              }
            },
          },
          x: {
            offset: false,
            grid: {
              display: false,
            },
            border: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: "#4a5568",
              font: {
                size: 14,
                weight: "bold"
              },
              padding: 5
            },
            title: {
              display: true,
              text: $_("section_home_statistics_chart_x_axis"),
              color: "#1a1a1a",
              font: {
                size: 16,
                weight: "bold"
              },
              padding: {
                top: 20
              }
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            position: "top",
            align: "center",
            labels: {
              usePointStyle: true,
              padding: 40,
              boxWidth: 8,
              boxHeight: 8,
              color: "#1a1a1a",
              font: {
                family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                size: 14,
                weight: "bold"
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  });
</script>

<div class="statistics-section">
  <div class="statistics-header">
    <h2>{$_("section_home_statistics_title")}</h2>
    <p class="subtitle">{$_("section_home_statistics_subtitle")}</p>
  </div>

  <div class="chart-container">
    <canvas bind:this={canvas} />
  </div>

  <div class="stats-timeline">
    <div class="timeline-item">
      <div class="time-marker">1</div>
      <div class="timeline-content">
        <h3>{$_("section_home_statistics_info_one_title")}</h3>
        <p>{$_("section_home_statistics_info_one_subtitle")}</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="time-marker">3</div>
      <div class="timeline-content">
        <h3>{$_("section_home_statistics_info_two_title")}</h3>
        <p>{$_("section_home_statistics_info_two_subtitle")}</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="time-marker">7</div>
      <div class="timeline-content">
        <h3>{$_("section_home_statistics_info_three_title")}</h3>
        <p>{$_("section_home_statistics_info_three_subtitle")}</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="time-marker">90</div>
      <div class="timeline-content">
        <h3>{$_("section_home_statistics_info_four_title")}</h3>
        <p>{$_("section_home_statistics_info_four_subtitle")}</p>
      </div>
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
    padding: 6rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .statistics-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .statistics-header h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0 0 1rem;
    background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .chart-container {
    background: white;
    border-radius: 24px;
    padding: 2.5rem;
    height: 450px;
    margin: 3rem 0 5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .stats-timeline {
    position: relative;
    padding: 2rem 0;
  }

  .stats-timeline::before {
    content: '';
    position: absolute;
    left: 2.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, 
      rgba(0,0,0,0.05) 0%,
      rgba(0,0,0,0.1) 15%,
      rgba(0,0,0,0.1) 85%,
      rgba(0,0,0,0.05) 100%
    );
  }

  .timeline-item {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    position: relative;
  }

  .timeline-item:last-child {
    margin-bottom: 0;
  }

  .time-marker {
    width: 5rem;
    height: 5rem;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #2563EB;
    box-shadow: 0 8px 16px rgba(37, 99, 235, 0.1);
    border: 2px solid rgba(37, 99, 235, 0.2);
    z-index: 1;
    transition: transform 0.3s ease;
  }

  .timeline-item:hover .time-marker {
    transform: scale(1.1);
  }

  .timeline-content {
    flex: 1;
    padding: 1.5rem 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease;
  }

  .timeline-item:hover .timeline-content {
    transform: translateX(10px);
  }

  .timeline-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: #1a1a1a;
  }

  .timeline-content p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  .timeline-item.highlight .time-marker {
    background: #2563EB;
    color: white;
    border-color: #2563EB;
  }

  .cta-section {
    margin-top: 5rem;
    text-align: center;
    padding: 3rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(37, 99, 235, 0.06) 100%);
    border-radius: 24px;
  }

  .cta-section p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .statistics-section {
      padding: 3rem 1rem;
    }

    .statistics-header h2 {
      font-size: 2rem;
    }

    .chart-container {
      height: 300px;
      padding: 1rem;
      margin: 2rem 0 3rem;
      border-radius: 16px;
    }

    .stats-timeline::before {
      left: 1.5rem;
    }

    .time-marker {
      width: 3rem;
      height: 3rem;
      font-size: 1rem;
    }

    .timeline-item {
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .timeline-content {
      padding: 1rem;
    }

    .cta-section {
      margin-top: 3rem;
      padding: 2rem 1rem;
    }

    .cta-section p {
      font-size: 1.25rem;
    }
  }
</style>

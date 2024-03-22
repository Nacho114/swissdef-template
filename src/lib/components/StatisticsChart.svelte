<script lang="ts">
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let chart;

  onMount(() => {
    const context = document.getElementById("statisticsChart").getContext("2d");
    chart = new Chart(context, {
      type: "line",
      data: {
        labels: Array.from({ length: 11 }, (_, i) => i),
        datasets: [
          {
            label: "Without AED",
            data: [100, 88, 76, 65, 55, 45, 38, 30, 25, 20, 15],
            borderColor: "#FF6384",
            borderWidth: 2,
            fill: false,
            tension: 0.4,
          },
          {
            label: "With AED",
            data: [100, 95, 90, 88, 85, 84, 82, 80, 79, 78, 77],
            borderColor: "#36A2EB",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              display: false,
            },
            ticks: {
              color: "#9E9E9E",
            },
            title: {
              display: true,
              text: $_("section_home_statistics_chart_y_axis"),
              color: "#9E9E9E",
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#9E9E9E",
            },
            title: {
              display: true,
              text: $_("section_home_statistics_chart_x_axis"),
              color: "#9E9E9E",
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  });
  // Hack to supress unused var
  console.log(chart);
</script>

<div class="statistics-layout">
  <div class="statistics-header">
    <h1>
      {$_("section_home_statistics_title")}
    </h1>
    <p>
      {$_("section_home_statistics_subtitle")}
    </p>
  </div>

  <div class="chart-container">
    <canvas id="statisticsChart"></canvas>
  </div>

  <div class="info-columns">
    <div class="info-column">
      <h3>
        {$_("section_home_statistics_info_one_title")}
      </h3>
      <p>
        {$_("section_home_statistics_info_one_subtitle")}
      </p>
    </div>
    <div class="info-column">
      <h3>
        {$_("section_home_statistics_info_two_title")}
      </h3>
      <p>
        {$_("section_home_statistics_info_two_subtitle")}
      </p>
    </div>
    <div class="info-column">
      <h3>
        {$_("section_home_statistics_info_three_title")}
      </h3>
      <p>
        {$_("section_home_statistics_info_three_subtitle")}
      </p>
    </div>
    <div class="info-column">
      <h3>
        {$_("section_home_statistics_info_four_title")}
      </h3>
      <p>
        {$_("section_home_statistics_info_four_subtitle")}
      </p>
    </div>
  </div>

  <div class="cta-container">
    <p>
      Don't leave it to chance. Swiss Defibrillator offers a solution that can
      be the difference between life and death. Equip your space, be it home,
      office, or car. Invest in life. Invest in an AED.
    </p>
  </div>
</div>

<style>
  .statistics-layout {
    max-width: 1200px;
    margin: auto;
    font-family: "Poppins", sans-serif;
    color: #333;
  }

  .statistics-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .statistics-header h1 {
    color: #222;
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .statistics-header p {
    color: #555;
    font-size: 1.1rem;
    max-width: 80%;
    margin: auto;
  }

  .chart-container {
    position: relative;
    height: 400px;
    margin-bottom: 3rem;
  }

  .info-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .info-column {
    padding: 1.5rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .info-column:hover {
    transform: translateY(-10px);
  }

  .info-column h3 {
    font-size: 1.4rem;
    color: #222;
    margin-bottom: 1rem;
  }

  .info-column p {
    font-size: 1.1rem;
    color: #555;
  }

  .cta-container {
    background-color: #d45a4d;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: 3rem;
    font-size: 1.1rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>

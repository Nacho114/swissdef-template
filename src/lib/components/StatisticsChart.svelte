<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let chart;

  onMount(() => {
    const context = document.getElementById('statisticsChart').getContext('2d');
    chart = new Chart(context, {
      type: 'line',
      data: {
        labels: [...Array(11).keys()], // [0, 1, ..., 10]
        datasets: [
          {
            label: 'Without AED',
            data: [100, 88, 76, 65, 55, 45, 38, 30, 25, 20, 15], 
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            tension: 0.1
          },
          {
            label: 'With AED',
            data: [100, 95, 90, 88, 85, 84, 82, 80, 79, 78, 77], 
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            fill: true,
            tension: 0.1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        },
        responsive: true,
        maintainAspectRatio: false
      },
    });
  });
</script>

<div class="statistics-layout">
  <div class="statistics-header">
    <h1>Statistics</h1>
    <p>Sudden Cardiac Arrest (SCA) strikes swiftly, claiming more lives than many cancers. Here's what you should know about SCA in Switzerland</p>
  </div>

  <div class="chart-container">
    <canvas id="statisticsChart"></canvas>
  </div>

  <div class="info-columns">
    <div class="info-column">
      <h3>Every Hour:</h3>
      <p>One person faces a life-threatening SCA.</p>
    </div>
    <div class="info-column">
      <h3>First 3 Minutes:</h3>
      <p>Critical for survival. Without aid, irreversible brain damage can occur.</p>
    </div>
    <div class="info-column">
      <h3>Ambulance Response:</h3>
      <p>Vital, but often not swift enough. Every minute delay decreases survival by 7-10%.</p>
    </div>
    <div class="info-column">
      <h3>AED Impact:</h3>
      <p>Using an Automated External Defibrillator within the first few minutes boosts survival rates up to 90%.</p>
    </div>
  </div>

  <div class="cta-container">
    <p>Don't leave it to chance. Swiss Defibrillator offers a solution that can be the difference between life and death. Equip your space, be it home, office, or car. Invest in life. Invest in an AED.</p>
  </div>
</div>

<style>
  .statistics-layout {
    max-width: 1200px;
    margin: auto;
    font-family: 'Arial', sans-serif;
  }

  .statistics-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .statistics-header h1 {
    color: #333;
    font-size: 2.5rem;
  }

  .statistics-header p {
    color: #666;
    font-size: 1rem;
    margin-top: 1rem;
  }

  .chart-container {
    position: relative;
    height: 400px; 
  }

  .info-columns {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .info-column {
    flex: 1;
    padding: 0 1rem;
  }

  .info-column h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .info-column p {
    font-size: 1rem;
    color: #666;
  }

  .cta-container {
    background-color: #ff9900; 
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .info-columns {
      flex-direction: column;
    }

    .info-column {
      margin-bottom: 1rem;
    }
  }

  
</style>

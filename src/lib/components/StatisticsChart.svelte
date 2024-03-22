<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let chart;

  onMount(() => {
    const context = document.getElementById('statisticsChart').getContext('2d');
    chart = new Chart(context, {
      type: 'line',
      data: {
        labels: Array.from({length: 11}, (_, i) => i), 
        datasets: [
          {
            label: 'Without AED',
            data: [100, 88, 76, 65, 55, 45, 38, 30, 25, 20, 15], 
            borderColor: '#FF6384',
            borderWidth: 2,
            fill: false,
            tension: 0.4 
          },
          {
            label: 'With AED',
            data: [100, 95, 90, 88, 85, 84, 82, 80, 79, 78, 77], 
            borderColor: '#36A2EB',
            backgroundColor: 'rgba(54, 162, 235, 0.2)', 
            borderWidth: 2,
            fill: true,
            tension: 0.4 
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
              color: '#9E9E9E' 
            }
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#9E9E9E' 
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom', 
          }
        },
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
  font-family: 'Poppins', sans-serif; 
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
  background-color: #007BFF; 
  color: white;
  text-align: center;
  padding: 1.5rem; 
  margin-top: 3rem;
  font-size: 1.1rem;
  border-radius: 12px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

</style>

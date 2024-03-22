<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chart;
  
    onMount(() => {
      const ctx = document.getElementById('scaChart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: 11 }, (_, i) => i * 1),
          datasets: [
            {
              label: 'Without AED',
              data: [100, 90, 75, 45, 25, 15, 10, 5, 3, 2, 1],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1,
            },
            {
              label: 'With AED',
              data: [100, 95, 85, 75, 65, 55, 50, 45, 40, 35, 30],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              borderWidth: 1,
            }
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  </script>
  
  <div class="statistics-section">
    <h2>Statistics</h2>
    <p>Sudden Cardiac Arrest (SCA) strikes swiftly, claiming more lives than many cancers. Here's what you should know about SCA in Switzerland</p>
    <div class="chart-container">
      <canvas id="scaChart"></canvas>
    </div>
    <div class="info-text">
      <div>
        <h3>Every Hour:</h3>
        <p>One person faces a life-threatening SCA.</p>
      </div>
      <div>
        <h3>First 3 Minutes:</h3>
        <p>Critical for survival. Without aid, irreversible brain damage can occur.</p>
      </div>
      <div>
        <h3>Ambulance Response:</h3>
        <p>Vital, but often not swift enough. Every minute delay decreases survival by 7-10%</p>
      </div>
      <div>
        <h3>AED Impact:</h3>
        <p>Using an Automated External Defibrillator within the first few minutes boosts survival rates up to 90%.</p>
      </div>
    </div>
    <div class="cta">
      <p>Don't leave it to chance. Swiss Defibrillator offers a solution that can be the difference between life and death. Equip your space, be it home, office, or car. Invest in life. Invest in an AED.</p>
    </div>
  </div>
  
  <style>
    .statistics-section {
      max-width: 600px;
      margin: auto;
      font-family: Arial, sans-serif;
    }
  
    .chart-container {
      width: 100%;
      margin-bottom: 20px;
    }
  
    .info-text > div {
      margin-bottom: 10px;
    }
  
    .info-text h3 {
      font-size: 18px;
      color: #333;
      margin: 0;
    }
  
    .info-text p {
      font-size: 16px;
      color: #666;
      margin: 0;
    }
  
    .cta p {
      font-size: 16px;
      background: #ffcc00;
      padding: 10px;
      border-radius: 4px;
    }
  </style>
  
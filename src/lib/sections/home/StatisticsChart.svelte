<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto/auto.js';
  
    onMount(() => {
      // Ensuring this runs only on the client side
      if (typeof window !== 'undefined') {
        const ctx = document.getElementById('scaChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar', // A simple bar chart to start with
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    });
  </script>
  
  <div class="chart-container">
    <canvas id="scaChart"></canvas>
  </div>
  
  <style>
    .chart-container {
      position: relative;
      margin: auto;
      height: 40vh;
      width: 80vw;
    }
  </style>
  
<!-- StatisticsChart.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { Chart, registerables } from 'chart.js';
  
    Chart.register(...registerables);
  
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
              data: [100, 88, 76, 65, 55, 45, 38, 30, 25, 20, 15], // Replace with your data
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
              tension: 0.1
            },
            {
              label: 'With AED',
              data: [100, 95, 90, 88, 85, 84, 82, 80, 79, 78, 77], // Replace with your data
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
  
  <canvas id="statisticsChart" />
  
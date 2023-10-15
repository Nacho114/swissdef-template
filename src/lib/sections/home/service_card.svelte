<script lang="ts">
    export let src: string;
    export let alt: string;
    export let title: string;
    export let summary: string;
</script>

<div class="card" >
    <img src={src} alt={alt}>
    <h3 class="card-title">{title}</h3>
    <p class="card-summary">{summary}</p>
</div>

<style>
  .card {
    flex: 1;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* To ensure the summary text doesn't overflow */
    cursor: pointer;
  }

  .card img {
    width: 90%; /* Increase from 90% to 95% */
    height: auto;
  }

  .card-title {
    position: absolute;
    top: 35%; /* Adjusted position to make space for summary */
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.7vw;
    transition: top 0.3s; /* Smooth transition for title position */
  }

  .card-summary {
    position: absolute;
    bottom: 0; /* Align to the bottom of the card */
    left: 50%;
    transform: translateX(-50%) translateY(100%); /* Initially positioned just below the card */
    color: white;
    font-size: 1.4vw;
    opacity: 0; 
    transition: transform 0.3s, opacity 0.3s; /* Transition for both transform and opacity */
  }


  .card:hover .card-title {
    top: 30%; /* Move title slightly up on hover */
  }

  .card:hover .card-summary {
    transform: translateX(-50%) translateY(0); /* On hover, bring the summary into view */
    opacity: 1; /* Show summary on hover */
  }
</style>


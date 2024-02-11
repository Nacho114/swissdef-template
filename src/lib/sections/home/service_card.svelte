<script lang="ts">
  export let src: string;
  export let alt: string;
  export let title: string;
  export let summary: string;
</script>

<div class="card">
  <img {src} {alt} />
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
    position: relative;
    z-index: 1;
  }

  .card::before {
    width: 90%; /* Increase from 90% to 95% */
    z-index: 2;
    content: ""; /* empty content */
    position: absolute; /* absolute position */
    top: 0;
    left: 1vw;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); /* semi-transparent black overlay */
    opacity: 0; /* initial opacity */
    transition: opacity 0.3s; /* transition effect */
    pointer-events: none; /* so that the overlay doesn't interfere with mouse events */
  }

  .card:hover::before {
    opacity: 1; /* full opacity on hover */
  }
  .card-title {
    position: absolute;
    top: 35%; /* Adjusted position to make space for summary */
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.3rem;
    transition: top 0.3s; /* Smooth transition for title position */
  }

  .card-title {
    z-index: 3;
  }

  .card-summary {
    z-index: 3;
    position: absolute;
    bottom: 0; /* Align to the bottom of the card */
    left: 50%;
    transform: translateX(-50%) translateY(100%); /* Initially positioned just below the card */
    color: white;
    font-size: 1.1rem;
    opacity: 0;
    transition:
      transform 0.3s,
      opacity 0.3s; /* Transition for both transform and opacity */
  }

  .card:hover .card-title {
    top: 30%; /* Move title slightly up on hover */
  }

  .card:hover .card-summary {
    transform: translateX(-50%) translateY(0); /* On hover, bring the summary into view */
    opacity: 1; /* Show summary on hover */
  }
</style>

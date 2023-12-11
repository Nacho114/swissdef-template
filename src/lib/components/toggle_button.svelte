<script lang="ts">
  export let button1: string = 'Accessories'; // Default button 1 text
  export let button2: string = 'Defibrillators'; // Default button 2 text
  let selected: string = button1; // Initialize selected button with button1
</script>

<div class="button-group">
  <button
    on:click={() => (selected = button1)}
    class:selected={selected === button1}
  >
    {button1}
  </button>
  <button
    on:click={() => (selected = button2)}
    class:selected={selected === button2}
  >
    {button2}
  </button>
</div>

<style>
  .button-group {
    border: 2px solid black;
    border-radius: 4px;
    display: inline-flex;
  }

  button {
    margin: 0.2rem;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
    transition: background-color 0.3s;
  }

  button.selected {
    background-color: black;
    color: white;
  }

</style>


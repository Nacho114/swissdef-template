<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let button1: string;
  export let button2: string;

  let selected: string = button1; // Initialize selected button with button1

  // Reactive statement to reset the selected button if its name changes
  $: if (selected !== button1 && selected !== button2) {
    selected = button1;
  }

  function selectButton(button: string) {
    selected = button;
    dispatch("toggleChange", selected);
  }

  //function selectButton(button: string) {
  //selected = button;
  //dispatch('toggleChange', selected);
  //}
</script>

<div class="button-group">
  <button
    on:click={() => selectButton(button1)}
    class:selected={selected === button1}
  >
    {button1}
  </button>
  <button
    on:click={() => selectButton(button2)}
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

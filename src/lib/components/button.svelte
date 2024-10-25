<script>
  export let isOutlined = false;
  export let isBlackColor = false; // New prop to toggle blue color
  export let fullWidth = false; // Add this line for new prop
</script>

<button
  on:click
  class="appointment-btn {isOutlined ? 'outlined' : ''} {isBlackColor
    ? 'black-color'
    : ''} {fullWidth ? 'full-width' : 'auto-width'}"
>
  <div class="button-content">
    <slot />
  </div>
</button>

<style>
  .appointment-btn.full-width {
    width: 100%;
  }

  .appointment-btn.auto-width {
    width: auto; /* Or whatever default width you prefer */
    display: inline-block; /* Adjust as necessary */
  }

  .appointment-btn {
    background-color: #d45a4d;
    color: #ffffff;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    display: inline-block;
    text-align: center;
    font-weight: 500;
    white-space: nowrap;
  }

  .appointment-btn:hover {
    background-color: #bf4e44;
  }

  .appointment-btn:focus {
    outline: none;
  }

  /* Styles for black-colored version of the button */
  .appointment-btn.black-color {
    background-color: black; /* Blue color */
    border-color: black;
    border: 2px solid black;
  }

  .appointment-btn.black-color:hover {
    background-color: white; /* Darker shade for hover state */
    border: 2px solid black;
    color: black;
  }

  /* Styles for outlined version of the button */
  .appointment-btn.outlined {
    background-color: transparent;
    color: #000000; /* Black text for the outlined button */
    border: 2px solid #d45a4d;
  }

  .appointment-btn.outlined:hover {
    background-color: #d45a4d;
    color: #ffffff;
  }

  .button-content {
    display: flex; /* Enables flexbox */
    justify-content: center; /* Horizontally center the items in the container */
    align-items: center;
  }
</style>

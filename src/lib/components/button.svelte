<script>
  export let isOutlined = false;
  export let isBlueColor = false; // New prop to toggle blue color
  export let fullWidth = false; // Add this line for new prop
</script>

<button
  class="appointment-btn {isOutlined ? 'outlined' : ''} {isBlueColor
    ? 'blue-color'
    : ''} {fullWidth ? 'full-width' : 'auto-width'}"
>
  <slot />
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

  /* Styles for blue-colored version of the button */
  .appointment-btn.blue-color {
    background-color: var(--global-color-blue); /* Blue color */
    border-color: var(
      --global-color-blue
    ); /* Corresponding border color if needed */
  }

  .appointment-btn.blue-color:hover {
    background-color: #4266b2; /* Darker shade for hover state */
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
</style>

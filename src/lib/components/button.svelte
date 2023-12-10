<script>
  export let isOutlined = false;
</script>

<button class="appointment-btn {isOutlined ? 'outlined' : ''}">
  <slot />
</button>

<style>
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

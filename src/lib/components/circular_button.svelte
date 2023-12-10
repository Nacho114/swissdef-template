<script>
  export let link = "#";
  export let bgColor = "#D32F2F"; // default color
  export let scale = "1"; // By default, it's the normal size
</script>

<a
  href={link}
  class="circular-button"
  style="background-color: {bgColor}; transform: scale({scale})"
>
  <slot />
</a>

<style>
  .circular-button {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.6vw;
    height: 2.6vw;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
</style>

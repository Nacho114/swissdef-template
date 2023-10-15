<script>
  export let style = '';
</script>

<div class="container" style={style}>
  <slot />
</div>

<style>
  .container {
    padding-left: var(--main-padding-left);
    padding-right: var(--main-padding-right);
  }
</style>

<script lang="ts">
  export let style = "";
</script>

<div class="container" {style}>
  <slot />
</div>

<style>
  .container {
    padding-left: var(--main-padding-left);
    padding-right: var(--main-padding-right);

    /* Center content for mobile */
    @media screen and (max-width: 600px) {
      padding-left: 0;
      padding-right: 0;
      text-align: center; /* Centers text and inline elements */
      display: flex;
      flex-direction: column;
      align-items: center; /* Centers block-level elements */
    }
  }
</style>

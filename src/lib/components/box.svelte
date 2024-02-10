<div class="box">
  <slot/>
</div>

<style>
  .box {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 0; 
    width: auto;
  }

  @media (max-width: 600px) {
    .box {
      width: 100%;
    }
  }
</style>

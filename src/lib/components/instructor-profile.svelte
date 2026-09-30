<script lang="ts">
  import { page } from "$app/stores";
  import { getEnquiryCopy } from "$lib/enquiry-copy";
  $: copy = getEnquiryCopy($page.params.lang);
</script>

<section class="instructor" aria-labelledby="instructor-title">
  <h2 id="instructor-title">{copy.profileTitle}</h2>
  <p>{copy.profile}</p>
  <p>{copy.coverage}</p>
</section>

<style>
  .instructor {
    border-top: 3px solid var(--global-color-primary);
    padding-top: 1.25rem;
  }
  h2 {
    margin: 0 0 1rem;
    font-size: var(--text-lg);
    line-height: 1.3;
  }
  p {
    line-height: 1.65;
    color: var(--color-text-muted);
  }
</style>

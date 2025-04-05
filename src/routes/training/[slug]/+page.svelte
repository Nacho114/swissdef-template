<script lang="ts">
  import MdInfoPage from "$lib/components/md_info_page.svelte";
  import ChevronRight from "virtual:icons/gg/chevron-right";
  import { locale } from 'svelte-i18n';
  import { _ } from "svelte-i18n";
  import Button from "$lib/components/button.svelte";
  export let data;
  $: file_name = `/markdown/training/${data.data.slug}_${$locale || 'en'}.md`;
</script>

<div class="book-now-container">
  <a href="/contact" class="book-now-link">
    <Button id="book-training-btn" fullWidth={true}>
      {$_("section_general_book")}
      <ChevronRight />
    </Button>
  </a>
</div>

<MdInfoPage {file_name} />

<style>
  .book-now-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .book-now-link {
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 600px) {
    .book-now-link {
      max-width: 250px;
    }
  }
</style>

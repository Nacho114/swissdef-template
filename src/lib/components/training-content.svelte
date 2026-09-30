<script lang="ts">
  import { page } from "$app/stores";
  import { localize } from "$lib/nav";
  import { getTrainingCopy, type BlsCourse } from "$lib/training-copy";
  import { ContactInfo } from "$lib/info";
  import { trainings } from "$lib/training";
  import { _ } from "svelte-i18n";
  export let course: BlsCourse | undefined = undefined;
  const getCourse = (id: BlsCourse) =>
    trainings.find((item) => item.slug === id)!;
  $: copy = getTrainingCopy($page.params.lang);
  $: selected = course ? copy.courses[course] : undefined;
  $: courseIds = course ? [course] : (["basic", "lite"] as BlsCourse[]);
</script>

<div class="training-content">
  <header>
    {#if course}<a class="back" href={$localize("/training")}>{copy.back}</a
      >{/if}
    <h1>{selected?.name ?? copy.title}</h1>
    <p class="intro">{selected?.audience ?? copy.intro}</p>
    {#if course}<p>{copy.intro}</p>{/if}
    <div class="actions header-actions">
      <a
        class="button"
        href={$localize(
          `/contact?service=training${course ? `&course=${course}` : ""}`,
        )}>{copy.quote}</a
      >
      <a href={`mailto:${ContactInfo.email}`}>{ContactInfo.email}</a>
      <a href={`tel:${ContactInfo.phoneNumber.replace(/\s/g, "")}`}
        >{ContactInfo.phoneNumber}</a
      >
    </div>
  </header>

  <section aria-label={copy.choose}>
    {#if !course}<h2>{copy.choose}</h2>{/if}
    <div class:single={course} class="courses">
      {#each courseIds as id}
        {@const info = copy.courses[id]}
        {@const data = getCourse(id)}
        <article class:complet={id === "basic"}>
          {#if !course}<h3>{info.name}</h3>
            <p>{info.audience}</p>{/if}
          <div class="facts">
            <p class="duration">{data.duration} {copy.hours}</p>
            <p class="price">CHF {data.price} <span>{copy.groupPrice}</span></p>
            <p>{copy.groupSize}</p>
            <p>{copy.certificate}</p>
          </div>
          {#if course}<h2>{copy.learn}</h2>{/if}
          <ul>
            {#each info.skills as skill}<li>{skill}</li>{/each}
          </ul>
          <div class="actions">
            <a
              class="button"
              href={$localize(`/contact?service=training&course=${id}`)}
              >{copy.quote}</a
            >
            {#if !course}<a href={$localize(`/training/${id}`)}
                >{copy.details}</a
              >{/if}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="practical">
    <div>
      <h2>{copy.practicalTitle}</h2>
      <p>{copy.practical}</p>
    </div>
    <div>
      <h2>{copy.coverageTitle}</h2>
      <p>{copy.coverage}</p>
      <p>{copy.languages}</p>
    </div>
  </section>

  <section class="faq">
    <h2>{copy.faqTitle}</h2>
    {#each copy.faqs as faq}<details>
        <summary>{faq.question}</summary>
        <p>{faq.answer}</p>
      </details>{/each}
    <a
      class="button final-cta"
      href={$localize(
        `/contact?service=training${course ? `&course=${course}` : ""}`,
      )}>{copy.quote}</a
    >
  </section>

  {#if !course}
    <section class="additional">
      <h2>{copy.other}</h2>
      <p>{copy.otherIntro}</p>
      <div class="other-courses">
        {#each trainings.filter((item) => !["basic", "lite"].includes(item.slug)) as training}
          <a href={$localize(`/training/${training.slug}`)}
            >{$_(`training_${training.slug}_title`)}</a
          >
        {/each}
      </div>
    </section>
  {/if}
</div>

<style>
  .training-content {
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.5rem 1.5rem;
    text-align: left;
  }
  header {
    max-width: 850px;
    margin-bottom: 3rem;
  }
  h1,
  h2,
  h3 {
    font-family: Oswald-SemiBold, sans-serif;
    color: var(--color-text, #1a1a1a);
    line-height: 1.2;
  }
  h1 {
    font-size: clamp(2rem, 4vw, 3.1rem);
    margin: 0 0 1.25rem;
  }
  h2 {
    font-size: 1.75rem;
    margin: 0 0 1.25rem;
  }
  h3 {
    font-size: 1.65rem;
    margin: 0 0 1rem;
  }
  p,
  li {
    line-height: 1.65;
  }
  p {
    margin: 0 0 1rem;
  }
  .intro {
    font-size: 1.2rem;
  }
  .header-actions {
    margin-top: 1.5rem;
  }
  section {
    margin-bottom: 3.5rem;
  }
  .courses {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }
  .courses.single {
    grid-template-columns: 1fr;
  }
  article {
    padding: 2rem;
    border: 1px solid #d8d8d8;
    border-top: 5px solid #747474;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }
  article.complet {
    border-top-color: var(--global-color-primary, #b90016);
  }
  .facts {
    margin: 0.75rem 0;
  }
  .facts p {
    margin-bottom: 0.5rem;
  }
  .duration {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .price {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .price span {
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
  }
  ul {
    padding-left: 1.25rem;
    margin: 0.5rem 0 1.5rem;
  }
  li {
    margin-bottom: 0.45rem;
  }
  .actions {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
  }
  a {
    color: var(--global-color-primary, #b90016);
    text-underline-offset: 0.2em;
  }
  .button {
    display: inline-block;
    background: var(--global-color-primary, #b90016);
    color: white;
    padding: 0.9rem 1.25rem;
    border-radius: var(--border-radius, 6px);
    text-decoration: none;
    font-weight: 600;
    text-align: center;
  }
  .button:hover {
    filter: brightness(0.9);
  }
  a:focus-visible,
  summary:focus-visible {
    outline: 3px solid #202020;
    outline-offset: 4px;
  }
  .back {
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  .practical {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 2rem 0;
    border-bottom: 1px solid #d8d8d8;
  }
  .faq {
    max-width: 850px;
  }
  details {
    border-bottom: 1px solid #d8d8d8;
    padding: 1.15rem 0;
  }
  summary {
    font-weight: 600;
    cursor: pointer;
    line-height: 1.5;
  }
  details p {
    margin: 1rem 0 0.25rem;
  }
  .final-cta {
    margin-top: 2rem;
  }
  .additional {
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 6px;
  }
  .other-courses {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  @media (max-width: 700px) {
    .training-content {
      padding: 2rem 1.25rem;
    }
    .courses,
    .practical {
      grid-template-columns: 1fr;
    }
    article {
      padding: 1.5rem;
    }
    .practical {
      gap: 1.5rem;
    }
    .additional {
      padding: 1.5rem;
    }
  }
</style>

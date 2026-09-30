<script lang="ts">
  import emailjs from "@emailjs/browser";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { localize } from "$lib/nav";
  import { getEnquiryCopy } from "$lib/enquiry-copy";

  $: copy = getEnquiryCopy($page.params.lang);
  const validServices = ["training", "maintenance", "products", "other"];
  const validCourses = ["basic", "lite", "recommended", "refresher"];
  function queryChoice(key: string, choices: string[], fallback: string) {
    const value = $page.url.searchParams.get(key);
    return value && choices.includes(value) ? value : fallback;
  }
  let service = queryChoice("service", validServices, "training");
  let course = queryChoice("course", validCourses, "");
  let appliedSearch: string | undefined;
  // A page-store update (including a hash change) must not overwrite user choices.
  // Apply incoming course links only when their search parameters change.
  $: if ($page.url.search !== appliedSearch) {
    appliedSearch = $page.url.search;
    const selectedService = $page.url.searchParams.get("service");
    const selectedCourse = $page.url.searchParams.get("course");
    service = ["training", "maintenance", "products", "other"].includes(
      selectedService || "",
    )
      ? selectedService!
      : "training";
    course = ["basic", "lite", "recommended", "refresher"].includes(
      selectedCourse || "",
    )
      ? selectedCourse!
      : "";
  }
  const courseNames: Record<string, string> = {
    basic: "BLS-AED-SRC Complet",
    lite: "BLS-AED-SRC Compact",
    recommended: "IVR/IAS Level 1",
    refresher: "IVR/IAS Level 1 refresher",
  };
  let name = "";
  let email = "";
  let message = "";
  let company = "";
  let location = "";
  let participants: number | undefined;
  let language = "";
  let timing = "";
  let honeypot = "";
  let pending = false;
  let failed = false;

  async function handleSubmit() {
    if (pending || honeypot) return;
    pending = true;
    failed = false;
    const summary = [
      `Subject: ${service}`,
      ...(service === "training"
        ? [
            `Course: ${courseNames[course] || "Advice requested"}`,
            `Company / organisation: ${company.trim() || "Not specified"}`,
            `Training location: ${location.trim() || "Not specified"}`,
            `Participants: ${participants ?? "Not specified"}`,
            `Course language: ${language || "Not specified"}`,
            `Preferred timing: ${timing.trim() || "Not specified"}`,
          ]
        : []),
      "",
      message.trim(),
    ].join("\n");
    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      if (!publicKey || !serviceId || !templateId)
        throw new Error("Email service unavailable");
      // Keep the existing template contract: all enquiry details go into message.
      await emailjs.send(
        serviceId,
        templateId,
        { name: name.trim(), email: email.trim(), message: summary },
        { publicKey },
      );
    } catch {
      failed = true;
      pending = false;
      return;
    }
    await goto($localize("/contact/form-success"));
  }
</script>

<div class="form-wrapper" id="enquiry-form" tabindex="-1">
  <h2>{copy.formTitle}</h2>
  <p class="guidance">{copy.details}</p>
  <form on:submit|preventDefault={handleSubmit} aria-busy={pending}>
    <fieldset disabled={pending}>
      <div class="form-group">
        <label for="subject">{copy.subject}</label>
        <select id="subject" bind:value={service}>
          <option value="training">{copy.training}</option>
          <option value="maintenance">{copy.maintenance}</option>
          <option value="products">{copy.products}</option>
          <option value="other">{copy.other}</option>
        </select>
      </div>
      {#if service === "training"}
        <div class="form-group">
          <label for="course">{copy.course}</label>
          <select
            id="course"
            bind:value={course}
            aria-describedby={course === "basic" || course === "lite"
              ? "course-details"
              : undefined}
          >
            <option value="">{copy.undecided}</option>
            <option value="basic">BLS-AED-SRC Complet</option>
            <option value="lite">BLS-AED-SRC Compact</option>
            <option value="recommended">{copy.recommended}</option>
            <option value="refresher">{copy.refresher}</option>
          </select>
          {#if course === "basic" || course === "lite"}<p
              class="course-details"
              id="course-details"
            >
              {course === "basic" ? copy.basic : copy.lite}
            </p>{/if}
        </div>
        <div class="form-group">
          <label for="company">{copy.company} ({copy.optional})</label><input
            id="company"
            autocomplete="organization"
            bind:value={company}
            maxlength="200"
          />
        </div>
        <div class="form-group">
          <label for="location">{copy.location} ({copy.optional})</label><input
            id="location"
            autocomplete="address-level2"
            bind:value={location}
            maxlength="200"
          />
        </div>
        <div class="field-row">
          <div class="form-group">
            <label for="participants"
              >{copy.participants} ({copy.optional})</label
            ><input
              id="participants"
              type="number"
              min="1"
              step="1"
              bind:value={participants}
            />
          </div>
          <div class="form-group">
            <label for="language">{copy.language} ({copy.optional})</label
            ><select id="language" bind:value={language}
              ><option value="">{copy.choose}</option><option value="English"
                >{copy.english}</option
              ><option value="French">{copy.french}</option><option
                value="German">{copy.german}</option
              ></select
            >
          </div>
        </div>
        <div class="form-group">
          <label for="timing">{copy.timing}</label><input
            id="timing"
            bind:value={timing}
            placeholder={copy.timingHint}
            maxlength="300"
          />
        </div>
      {/if}
      <div class="field-row">
        <div class="form-group">
          <label for="name">{copy.name}</label><input
            id="name"
            autocomplete="name"
            bind:value={name}
            required
            maxlength="200"
          />
        </div>
        <div class="form-group">
          <label for="email">{copy.email}</label><input
            type="email"
            id="email"
            autocomplete="email"
            bind:value={email}
            required
            maxlength="254"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="message"
          >{service === "training" ? copy.optionalMessage : copy.message}</label
        ><textarea
          id="message"
          bind:value={message}
          required={service !== "training"}
          maxlength="5000"
        ></textarea>
      </div>
      <div hidden aria-hidden="true">
        <label for="honeypot">Leave this field empty</label><input
          id="honeypot"
          bind:value={honeypot}
          autocomplete="off"
          tabindex="-1"
        />
      </div>
      <a class="privacy" href={$localize("/privacy_policy")}>{copy.privacy}</a>
      <button id="form-btn" type="submit"
        >{pending ? copy.sending : copy.send}</button
      >
    </fieldset>
    {#if failed}<p class="error" role="alert">{copy.error}</p>{/if}
  </form>
</div>

<style>
  .course-details {
    margin: 0;
    color: var(--color-text-muted);
    line-height: 1.5;
  }
  .form-wrapper {
    scroll-margin-top: 7rem;
    padding: 2rem;
    margin-bottom: 4rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius-lg);
    background: white;
  }
  h2 {
    font-size: var(--text-xl);
    margin: 0 0 0.75rem;
  }
  .guidance {
    color: var(--color-text-muted);
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    min-width: 0;
    display: grid;
    gap: 1.25rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 0;
  }
  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  label {
    font-weight: 600;
  }
  input,
  textarea,
  select {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    padding: 0.85rem;
    border: 1px solid #999;
    border-radius: var(--border-radius);
    font: inherit;
    color: var(--color-text);
    background: white;
  }
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid var(--global-color-primary);
    outline-offset: 3px;
  }
  textarea {
    min-height: 110px;
    resize: vertical;
  }
  button {
    padding: 1rem 1.5rem;
    background: var(--global-color-primary);
    color: white;
    border: 0;
    border-radius: var(--border-radius);
    font: inherit;
    font-weight: 600;
    cursor: pointer;
  }
  button:hover {
    background: var(--global-color-primary-dark);
  }
  fieldset:disabled {
    opacity: 0.7;
  }
  fieldset:disabled button {
    cursor: wait;
  }
  .privacy {
    color: var(--global-color-primary);
    font-size: var(--text-sm);
  }
  .error {
    border-left: 3px solid var(--global-color-primary);
    padding: 1rem;
    background: #fff4f4;
    line-height: 1.5;
  }
  @media (max-width: 600px) {
    .field-row {
      grid-template-columns: 1fr;
    }
    .course-details {
      margin: 0;
      color: var(--color-text-muted);
      line-height: 1.5;
    }
    .form-wrapper {
      scroll-margin-top: 7rem;
      padding: 1.25rem;
    }
  }
</style>

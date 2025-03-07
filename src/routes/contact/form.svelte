<script lang="ts">
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";
  import { AVERAGE_PROFIT_PER_LEAD } from "$lib/math";

  const emailjs_public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailjs_template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjs_service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;

  // Honeypot value
  let honeypot = "";

  onMount(() => {
    const emailjsScript = document.createElement("script");
    emailjsScript.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    emailjsScript.onload = () => {
      emailjs.init(emailjs_public_key);
    };
    document.body.appendChild(emailjsScript);
  });

  // Form data
  let name = "";
  let email = "";
  let message = "";
  let submitted = false;

  function handleSubmit(event: Event) {
    event.preventDefault();

    // Check if honeypot field is filled
    if (honeypot) {
      console.error("Spam detected: honeypot field filled.");
      alert("Your submission was flagged as spam.");
      return;
    }

    emailjs
      .send(emailjs_service_id, emailjs_template_id, { name, email, message })
      .then(
        () => {
          console.log("SUCCESS!");
          submitted = true;
        },
        (error) => console.error("FAILED...", error),
      );
  }
</script>

<div class="form-wrapper">
  <h2 class="form-title">{$_("contact_form_title")}</h2>
  <form on:submit|preventDefault={handleSubmit} class="contact-form">
    <div class="form-group">
      <label for="name">{$_("contact_form_name_label")}</label>
      <input
        type="text"
        id="name"
        name="user_name"
        bind:value={name}
        required
        placeholder={$_("contact_form_name_placeholder")}
      />
    </div>

    <div class="form-group">
      <label for="email">{$_("contact_form_email_label")}</label>
      <input
        type="email"
        id="email"
        name="user_email"
        bind:value={email}
        required
        placeholder={$_("contact_form_email_placeholder")}
      />
    </div>

    <div class="form-group">
      <label for="message">{$_("contact_form_message_label")}</label>
      <textarea
        id="message"
        name="user_message"
        bind:value={message}
        required
        placeholder={$_("contact_form_message_placeholder")}
      ></textarea>
    </div>

    <!-- Honeypot field (hidden from users) -->
    <div class="honeypot" style="display: none;">
      <label for="honeypot">Leave this field empty</label>
      <input
        type="text"
        id="honeypot"
        name="honeypot"
        bind:value={honeypot}
        autocomplete="off"
      />
    </div>

    <button type="submit" class="submit-button">
      {$_("contact_form_submit_button")}
    </button>

    {#if submitted}
      <p class="success-message">{$_("contact_form_success_message")}</p>
    {/if}
  </form>
</div>

<style>
  .form-wrapper {
    margin-bottom: 4rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 122, 255, 0.1);
    border-radius: 1.5rem;
    backdrop-filter: blur(12px);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem; /* Add padding to the entire form container */
  }

  .form-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1d1d1f;
    text-align: center;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* Already adds space between form groups */
    padding: 1rem; /* Add padding inside the form */
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 1rem;
    font-weight: 500;
    color: #6b7280;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(0, 122, 255, 0.2);
    border-radius: 1rem;
    font-size: 1rem;
    color: #1a1a1a;
    background: rgba(255, 255, 255, 0.7);
    outline: none;
    transition: border-color 0.3s;
  }

  input:focus,
  textarea:focus {
    border-color: #007aff;
  }

  textarea {
    resize: none;
    height: 150px;
  }

  .submit-button {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #007aff, #5856d6);
    color: white;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background: linear-gradient(135deg, #005bb5, #3e4abf);
  }

  .success-message {
    margin-top: 1rem;
    font-size: 1rem;
    color: #007aff;
    text-align: center;
  }
</style>

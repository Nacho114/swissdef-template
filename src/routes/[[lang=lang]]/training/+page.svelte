<script lang="ts">
  import { page } from "$app/stores";
  import { localize } from "$lib/nav";
  import { ContactInfo } from "$lib/info";
  import TrainingContent from "$lib/components/training-content.svelte";
  import { getTrainingCopy } from "$lib/training-copy";
  $: copy = getTrainingCopy($page.params.lang);
  $: pageUrl = `https://www.swissdefibrillator.ch${$localize("/training")}`;
  $: structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: copy.title,
        description: copy.intro,
        url: pageUrl,
        serviceType: "BLS-AED-SRC training",
        areaServed: { "@type": "Country", name: "Switzerland" },
        provider: {
          "@type": "Organization",
          name: "Swiss Defibrillator",
          url: "https://www.swissdefibrillator.ch",
          telephone: ContactInfo.phoneNumber,
          email: ContactInfo.email,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "course enquiries",
            telephone: ContactInfo.phoneNumber,
            email: ContactInfo.email,
            availableLanguage: ["en", "fr", "de"],
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: $page.params.lang || "en",
        mainEntity: copy.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  }).replace(/</g, "\\u003c");
</script>

<svelte:head>
  <title>{copy.title} | Swiss Defibrillator</title>
  <meta name="description" content={copy.description} />
  {@html `<script type="application/ld+json">${structuredData}${"<"}/script>`}
</svelte:head>
<TrainingContent />

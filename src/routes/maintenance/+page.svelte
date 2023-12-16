<script lang="ts">
  import PlanCard from "$lib/components/plan_card.svelte";

  let serviceInfo = {
    title: "Lite Plan",
    price: "CHF 445",
    duration: "1 Hour",
    description: "Essential Lifesaving Skills in a Snap",
    features: [
      { name: "Fundamental BLS and AED principles", included: true },
      { name: "CPR technique for adults", included: true },
      { name: "Basic airway management", included: true },
      // Add other features here
      { name: "Hands-on AED practice", included: false },
      { name: "Physical lessons", included: false },
    ],
  };
</script>

<PlanCard {...serviceInfo} />

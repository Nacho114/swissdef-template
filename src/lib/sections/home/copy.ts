export type HomeCopy = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  request: string;
  explore: string;
  panelTitle: string;
  location: string;
  languages: string;
  courses: string;
  instructor: string;
  servicesTitle: string;
  servicesIntro: string;
  services: { title: string; summary: string; link: string }[];
};
const copy: Record<string, HomeCopy> = {
  en: {
    title: "BLS-AED-SRC courses for companies | Swiss Defibrillator",
    description:
      "On-site BLS-AED-SRC training for companies, hotels, schools and organisations throughout Switzerland. Courses in English, French and German with Monica Aleman.",
    heading: "BLS-AED-SRC training at your workplace",
    intro:
      "Prepare your team to respond to a cardiac arrest. Monica Aleman brings practical courses to companies, hotels, schools and organisations throughout Switzerland.",
    request: "Request a course",
    explore: "Explore courses",
    panelTitle: "A course for your team",
    location: "At your premises, anywhere in Switzerland",
    languages: "Taught in English, French or German",
    courses: "Complet: 3–4 hours · Compact: 1–2 hours",
    instructor: "With Monica Aleman, BLS-AED-SRC instructor and adult educator",
    servicesTitle: "Train your team. Keep your AED ready.",
    servicesIntro:
      "Practical training, ongoing maintenance and defibrillators for your organisation.",
    services: [
      {
        title: "BLS-AED-SRC training",
        summary:
          "Compare Complet and Compact courses and arrange training at your premises.",
        link: "Find your course",
      },
      {
        title: "AED maintenance",
        summary:
          "Keep your defibrillator ready for use with a maintenance plan.",
        link: "Explore maintenance",
      },
      {
        title: "Defibrillators and accessories",
        summary:
          "Browse Philips AEDs, replacement pads and equipment for your workplace.",
        link: "Browse products",
      },
    ],
  },
  fr: {
    title: "Formations BLS-AED-SRC en entreprise | Swiss Defibrillator",
    description:
      "Formations BLS-AED-SRC sur site pour entreprises, hôtels, écoles et organisations dans toute la Suisse. En français, allemand ou anglais avec Monica Aleman.",
    heading: "Formation BLS-AED-SRC dans vos locaux",
    intro:
      "Préparez votre équipe à réagir face à un arrêt cardiaque. Monica Aleman forme les entreprises, hôtels, écoles et organisations sur place, dans toute la Suisse.",
    request: "Demander une formation",
    explore: "Découvrir les cours",
    panelTitle: "Une formation pour votre équipe",
    location: "Dans vos locaux, partout en Suisse",
    languages: "En français, allemand ou anglais",
    courses: "Complet : 3–4 heures · Compact : 1–2 heures",
    instructor:
      "Avec Monica Aleman, instructrice BLS-AED-SRC et formatrice d’adultes",
    servicesTitle: "Formez votre équipe. Gardez votre DAE prêt.",
    servicesIntro:
      "Formation pratique, maintenance et défibrillateurs pour votre organisation.",
    services: [
      {
        title: "Formation BLS-AED-SRC",
        summary:
          "Comparez les cours Complet et Compact et organisez une formation dans vos locaux.",
        link: "Choisir votre cours",
      },
      {
        title: "Maintenance des DAE",
        summary:
          "Gardez votre défibrillateur prêt à l’emploi grâce à un plan de maintenance.",
        link: "Découvrir la maintenance",
      },
      {
        title: "Défibrillateurs et accessoires",
        summary:
          "Découvrez les DAE Philips, électrodes de rechange et équipements pour votre entreprise.",
        link: "Voir les produits",
      },
    ],
  },
  de: {
    title: "BLS-AED-SRC-Kurse für Unternehmen | Swiss Defibrillator",
    description:
      "BLS-AED-SRC-Schulungen vor Ort für Unternehmen, Hotels, Schulen und Organisationen in der ganzen Schweiz. Auf Deutsch, Französisch oder Englisch mit Monica Aleman.",
    heading: "BLS-AED-SRC-Kurse bei Ihnen vor Ort",
    intro:
      "Bereiten Sie Ihr Team auf einen Herz-Kreislauf-Stillstand vor. Monica Aleman schult Unternehmen, Hotels, Schulen und Organisationen direkt vor Ort – in der ganzen Schweiz.",
    request: "Kurs anfragen",
    explore: "Kurse entdecken",
    panelTitle: "Ein Kurs für Ihr Team",
    location: "In Ihren Räumlichkeiten, schweizweit",
    languages: "Auf Deutsch, Französisch oder Englisch",
    courses: "Complet: 3–4 Stunden · Compact: 1–2 Stunden",
    instructor:
      "Mit Monica Aleman, BLS-AED-SRC-Instruktorin und Erwachsenenbildnerin",
    servicesTitle: "Schulen Sie Ihr Team. Halten Sie Ihren AED bereit.",
    servicesIntro:
      "Praktische Schulungen, Wartung und Defibrillatoren für Ihre Organisation.",
    services: [
      {
        title: "BLS-AED-SRC-Schulungen",
        summary:
          "Vergleichen Sie Complet und Compact und planen Sie einen Kurs in Ihren Räumlichkeiten.",
        link: "Passenden Kurs finden",
      },
      {
        title: "AED-Wartung",
        summary:
          "Halten Sie Ihren Defibrillator mit einem Wartungsplan einsatzbereit.",
        link: "Wartung entdecken",
      },
      {
        title: "Defibrillatoren und Zubehör",
        summary:
          "Entdecken Sie Philips-AEDs, Ersatzelektroden und Ausrüstung für Ihren Betrieb.",
        link: "Produkte ansehen",
      },
    ],
  },
  it: {
    title: "Corsi BLS-AED-SRC per aziende | Swiss Defibrillator",
    description:
      "Formazione BLS-AED-SRC in sede per aziende, hotel, scuole e organizzazioni in tutta la Svizzera. Corsi in francese, tedesco o inglese con Monica Aleman.",
    heading: "Formazione BLS-AED-SRC nella vostra sede",
    intro:
      "Preparate il vostro team a intervenire in caso di arresto cardiaco. Monica Aleman tiene corsi pratici presso aziende, hotel, scuole e organizzazioni in tutta la Svizzera.",
    request: "Richiedi un corso",
    explore: "Scopri i corsi",
    panelTitle: "Un corso per il vostro team",
    location: "Nella vostra sede, in tutta la Svizzera",
    languages: "Corsi in francese, tedesco o inglese",
    courses: "Complet: 3–4 ore · Compact: 1–2 ore",
    instructor:
      "Con Monica Aleman, istruttrice BLS-AED-SRC e formatrice di adulti",
    servicesTitle: "Formate il team. Mantenete il DAE pronto.",
    servicesIntro:
      "Formazione pratica, manutenzione e defibrillatori per la vostra organizzazione.",
    services: [
      {
        title: "Formazione BLS-AED-SRC",
        summary:
          "Confrontate i corsi Complet e Compact e organizzate la formazione nella vostra sede.",
        link: "Scegli il corso",
      },
      {
        title: "Manutenzione DAE",
        summary:
          "Mantenete il defibrillatore pronto all’uso con un piano di manutenzione.",
        link: "Scopri la manutenzione",
      },
      {
        title: "Defibrillatori e accessori",
        summary:
          "Scoprite i DAE Philips, gli elettrodi di ricambio e le attrezzature per la vostra azienda.",
        link: "Visualizza i prodotti",
      },
    ],
  },
};
export const homeCopy = (lang?: string): HomeCopy =>
  copy[lang || "en"] || copy.en;

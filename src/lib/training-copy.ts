export type TrainingLanguage = "en" | "de" | "fr" | "it";
export type BlsCourse = "basic" | "lite";
interface CourseCopy {
  name: string;
  audience: string;
  skills: string[];
}
interface TrainingCopy {
  title: string;
  description: string;
  intro: string;
  choose: string;
  instructorTitle: string;
  instructorBio: string;
  courses: Record<BlsCourse, CourseCopy>;
  hours: string;
  groupPrice: string;
  groupSize: string;
  certificate: string;
  details: string;
  quote: string;
  back: string;
  learn: string;
  practicalTitle: string;
  practical: string;
  coverageTitle: string;
  coverage: string;
  languages: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  other: string;
  otherIntro: string;
}
export const trainingCopy: Record<TrainingLanguage, TrainingCopy> = {
  en: {
    instructorTitle: "Your instructor, Monica Aleman",
    instructorBio:
      "Monica is an experienced BLS-AED-SRC instructor and adult educator. She personally leads the courses, with practical exercises and individual feedback.",
    title: "On-site BLS-AED-SRC training for companies in Switzerland",
    description:
      "BLS-AED-SRC courses at your premises throughout Switzerland. Complet or Compact for up to 8 people per instructor, in English, French or German. Request a quote.",
    intro:
      "Help your team respond to a cardiac emergency. Swiss Defibrillator comes to your company, hotel, school or organisation for practical CPR and AED training in English, French or German.",
    choose: "Choose the course for your team",
    courses: {
      basic: {
        name: "BLS-AED-SRC Complet",
        audience:
          "For teams who need a broader foundation in resuscitation, including emergencies involving children and airway obstruction.",
        skills: [
          "Adult and paediatric CPR",
          "Safe use of an automated external defibrillator (AED)",
          "Choking and airway obstruction",
          "Recognising an emergency, raising the alarm and practical scenarios",
        ],
      },
      lite: {
        name: "BLS-AED-SRC Compact",
        audience:
          "For teams who want a shorter introduction focused on responding to an adult cardiac arrest.",
        skills: [
          "Recognising adult cardiac arrest and raising the alarm",
          "Adult CPR",
          "Safe use of an automated external defibrillator (AED)",
          "Hands-on practice with instructor feedback",
        ],
      },
    },
    hours: "hours",
    groupPrice: "+ VAT per group",
    groupSize: "Up to 8 participants per instructor",
    certificate: "SRC course attendance certificate, valid for 2 years",
    details: "View course details",
    quote: "Request a course quote",
    back: "Compare all courses",
    learn: "What your team will practise",
    practicalTitle: "Practice for every participant",
    practical:
      "Train with resuscitation manikins and AED trainers in a small group. Each participant practises CPR and AED use with guidance and feedback. Tell us about your workplace when enquiring so we can discuss suitable scenarios and the space needed for practical exercises.",
    coverageTitle: "At your premises, throughout Switzerland",
    coverage:
      "We deliver courses in Zürich, Bern, Basel, Luzern, Zug, Lausanne, Genève, Valais and across Switzerland. Share your address, preferred dates and group size to arrange an on-site course.",
    languages: "Teaching languages: English, French and German.",
    faqTitle: "Planning a course for your team",
    faqs: [
      {
        question: "How many people can take part?",
        answer:
          "There are up to 8 participants per instructor during practical training. For a larger team, tell us your total headcount so we can discuss the organisation and provide a quote.",
      },
      {
        question: "Do you come to our company?",
        answer:
          "Yes. Courses take place at your premises throughout Switzerland. Include your location in the enquiry; we will confirm the room requirements and practical arrangements with you.",
      },
      {
        question: "What is the difference between Complet and Compact?",
        answer:
          "Complet takes 3–4 hours and covers adult and paediatric CPR, AED use and choking. Compact takes 1–2 hours and focuses on adult CPR and AED use.",
      },
      {
        question: "How much does a group course cost?",
        answer:
          "Complet costs CHF 890 plus VAT per group; Compact costs CHF 455 plus VAT per group, for up to 8 participants per instructor. Request a quote to confirm the arrangements for your location and team.",
      },
      {
        question:
          "Is the course SRC recognised, and how long is the certificate valid?",
        answer:
          "Both are BLS-AED-SRC courses. Participants receive an SRC course attendance certificate valid for 2 years.",
      },
      {
        question: "Can we choose the teaching language?",
        answer:
          "Courses are available in English, French and German. Tell us which language your team prefers when requesting a quote.",
      },
    ],
    other: "Further first-aid courses",
    otherIntro:
      "Looking for more extensive first-aid training or a refresher? Explore the additional course options.",
  },
  de: {
    instructorTitle: "Ihre Kursleiterin, Monica Aleman",
    instructorBio:
      "Monica ist eine erfahrene BLS-AED-SRC-Instruktorin und Erwachsenenbildnerin. Sie leitet die Kurse persönlich, mit praktischen Übungen und individuellem Feedback.",
    title: "BLS-AED-SRC Firmenkurse vor Ort in der ganzen Schweiz",
    description:
      "BLS-AED-SRC Kurs für Ihr Unternehmen: Complet oder Compact bei Ihnen vor Ort, bis 8 Personen pro Instruktorin. Deutsch, Französisch oder Englisch. Offerte anfragen.",
    intro:
      "Bereiten Sie Ihr Team auf einen Herz-Kreislauf-Notfall vor. Swiss Defibrillator kommt für praxisnahe Reanimations- und AED-Kurse in Ihr Unternehmen, Hotel, Ihre Schule oder Organisation – auf Deutsch, Französisch oder Englisch.",
    choose: "Der passende Kurs für Ihr Team",
    courses: {
      basic: {
        name: "BLS-AED-SRC Complet",
        audience:
          "Für Teams, die umfassende Grundlagen der Wiederbelebung lernen möchten, einschliesslich Kindernotfällen und Atemwegsverlegung.",
        skills: [
          "Reanimation bei Erwachsenen und Kindern",
          "Sicherer Einsatz eines automatisierten externen Defibrillators (AED)",
          "Ersticken und Atemwegsverlegung",
          "Notfälle erkennen, alarmieren und praktische Situationen üben",
        ],
      },
      lite: {
        name: "BLS-AED-SRC Compact",
        audience:
          "Für Teams, die einen kurzen Einstieg in die Wiederbelebung bei einem Herz-Kreislauf-Stillstand bei Erwachsenen suchen.",
        skills: [
          "Herz-Kreislauf-Stillstand bei Erwachsenen erkennen und alarmieren",
          "Reanimation bei Erwachsenen",
          "Sicherer Einsatz eines automatisierten externen Defibrillators (AED)",
          "Praktische Übungen mit persönlichem Feedback",
        ],
      },
    },
    hours: "Stunden",
    groupPrice: "+ MwSt. pro Gruppe",
    groupSize: "Bis 8 Teilnehmende pro Instruktorin",
    certificate: "SRC-Kursbestätigung, 2 Jahre gültig",
    details: "Kursdetails ansehen",
    quote: "Kursofferte anfragen",
    back: "Alle Kurse vergleichen",
    learn: "Das übt Ihr Team",
    practicalTitle: "Alle Teilnehmenden üben selbst",
    practical:
      "In kleinen Gruppen trainieren Sie mit Reanimationspuppen und AED-Trainingsgeräten. Alle Teilnehmenden üben Reanimation und AED-Anwendung mit Anleitung und Feedback. Beschreiben Sie uns Ihren Betrieb, damit wir passende Übungssituationen und den Platzbedarf besprechen können.",
    coverageTitle: "Bei Ihnen vor Ort, in der ganzen Schweiz",
    coverage:
      "Wir bieten Firmenkurse in Zürich, Bern, Basel, Luzern, Zug, Lausanne, Genf, im Wallis und in der ganzen Schweiz an. Nennen Sie uns Ihre Adresse, Wunschtermine und Gruppengrösse für Ihren Erste-Hilfe-Kurs in der Firma.",
    languages: "Kurssprachen: Deutsch, Französisch und Englisch.",
    faqTitle: "Ihren Firmenkurs planen",
    faqs: [
      {
        question: "Wie viele Personen können teilnehmen?",
        answer:
          "Bei den praktischen Übungen betreut eine Instruktorin bis zu 8 Teilnehmende. Nennen Sie uns bei grösseren Teams die Gesamtzahl, damit wir die Organisation besprechen und eine Offerte erstellen können.",
      },
      {
        question: "Kommen Sie in unser Unternehmen?",
        answer:
          "Ja. Die Kurse finden schweizweit bei Ihnen vor Ort statt. Geben Sie Ihren Standort an; Raumvoraussetzungen und praktische Details klären wir gemeinsam.",
      },
      {
        question: "Was unterscheidet Complet und Compact?",
        answer:
          "Complet dauert 3–4 Stunden und umfasst Reanimation bei Erwachsenen und Kindern, AED-Anwendung und Atemwegsverlegung. Compact dauert 1–2 Stunden und konzentriert sich auf Reanimation bei Erwachsenen und AED-Anwendung.",
      },
      {
        question: "Was kostet ein Gruppenkurs?",
        answer:
          "Complet kostet CHF 890 plus MwSt. pro Gruppe, Compact CHF 455 plus MwSt. pro Gruppe, für bis zu 8 Teilnehmende pro Instruktorin. Mit einer Offerte bestätigen wir die Details für Ihren Standort und Ihr Team.",
      },
      {
        question:
          "Ist der Kurs SRC-anerkannt und wie lange gilt die Bestätigung?",
        answer:
          "Beide Angebote sind BLS-AED-SRC Kurse. Teilnehmende erhalten eine SRC-Kursbestätigung mit einer Gültigkeit von 2 Jahren.",
      },
      {
        question: "Können wir die Kurssprache wählen?",
        answer:
          "Die Kurse sind auf Deutsch, Französisch und Englisch verfügbar. Geben Sie Ihre gewünschte Sprache bei der Offertanfrage an.",
      },
    ],
    other: "Weitere Erste-Hilfe-Kurse",
    otherIntro:
      "Sie suchen eine umfangreichere Erste-Hilfe-Ausbildung oder eine Auffrischung? Entdecken Sie unsere weiteren Kursangebote.",
  },
  fr: {
    instructorTitle: "Votre formatrice, Monica Aleman",
    instructorBio:
      "Monica est une instructrice BLS-AED-SRC expérimentée et une formatrice d’adultes. Elle anime personnellement les cours, avec des exercices pratiques et des conseils individuels.",
    title: "Formation BLS-AED-SRC en entreprise, partout en Suisse",
    description:
      "Cours BLS-AED-SRC Complet ou Compact sur votre site en Suisse. Jusqu’à 8 personnes par formatrice, en français, allemand ou anglais. Demandez un devis.",
    intro:
      "Préparez votre équipe à réagir face à une urgence cardiaque. Swiss Defibrillator se déplace dans votre entreprise, hôtel, école ou organisation pour une formation pratique à la réanimation et au défibrillateur, en français, allemand ou anglais.",
    choose: "Choisissez le cours adapté à votre équipe",
    courses: {
      basic: {
        name: "BLS-AED-SRC Complet",
        audience:
          "Pour les équipes qui souhaitent des bases plus complètes en réanimation, y compris les urgences pédiatriques et l’obstruction des voies respiratoires.",
        skills: [
          "Réanimation cardio-pulmonaire de l’adulte et de l’enfant",
          "Utilisation d’un défibrillateur automatisé externe (AED)",
          "Étouffement et obstruction des voies respiratoires",
          "Reconnaissance d’une urgence, alerte et mises en situation",
        ],
      },
      lite: {
        name: "BLS-AED-SRC Compact",
        audience:
          "Pour les équipes qui recherchent une initiation courte, centrée sur l’arrêt cardiaque chez l’adulte.",
        skills: [
          "Reconnaissance d’un arrêt cardiaque chez l’adulte et alerte",
          "Réanimation cardio-pulmonaire de l’adulte",
          "Utilisation d’un défibrillateur automatisé externe (AED)",
          "Exercices pratiques avec conseils personnalisés",
        ],
      },
    },
    hours: "heures",
    groupPrice: "+ TVA par groupe",
    groupSize: "Jusqu’à 8 participants par formatrice",
    certificate: "Attestation de participation SRC valable 2 ans",
    details: "Voir le détail du cours",
    quote: "Demander un devis",
    back: "Comparer tous les cours",
    learn: "Ce que votre équipe va pratiquer",
    practicalTitle: "Chaque participant passe à la pratique",
    practical:
      "En petit groupe, vous vous entraînez sur des mannequins de réanimation et des défibrillateurs de formation. Chacun pratique la réanimation et l’utilisation de l’AED avec des conseils personnalisés. Présentez-nous votre lieu de travail pour discuter des situations à travailler et de l’espace nécessaire aux exercices.",
    coverageTitle: "Dans vos locaux, partout en Suisse",
    coverage:
      "Nous proposons des formations sur site à Zürich, Berne, Bâle, Lucerne, Zoug, Lausanne, Genève, en Valais et dans toute la Suisse. Indiquez votre adresse, vos dates souhaitées et la taille de votre groupe pour organiser votre formation de premiers secours en entreprise.",
    languages: "Langues de formation : français, allemand et anglais.",
    faqTitle: "Organiser votre cours en entreprise",
    faqs: [
      {
        question: "Combien de personnes peuvent participer ?",
        answer:
          "Les exercices pratiques accueillent jusqu’à 8 participants par formatrice. Pour une équipe plus grande, indiquez l’effectif total afin de discuter de l’organisation et de recevoir un devis.",
      },
      {
        question: "Vous déplacez-vous dans notre entreprise ?",
        answer:
          "Oui. Les cours ont lieu dans vos locaux, partout en Suisse. Précisez votre lieu de formation ; nous confirmerons ensemble les besoins en espace et les modalités pratiques.",
      },
      {
        question: "Quelle différence entre Complet et Compact ?",
        answer:
          "Complet dure 3–4 heures et comprend la réanimation de l’adulte et de l’enfant, l’AED et l’obstruction des voies respiratoires. Compact dure 1–2 heures et se concentre sur la réanimation de l’adulte et l’AED.",
      },
      {
        question: "Quel est le prix d’un cours de groupe ?",
        answer:
          "Complet coûte CHF 890 plus TVA par groupe ; Compact coûte CHF 455 plus TVA par groupe, pour jusqu’à 8 participants par formatrice. Demandez un devis pour confirmer les modalités pour votre site et votre équipe.",
      },
      {
        question:
          "Le cours est-il reconnu SRC et quelle est la validité de l’attestation ?",
        answer:
          "Les deux formations sont des cours BLS-AED-SRC. Les participants reçoivent une attestation de participation SRC valable 2 ans.",
      },
      {
        question: "Peut-on choisir la langue du cours ?",
        answer:
          "Les cours sont disponibles en français, allemand et anglais. Précisez la langue souhaitée dans votre demande de devis.",
      },
    ],
    other: "Autres cours de premiers secours",
    otherIntro:
      "Vous recherchez une formation plus approfondie ou un recyclage ? Découvrez les autres cours proposés.",
  },
  it: {
    instructorTitle: "La vostra istruttrice, Monica Aleman",
    instructorBio:
      "Monica è un’istruttrice BLS-AED-SRC esperta e una formatrice di adulti. Conduce personalmente i corsi, con esercizi pratici e consigli individuali.",
    title: "Corsi BLS-AED-SRC in azienda in tutta la Svizzera",
    description:
      "Corsi BLS-AED-SRC Complet e Compact presso la vostra sede in Svizzera. Fino a 8 persone per istruttrice, in inglese, francese o tedesco. Richiedete un preventivo.",
    intro:
      "Preparate il vostro team ad affrontare un’emergenza cardiaca. Swiss Defibrillator organizza corsi pratici di rianimazione e uso del defibrillatore presso aziende, alberghi, scuole e organizzazioni, in inglese, francese o tedesco.",
    choose: "Scegliete il corso per il vostro team",
    courses: {
      basic: {
        name: "BLS-AED-SRC Complet",
        audience:
          "Per i team che desiderano basi più complete di rianimazione, comprese le emergenze pediatriche e l’ostruzione delle vie aeree.",
        skills: [
          "Rianimazione cardiopolmonare di adulti e bambini",
          "Uso di un defibrillatore automatico esterno (AED)",
          "Soffocamento e ostruzione delle vie aeree",
          "Riconoscimento dell’emergenza, allarme e simulazioni pratiche",
        ],
      },
      lite: {
        name: "BLS-AED-SRC Compact",
        audience:
          "Per i team che desiderano un’introduzione breve, incentrata sull’arresto cardiaco nell’adulto.",
        skills: [
          "Riconoscimento dell’arresto cardiaco nell’adulto e allarme",
          "Rianimazione cardiopolmonare dell’adulto",
          "Uso di un defibrillatore automatico esterno (AED)",
          "Esercitazioni pratiche con feedback individuale",
        ],
      },
    },
    hours: "ore",
    groupPrice: "+ IVA per gruppo",
    groupSize: "Fino a 8 partecipanti per istruttrice",
    certificate: "Attestato di partecipazione SRC valido per 2 anni",
    details: "Dettagli del corso",
    quote: "Richiedete un preventivo",
    back: "Confrontate tutti i corsi",
    learn: "Cosa imparerà il vostro team",
    practicalTitle: "Ogni partecipante si esercita",
    practical:
      "In piccoli gruppi, vi esercitate con manichini per la rianimazione e defibrillatori didattici. Ogni partecipante pratica la rianimazione e l’uso dell’AED con guida e feedback. Descrivete il vostro ambiente di lavoro per concordare scenari adatti e lo spazio necessario alle esercitazioni.",
    coverageTitle: "Presso la vostra sede, in tutta la Svizzera",
    coverage:
      "Organizziamo corsi a Zurigo, Berna, Basilea, Lucerna, Zugo, Losanna, Ginevra, in Vallese e in tutta la Svizzera. Indicate indirizzo, date preferite e numero di partecipanti per organizzare il corso in sede.",
    languages: "Lingue dei corsi: inglese, francese e tedesco.",
    faqTitle: "Organizzare un corso per il team",
    faqs: [
      {
        question: "Quante persone possono partecipare?",
        answer:
          "Durante le esercitazioni pratiche ogni istruttrice segue fino a 8 partecipanti. Per gruppi più numerosi, indicate il numero totale per concordare l’organizzazione e ricevere un preventivo.",
      },
      {
        question: "Venite presso la nostra azienda?",
        answer:
          "Sì. I corsi si svolgono presso la vostra sede in tutta la Svizzera. Indicate il luogo del corso; confermeremo insieme lo spazio necessario e gli aspetti pratici.",
      },
      {
        question: "Qual è la differenza tra Complet e Compact?",
        answer:
          "Complet dura 3–4 ore e comprende rianimazione di adulti e bambini, AED e ostruzione delle vie aeree. Compact dura 1–2 ore ed è incentrato su rianimazione dell’adulto e AED.",
      },
      {
        question: "Quanto costa un corso di gruppo?",
        answer:
          "Complet costa CHF 890 più IVA per gruppo; Compact costa CHF 455 più IVA per gruppo, fino a 8 partecipanti per istruttrice. Richiedete un preventivo per confermare le condizioni per la vostra sede e il vostro team.",
      },
      {
        question: "Il corso è riconosciuto SRC e quanto dura l’attestato?",
        answer:
          "Entrambe le formazioni sono corsi BLS-AED-SRC. I partecipanti ricevono un attestato di partecipazione SRC valido per 2 anni.",
      },
      {
        question: "Possiamo scegliere la lingua del corso?",
        answer:
          "I corsi sono disponibili in inglese, francese e tedesco. Indicate la lingua preferita nella richiesta di preventivo.",
      },
    ],
    other: "Altri corsi di primo soccorso",
    otherIntro:
      "Cercate una formazione più approfondita o un aggiornamento? Scoprite gli altri corsi disponibili.",
  },
};
export const getTrainingCopy = (language?: string): TrainingCopy =>
  trainingCopy[language as TrainingLanguage] ?? trainingCopy.en;

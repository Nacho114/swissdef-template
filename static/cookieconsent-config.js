import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.umd.js";

// Note: The following line disables the linter error:
/* global CookieConsent */
CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom left",
      equalWeightButtons: false,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
  },
  language: {
    default: "en",
    autoDetect: "browser",
    translations: {
      de: {
        consentModal: {
          title: "Willkommen bei Swissdefibrillator!",
          description:
            "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und grundlegende Website-Analysen bereitzustellen. Durch Klicken auf 'Alle akzeptieren' stimmen Sie der Verwendung von Cookies zu. Sie können Ihre Einstellungen verwalten oder mehr erfahren, indem Sie auf 'Einstellungen verwalten' klicken.",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          showPreferencesBtn: "Einstellungen verwalten",
          footer:
            '<a href="https://www.swissdefibrillator.com/de/datenschutz">Datenschutzerklärung</a>\n<a href="https://www.swissdefibrillator.com/de/agb">AGB</a>',
        },
        preferencesModal: {
          title: "Cookie-Einstellungen",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          savePreferencesBtn: "Einstellungen speichern",
          closeIconLabel: "Schließen",
          serviceCounterLabel: "Dienst",
          sections: [
            {
              title: "Verwendung von Cookies",
              description:
                "Wir verwenden Cookies, um Ihr Erlebnis auf unserer Website zu verbessern und grundlegende Analysen bereitzustellen. Sie können Ihre Cookie-Einstellungen unten anpassen.",
            },
            {
              title:
                'Unbedingt erforderliche Cookies <span class="pm__badge">Immer aktiviert</span>',
              description:
                "Diese Cookies sind für das ordnungsgemäße Funktionieren unserer Website unerlässlich. Sie ermöglichen Kernfunktionen und Sicherheitsmerkmale.",
              linkedCategory: "necessary",
            },
            {
              title: "Funktions-Cookies",
              description:
                "Diese Cookies verbessern die Funktionalität unserer Website, indem sie sich Ihre Einstellungen merken und personalisierte Funktionen bereitstellen.",
              linkedCategory: "functionality",
            },
            {
              title: "Weitere Informationen",
              description:
                'Bei Fragen zu unserer Cookie-Richtlinie und Ihren Wahlmöglichkeiten <a class="cc__link" href="https://www.swissdefibrillator.com/de/kontakt">kontaktieren Sie uns</a> bitte.',
            },
          ],
        },
      },
      en: {
        consentModal: {
          title: "Welcome to Swissdefibrillator!",
          description:
            "We use cookies to enhance your browsing experience and provide basic website analytics. By clicking 'Accept All', you consent to our use of cookies. You can manage your preferences or learn more by clicking 'Manage Preferences'.",
          acceptAllBtn: "Accept All",
          acceptNecessaryBtn: "Reject All",
          showPreferencesBtn: "Manage Preferences",
          footer:
            '<a href="https://www.swissdefibrillator.com/privacy-policy">Privacy Policy</a>\n<a href="https://www.swissdefibrillator.com/terms-and-conditions">Terms and Conditions</a>',
        },
        preferencesModal: {
          title: "Cookie Preferences",
          acceptAllBtn: "Accept All",
          acceptNecessaryBtn: "Reject All",
          savePreferencesBtn: "Save Preferences",
          closeIconLabel: "Close",
          serviceCounterLabel: "Service",
          sections: [
            {
              title: "Cookie Usage",
              description:
                "We use cookies to improve your experience on our website and provide basic analytics. You can customize your cookie preferences below.",
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "These cookies are essential for the proper functioning of our website. They enable core functionality and security features.",
              linkedCategory: "necessary",
            },
            {
              title: "Functionality Cookies",
              description:
                "These cookies enhance the functionality of our website by remembering your preferences and providing personalized features.",
              linkedCategory: "functionality",
            },
            {
              title: "More Information",
              description:
                'For any questions regarding our cookie policy and your choices, please <a class="cc__link" href="https://www.swissdefibrillator.com/contact">contact us</a>.',
            },
          ],
        },
      },
      fr: {
        consentModal: {
          title: "Bienvenue chez Swissdefibrillator!",
          description:
            "Nous utilisons des cookies pour améliorer votre expérience de navigation et fournir des analyses de base du site Web. En cliquant sur 'Tout accepter', vous consentez à notre utilisation des cookies. Vous pouvez gérer vos préférences ou en savoir plus en cliquant sur 'Gérer les préférences'.",
          acceptAllBtn: "Tout accepter",
          acceptNecessaryBtn: "Tout rejeter",
          showPreferencesBtn: "Gérer les préférences",
          footer:
            '<a href="https://www.swissdefibrillator.com/fr/politique-de-confidentialite">Politique de confidentialité</a>\n<a href="https://www.swissdefibrillator.com/fr/conditions-generales">Conditions générales</a>',
        },
        preferencesModal: {
          title: "Préférences de cookies",
          acceptAllBtn: "Tout accepter",
          acceptNecessaryBtn: "Tout rejeter",
          savePreferencesBtn: "Enregistrer les préférences",
          closeIconLabel: "Fermer",
          serviceCounterLabel: "Service",
          sections: [
            {
              title: "Utilisation des cookies",
              description:
                "Nous utilisons des cookies pour améliorer votre expérience sur notre site Web et fournir des analyses de base. Vous pouvez personnaliser vos préférences de cookies ci-dessous.",
            },
            {
              title:
                'Cookies strictement nécessaires <span class="pm__badge">Toujours activé</span>',
              description:
                "Ces cookies sont essentiels au bon fonctionnement de notre site Web. Ils activent les fonctionnalités de base et les fonctions de sécurité.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookies fonctionnels",
              description:
                "Ces cookies améliorent la fonctionnalité de notre site Web en mémorisant vos préférences et en fournissant des fonctionnalités personnalisées.",
              linkedCategory: "functionality",
            },
            {
              title: "Plus d'informations",
              description:
                'Pour toute question concernant notre politique en matière de cookies et vos choix, veuillez <a class="cc__link" href="https://www.swissdefibrillator.com/fr/contact">nous contacter</a>.',
            },
          ],
        },
      },
    },
  },
});

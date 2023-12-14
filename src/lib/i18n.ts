import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

import en from "./lang/en.json";
import fr from "./lang/fr.json";
import de from "./lang/de.json";

addMessages("en", en);
addMessages("fr", fr);
addMessages("de", de);

const navigatorLocale = getLocaleFromNavigator();
let matchedLocale: string | undefined = undefined;

if (navigatorLocale) {
  const baseLocale = navigatorLocale.substring(0, 2);
  if (["en", "fr", "de"].includes(baseLocale)) {
    matchedLocale = baseLocale;
  }
}

init({
  fallbackLocale: "en",
  initialLocale: matchedLocale,
});

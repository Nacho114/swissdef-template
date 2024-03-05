import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from './lang/en.json';
import fr from './lang/fr.json';
import de from './lang/de.json';

const navigatorLocale = getLocaleFromNavigator();
const matchedLocale = navigatorLocale?.match(/^(en|fr|de)/)?.[0];

addMessages('en', en);
addMessages('fr', fr);
addMessages('de', de);

init({
  fallbackLocale: 'en',
  initialLocale: matchedLocale || 'en',
});

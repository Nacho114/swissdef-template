import {  addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './lang/en.json';
import fr from './lang/fr.json';
import de from './lang/de.json';

addMessages('en', en);
addMessages('fr', fr);
addMessages('de', de);

const navigatorLocale = getLocaleFromNavigator();
let matchedLocale = undefined;

if (navigatorLocale) {
  const match = /^(en|fr|de)/.exec(navigatorLocale);
  if (match) {
    matchedLocale = match[0];
  }
}

init({
  fallbackLocale: 'en',
  initialLocale: matchedLocale,
});


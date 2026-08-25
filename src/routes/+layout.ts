import "$lib/i18n";
import { locale, waitLocale } from "svelte-i18n";
import { browser } from "$app/environment";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params }) => {
  if (params.lang) {
    // URL prefix wins, on server and client alike
    locale.set(params.lang);
  } else if (!browser) {
    // Unprefixed URLs render English on the server; in the browser the
    // navigator-detected locale from $lib/i18n's init is kept (existing UX)
    locale.set("en");
  }
  await waitLocale();
};

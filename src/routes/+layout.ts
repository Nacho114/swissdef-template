import "$lib/i18n";
import { locale, waitLocale } from "svelte-i18n";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params }) => {
  // The URL determines the language on both the server and the client.
  locale.set(params.lang ?? "en");
  await waitLocale();
};

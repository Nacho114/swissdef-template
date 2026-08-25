import type { Handle } from "@sveltejs/kit";

// Fill the %lang% placeholder in app.html with the URL's language
export const handle: Handle = async ({ event, resolve }) => {
  const lang = event.params.lang ?? "en";
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", lang),
  });
};

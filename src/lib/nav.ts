import { derived } from "svelte/store";
import { page } from "$app/stores";

// Single source of truth for the site's languages. English is served at the
// unprefixed URL; the others live under /fr, /de, /it.
export const LANGS = ["en", "fr", "de", "it"];
const DEFAULT_LANG = "en";
export const PREFIXED_LANGS = LANGS.filter((l) => l !== DEFAULT_LANG);

// "/fr/products" -> "/products"; "/fr" -> "/"; "/products" -> "/products"
export const stripLang = (pathname: string): string => {
  for (const lang of PREFIXED_LANGS) {
    if (pathname === `/${lang}`) return "/";
    if (pathname.startsWith(`/${lang}/`))
      return pathname.slice(lang.length + 1);
  }
  return pathname;
};

// ("/products", "fr") -> "/fr/products"; ("/", "fr") -> "/fr"; english stays unprefixed
export const withLang = (path: string, lang: string | undefined): string => {
  if (!lang || lang === DEFAULT_LANG) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
};

// $localize("/products") keeps the current URL's language prefix on internal links
export const localize = derived(page, ($page) => {
  return (path: string) => withLang(path, $page.params.lang);
});

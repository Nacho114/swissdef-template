import { derived } from "svelte/store";
import { page } from "$app/stores";

export const LANGS = ["en", "fr", "de", "it"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "en";

const PREFIXED_LANGS: Lang[] = ["fr", "de", "it"];

// "/fr/products" -> "/products"; "/fr" -> "/"; "/products" -> "/products"
export const stripLang = (pathname: string): string => {
  for (const lang of PREFIXED_LANGS) {
    if (pathname === `/${lang}`) return "/";
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
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

import type { RequestHandler } from "./$types";
import { products } from "$lib/products";
import { trainings } from "$lib/training";
import { maintenances } from "$lib/maintenance";

const ORIGIN = "https://www.swissdefibrillator.ch";

const staticPages = [
  "/",
  "/products",
  "/accessories",
  "/training",
  "/maintenance",
  "/contact",
  "/terms_and_conditions",
  "/warranty_and_returns",
  "/privacy_policy",
];

// English is served unprefixed; the other languages live under /fr, /de, /it
const langPrefixes = ["", "/fr", "/de", "/it"];

export const GET: RequestHandler = () => {
  const paths = [
    ...staticPages,
    ...products.map((p) => `/products/${p.slug}`),
    ...trainings.map((t) => `/training/${t.slug}`),
    ...maintenances.map((m) => `/maintenance/${m.slug}`),
  ];

  const urls = langPrefixes.flatMap((prefix) =>
    paths.map((p) => `${ORIGIN}${prefix}${p === "/" ? (prefix ? "" : "/") : p}`),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=3600",
    },
  });
};

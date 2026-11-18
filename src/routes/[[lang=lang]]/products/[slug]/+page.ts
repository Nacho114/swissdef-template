import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { products } from "$lib/products";

export const load: PageLoad = async ({ params, fetch }) => {
  const p = products.find((p) => p.slug === params.slug);
  if (p != undefined) {
    const response = await fetch(
      `/markdown/products/${p.slug}/info_${params.lang ?? "en"}.md`,
    );
    if (!response.ok) throw error(404, "Product details not found");
    return { ...p, markdown: await response.text() };
  }

  throw error(404, "Not found");
};

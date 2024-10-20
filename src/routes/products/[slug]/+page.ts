import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { products } from "$lib/products";

export const load: PageLoad = ({ params }) => {
  const p = products.find((p) => p.slug === params.slug);
  if (p != undefined) {
    return p;
  }

  throw error(404, "Not found");
};

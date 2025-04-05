import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { maintenances } from "$lib/maintenance";

export const load: PageLoad = ({ params }) => {
  const p = maintenances.find((p) => p.slug === params.slug);
  if (p != undefined) {
    return p;
  }

  throw error(404, "Not found");
};

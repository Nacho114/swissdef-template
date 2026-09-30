import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { maintenances } from "$lib/maintenance";

export const load: PageLoad = async ({ params, fetch }) => {
  const p = maintenances.find((p) => p.slug === params.slug);
  if (p != undefined) {
    const response = await fetch(
      `/markdown/maintenance/${p.slug}_${params.lang || "en"}.md`,
    );
    if (!response.ok) throw error(404, "Service details not found");
    return { ...p, markdown: await response.text() };
  }

  throw error(404, "Not found");
};

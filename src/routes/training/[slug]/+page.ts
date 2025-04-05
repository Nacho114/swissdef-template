import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { trainings } from "$lib/training";

export const load: PageLoad = ({ params }) => {
  const p = trainings.find((p) => p.slug === params.slug);
  if (p != undefined) {
    return { data: p };
  }

  throw error(404, "Not found");
};

import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { trainings } from "$lib/training";

export const load: PageLoad = async ({ params, fetch }) => {
  const training = trainings.find((item) => item.slug === params.slug);
  if (!training) throw error(404, "Not found");
  let markdown = "";
  if (!["basic", "lite"].includes(training.slug)) {
    const response = await fetch(
      `/markdown/training/${training.slug}_${params.lang ?? "en"}.md`,
    );
    if (!response.ok) throw error(500, "Course content unavailable");
    markdown = await response.text();
  }
  return { ...training, markdown };
};

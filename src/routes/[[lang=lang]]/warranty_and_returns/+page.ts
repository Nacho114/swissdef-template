import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
  const response = await fetch(
    `/markdown/warranty_and_returns/doc_${params.lang ?? "en"}.md`,
  );
  if (!response.ok) throw error(404, "Policy not found");
  const markdown = await response.text();
  const title = markdown.split("\n", 1)[0].replace(/^# /, "").trim();
  return { markdown, title };
};

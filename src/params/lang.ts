import type { ParamMatcher } from "@sveltejs/kit";
import { PREFIXED_LANGS } from "$lib/nav";

export const match: ParamMatcher = (param) => {
  return PREFIXED_LANGS.includes(param);
};

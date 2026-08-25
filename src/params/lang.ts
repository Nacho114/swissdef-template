import type { ParamMatcher } from "@sveltejs/kit";

// English lives at the unprefixed URL; only these prefixes are valid routes
export const match: ParamMatcher = (param) => {
  return ["fr", "de", "it"].includes(param);
};

import * as universal from '../entries/pages/products/_slug_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/products/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/4.78b18481.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/products.4f1b1c56.js","_app/immutable/chunks/scheduler.77b7f510.js","_app/immutable/chunks/index.42ca7bc2.js","_app/immutable/chunks/runtime.esm.981090a6.js","_app/immutable/chunks/index.1993e28c.js"];
export const stylesheets = [];
export const fonts = [];

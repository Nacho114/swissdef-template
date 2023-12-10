

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.85fc482c.js","_app/immutable/chunks/scheduler.77b7f510.js","_app/immutable/chunks/index.42ca7bc2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/products.4f1b1c56.js","_app/immutable/chunks/runtime.esm.981090a6.js","_app/immutable/chunks/index.1993e28c.js"];
export const stylesheets = [];
export const fonts = [];

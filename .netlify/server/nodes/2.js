

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.06d4288c.js","_app/immutable/chunks/scheduler.77b7f510.js","_app/immutable/chunks/index.42ca7bc2.js","_app/immutable/chunks/runtime.esm.981090a6.js","_app/immutable/chunks/index.1993e28c.js","_app/immutable/chunks/container.a7bbe89c.js"];
export const stylesheets = ["_app/immutable/assets/2.e5616edf.css","_app/immutable/assets/container.910eb32b.css"];
export const fonts = [];

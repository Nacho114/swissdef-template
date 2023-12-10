

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b592221e.js","_app/immutable/chunks/scheduler.77b7f510.js","_app/immutable/chunks/index.42ca7bc2.js","_app/immutable/chunks/singletons.cd5def43.js","_app/immutable/chunks/index.1993e28c.js"];
export const stylesheets = [];
export const fonts = [];

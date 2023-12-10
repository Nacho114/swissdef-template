

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/training/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.681cc202.js","_app/immutable/chunks/scheduler.77b7f510.js","_app/immutable/chunks/index.42ca7bc2.js"];
export const stylesheets = [];
export const fonts = [];

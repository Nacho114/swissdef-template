import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const container_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1jzt3m5{padding-left:var(--main-padding-left);padding-right:var(--main-padding-right);@media screen and (max-width: 600px) {\n      padding-left: 0;\n      padding-right: 0;\n      text-align: center; /* Centers text and inline elements */\n      display: flex;\n      flex-direction: column;\n      align-items: center; /* Centers block-level elements */\n    }}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  return `<div class="container svelte-1jzt3m5"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Container as C
};

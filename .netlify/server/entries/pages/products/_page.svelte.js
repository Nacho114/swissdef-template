import { c as create_ssr_component, b as subscribe, d as each, g as escape } from "../../../chunks/ssr.js";
import { p as products } from "../../../chunks/products.js";
import { c as $format } from "../../../chunks/runtime.esm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe__();
  return `<ul>${each(products, ({ slug }) => {
    return `<li><a href="${"/products/" + escape(slug, true)}">${escape($_(slug + "_title"))}</a></li>`;
  })}</ul>`;
});
export {
  Page as default
};

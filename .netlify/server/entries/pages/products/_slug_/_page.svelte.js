import { c as create_ssr_component, b as subscribe, g as escape } from "../../../../chunks/ssr.js";
import { c as $format } from "../../../../chunks/runtime.esm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe__();
  return `<h1>${escape(data.slug + "_title")}</h1> <p>${escape($_(data.slug + "_summary"))}</p> <span class="welcome"><picture><img src="${"/assets/products/" + escape(data.img, true) + ".jpg"}" alt="info info"></picture></span>`;
});
export {
  Page as default
};

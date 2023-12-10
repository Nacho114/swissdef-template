import { c as create_ssr_component, g as escape, a as spread, e as escape_object, b as subscribe, v as validate_component, f as add_attribute } from "../../chunks/ssr.js";
import { c as $format } from "../../chunks/runtime.esm.js";
import { C as Container } from "../../chunks/container.js";
const button_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".appointment-btn.svelte-uvpxl6{background-color:#d45a4d;color:#ffffff;font-size:16px;padding:12px 24px;border-radius:25px;border:none;cursor:pointer;transition:background-color 0.3s;display:inline-block;text-align:center;font-weight:500;white-space:nowrap}.appointment-btn.svelte-uvpxl6:hover{background-color:#bf4e44}.appointment-btn.svelte-uvpxl6:focus{outline:none}.appointment-btn.outlined.svelte-uvpxl6{background-color:transparent;color:#000000;border:2px solid #d45a4d}.appointment-btn.outlined.svelte-uvpxl6:hover{background-color:#d45a4d;color:#ffffff}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOutlined = false } = $$props;
  if ($$props.isOutlined === void 0 && $$bindings.isOutlined && isOutlined !== void 0)
    $$bindings.isOutlined(isOutlined);
  $$result.css.add(css$5);
  return `<button class="${"appointment-btn " + escape(isOutlined ? "outlined" : "", true) + " svelte-uvpxl6"}">${slots.default ? slots.default({}) : ``} </button>`;
});
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M10.586 6.343L12 4.93L19.071 12L12 19.071l-1.414-1.414L16.243 12l-5.657-5.657Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const landing_header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".landing-header.svelte-2a29bz.svelte-2a29bz{padding-top:30px;display:flex;align-items:center;justify-content:center;gap:1rem}.landing-header.svelte-2a29bz h1.svelte-2a29bz{font-size:4vw;max-width:90%;margin-bottom:20px}.landing-header.svelte-2a29bz p.svelte-2a29bz{font-weight:50;font-size:1.3vw;margin-bottom:20px}.subtitle.svelte-2a29bz.svelte-2a29bz{color:Var(--global-color-gray-light)}.header-text.svelte-2a29bz.svelte-2a29bz{flex:1;text-align:left;line-height:1.1}.header-image.svelte-2a29bz.svelte-2a29bz{flex:1;padding-right:20px;max-width:50%}.header-image.svelte-2a29bz img.svelte-2a29bz{width:100%;height:auto}.button.svelte-2a29bz.svelte-2a29bz{display:flex;align-items:center;gap:4px;font-size:1.3vw}",
  map: null
};
const Landing_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css$4);
  $$unsubscribe__();
  return `${validate_component(Container, "Container").$$render($$result, { style: "background-color: #F2EEF5;" }, {}, {
    default: () => {
      return `<div class="landing-header svelte-2a29bz"><div class="header-text svelte-2a29bz"><h1 class="svelte-2a29bz">${escape($_("landing_header_title"))}</h1> <p class="subtitle svelte-2a29bz" data-svelte-h="svelte-2zjrs5">One life-saving device at a time</p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="button svelte-2a29bz">Book an appointment
          ${validate_component(Chevron_right, "ChevronRight").$$render($$result, {}, {}, {})}</div>`;
        }
      })}</div> <div class="header-image svelte-2a29bz" data-svelte-h="svelte-jfr0ct"><img src="/assets/home/phillips_hs1_home.png" alt="info info" class="svelte-2a29bz"></div></div>`;
    }
  })}`;
});
const trusted_brands_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".trusted-brands-section.svelte-6oc6zd.svelte-6oc6zd{background-color:#f5f5f5;padding:2rem;padding-bottom:4rem;text-align:center}h2.svelte-6oc6zd.svelte-6oc6zd{font-weight:400;color:var(--global-color-gray);font-size:1.2rem;margin-bottom:1rem}.brand-logos.svelte-6oc6zd.svelte-6oc6zd{display:flex;justify-content:center;gap:2rem;margin-top:1.4rem}.brand-logos.svelte-6oc6zd img.svelte-6oc6zd{max-height:60px}",
  map: null
};
const Trusted_brands = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return ` <div class="trusted-brands-section svelte-6oc6zd" data-svelte-h="svelte-1yv9at6"><h2 class="svelte-6oc6zd">Trusted By World’s Most Favourite Brands</h2> <div class="brand-logos svelte-6oc6zd"><img class="logo svelte-6oc6zd" src="/assets/home/clients/ibis.png" alt="Novotel Logo"> <img class="logo svelte-6oc6zd" src="/assets/home/clients/novotel.png" alt="Novotel Logo"> <img class="logo svelte-6oc6zd" src="/assets/home/clients/cdf-logo.png" alt="Novotel Logo"> <img class="logo svelte-6oc6zd" src="/assets/home/clients/logitech.png" alt="Novotel Logo"> </div> </div>`;
});
const service_card_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.card.svelte-1pqy07u.svelte-1pqy07u{flex:1;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;overflow:hidden;cursor:pointer}.card.svelte-1pqy07u img.svelte-1pqy07u{width:90%;height:auto;position:relative;z-index:1}.card.svelte-1pqy07u.svelte-1pqy07u::before{width:90%;z-index:2;content:"";position:absolute;top:0;left:1vw;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.4);opacity:0;transition:opacity 0.3s;pointer-events:none}.card.svelte-1pqy07u.svelte-1pqy07u:hover::before{opacity:1}.card-title.svelte-1pqy07u.svelte-1pqy07u{position:absolute;top:35%;left:50%;transform:translate(-50%, -50%);color:white;font-size:1.7vw;transition:top 0.3s}.card-title.svelte-1pqy07u.svelte-1pqy07u{z-index:3}.card-summary.svelte-1pqy07u.svelte-1pqy07u{z-index:3;position:absolute;bottom:0;left:50%;transform:translateX(-50%) translateY(100%);color:white;font-size:1.4vw;opacity:0;transition:transform 0.3s,\n      opacity 0.3s}.card.svelte-1pqy07u:hover .card-title.svelte-1pqy07u{top:30%}.card.svelte-1pqy07u:hover .card-summary.svelte-1pqy07u{transform:translateX(-50%) translateY(0);opacity:1}',
  map: null
};
const Service_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { title } = $$props;
  let { summary } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  $$result.css.add(css$2);
  return `<div class="card svelte-1pqy07u"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="svelte-1pqy07u"> <h3 class="card-title svelte-1pqy07u">${escape(title)}</h3> <p class="card-summary svelte-1pqy07u">${escape(summary)}</p> </div>`;
});
const services_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".services-section.svelte-167yogh.svelte-167yogh{display:flex}.card-section.svelte-167yogh.svelte-167yogh{flex:2;display:flex}.cta.svelte-167yogh.svelte-167yogh{flex:1;padding-left:3vw;padding-right:3vw;padding-top:2vw}.cta.svelte-167yogh p.svelte-167yogh{font-size:1.3vw;font-weight:100;color:Var(--global-color-gray-light);margin-bottom:1rem}",
  map: null
};
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="services-section svelte-167yogh"><div class="card-section svelte-167yogh">${validate_component(Service_card, "ServiceCard").$$render(
    $$result,
    {
      src: "/assets/home/training.png",
      summary: "Hands-on sessions to master defibrillator usage.",
      alt: "Training",
      title: "TRAINING"
    },
    {},
    {}
  )} ${validate_component(Service_card, "ServiceCard").$$render(
    $$result,
    {
      src: "/assets/home/maintenance.png",
      summary: "Regular checks to ensure device reliability.",
      alt: "Training",
      title: "MAINTENANCE"
    },
    {},
    {}
  )} ${validate_component(Service_card, "ServiceCard").$$render(
    $$result,
    {
      src: "/assets/home/defibrillator.png",
      summary: "Life-saving devices for cardiac emergencies.",
      alt: "Training",
      title: "DEFIBRILLATORS"
    },
    {},
    {}
  )}</div> <div class="cta svelte-167yogh"><h1 data-svelte-h="svelte-1w0dnel">All In One Place</h1> <p class="svelte-167yogh" data-svelte-h="svelte-d0ieqt">We offer a vibe array of services to suit your needs</p> ${validate_component(Button, "Button").$$render($$result, { isOutlined: true }, {}, {
    default: () => {
      return `Learn More`;
    }
  })}</div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".services.svelte-9ov1w3{padding-top:3vw}.statistics.svelte-9ov1w3{padding-top:3vw;padding-bottom:3vw;display:block;margin:0 auto;width:95vw;height:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Landing_header, "LandingHeader").$$render($$result, {}, {}, {})} ${validate_component(Trusted_brands, "TrustedBrands").$$render($$result, {}, {}, {})} <div class="services svelte-9ov1w3">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Services, "Services").$$render($$result, {}, {}, {})}`;
    }
  })}</div> <img class="statistics svelte-9ov1w3" src="/assets/home/statistics.png" alt="info info">`;
});
export {
  Page as default
};

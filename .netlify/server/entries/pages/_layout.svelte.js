import { c as create_ssr_component, a as spread, e as escape_object, b as subscribe, v as validate_component, m as missing_component, d as each, f as add_attribute, g as escape, n as null_to_empty } from "../../chunks/ssr.js";
import { a as addMessages, g as getLocaleFromNavigator, i as init, $ as $locale, b as $locales } from "../../chunks/runtime.esm.js";
import { C as Container } from "../../chunks/container.js";
const styles = "";
const HOME$2 = "-----HOME SECTION-------";
const landing_header_title$2 = "Fight Against Cardiac Arrest";
const phillips_hs1_summary$2 = "hs1 en";
const phillips_frx_summary$2 = "frx en";
const first_aid_kit_summary$2 = "first aid en";
const en = {
  HOME: HOME$2,
  landing_header_title: landing_header_title$2,
  phillips_hs1_summary: phillips_hs1_summary$2,
  phillips_frx_summary: phillips_frx_summary$2,
  first_aid_kit_summary: first_aid_kit_summary$2
};
const HOME$1 = "-----HOME SECTION-------";
const landing_header_title$1 = "Lutte contre l'arrêt cardiaque";
const phillips_hs1_summary$1 = "hs1 fr";
const phillips_frx_summary$1 = "frx fr";
const first_aid_kit_summary$1 = "first aid fr";
const fr = {
  HOME: HOME$1,
  landing_header_title: landing_header_title$1,
  phillips_hs1_summary: phillips_hs1_summary$1,
  phillips_frx_summary: phillips_frx_summary$1,
  first_aid_kit_summary: first_aid_kit_summary$1
};
const HOME = "-----HOME SECTION-------";
const landing_header_title = "Kampf gegen den Herzstillstand";
const phillips_hs1_summary = "hs1 de";
const phillips_frx_summary = "frx de";
const first_aid_kit_summary = "first aid de";
const de = {
  HOME,
  landing_header_title,
  phillips_hs1_summary,
  phillips_frx_summary,
  first_aid_kit_summary
};
addMessages("en", en);
addMessages("fr", fr);
addMessages("de", de);
const navigatorLocale = getLocaleFromNavigator();
let matchedLocale = void 0;
if (navigatorLocale) {
  const match = /^(en|fr|de)/.exec(navigatorLocale);
  if (match) {
    matchedLocale = match[0];
  }
}
init({
  fallbackLocale: "en",
  initialLocale: matchedLocale
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="177" height="67" viewBox="0 0 177 67" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.5438 37.6936L21.6924 2.50564L19.8117 24.9375L19.3433 24.9652L18.3085 19.6722L16.0859 25.1839L14.3175 15.5433L12.5107 18.8373H1.21406V18.337H12.2359L14.5445 14.1352L16.258 23.4816L18.4686 18L19.4819 23.1925L21.3961 0.328075L21.8693 0.312988L26.7135 35.4557L28.5202 12.6542L28.9886 12.6265L30.8909 22.6996L32.3941 18.6689L47.438 18.7518L47.4356 19.2522L32.7167 19.1718L30.7403 24.4673L28.8524 14.4671L27.0146 37.6785L26.5438 37.6936Z" fill="url(#paint0_linear_104_1210)"></path><path d="M41.4993 25.7094C31.799 18.5732 24.2758 27.7713 23.5207 28.7444C22.7679 27.7763 15.2447 18.5782 5.54203 25.7094C-4.66729 33.2252 1.9095 43.2505 4.23719 45.7022C5.95786 47.5076 22.3783 64.9054 23.5207 66.1174C24.663 64.9054 41.0859 47.5101 42.8065 45.7022C45.1414 43.2505 51.711 33.2252 41.4993 25.7094Z" fill="#DA291C"></path><path d="M55.1834 30.8995C55.1976 31.3283 55.3287 31.7438 55.561 32.0964C55.9402 32.5993 56.6014 32.8507 57.5446 32.8507C58.0604 32.8624 58.5703 32.7325 59.0239 32.4736C59.2244 32.3627 59.3908 32.1942 59.5038 31.9876C59.6168 31.7811 59.6716 31.545 59.6619 31.3068C59.6656 31.1204 59.62 30.9365 59.5301 30.7758C59.4402 30.615 59.3096 30.4837 59.1529 30.3966C58.7395 30.2003 58.3067 30.0527 57.8624 29.9566L56.6675 29.6448C56.0752 29.516 55.5048 29.2939 54.9755 28.986C54.6766 28.8136 54.4282 28.5584 54.2572 28.2482C54.0861 27.938 53.999 27.5844 54.0052 27.2258C53.993 26.8207 54.0688 26.418 54.2271 26.0484C54.3853 25.6789 54.6216 25.3523 54.9181 25.0935C55.5283 24.5504 56.348 24.2788 57.3773 24.2788C58.7219 24.2788 59.693 24.6887 60.2905 25.5084C60.6491 25.9872 60.8406 26.581 60.8329 27.1906H59.4325C59.4032 26.8407 59.2769 26.5076 59.0693 26.2326C58.7203 25.8252 58.1133 25.6216 57.2578 25.6216C56.8009 25.5894 56.3459 25.7071 55.9553 25.9585C55.8163 26.0556 55.7028 26.1881 55.6255 26.3438C55.5482 26.4994 55.5096 26.6731 55.5132 26.8486C55.5155 27.0504 55.571 27.2475 55.6735 27.418C55.776 27.5885 55.9216 27.7257 56.0939 27.8142C56.4041 27.992 56.7375 28.1208 57.0833 28.1964L58.0823 28.4479C59.1672 28.7194 59.8945 28.9818 60.2642 29.2349C60.8409 29.6355 61.1293 30.2625 61.1293 31.1157C61.1306 31.5195 61.0506 31.919 60.8945 32.2878C60.7383 32.6567 60.5097 32.9865 60.2235 33.2556C59.6213 33.8557 58.7028 34.1558 57.4681 34.1558C56.1393 34.1558 55.1985 33.8423 54.6457 33.2154C54.089 32.5807 53.7735 31.7529 53.7591 30.8894L55.1834 30.8995Z" fill="#565758"></path><path d="M63.4211 24.5327L65.1179 31.8449L66.8386 24.5327H68.5115L70.2417 31.8021L72.046 24.5327H73.5277L70.9658 33.8112H69.4267L67.6296 26.6273L65.8922 33.8112H64.3508L61.808 24.5327H63.4211Z" fill="#565758"></path><path d="M74.9138 21.0828H76.4218V22.8429H74.9138V21.0828ZM74.9138 24.5754H76.4218V33.8112H74.9138V24.5754Z" fill="#565758"></path><path d="M79.5429 30.8995C79.5571 31.3283 79.6881 31.7437 79.9205 32.0964C80.2996 32.5993 80.9608 32.8507 81.904 32.8507C82.4199 32.8624 82.9298 32.7324 83.3833 32.4735C83.5838 32.3627 83.7503 32.1942 83.8633 31.9876C83.9762 31.781 84.0311 31.5449 84.0214 31.3068C84.0251 31.1204 83.9795 30.9365 83.8896 30.7757C83.7997 30.615 83.6691 30.4837 83.5124 30.3966C83.0989 30.2003 82.6661 30.0527 82.2219 29.9565L81.0269 29.6447C80.4359 29.5131 79.8671 29.2885 79.3397 28.9784C79.0408 28.806 78.7924 28.5509 78.6214 28.2406C78.4504 27.9304 78.3633 27.5768 78.3695 27.2182C78.3572 26.8131 78.4331 26.4104 78.5913 26.0409C78.7495 25.6713 78.9859 25.3447 79.2824 25.0859C79.8926 24.5428 80.7123 24.2712 81.7415 24.2712C83.0878 24.2712 84.0588 24.6811 84.6547 25.5008C85.0134 25.9796 85.2049 26.5735 85.1972 27.183H83.7967C83.7675 26.8331 83.6412 26.5 83.4335 26.225C83.0846 25.8177 82.4776 25.614 81.622 25.614C81.1652 25.5818 80.7101 25.6996 80.3196 25.9509C80.1805 26.048 80.067 26.1805 79.9897 26.3362C79.9124 26.4918 79.8738 26.6655 79.8774 26.8411C79.8797 27.0428 79.9352 27.2399 80.0377 27.4104C80.1403 27.5809 80.2858 27.7181 80.4582 27.8066C80.7684 27.9844 81.1017 28.1132 81.4476 28.1888L82.4465 28.4403C83.5315 28.7119 84.2588 28.9742 84.6284 29.2273C85.2036 29.628 85.4919 30.2549 85.4935 31.1082C85.4949 31.5119 85.4148 31.9114 85.2587 32.2803C85.1026 32.6491 84.8739 32.979 84.5878 33.248C83.9855 33.8481 83.0671 34.1482 81.8323 34.1482C80.5036 34.1482 79.5628 33.8347 79.0099 33.2078C78.4532 32.5732 78.1377 31.7454 78.1233 30.8819L79.5429 30.8995Z" fill="#565758"></path><path d="M87.9742 30.8994C87.9891 31.3285 88.121 31.744 88.3541 32.0963C88.7333 32.5992 89.3945 32.8507 90.3377 32.8507C90.8535 32.8622 91.3633 32.7322 91.817 32.4735C92.0175 32.3627 92.184 32.1941 92.2969 31.9876C92.4099 31.781 92.4648 31.5449 92.4551 31.3068C92.4588 31.1203 92.4131 30.9365 92.3232 30.7757C92.2334 30.615 92.1028 30.4837 91.946 30.3965C91.5324 30.2007 91.0997 30.0532 90.6555 29.9565L89.4606 29.6447C88.8692 29.5155 88.2996 29.2935 87.771 28.9859C87.4718 28.814 87.2231 28.5589 87.052 28.2486C86.8809 27.9382 86.794 27.5845 86.8008 27.2258C86.7888 26.8231 86.8639 26.4229 87.0204 26.0553C87.1769 25.6877 87.4107 25.3622 87.7041 25.1035C88.3143 24.5604 89.1332 24.2888 90.1608 24.2888C91.5087 24.2888 92.4798 24.6987 93.074 25.5184C93.4334 25.9969 93.6257 26.5908 93.6189 27.2006H92.2161C92.1893 26.8505 92.0637 26.5169 91.8552 26.2426C91.5063 25.8352 90.9017 25.6316 90.0414 25.6316C89.5846 25.5997 89.1296 25.7174 88.7389 25.9685C88.6003 26.0661 88.4872 26.1987 88.41 26.3543C88.3327 26.5098 88.2938 26.6832 88.2968 26.8586C88.2993 27.0607 88.3551 27.258 88.4581 27.4285C88.5611 27.599 88.7071 27.736 88.8799 27.8242C89.1897 28.0029 89.5232 28.1317 89.8693 28.2064L90.8682 28.4579C91.9532 28.7294 92.6805 28.9918 93.0501 29.2449C93.6269 29.6455 93.9145 30.2725 93.9129 31.1258C93.9148 31.5294 93.8353 31.9288 93.6796 32.2977C93.5238 32.6666 93.2955 32.9965 93.0095 33.2656C92.4073 33.8657 91.4888 34.1658 90.254 34.1658C88.9253 34.1658 87.9845 33.8523 87.4317 33.2254C86.8758 32.59 86.5597 31.7628 86.5427 30.8994H87.9742Z" fill="#565758"></path><path d="M59.3656 41.7043C60.0114 42.09 60.5527 42.6432 60.9381 43.3111V36.3811H64.5969V55.9942H61.1006V53.9826C60.672 54.7538 60.0664 55.3996 59.3393 55.861C58.58 56.2769 57.7307 56.4771 56.8754 56.4418C55.2631 56.4418 53.9088 55.7562 52.8127 54.3849C51.7166 53.0137 51.1653 51.2536 51.1589 49.1045C51.1589 46.6269 51.7014 44.6781 52.7864 43.2583C53.8714 41.8384 55.3212 41.1276 57.1359 41.126C57.9145 41.1098 58.6834 41.3093 59.3656 41.7043ZM60.2522 52.0465C60.7828 51.2468 61.0488 50.2125 61.0504 48.9436C61.0504 47.1683 60.6242 45.8985 59.7719 45.1341C59.2642 44.6777 58.6161 44.4311 57.9484 44.4401C56.8921 44.4401 56.1178 44.8592 55.6255 45.6973C55.1046 46.6444 54.8479 47.7268 54.8847 48.8204C54.8847 50.1614 55.1356 51.2334 55.6375 52.0364C56.1393 52.8394 56.9009 53.2417 57.9221 53.2434C58.9434 53.245 59.7201 52.8461 60.2522 52.0465Z" fill="#565758"></path><path d="M75.5805 41.7645C76.5557 42.2254 77.385 42.9706 77.9704 43.9118C78.55 44.8111 78.9261 45.8382 79.0697 46.9142C79.1817 47.8699 79.2217 48.8334 79.1892 49.7958H69.1352C69.1894 51.2525 69.6673 52.2734 70.5691 52.8584C71.1695 53.2366 71.8603 53.426 72.5598 53.4041C73.1238 53.4515 73.6883 53.3178 74.1785 53.0206C74.6688 52.7234 75.0618 52.2767 75.3057 51.7395H78.9884C78.904 52.6011 78.4635 53.4795 77.6669 54.3747C76.4289 55.7845 74.6979 56.4902 72.4738 56.4919C70.7045 56.5158 68.9837 55.8837 67.6129 54.7066C66.2092 53.5147 65.5074 51.5769 65.5074 48.8931C65.5074 46.3786 66.1447 44.4508 67.4193 43.1097C68.6939 41.7686 70.3389 41.0981 72.3543 41.0981C73.4623 41.0784 74.5618 41.3055 75.5805 41.7645ZM70.1843 45.0333C69.6446 45.6552 69.3094 46.4434 69.2284 47.2813H75.4419C75.375 46.2755 75.0564 45.5111 74.486 44.988C73.8864 44.4548 73.1198 44.1752 72.3352 44.2035C71.4095 44.2102 70.6926 44.4902 70.1843 45.0434V45.0333Z" fill="#565758"></path><path d="M85.4218 36.1749L86.1818 36.2353V39.3256C85.9787 39.2979 85.6393 39.2803 85.1637 39.2652C84.6882 39.2501 84.356 39.3633 84.1743 39.5997C84.0003 39.8182 83.9048 40.0941 83.9043 40.3791V41.6037H86.2702V44.2817H83.9043V55.9892H80.3196V44.2817H78.2954V41.6037H80.2694V40.6708C80.2694 39.1169 80.5187 38.0465 81.0174 37.4598C81.54 36.5898 82.8018 36.1548 84.8029 36.1548C85.0299 36.1548 85.2378 36.1623 85.4218 36.1749Z" fill="#565758"></path><path d="M90.7607 39.7378H87.1019V36.2351H90.7607V39.7378ZM87.1019 41.4703H90.7607V55.989H87.1019V41.4703Z" fill="#565758"></path><path d="M104.741 43.2154C105.774 44.59 106.289 46.366 106.287 48.5436C106.287 50.7983 105.778 52.6674 104.76 54.151C103.742 55.6345 102.322 56.3796 100.499 56.3863C99.3545 56.3863 98.432 56.1349 97.739 55.6672C97.2072 55.2588 96.7498 54.7528 96.3887 54.1736V55.9991H92.8303V36.386H96.4389V43.3612C96.8403 42.7439 97.3566 42.2187 97.9564 41.8173C98.7097 41.3447 99.5775 41.1131 100.454 41.151C102.28 41.151 103.709 41.8391 104.741 43.2154ZM101.725 52.0589C102.243 51.2693 102.503 50.2308 102.504 48.9434C102.529 48.0732 102.399 47.2057 102.12 46.3862C101.642 45.1054 100.749 44.4659 99.4405 44.4676C98.1325 44.4693 97.226 45.0954 96.7209 46.3459C96.4399 47.1746 96.3102 48.0516 96.3385 48.9308C96.3385 50.173 96.6022 51.2031 97.1296 52.0212C97.6569 52.8392 98.4607 53.2474 99.5409 53.2457C99.9713 53.2624 100.398 53.1619 100.781 52.954C101.164 52.7461 101.489 52.4378 101.725 52.0589Z" fill="#565758"></path><path d="M115.166 41.1308L115.474 41.151V45.0409C115.247 45.0132 115.044 44.9956 114.867 44.9856C114.69 44.9755 114.544 44.9856 114.437 44.9856C112.985 44.9856 112.01 45.4834 111.512 46.4792C111.234 47.0374 111.096 47.8982 111.096 49.0616V56.0016H107.461V41.4703H110.904V43.9999C111.462 43.0343 111.947 42.373 112.36 42.0159C113.034 41.4225 113.91 41.125 114.989 41.1233C115.059 41.1233 115.118 41.1258 115.166 41.1308Z" fill="#565758"></path><path d="M120.003 39.7378H116.341V36.2351H120.003V39.7378ZM116.341 41.4703H120.003V55.989H116.341V41.4703Z" fill="#565758"></path><path d="M125.884 55.9892H122.275V36.356H125.884V55.9892Z" fill="#565758"></path><path d="M131.789 55.9892H128.181V36.356H131.789V55.9892Z" fill="#565758"></path><path d="M139.48 47.1582C139.969 47.1133 140.451 47.0017 140.913 46.8263C141.433 46.595 141.692 46.2345 141.69 45.7451C141.69 45.1516 141.492 44.7393 141.095 44.5129C140.545 44.2545 139.945 44.1381 139.343 44.1735C138.478 44.1735 137.866 44.3973 137.506 44.8398C137.226 45.2289 137.05 45.6886 136.994 46.1725H133.519C133.551 45.0436 133.908 43.9516 134.545 43.042C135.501 41.7646 137.145 41.1251 139.477 41.1234C140.877 41.0963 142.263 41.4204 143.521 42.0689C144.7 42.6992 145.289 43.8894 145.289 45.6394V52.3004C145.289 52.7605 145.289 53.3213 145.313 53.9775C145.305 54.3266 145.38 54.6722 145.531 54.9833C145.666 55.178 145.85 55.3302 146.061 55.4234V55.9816H142.13C142.022 55.7167 141.942 55.4401 141.891 55.1568C141.848 54.9054 141.814 54.6062 141.791 54.2768C141.285 54.8485 140.701 55.3375 140.058 55.7276C139.252 56.2085 138.339 56.455 137.412 56.4418C136.28 56.4846 135.173 56.0841 134.306 55.3178C133.487 54.5651 133.077 53.5015 133.077 52.1269C133.077 50.3416 133.736 49.0491 135.054 48.2495C135.775 47.8153 136.838 47.5052 138.242 47.3191L139.48 47.1582ZM141.685 48.9184C141.468 49.0669 141.237 49.1932 140.997 49.2955C140.682 49.4089 140.358 49.4931 140.029 49.547L139.207 49.7079C138.631 49.7871 138.072 49.9628 137.549 50.2284C137.273 50.3862 137.046 50.6238 136.895 50.913C136.744 51.2022 136.675 51.531 136.695 51.8603C136.695 52.5091 136.868 52.9768 137.216 53.2659C137.578 53.5588 138.024 53.7116 138.481 53.6984C139.26 53.7006 140.021 53.4494 140.66 52.9793C141.325 52.4998 141.669 51.6248 141.695 50.3541L141.685 48.9184Z" fill="#565758"></path><path d="M145.719 44.3167V41.6035H147.631V37.5552H151.202V41.6035H153.443V44.3167H151.202V51.9909C151.202 52.5844 151.273 52.9565 151.417 53.1023C151.56 53.2482 152 53.3211 152.734 53.3211C152.843 53.3211 152.958 53.3211 153.08 53.3211L153.443 53.301V56.1348L151.735 56.2027C150.028 56.2631 148.863 55.9521 148.238 55.2698C147.834 54.8357 147.631 54.1651 147.631 53.2582V44.3167H145.719Z" fill="#565758"></path><path d="M165.983 54.2138C164.818 55.7225 163.05 56.4769 160.677 56.4769C158.305 56.4769 156.537 55.7225 155.372 54.2138C154.21 52.7051 153.629 50.8838 153.627 48.7498C153.589 46.7769 154.206 44.8517 155.372 43.3059C156.538 41.772 158.307 41.0051 160.677 41.0051C163.048 41.0051 164.816 41.772 165.983 43.3059C167.15 44.8509 167.768 46.7764 167.73 48.7498C167.73 50.8787 167.147 52.7001 165.983 54.2138ZM163.096 52.1117C163.66 51.3246 163.944 50.2007 163.944 48.7473C163.944 47.2939 163.66 46.1724 163.096 45.3879C162.532 44.6034 161.719 44.2111 160.665 44.2111C159.611 44.2111 158.799 44.6034 158.228 45.3879C157.657 46.1724 157.375 47.2939 157.375 48.7473C157.375 50.2007 157.657 51.3246 158.228 52.1117C158.799 52.8987 159.609 53.296 160.665 53.296C161.722 53.296 162.532 52.9038 163.096 52.1117Z" fill="#565758"></path><path d="M176.682 41.1308L176.99 41.151V45.0409C176.766 45.0132 176.56 44.9956 176.386 44.9856C176.211 44.9755 176.063 44.9856 175.953 44.9856C174.503 44.9856 173.528 45.4834 173.028 46.4792C172.751 47.0374 172.612 47.8982 172.612 49.0616V56.0016H168.977V41.4703H172.421V43.9999C172.979 43.0343 173.464 42.373 173.879 42.0159C174.553 41.4225 175.432 41.1233 176.508 41.1233C176.573 41.1233 176.631 41.1258 176.682 41.1308Z" fill="#565758"></path><defs><linearGradient id="paint0_linear_104_1210" x1="1.21406" y1="19.0033" x2="47.438" y2="19.0033" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A3A4" stop-opacity="0"></stop><stop offset="0.5" stop-color="#A2A3A4"></stop><stop offset="1" stop-color="#A2A3A4" stop-opacity="0"></stop></linearGradient></defs></svg>`;
});
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const En = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 512 512" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<clipPath id="svgIDa"><circle cx="256" cy="256" r="256"/></clipPath><g clip-path="url(#svgIDa)"><path fill="#eee" d="m0 0l8 16l-8 15v16l32 65l-32 64v32l32 48l-32 48v32l32 64l-32 65v47l16-8l15 8h16l65-32l64 32h32l48-32l48 32h32l64-32l65 32h47l-8-15l8-16v-16l-32-65l32-64v-32l-32-48l32-48v-32l-32-64l32-65V0l-15 8l-16-8h-16l-65 32l-64-32h-32l-48 32l-48-32h-32l-64 32L47 0H0z"/><path fill="#0052b4" d="m47 0l129 129V0Zm289 0v129L465 0ZM0 47v129h129Zm512 0L383 176h129ZM0 336v129l129-129Zm383 0l129 129V336Zm-47 47v129h129zm-160 0L47 512h129Z"/><path fill="#d80027" d="M208 0v208H0v96h208v208h96V304h208v-96H304V0h-96z"/><path fill="#d80027" d="m336 336l176 176v-31L367 336Zm0-160L512 0h-31L336 145Zm-160 0L0 0v31l145 145zm0 160L0 512h31l145-145Z"/></g>`}<!-- HTML_TAG_END --></svg>`;
});
const De = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 512 512" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<mask id="circleFlagsDe0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsDe0)"><path fill="#ffda44" d="m0 345l256.7-25.5L512 345v167H0z"/><path fill="#d80027" d="m0 167l255-23l257 23v178H0z"/><path fill="#333" d="M0 0h512v167H0z"/></g>`}<!-- HTML_TAG_END --></svg>`;
});
const Fr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 512 512" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<mask id="circleFlagsFr0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsFr0)"><path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"/><path fill="#0052b4" d="M0 0h167v512H0z"/><path fill="#d80027" d="M345 0h167v512H345z"/></g>`}<!-- HTML_TAG_END --></svg>`;
});
const Nav_arrow_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 9l6 6l6-6"/>`}<!-- HTML_TAG_END --></svg>`;
});
const locale_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".flag.svelte-8p11r0{margin-right:8px;display:flex;align-items:center;width:30px;height:30px}.select-wrapper.svelte-8p11r0{position:relative;display:flex;align-items:center}.locale-select.svelte-8p11r0{background-color:white;appearance:none;outline:none;border:none;padding-right:24px;min-width:60px;cursor:pointer;font-size:1em;letter-spacing:0.1em;text-transform:uppercase}.dropdown-icon.svelte-8p11r0{position:absolute;right:5px;transform:translateY(5%);pointer-events:none;width:24px;height:24px}@media screen and (max-width: 600px){.locale-select.svelte-8p11r0{background-color:black;color:white}}",
  map: null
};
const Locale = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale$1, $$unsubscribe_locale;
  let $locales$1, $$unsubscribe_locales;
  $$unsubscribe_locale = subscribe($locale, (value) => $locale$1 = value);
  $$unsubscribe_locales = subscribe($locales, (value) => $locales$1 = value);
  const flags = { en: En, de: De, fr: Fr };
  let FlagComponent;
  $$result.css.add(css$5);
  FlagComponent = flags[$locale$1];
  $$unsubscribe_locale();
  $$unsubscribe_locales();
  return `<div class="select-wrapper svelte-8p11r0">${FlagComponent ? `<div class="flag svelte-8p11r0">${validate_component(FlagComponent || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``} <select class="locale-select svelte-8p11r0">${each($locales$1, (locale) => {
    return `<option${add_attribute("value", locale, 0)}>${escape(locale.toUpperCase())}</option>`;
  })}</select> <div class="dropdown-icon svelte-8p11r0">${validate_component(Nav_arrow_down, "NavArrowDown").$$render($$result, {}, {}, {})}</div> </div>`;
});
const header_mobile_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".mobile-header.svelte-11vj5yu.svelte-11vj5yu{display:flex;gap:30px;justify-content:center}.hamburger.svelte-11vj5yu.svelte-11vj5yu{cursor:pointer;margin-top:35px;transform:scale(1.3);color:var(--global-color-gray)}.side-menu.svelte-11vj5yu.svelte-11vj5yu{position:fixed;left:-60%;top:0;width:60%;height:100vh;background-color:black;color:white;transition:left 0.3s;z-index:100}.side-menu-content.svelte-11vj5yu.svelte-11vj5yu{display:flex;flex-direction:column;padding-top:30px;padding-left:30px;height:100%}.side-menu.open.svelte-11vj5yu.svelte-11vj5yu{left:0}.overlay.svelte-11vj5yu.svelte-11vj5yu{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.4);display:none;z-index:90}.overlay.show.svelte-11vj5yu.svelte-11vj5yu{display:block}.side-menu.svelte-11vj5yu nav.svelte-11vj5yu{width:100%}.side-menu.svelte-11vj5yu ul.svelte-11vj5yu{display:flex;flex-direction:column;gap:10px;list-style:none;padding:0;margin:0}.side-menu.svelte-11vj5yu a.svelte-11vj5yu{display:block;text-decoration:none;text-align:left;color:white;font-size:20px;transition:background-color 0.3s}.side-menu.svelte-11vj5yu a.svelte-11vj5yu:hover{background-color:#333}.locale.svelte-11vj5yu.svelte-11vj5yu{display:flex;justify-content:start;margin-top:50px}.menu-bottom-links.svelte-11vj5yu.svelte-11vj5yu{margin-top:auto;width:100%;text-align:center;padding-bottom:80px;display:flex;flex-direction:column;gap:15px}.menu-bottom-links.svelte-11vj5yu a.svelte-11vj5yu{display:block;text-decoration:none;color:white;font-size:12px}",
  map: null
};
const Header_mobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="mobile-header svelte-11vj5yu"><div class="hamburger svelte-11vj5yu" role="button" tabindex="0">${validate_component(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}</div> <a href="/">${validate_component(Logo, "LOGO").$$render($$result, {}, {}, {})}</a> <div class="${escape(null_to_empty("side-menu"), true) + " svelte-11vj5yu"}"><div class="side-menu-content svelte-11vj5yu"><nav class="svelte-11vj5yu"><ul class="svelte-11vj5yu"><li><a href="/" class="svelte-11vj5yu" data-svelte-h="svelte-75zy49">Home</a></li> <li><a href="/products" class="svelte-11vj5yu" data-svelte-h="svelte-ssw1qi">Products</a></li> <li><a href="/training" class="svelte-11vj5yu" data-svelte-h="svelte-2qc3be">Training</a></li></ul></nav> <div class="locale svelte-11vj5yu">${validate_component(Locale, "Locale").$$render($$result, {}, {}, {})}</div> <div class="menu-bottom-links svelte-11vj5yu"><a href="/contact" class="svelte-11vj5yu" data-svelte-h="svelte-yxh7eu">Contact Us</a> <a href="/warranty" class="svelte-11vj5yu" data-svelte-h="svelte-1791xkm">Warranty</a></div></div></div>  <div class="${escape(null_to_empty("overlay"), true) + " svelte-11vj5yu"}" role="button" tabindex="0"></div> </div>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.svelte-1rq7emz.svelte-1rq7emz{text-decoration:none;color:inherit;font-size:14px}.large-screen.svelte-1rq7emz.svelte-1rq7emz{display:grid;grid-template-columns:1fr 1fr 1fr;justify-content:space-between;align-items:center}ul.svelte-1rq7emz.svelte-1rq7emz{padding-inline-start:0}li.svelte-1rq7emz.svelte-1rq7emz{display:flex;gap:20px}nav.svelte-1rq7emz.svelte-1rq7emz{margin-top:10px}nav.svelte-1rq7emz a.svelte-1rq7emz:hover{text-decoration:underline;text-decoration-color:var(--global-color-primary)}.logo.svelte-1rq7emz.svelte-1rq7emz{display:flex;justify-content:center}.locale.svelte-1rq7emz.svelte-1rq7emz{display:flex;justify-content:end;margin-top:10px}.mobile-header.svelte-1rq7emz.svelte-1rq7emz{display:none}@media screen and (max-width: 600px){.large-screen.svelte-1rq7emz.svelte-1rq7emz{display:none}.mobile-header.svelte-1rq7emz.svelte-1rq7emz{display:block}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return ` <div class="large-screen svelte-1rq7emz"><nav class="svelte-1rq7emz" data-svelte-h="svelte-uxh6e7"><ul class="svelte-1rq7emz"><li class="svelte-1rq7emz"><a href="/" class="svelte-1rq7emz">Home</a> <a href="/products" class="svelte-1rq7emz">Products</a> <a href="/training" class="svelte-1rq7emz">Training</a></li></ul></nav> <div class="logo svelte-1rq7emz"><a href="/" class="svelte-1rq7emz">${validate_component(Logo, "LOGO").$$render($$result, {}, {}, {})}</a></div> <div class="locale svelte-1rq7emz">${validate_component(Locale, "Locale").$$render($$result, {}, {}, {})}</div></div>  <div class="mobile-header svelte-1rq7emz">${validate_component(Header_mobile, "MobileHeader").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
const circular_button_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".circular-button.svelte-14hm61i{color:white;display:flex;align-items:center;justify-content:center;border-radius:50%;width:2.6vw;height:2.6vw;text-decoration:none;transition:background-color 0.3s ease}",
  map: null
};
const Circular_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = "#" } = $$props;
  let { bgColor = "#D32F2F" } = $$props;
  let { scale = "1" } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  $$result.css.add(css$2);
  return `<a${add_attribute("href", link, 0)} class="circular-button svelte-14hm61i" style="${"background-color: " + escape(bgColor, true) + "; transform: scale(" + escape(scale, true) + ")"}">${slots.default ? slots.default({}) : ``} </a>`;
});
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Twitter_outlined = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 1024 1024" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 1024 1024" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13zM12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Phone_linear = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m16.1 13.359l-.528-.532l.529.532Zm.456-.453l.529.532l-.529-.532Zm2.417-.317l-.358.66l.358-.66Zm1.91 1.039l-.358.659l.358-.659Zm.539 3.255l.529.532l-.53-.532Zm-1.42 1.412l-.53-.531l.53.531Zm-1.326.67l.07.747l-.07-.747Zm-9.86-4.238l.528-.532l-.529.532ZM4.002 5.746l-.749.042l.749-.042Zm6.474 1.451l.53.532l-.53-.532Zm.157-2.654l.6-.449l-.6.45ZM9.374 2.86l-.601.45l.6-.45ZM6.26 2.575l.53.532l-.53-.532Zm-1.57 1.56l-.528-.531l.529.532Zm7.372 7.362l.529-.532l-.529.532Zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453l1.058 1.064Zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038l-.716 1.317Zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412l-1.057-1.064Zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454l-.14-1.494Zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47l1.057-1.063Zm1.376-6.18l.286-.286L9.95 6.666l-.287.285l1.057 1.063Zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684l1.202-.899ZM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56l-1.058-1.064Zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1.064 1.064 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.099 2.099 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312c.005-.014.007-.015 0-.006a.276.276 0 0 1-.03.039l-.01.01a.203.203 0 0 1-.01.009l-.53-.53Zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.536 1.536 0 0 0 .42-.236a.923.923 0 0 0 .05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01a.383.383 0 0 1 .038-.03c.01-.007.007-.004-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824l-1.058 1.064Zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202l1.2-.9ZM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184l1.498-.085Zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885l-1.058-1.063ZM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673l1.057 1.063Zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446l-.716 1.318Zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443l1.058 1.064Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<g fill="none"><path fill="currentColor" d="M3 5V4a1 1 0 0 0-1 1h1Zm18 0h1a1 1 0 0 0-1-1v1ZM3 6h18V4H3v2Zm17-1v12h2V5h-2Zm-1 13H5v2h14v-2ZM4 17V5H2v12h2Zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3v-2Zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 5l9 9l9-9"/></g>`}<!-- HTML_TAG_END --></svg>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".footer.svelte-8ys9uw.svelte-8ys9uw{display:flex;color:white;align-items:top;gap:15vw;padding-top:3.5vw;padding-bottom:3vw}.left.svelte-8ys9uw.svelte-8ys9uw,.right.svelte-8ys9uw.svelte-8ys9uw{display:flex;flex-direction:column}.left.svelte-8ys9uw h3.svelte-8ys9uw{width:17vw}.right.svelte-8ys9uw.svelte-8ys9uw{display:flex;flex-direction:row}.contactContainer.svelte-8ys9uw.svelte-8ys9uw{display:flex;gap:0.7vw;align-items:center;margin-bottom:0.7vw}.addressText.svelte-8ys9uw p.svelte-8ys9uw{margin:0}.right.svelte-8ys9uw p.svelte-8ys9uw{color:#b9b9b9;font-size:1vw}.sub-div.svelte-8ys9uw.svelte-8ys9uw{margin-left:20px}.icon.svelte-8ys9uw.svelte-8ys9uw{display:flex;gap:0.8vw}.endContainer.svelte-8ys9uw.svelte-8ys9uw{background-color:#040707}.gray-line.svelte-8ys9uw.svelte-8ys9uw{margin:0;color:#363939}.divider.svelte-8ys9uw.svelte-8ys9uw{display:flex;gap:1vw;justify-content:center;padding-bottom:0.5vw;padding:0.8vw;color:#b9b9b9}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Container, "Container").$$render($$result, { style: "background-color: #040707;" }, {}, {
    default: () => {
      return `<div class="footer svelte-8ys9uw"><div class="left svelte-8ys9uw"><h3 class="svelte-8ys9uw" data-svelte-h="svelte-e113eo">Empowering lives with the most advanced defibrillation technology.</h3> <div class="icon svelte-8ys9uw">${validate_component(Circular_button, "CircularButton").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Facebook, "Facebook").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Circular_button, "CircularButton").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Twitter_outlined, "Twitter").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Circular_button, "CircularButton").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Instagram, "Instagram").$$render($$result, {}, {}, {})}`;
        }
      })}</div></div> <div class="right svelte-8ys9uw"><div class="sub-div svelte-8ys9uw" data-svelte-h="svelte-15blqz"><h4>Quick Links</h4> <p class="svelte-8ys9uw">About Us</p> <p class="svelte-8ys9uw">Contact Us</p> <p class="svelte-8ys9uw">Home</p> <p class="svelte-8ys9uw">Testimonials</p> <p class="svelte-8ys9uw">Products &amp; Training</p></div> <div class="sub-div svelte-8ys9uw" data-svelte-h="svelte-8c9n4t"><h4>Support &amp; Services</h4> <p class="svelte-8ys9uw">FAQs</p> <p class="svelte-8ys9uw">Technical Support</p> <p class="svelte-8ys9uw">Warranty &amp; Returns</p> <p class="svelte-8ys9uw">Training &amp; Workshops</p></div> <div class="sub-div svelte-8ys9uw"><h4 data-svelte-h="svelte-5w47vm">Contact Us</h4> <div class="contactContainer svelte-8ys9uw">${validate_component(Circular_button, "CircularButton").$$render($$result, { bgColor: "#363939", scale: ".8" }, {}, {
        default: () => {
          return `${validate_component(Location, "Location").$$render($$result, {}, {}, {})}`;
        }
      })} <div class="addressText svelte-8ys9uw" data-svelte-h="svelte-b0hsru"><p class="svelte-8ys9uw">Iggy Street <br> 1000 - Switzerland</p></div></div> <div class="contactContainer svelte-8ys9uw">${validate_component(Circular_button, "CircularButton").$$render($$result, { bgColor: "#363939", scale: ".8" }, {}, {
        default: () => {
          return `${validate_component(Phone_linear, "Phone").$$render($$result, {}, {}, {})}`;
        }
      })} <div class="addressText svelte-8ys9uw" data-svelte-h="svelte-z0k9jx"><p class="svelte-8ys9uw">+41 21 311 25 38</p></div></div> <div class="contactContainer svelte-8ys9uw">${validate_component(Circular_button, "CircularButton").$$render($$result, { bgColor: "#363939", scale: ".8" }, {}, {
        default: () => {
          return `${validate_component(Email, "Email").$$render($$result, {}, {}, {})}`;
        }
      })} <div class="addressText svelte-8ys9uw" data-svelte-h="svelte-13dz5o6"><p class="svelte-8ys9uw">info@swissdefibrillator.ch</p></div></div></div></div></div>`;
    }
  })} <div class="endContainer svelte-8ys9uw" data-svelte-h="svelte-1atrz82"><hr class="gray-line svelte-8ys9uw"> <div class="divider svelte-8ys9uw"><span>Terms &amp; Conditions</span> <span>Privacy Polices</span></div> </div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-1pid0i7{margin-top:6px;margin-bottom:20px}.footer.svelte-1pid0i7{margin-top:6vw}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="header svelte-1pid0i7">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> ${slots.default ? slots.default({}) : ``} <div class="footer svelte-1pid0i7">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};

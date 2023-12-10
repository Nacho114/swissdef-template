import { e as error } from "../../../../chunks/index.js";
import { p as products } from "../../../../chunks/products.js";
const load = ({ params }) => {
  const p = products.find((p2) => p2.slug === params.slug);
  if (p != void 0) {
    return p;
  }
  throw error(404, "Not found");
};
export {
  load
};

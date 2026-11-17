import { calculateShippingCost, type Product } from "./products";

export type CheckoutItem = Pick<Product, "id" | "price" | "weight"> & {
  quantity: number;
};

export function priceInRappen(price: number) {
  return Math.round(price * 100);
}

export function priceWithVatInRappen(price: number) {
  return Math.round((priceInRappen(price) * 1081) / 1000);
}

export function calculateCheckoutTotals(items: CheckoutItem[]) {
  let subtotal = 0;
  let productsWithVat = 0;
  let grams = 0;

  for (const item of items) {
    subtotal += priceInRappen(item.price) * item.quantity;
    productsWithVat += priceWithVatInRappen(item.price) * item.quantity;
    grams += Math.round(item.weight * 1000) * item.quantity;
  }

  const shippingPrice = calculateShippingCost(grams / 1000);
  const shipping = priceInRappen(shippingPrice);
  const shippingWithVat = priceWithVatInRappen(shippingPrice);
  const total = productsWithVat + shippingWithVat;

  return {
    subtotal,
    shipping,
    shippingWithVat,
    vat: total - subtotal - shipping,
    total,
  };
}

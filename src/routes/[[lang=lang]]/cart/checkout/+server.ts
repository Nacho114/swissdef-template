import { env } from "$env/dynamic/private";
import { error, json } from "@sveltejs/kit";
import Stripe from "stripe";
import { calculateCheckoutTotals, priceWithVatInRappen } from "$lib/checkout";
import { getProductById } from "$lib/products";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request, url, params }) => {
  const cart: unknown = await request.json().catch(() => null);
  if (!cart || typeof cart !== "object" || Array.isArray(cart)) {
    throw error(400, "Invalid cart");
  }

  const entries = Object.entries(cart);
  if (entries.length === 0) throw error(400, "Cart is empty");

  const items = entries.map(([id, quantity]) => {
    const product = getProductById(id);
    if (
      !product ||
      typeof quantity !== "number" ||
      !Number.isSafeInteger(quantity) ||
      quantity < 1
    ) {
      throw error(400, "Invalid product or quantity");
    }
    return { ...product, quantity };
  });

  const { shippingWithVat, total } = calculateCheckoutTotals(items);
  if (!Number.isSafeInteger(total)) throw error(400, "Cart total is too large");

  const key = env.STRIPE_CHECKOUT_SECRET_KEY;
  if (!key) throw error(503, "Checkout is unavailable");

  const prefix = params.lang ? `/${params.lang}` : "";
  const stripe = new Stripe(key, { timeout: 10000, maxNetworkRetries: 1 });
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      adaptive_pricing: { enabled: false },
      shipping_address_collection: { allowed_countries: ["CH"] },
      line_items: items.map(({ id, type, price, quantity }) => ({
        quantity,
        price_data: {
          currency: "chf",
          product_data: { name: id, description: type },
          unit_amount: priceWithVatInRappen(price),
        },
      })),
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Standard delivery",
            fixed_amount: { amount: shippingWithVat, currency: "chf" },
          },
        },
      ],
      success_url: `${url.origin}${prefix}/success`,
      cancel_url: `${url.origin}${prefix}/failure`,
    });
    if (session.url) return json({ url: session.url });
  } catch {
    // Keep Stripe's upstream error details on the server.
    throw error(502, "Checkout could not start");
  }
  throw error(502, "Checkout could not start");
};

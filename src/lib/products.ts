// Define an enum for product types
export enum ProductType {
  Defibrillator = "Defibrillator",
  Accessory = "Accessory",
}

// Extend the Product interface to include the type
export interface Product {
  slug: string;
  id: string;
  img: string;
  price: number;
  shipping_price: number;
  type: ProductType;
}

// Function to get a product by its id
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const MAX_SHIPPING_COST = 200;

export const iva_value = (price: number): number => {
  return price * 0.081;
};

export const with_iva = (price: number): number => {
  return price + iva_value(price);
};

export const format_for_stripe = (price: number): number => {
  // Multiply by 100 and round down to avoid decimals
  const formattedPrice = Math.floor(price * 100);

  // Return the formatted price
  return formattedPrice;
};

// Array of defibrillator products with type
export const defibrillators: Product[] = [
  {
    slug: "philips_hs1",
    id: "philips_hs1",
    img: "defibrillator/philips_hs1_1",
    price: 1299,
    shipping_price: 20,
    type: ProductType.Defibrillator,
  },
  {
    slug: "philips_frx",
    id: "philips_frx",
    img: "defibrillator/philips_frx_1",
    price: 1690,
    shipping_price: 20,
    type: ProductType.Defibrillator,
  },
  {
    slug: "philips_hs1_electrodes",
    id: "philips_hs1_electrodes",
    img: "pads/philips_hs1",
    price: 97,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_frx_electrodes",
    id: "philips_frx_electrodes",
    img: "pads/philips_frx",
    price: 87,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_hs1_electrodes_child",
    id: "philips_hs1_electrodes_child",
    img: "pads/philips_hs1_child",
    price: 155,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_frx_child_key",
    id: "philips_frx_child_key",
    img: "pads/frx_child_key",
    price: 155,
    shipping_price: 10,
    type: ProductType.Accessory,
  },

  {
    slug: "philips_hs1_frx_batteries",
    id: "philips_hs1_frx_batteries",
    img: "batteries/philips_hs1_frx",
    price: 179,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
];

// Array of accessory products with type
export const accessories: Product[] = [
  {
    slug: "aivia_100",
    id: "aivia_100",
    img: "cabinet/aivia_100",
    price: 195,
    shipping_price: 20,
    type: ProductType.Accessory,
  },
  {
    slug: "aivia_200",
    id: "aivia_200",
    img: "cabinet/aivia_200",
    price: 590,
    shipping_price: 20,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_hs1_plexiglas",
    id: "philips_hs1_plexiglas",
    img: "cabinet/philips_hs1_plexiglas",
    price: 95,
    shipping_price: 20,
    type: ProductType.Accessory,
  },
  {
    slug: "wap_cabinet",
    id: "wap_cabinet",
    img: "cabinet/wap",
    price: 95,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_fast_response_kit",
    id: "philips_fast_response_kit",
    img: "aed-accessories/philips_fast_response_kit",
    price: 69,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
  {
    slug: "aed_sticker",
    id: "aed_sticker",
    img: "sign/aed_sticker",
    price: 5,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
  {
    slug: "wap_first_aid_kit",
    id: "wap_first_aid_kit",
    img: "wap/wap_first_aid_kit",
    price: 40,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
  {
    slug: "wall_sign",
    id: "wall_sign",
    img: "sign/wall_sign",
    price: 32,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
  {
    slug: "aivia_sticker",
    id: "aivia_sticker",
    img: "sign/aivia_sticker",
    price: 45,
    shipping_price: 10,
    type: ProductType.Accessory,
  },
];

// Combine defibrillators and accessories into one list
export const products = [...defibrillators, ...accessories];

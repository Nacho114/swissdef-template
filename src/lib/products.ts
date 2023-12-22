// Define an enum for product types
export enum ProductType {
  Defibrillator = "Defibrillator",
  Accessory = "Accessory",
}

// Extend the Product interface to include the type
export interface Product {
  slug: string;
  img: string;
  price: number;
  type: ProductType;
}

// Array of defibrillator products with type
export const defibrillators: Product[] = [
  {
    slug: "philips_hs1",
    img: "defibrillator/philips_hs1_1",
    price: 12,
    type: ProductType.Defibrillator,
  },
  {
    slug: "philips_frx",
    img: "defibrillator/philips_frx_1",
    price: 69,
    type: ProductType.Defibrillator,
  },
  {
    slug: "philips_hs1_electrodes",
    img: "pads/philips_hs1",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_frx_electrodes",
    img: "pads/philips_frx",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_hs1_frx_batteries",
    img: "batteries/philips_hs1_frx",
    price: 69,
    type: ProductType.Accessory,
  },
];

// Array of accessory products with type
export const accessories: Product[] = [
  {
    slug: "aivia_100",
    img: "cabinet/aivia_100",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "aivia_200",
    img: "cabinet/aivia_200",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_hs1_perspex",
    img: "cabinet/philips_hs1_perspex",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "wap_cabinet",
    img: "cabinet/wap",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_fast_response_kit",
    img: "aed-accessories/philips_fast_response_kit",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "aed_sticker",
    img: "sign/aed_sticker",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "wap_first_aid_kit",
    img: "philips_hs1",
    price: 69,
    type: ProductType.Accessory,
  },
];

// Combine defibrillators and accessories into one list
export const products = [...defibrillators, ...accessories];

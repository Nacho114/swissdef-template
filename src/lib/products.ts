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
    img: "philips_hs1",
    price: 12,
    type: ProductType.Defibrillator,
  },
  {
    slug: "philips_frx",
    img: "philips_hs1",
    price: 69,
    type: ProductType.Defibrillator,
  },
  {
    slug: "philips_hs1_electrodes",
    img: "philips_hs1",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_frx_electrodes",
    img: "philips_hs1",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_hs1_frx_batteries",
    img: "philips_hs1",
    price: 69,
    type: ProductType.Accessory,
  },
];

// Array of accessory products with type
export const accessories: Product[] = [
  {
    slug: "aivia_wall_cabinets",
    img: "philips_hs1",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "aed_wall_mounts",
    img: "philips_hs1",
    price: 69,
    type: ProductType.Accessory,
  },
  {
    slug: "philips_fast_response_kit",
    img: "philips_hs1",
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

export interface Product {
  slug: string;
  img: string;
  price: number;
}

export const defibrillators: Product[] = [
  {
    slug: "phillips_hs1",
    img: "phillips_hs1",
    price: 12,
  },
  {
    slug: "phillips_frx",
    img: "phillips_frx",
    price: 69,
  },
];

export const accessories: Product[] = [
  {
    slug: "first_aid_kit",
    img: "first_aid_kit",
    price: 69,
  },
];

export const products = defibrillators.concat(accessories);

export interface Product {
  slug: string;
  img: string;
  price: number;
}

export const products: Product[] = [
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
  {
    slug: "first_aid_kit",
    img: "first_aid_kit",
    price: 69,
  },
];

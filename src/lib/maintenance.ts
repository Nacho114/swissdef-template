// Extend the Product interface to include the type
export interface Maintenance {
  slug: string;
  price: number;
  payment_link: string;
}

export const maintenances: Maintenance[] = [
  {
    slug: "remote",
    price: 95,
    payment_link: "https://buy.stripe.com/dR6bMMaKecxGcSc9AB",
  },
  {
    slug: "basic_plan",
    price: 275,
    payment_link: "https://buy.stripe.com/5kAcQQ8C60OY7xSbII",
  },
];

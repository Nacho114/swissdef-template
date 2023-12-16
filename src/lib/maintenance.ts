// Extend the Product interface to include the type
export interface Maintenance {
  slug: string;
  price: number;
  duration: number;
}

export const maintenances: Maintenance[] = [
  {
    slug: "lite",
    price: 450,
    duration: 2,
  },
  {
    slug: "basic",
    price: 890,
    duration: 2,
  },
]

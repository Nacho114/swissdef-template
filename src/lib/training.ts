// Extend the Product interface to include the type
export interface Training {
  slug: string;
  price: number;
  maximum_participants: number;
}

export const trainings: Training[] = [
  {
    slug: "lite",
    price: 450,
    maximum_participants: 9,
  },
  {
    slug: "basic",
    price: 890,
    maximum_participants: 8,
  },
  {
    slug: "full",
    price: 890,
    maximum_participants: 8,
  },
];

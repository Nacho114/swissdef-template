// Extend the Product interface to include the type
export interface Training {
  slug: string;
  price: number;
  duration: number;
  maximum_participants: number;
}

export const trainings: Training[] = [
  {
    slug: "lite_plan",
    price: 450,
    duration: 2,
    maximum_participants: 9,
  },
  {
    slug: "basic_plan",
    price: 890,
    duration: 2,
    maximum_participants: 8,
  },
];

export const popularTrainings = trainings;
export const extraTrainings = [trainings[0]];

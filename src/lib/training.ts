// Extend the Product interface to include the type
export interface Training {
    slug: string;
    price: number;
    duration: number;
    maximum_participants: number;
}

export const trainings: Training[] = [
    {
        slug: "lite",
        price: 450,
        duration: 1.5,
        maximum_participants: 8,
    },
    {
        slug: "basic",
        price: 890,
        duration: 3,
        maximum_participants: 8,
    },
    {
        slug: "recommended",
        price: 3560,
        duration: 14,
        maximum_participants: 8,
    },
    {
        slug: "refresher",
        price: 1780,
        duration: 7,
        maximum_participants: 8,
    },
];

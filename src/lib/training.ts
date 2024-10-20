// Extend the Product interface to include the type
export interface Training {
    slug: string;
    price: number;
    duration: string;
    maximum_participants: number;
}

export const trainings: Training[] = [
    {
        slug: "lite",
        price: 445,
        duration: "1.5",
        maximum_participants: 8,
    },
    {
        slug: "basic",
        price: 890,
        duration: "3-4",
        maximum_participants: 8,
    },
    {
        slug: "recommended",
        price: 3320,
        duration: "14",
        maximum_participants: 8,
    },
    {
        slug: "refresher",
        price: 1660,
        duration: "7",
        maximum_participants: 8,
    },
];

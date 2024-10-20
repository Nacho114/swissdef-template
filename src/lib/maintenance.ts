// Extend the Product interface to include the type
export interface Maintenance {
    slug: string;
    price: number;
    duration: string;
}

export const maintenances: Maintenance[] = [
    {
        slug: "basic_plan",
        price: 275,
        duration: "",
    },
];

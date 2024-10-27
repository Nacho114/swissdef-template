// Extend the Product interface to include the type
export interface Maintenance {
    slug: string;
    price: number;
}

export const maintenances: Maintenance[] = [
    {
        slug: "remote",
        price: 50,
    },
    {
        slug: "basic_plan",
        price: 275,
    },


];

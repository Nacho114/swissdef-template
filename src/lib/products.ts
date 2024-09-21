// Define an enum for product types
export enum ProductType {
    Defibrillator = "Defibrillator",
    Accessory = "Accessory",
}

// Extend the Product interface to include the type
export interface Product {
    slug: string;
    img: string;
    price: number;
    type: ProductType;
}

// Array of defibrillator products with type
export const defibrillators: Product[] = [
    {
        slug: "philips_hs1",
        img: "defibrillator/philips_hs1_1",
        price: 1390,
        type: ProductType.Defibrillator,
    },
    {
        slug: "philips_frx",
        img: "defibrillator/philips_frx_1",
        price: 1790,
        type: ProductType.Defibrillator,
    },
    {
        slug: "philips_hs1_electrodes",
        img: "pads/philips_hs1",
        price: 69,
        type: ProductType.Accessory,
    },
    {
        slug: "philips_frx_electrodes",
        img: "pads/philips_frx",
        price: 69,
        type: ProductType.Accessory,
    },
    {
        slug: "philips_hs1_electrodes_child",
        img: "pads/philips_hs1_child",
        price: 69,
        type: ProductType.Accessory,
    },
    {
        slug: "philips_frx_electrodes_child",
        img: "pads/philips_frx_child",
        price: 69,
        type: ProductType.Accessory,
    },

    {
        slug: "philips_hs1_frx_batteries",
        img: "batteries/philips_hs1_frx",
        price: 69,
        type: ProductType.Accessory,
    },
];

// Array of accessory products with type
export const accessories: Product[] = [
    {
        slug: "aivia_100",
        img: "cabinet/aivia_100",
        price: 195,
        type: ProductType.Accessory,
    },
    {
        slug: "aivia_200",
        img: "cabinet/aivia_200",
        price: 590,
        type: ProductType.Accessory,
    },
    {
        slug: "philips_hs1_plexiglas",
        img: "cabinet/philips_hs1_plexiglas",
        price: 69,
        type: ProductType.Accessory,
    },
    {
        slug: "wap_cabinet",
        img: "cabinet/wap",
        price: 69,
        type: ProductType.Accessory,
    },
    {
        slug: "philips_fast_response_kit",
        img: "aed-accessories/philips_fast_response_kit",
        price: 69,
        type: ProductType.Accessory,
    },
    {
        slug: "aed_sticker",
        img: "sign/aed_sticker",
        price: 5,
        type: ProductType.Accessory,
    },
    {
        slug: "wap_first_aid_kit",
        img: "wap/wap_first_aid_kit",
        price: 40,
        type: ProductType.Accessory,
    },
    {
        slug: "wall_sign",
        img: "wap/wap_first_aid_kit",
        price: 32,
        type: ProductType.Accessory,
    },
    {
        slug: "aivia_sticker",
        img: "wap/wap_first_aid_kit",
        price: 45,
        type: ProductType.Accessory,
    },
    {
        slug: "aivia_200_power_supply",
        img: "wap/wap_first_aid_kit",
        price: 79,
        type: ProductType.Accessory,
    },



];

// Combine defibrillators and accessories into one list
export const products = [...defibrillators, ...accessories];

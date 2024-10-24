import { writable } from 'svelte/store';

// Define the cart type: an object where keys are strings (product IDs) and values are numbers (quantities)
type Cart = {
    [id: string]: number;
};

// Create a writable store for the cart, initializing it as an empty object
export const cart = writable<Cart>({});

// Function to set an item's quantity in the cart
export const addToCart = (id: string, quantity: number): void => {
    cart.update((currentCart) => {
        if (quantity <= 0) {
            const { [id]: _, ...rest } = currentCart;
            return rest; // Remove the item if the quantity is 0 or less
        }
        return {
            ...currentCart,
            [id]: quantity
        };
    });
};

// Function to clear the entire cart
export const clearCart = (): void => {
    cart.set({});
};

// Function to remove a specific item from the cart
export const removeFromCart = (id: string): void => {
    cart.update((currentCart) => {
        const { [id]: _, ...rest } = currentCart;
        return rest;
    });
};


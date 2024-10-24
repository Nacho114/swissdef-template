export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "CHF",
        minimumFractionDigits: 0,  // No decimals
        maximumFractionDigits: 0,  // No decimals
    }).format(price);
};


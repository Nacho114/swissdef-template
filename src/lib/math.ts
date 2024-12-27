export const formatPrice = (price: number, withDecimals = true): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "CHF",
        minimumFractionDigits: withDecimals ? 2 : 0,  // If withDecimals is true, use 2 decimals
        maximumFractionDigits: withDecimals ? 2 : 0,  // If withDecimals is false, no decimals
    }).format(price);
};



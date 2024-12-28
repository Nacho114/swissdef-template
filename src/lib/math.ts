export const formatPrice = (price: number, withDecimals = true): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "CHF",
        minimumFractionDigits: withDecimals ? 2 : 0,  // If withDecimals is true, use 2 decimals
        maximumFractionDigits: withDecimals ? 2 : 0,  // If withDecimals is false, no decimals
    }).format(price);
};

const AVERAGE_PROFIT_PER_CLIENT = 500
const CONVERSION_RATE = 0.1
export const AVERAGE_PROFIT_PER_LEAD = AVERAGE_PROFIT_PER_CLIENT * CONVERSION_RATE

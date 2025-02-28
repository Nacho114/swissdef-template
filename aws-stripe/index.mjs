import stripePackage from 'stripe';

// Use this key to use stripe test mode
// this allows using the dummy card: 4242424242424242 
const stripe = stripePackage(process.env.STRIPE_TEST_SECRET_KEY);

// Production key
//const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ message: 'Preflight OK' })
        };
    }

    // Parse event body for dynamic product details
    const { line_items, shipping_rate_data, successUrl, cancelUrl } = JSON.parse(event.body);

    try {
        const session = await stripe.checkout.sessions.create({
            shipping_address_collection: {
                allowed_countries: ['CH'],
            },
            line_items: line_items,
            shipping_options: [
                { shipping_rate_data: shipping_rate_data }
            ],
            mode: 'payment',
            success_url: successUrl,
            cancel_url: cancelUrl,
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ url: session.url }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ error: error.message }),
        };
    }
};


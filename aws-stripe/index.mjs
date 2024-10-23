const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        const { items, successUrl, cancelUrl } = JSON.parse(event.body);
        // items would be something like:
        // [
        //   { id: 'defibrillator', quantity: 1 },
        //   { id: 'first-aid-kit', quantity: 2 }
        // ]

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: {
                allowed_countries: ['CH'],
            },
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Defibrillator',
                            description: 'Medical grade defibrillator',
                            // images: ['url_to_image'], // optional
                        },
                        unit_amount: 199999, // $1,999.99
                    },
                    quantity: 1,
                },
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'First Aid Kit',
                            description: 'Complete first aid kit',
                        },
                        unit_amount: 4999, // $49.99
                    },
                    quantity: 2,
                }
            ],
            mode: 'payment',
            success_url: successUrl,
            cancel_url: cancelUrl,
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({
                sessionId: session.id
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};

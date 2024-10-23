import stripePackage from 'stripe';

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);  // Replace with your Stripe secret key

export const handler = async (event) => {

    // Parse event body for dynamic product details
    const { items, successUrl, cancelUrl } = JSON.parse(event.body);

    try {
        const session = await stripe.checkout.sessions.create({
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
            body: JSON.stringify({ url: session.url }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};

async function handleCheckout(line_items: any) {
    try {
        const response = await fetch(
            "https://abssv4qftudjnbx7d2okcwrefi0ycmfi.lambda-url.eu-north-1.on.aws/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    line_items: line_items,
                    successUrl: "http://google.com/",
                    cancelUrl: "http://reddit.com/",
                }),
            },
        );

        const { url } = await response.json(); // Extract 'url' instead of sessionId
        window.location.href = url; // Redirect to Stripe checkout
    } catch (err) {
        console.error("Checkout error", err);
    }
}


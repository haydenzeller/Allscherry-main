import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('Stripe secret key is not provided.');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10", // Adjust the API version as needed
});

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const products = await stripe.products.list({
            limit: 100,
        });
        // Sending the list of products back to the caller
        return NextResponse.json(products);
    } catch (error) {
        // Handle errors
        console.log("error!!! in api")
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Error fetching products' }, {status:500});
    }
}

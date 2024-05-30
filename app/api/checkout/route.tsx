import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('Stripe secret key is not provided.');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10", // Adjust the API version as needed
});

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: 'price_1PMCqaFb3UXoe2kDsjH28qlJ', // Replace with your price ID
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/checkout?success=true`,
        cancel_url: `http://localhost:3000/checkout?success=true`,
        automatic_tax: { enabled: true },
      });

      // Check if session URL is available
      if (!session.url) {
        throw new Error('Stripe session URL is not available.');
      }

      // Set the appropriate response headers for redirect
      return new Response(null, {
        status: 303,
        headers: {
          'Location': session.url,
        },
      });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
    }
  } else {
    return NextResponse.json({ status: 405, Message: "Not allowed" });
  }
}

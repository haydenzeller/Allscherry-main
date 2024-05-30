'use server'
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
      const body = await request.json(); // Parse JSON body
      const { priceId } = body; // Extract priceId from the parsed body

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId, // Replace with your price ID
            quantity: 1,
          },
        ],
        mode: "payment",
        billing_address_collection: "required",
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'],
        },
        success_url: `https://alpha.allscherry.com/checkout?success=true`,
        cancel_url: `https://alpha.allscherry.com/checkout?canceled=true`,
        automatic_tax: { enabled: true },
      });

      // Check if session URL is available
      if (!session.url) {
        throw new Error('Stripe session URL is not available.');
      }

      // Set the appropriate response headers for redirect
      return NextResponse.json({redirectUrl:JSON.stringify(session.url)}, { status: 200 });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
    }
  } else {
    return NextResponse.json({ status: 405, message: "Not allowed" });
  }
}

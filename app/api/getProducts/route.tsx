// import { NextRequest, NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
// if (!stripeSecretKey) {
//   throw new Error('Stripe secret key is not provided.');
// }

// const stripe = new Stripe(stripeSecretKey, {
//   apiVersion: "2024-04-10", // Adjust the API version as needed
// });
// export async function GET(request: NextRequest, response: NextResponse) {
//     try {
//         const products = await stripe.products.list();
//         return(products);
//     } catch (error) {
//         // Handle errors
//         return NextResponse.json({ error: 'Error fetching products' }, {status:500});
//     }
// }

'use server'
import { NextResponse } from 'next/server'
export async function GET() {
    const apiUrl = process.env.ALLSCHERRY_BACKEND_ENDPOINT +"items/products"|| "";
    const API_KEY = process.env.ALLSCHERRY_BACKEND_KEY;
    try {
        const res = await fetch(apiUrl, 
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
                cache: 'no-store'
            }
        );
        if (res.status >= 400) {
            return NextResponse.json({ message: "API error: " }, {status: res.status})
        }
        const data = await res.json();
        return NextResponse.json(data, {status: 200})
    } catch(error: any) {
        return NextResponse.json({ message: error.message }, {status: 500}) 
    }
}
'use server'
import {  NextRequest, NextResponse } from 'next/server'



export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const email = body.email;
        console.log("email: " + JSON.stringify(email));
        if (!email) {
            return NextResponse.json({ message: "No email provided."}, {status:400});
        }
        const AUDIENCE_ID = process.env.MC_AUDIENCE_ID;
        const API_KEY = process.env.MC_API_KEY;
        const DATACENTER = process.env.MC_DATACENTER;
        const data = {
            email_address: email,
            status:'subscribed'
        };
        const mcResponse = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, 
        {
            body: JSON.stringify(data),
            headers: {
                Authorization: `apikey ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
        }
        );
        if (mcResponse.status >= 400) {
            console.log(mcResponse);
            return NextResponse.json({ message: "Mailchimp Error." }, {status: mcResponse.status})
        }
        console.log(mcResponse)
        return NextResponse.json({ message: 'Email subscribed!'}, {status: 200})
    } catch(error: any) {
        return NextResponse.json({ message: error.message }, {status: 500}) 
    }
}
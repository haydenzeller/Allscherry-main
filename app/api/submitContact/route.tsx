'use server';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const apiUrl = process.env.ALLSCHERRY_BACKEND_ENDPOINT + "items/contact_submissions" || "";
    const API_KEY = process.env.ALLSCHERRY_BACKEND_KEY;
    try {
        const body = await req.json();

        // Validate email existence
        if (!body.email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        // Submit the contact form
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                email: body.email,
                name: body.name,
                message: body.message,
                mail_list: body.mail_list,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return NextResponse.json({ message: errorData.message || 'API error' }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

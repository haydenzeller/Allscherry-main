'use server'
import { NextResponse } from 'next/server'
export async function GET() {
    const apiUrl = process.env.ALLSCHERRY_BACKEND_ENDPOINT +"items/design_images" || "";
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
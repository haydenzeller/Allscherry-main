// 'use server';

// import { NextRequest, NextResponse } from 'next/server';
// import { createDirectus, rest, readItem } from '@directus/sdk';


// export async function POST(req: NextRequest) {
//     const apiUrl = process.env.ALLSCHERRY_BACKEND_ENDPOINT + "items/contact_submissions" || "";
//     const API_KEY = process.env.ALLSCHERRY_BACKEND_KEY;
//     const client = createDirectus(apiUrl);

    
//     try {
//         const body = await req.json();

//         // Validate email existence
//         if (!body.email) {
//             return NextResponse.json({ message: "Email is required" }, { status: 400 });
//         }

//         // Submit the contact form
//         const res = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${API_KEY}`,
//             },
//             body: JSON.stringify({
//                 email: body.email,
//                 name: body.name,
//                 message: body.message,
//                 mail_list: body.mail_list,
//             }),
//         });

//         if (!res.ok) {
//             const errorData = await res.json();
//             return NextResponse.json({ message: errorData.message || 'API error' }, { status: res.status });
//         }

//         const data = await res.json();
//         return NextResponse.json(data, { status: 200 });

//     } catch (error: any) {
//         return NextResponse.json({ message: error.message }, { status: 500 });
//     }
// }

'use server'
import { createDirectus, rest, withToken, createItem } from '@directus/sdk';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    
    try {
        const data = await req.json();
        console.log(data);
        const ENDPOINT = process.env.ALLSCHERRY_BACKEND_ENDPOINT || "";
        const KEY = process.env.ALLSCHERRY_BACKEND_KEY || "";
        const client = createDirectus(ENDPOINT).with(rest({ onRequest: (options) => ({ ...options, cache: 'no-store' }),}));
        const result = await client.request(withToken(KEY, createItem('contact_submissions', {email:data.email, name:data.name, message:data.message})));
        return NextResponse.json({ data: result });
    } catch (error:any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
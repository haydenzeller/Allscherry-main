'use server'
import { createDirectus, rest, withToken, createItem } from '@directus/sdk';
import { count } from 'console';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
    try {
        const data = await req.json();
        console.log(data);
        const ENDPOINT = process.env.ALLSCHERRY_BACKEND_ENDPOINT || "";
        const KEY = process.env.ALLSCHERRY_BACKEND_KEY || "";
        const client = createDirectus(ENDPOINT).with(rest({ onRequest: (options) => ({ ...options, cache: 'no-store' }),}));
        const result = await client.request(withToken(KEY, createItem('PublicationForm', 
            {
                first_name:data.firstName,
                last_name:data.lastName,
                email:data.email,
                phone:data.phone,
                address:data.address,
                city:data.city,
                province:data.province,
                postal_code:data.postalCode,
                country:data.country,
                profession:data.profession,
                type:data.type,
                concept:data.concept,
                ready:data.ready,
                series:data.series,
                series_idea:data.seriesIdea,
            })));
        return NextResponse.json({ data: result });
    } catch (error:any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
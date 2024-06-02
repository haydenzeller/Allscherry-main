'use server'
import { createDirectus, rest, readItems, withToken } from '@directus/sdk';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const ENDPOINT = process.env.ALLSCHERRY_BACKEND_ENDPOINT || "";
        const KEY = process.env.ALLSCHERRY_BACKEND_KEY || "";
        const client = createDirectus(ENDPOINT).with(rest({ onRequest: (options) => ({ ...options, cache: 'no-store' }),}));
        const result = await client.request(withToken(KEY, readItems('featured_projects')));
        return NextResponse.json({ data: result });
    } catch (error:any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
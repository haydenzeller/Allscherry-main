'use server'
import { NextRequest, NextResponse } from 'next/server'
export async function OPTIONS(req:NextRequest) {
    return NextResponse.json({message: "This API route does not exist"}, {status:404});
}
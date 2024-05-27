'use server'
import type { NextApiRequest, NextApiResponse } from 'next'
type ResponseData = {
    message: string,
}
export default async (req:NextApiRequest, res:NextApiResponse<ResponseData>) => {
    return res.status(404).json({message: 'Endpoint does not exist.'});
}
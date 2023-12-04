import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'GET') {
        res.status(405).json({message: 'Method not allowed'});
        return;
    }

    try {
        const {currentUser} = await serverAuth(req);
        return res.status(200).json({currentUser});
    } catch (error: any) {
        console.log('Error: ', error.message)
        return res.status(400).end();   
    }
}

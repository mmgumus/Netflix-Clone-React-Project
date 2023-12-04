import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    try {
        await serverAuth(req);
        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);
        const randomMovie = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex,
        }); 

        return res.status(200).json(randomMovie[0]);
        
    } catch (error : unknown) {
        if (error instanceof Error)
        return res.status(401).json({ error: error.message });    
    }
}

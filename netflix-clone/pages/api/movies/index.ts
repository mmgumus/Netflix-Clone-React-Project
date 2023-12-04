
import { NextApiRequest, NextApiResponse} from 'next'
import prismadb from '@/libs/prismadb'
import serverAuth from '@/libs/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try {

        await serverAuth(req);

        const movies = await prismadb.movie.findMany() 

        return res.status(200).json(movies)

    } catch (error: unknown) {

       console.log({error})
       return res.status(400).json({error: (error as Error).message })
    }
}

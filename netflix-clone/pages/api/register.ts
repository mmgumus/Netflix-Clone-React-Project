import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if(req.method !== 'POST') {
            return res.status(405).json({message: 'Method not allowed'})
        }

        const { email, name, password } = req.body;

        const existing = await prismadb.user.findUnique({
            where: {
                email
            }
        });

        if(existing) {
            return res.status(422).json({message: 'Email already exists'});
        }
        
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image:'',
                emailVerified: new Date(),
            }
        });
        
        return res.status(200);
    } catch (error) {
        return res.status(400).json({error: 'Something went wrong: ${error}'});
    }
}
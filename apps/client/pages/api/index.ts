import prisma from '../../libs/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const accounts = await prisma.account.findMany();

    return res.send(accounts);
}

export default handler;
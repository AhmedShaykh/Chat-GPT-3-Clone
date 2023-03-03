import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@firebase/firestore';

type Data = {
    answer: string
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "Please Provide A Prompt!" });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "Please Provide A Valid Chat ID!" });
        return;
    }

    const response = await query(prompt, chatId, model)

    // res.status(200).json({ name: 'John Doe' })
};
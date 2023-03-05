import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';

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

    const response = await query(prompt, chatId, model);

    // const message: Message = {
    //     text: response || "ChatGPT Was Unable To Find An Answer For That!",
    // };

    // res.status(200).json({ name: 'John Doe' })
};
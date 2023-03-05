import React, { FC } from 'react';
import { DocumentData } from 'firebase/firestore';

type Props = {
    message: DocumentData
};

const Message: FC<Props> = ({ message }) => {

    const isChatGPT = message.user.name === "ChatGPT";

    return (
        <div className={`py-5 text-white ${isChatGPT && "bg-[#434654] rounded"}`}>
            <div className="flex space-x-5 px-4 max-w-4xl mx-auto">
                <img
                    src={message.user.avatar}
                    alt=""
                    className="h-8 w-8 rounded-full"
                />
                <p className="pt-1 text-sm text-white">
                    {message.text}
                </p>
            </div>
        </div>
    )
};

export default Message;
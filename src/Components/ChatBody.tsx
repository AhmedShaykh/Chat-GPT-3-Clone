import { FC, useRef } from 'react';

const ChatBody: FC = () => {

    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

    const parent = useRef<string | null>(null);
    const bottomRef = useRef<string | null>(null);

    return (
        <div className="flex flex-col gap-4">

            <div className={`border-[#999999] break-words border-2 rounded-xl self-start px-3 py-3 max-w-[80%]`}>
                <pre className="whitespace-pre-wrap">
                    <span>
                        Hey Chat
                    </span>
                </pre>
            </div>
        </div>
    )
};

export default ChatBody;
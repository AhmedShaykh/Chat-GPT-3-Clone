"use client";
import React, { FC, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';

type Props = {
    chatId: string
};

const ChatInput: FC<Props> = ({ chatId }) => {

    const [prompt, setPrompt] = useState<string>("");

    const { data: session } = useSession();

    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
            <form className="p-5 space-x-5 flex">
                <input
                    type="text"
                    placeholder="Type Your Message Here..."
                    className="bg-transparent focus:outline-none flex-1 
                    disabled:cursor-not-allowed disabled:text-gray-300"
                    disabled={!session}
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                />
                <button
                    className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded 
                    disabled:bg-gray-300 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={!prompt || !session}
                >
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>

            <div>

            </div>
        </div>
    )
};

export default ChatInput;
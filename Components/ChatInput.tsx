"use client";
import React, { FC, FormEvent, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import toast from 'react-hot-toast';

type Props = {
    chatId: string
};

const ChatInput: FC<Props> = ({ chatId }) => {

    const [prompt, setPrompt] = useState<string>("");

    const { data: session } = useSession();

    const model = "text-davinci-003";

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.image}`,
            }
        };

        await addDoc(
            collection(
                db, "users", session?.user?.email!, "chats", chatId, "messages"
            ), message
        );

        const notification = toast.loading("ChatGPT is Thinking...");

        await fetch("/api/askQuestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(() => {
            toast.success("ChatGPT has Responded", {
                id: notification
            })
        });
    };

    return (
        <div className="bg-gray-700/50 text-gray-100 rounded-lg text-sm">
            <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
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
"use client";
import React, { FC } from 'react';
import Message from './Message';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

type Props = {
    chatId: string
};

const Chat: FC<Props> = ({ chatId }) => {

    const { data: session } = useSession();

    const [messages] = useCollection(session &&
        query(
            collection(db, "users", session.user?.email!, "chats", chatId, "messages"),
            orderBy("createdAt", "asc")
        )
    );

    return (
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {messages?.empty && (
                <>
                    <p className="mt-2 text-center text-white">
                        Type A Prompt In Below To Get Started!
                    </p>
                    <ArrowDownCircleIcon
                        className="h-10 w-10 mx-auto mt-4 text-white animate-bounce"
                    />
                </>
            )}

            {messages?.docs.map(message => (
                <Message
                    key={message.id}
                    message={message.data()}
                />
            ))}
        </div>
    )
};

export default Chat;
"use client";
import React, { FC } from 'react';
import NewChat from './NewChat';
import ChatRow from './ChatRow';
import { useSession, signOut } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, CollectionReference, DocumentData, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';

const SideBar: FC = () => {

    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session &&
        query(
            collection(db, "users", session.user?.email!, "chats"),
            orderBy("createdAt", "asc")
        )
    );

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">

                <div>
                    <NewChat />
                    <div className="flex flex-col">

                        {/* {loading && (
                            <div className="animate-pulse text-center text-white">
                                <p>
                                    Loading Chats...
                                </p>
                            </div>
                        )} */}

                        {chats?.docs.map(chat => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>
                </div>
            </div>

            {session && (
                <img
                    onClick={() => signOut()}
                    src={session.user?.image || undefined}
                    alt="Profile Pic"
                    className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
                />
            )}
        </div>
    )
};

export default SideBar;
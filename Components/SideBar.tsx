"use client";
import React, { FC } from 'react';
import NewChat from './NewChat';
import { useSession, signOut } from 'next-auth/react';

const SideBar: FC = () => {

    const { data: session } = useSession();

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div className="">
                    <NewChat />
                    <div className="">

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
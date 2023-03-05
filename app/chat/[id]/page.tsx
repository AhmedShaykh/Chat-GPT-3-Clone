import React, { FC } from 'react';
import Chat from '@/Components/Chat';
import ChatInput from '@/Components/ChatInput';

type Props = {
    params: {
        id: string
    }
};

const ChatPage: FC<Props> = ({ params: { id } }) => {
    return (
        <div className="flex flex-col h-screen overflow-hidden p-4">
            <Chat chatId={id} />
            <ChatInput chatId={id} />
        </div>
    )
};

export default ChatPage;
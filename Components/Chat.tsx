import React, { FC } from 'react';

type Props = {
    chatId: string
};

const Chat: FC<Props> = ({ chatId }) => {
    return (
        <div>Chat</div>
    )
};

export default Chat;
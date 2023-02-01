import { FC, useState } from 'react';
import ChatBody from './Components/ChatBody';
import ChatInput from './Components/ChatInput';

const App: FC = () => {

    const [chat, setChat] = useState<string[]>([]);

    return (
        <div className="bg-[#101822] h-screen py-6 relative sm:px-16 px-12 
        text-white overflow-hidden flex flex-col justify-between 
        align-middle">

            <div className="gradient-01 z-0 absolute"></div>
            <div className="gradient-02 z-0 absolute"></div>

            <div className="uppercase font-bold  text-2xl text-center mb-3">
                Chat GPT OpenAi
            </div>

            <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
            scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md ">
                <ChatBody />
            </div>

            <div className="w-full max-w-4xl min-w-[20rem] self-center">
                <ChatInput />
            </div>
        </div>
    )
};

export default App;
import { useState } from "react";

const ChatInput = ({ sendMessage, loading }) => {

    const [value, setValue] = useState("");

    const handleSubmit = () => {
        if (value === "") return;
        sendMessage({ sender: "user", message: value });
        setValue("");
    };

    return (
        <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg
        px-4 py-4 overflow-auto relative">

            {loading ? (
                <img src="./loader.gif" className="w-8 m-auto" />
            ) : (
                <>
                    <textarea
                        onKeyDown={(e) => {
                            e.keyCode === 13 && e.shiftKey === false && handleSubmit();
                        }}
                        rows={1}
                        className="border-0 bg-transparent outline-none overflow-auto resize-none w-11/12
                        scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md "
                        value={value}
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <img
                        onClick={handleSubmit}
                        src="./send.png"
                        alt="send-btn"
                        width={20}
                        className="absolute top-5 right-4 hover:cursor-pointer ease-in duration-100 hover:scale-125"
                    />
                </>
            )}

        </div>
    )
};

export default ChatInput;
import React, { FC } from 'react';
import NewChat from './NewChat';

const SideBar: FC = () => {
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div className="">
                    <NewChat />
                    <div className="">

                    </div>

                </div>
            </div>
        </div>
    )
};

export default SideBar;
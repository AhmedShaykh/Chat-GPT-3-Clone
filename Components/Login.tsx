"use client";
import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
    return (
        <div className="screenBg h-screen flex flex-col items-center justify-center text-center">
            <div>
                <Image
                    src="https://links.papareact.com/2i6"
                    width={300}
                    height={300}
                    alt="logo"
                />
            </div>
            <button
                className="text-white font-bold text-3xl animate-pulse"
                onClick={() => signIn("google")}
            >
                Sign In To Use ChatGPT
            </button>
        </div>
    )
};

export default Login;
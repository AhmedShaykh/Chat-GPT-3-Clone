import './globals.css';
import SideBar from '@/Components/SideBar';
import { SessionProvider } from '@/Components/SessionProvider';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/Components/Login';
import ClientProvider from '@/Components/ClientProvider';
import { getServerSession } from 'next-auth';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <head />

            <body>
                <SessionProvider session={session}>
                    {!session ? (
                        <Login />
                    ) : (
                        <div className="flex">
                            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[16rem]">
                                <SideBar />
                            </div>

                            <ClientProvider />

                            <div className="bg-[#343541] flex-1 ">
                                {children}
                            </div>
                        </div>
                    )}
                </SessionProvider>
            </body>
        </html>
    )
};
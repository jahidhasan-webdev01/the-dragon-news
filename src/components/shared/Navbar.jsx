"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="mt-5 container mx-auto flex justify-between items-center px-5 md:px-0 py-5">
            <div className="hidden lg:block"></div>
            <div className="space-x-4 text-gray-500">
                <Link href={"/"} className="hover:text-black hover:border-b-2 hover:border-red-500 hover:pb-1">Home</Link>
                <Link href={"/about"} className="hover:text-black hover:border-b-2 hover:border-red-500 hover:pb-1">About</Link>
                <Link href={"/career"} className="hover:text-black hover:border-b-2 hover:border-red-500 hover:pb-1">Career</Link>
            </div>
            <div className="flex gap-4 items-center">
                {
                    isPending ?
                        <span className="loading loading-spinner loading-sm"></span>
                        :
                        user ? <>
                            <p className="font-bold text-sm">Welcome, {user?.name}</p>
                            <button
                                onClick={async () => await authClient.signOut()}
                                className="btn btn-sm btn-error text-white font-bold px-6">Logout</button>
                        </>
                            :
                            <Link href={"/login"}>
                                <button className="btn btn-sm btn-neutral px-6">Login</button>
                            </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;
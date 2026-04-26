import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="mt-5 container mx-auto flex justify-between items-center px-5 md:px-0">
            <div className="hidden lg:block"></div>
            <div className="space-x-4 text-gray-500">
                <Link href={"/"} className="hover:text-black hover:border-b-2 hover:border-red-500 hover:pb-1">Home</Link>
                <Link href={"/about"} className="hover:text-black hover:border-b-2 hover:border-red-500 hover:pb-1">About</Link>
                <Link href={"/career"} className="hover:text-black hover:border-b-2 hover:border-red-500 hover:pb-1">Career</Link>
            </div>
            <div className="flex gap-4 items-center">
                <CgProfile className="text-3xl" />
                <Link href={"/login"}>
                    <button className="btn btn-sm btn-neutral px-6">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
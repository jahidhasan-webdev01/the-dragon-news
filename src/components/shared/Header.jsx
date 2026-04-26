import logo from "@/assests/logo.png";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-10 pb-5 border-b border-gray-200">
            <Image src={logo} alt="The Dragon News" width={300} height={300} className="pb-5"></Image>
            <p className="text-sm">Journalism Without Fear or Favour</p>
            <p className="text-sm"><span className="font-bold">Sunday,</span> June 11, 2010</p>
        </div>
    );
};

export default Header;
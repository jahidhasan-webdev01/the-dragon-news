import logo from "@/assests/logo.png";
import Image from "next/image";

const Header = () => {
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="flex flex-col justify-center items-center pt-10 pb-5 border-b border-gray-200">
            <Image src={logo} alt="The Dragon News" width={300} height={300} className="pb-5"></Image>
            <p>Journalism Without Fear or Favour</p>
            <p className="font-semibold text-gray-500">
                <span
                    className="text-black"
                >
                    {formattedDate.split(",")[0]},
                </span>
                {formattedDate.split(",").slice(1).join(",")}
            </p>
        </div>
    );
};

export default Header;
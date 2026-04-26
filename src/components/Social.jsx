import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
    return (
        <div>
            <h1 className="font-bold mb-3 text-xl">Login With</h1>
            <div className="space-y-2">
                <button className="btn w-full border border-blue-500 text-blue-500"><FaGoogle />Login with Google</button>
                <button className="btn w-full border border-black"><FaGithub /> Login with GitHub</button>
            </div>
        </div>
    );
};

export default Social;
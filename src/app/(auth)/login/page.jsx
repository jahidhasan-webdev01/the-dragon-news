import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="h-[90vh] flex justify-center items-center py-5 bg-gray-100 px-5 md:px-0">
            <div className="w-lg bg-white border border-gray-100 px-2 md:px-5 py-10 rounded-md">
                <h1 className="text-center font-bold text-2xl">Login your account</h1>
                <div className="card-body mt-5">
                    <fieldset className="fieldset">
                        <label className="label font-bold mt-2">Email address</label>
                        <input type="email" className="input w-full bg-gray-100" placeholder="Enter your your email address" />
                        <label className="label font-bold mt-2">Password</label>
                        <input type="password" className="input w-full bg-gray-100" placeholder="Enter your password" />
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className="text-center mt-2 font-bold">Don&apos;t have an account? <Link href={"/register"} className="text-red-500">Register</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
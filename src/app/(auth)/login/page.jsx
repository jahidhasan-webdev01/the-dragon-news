"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleLogin = async (data) => {
        const { data: response, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
        })

        if (error) {
            toast.error(`${error.message}`)
        }

        if (response) {
            toast.success("Login successfull.")
        }
    }

    return (
        <div className="h-[90vh] flex justify-center items-center py-5 bg-gray-100 px-5 md:px-0">
            <div className="w-lg bg-white border border-gray-100 px-2 md:px-5 py-10 rounded-md">
                <h1 className="text-center font-bold text-2xl">Login your account</h1>
                <div className="card-body mt-5">
                    <form className="fieldset" onSubmit={handleSubmit(handleLogin)}>
                        <label className="label font-bold mt-2">Email address</label>
                        <input
                            type="email"
                            className="input w-full bg-gray-100"
                            placeholder="Enter your your email address"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.email?.message}</p>

                        <label className="label font-bold mt-2">Password</label>
                        <input
                            type="password"
                            className="input w-full bg-gray-100"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.password?.message}</p>

                        <button className="btn btn-neutral mt-4">Login</button>

                        <p className="text-center mt-2 font-bold">
                            Don&apos;t have an account?
                            <Link href={"/register"} className="text-red-500"> Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
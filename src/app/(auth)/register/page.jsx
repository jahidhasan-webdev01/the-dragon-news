"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleRegister = async (data) => {
        const { data: response, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
        })

        if (error) {
            toast.error(`${error.message}`)
        }

        if (response) {
            toast.success("User created successfully.")
            redirect("/")
        }
    }

    return (
        <div className="h-[90vh] flex justify-center items-center py-5 bg-gray-100 px-5 md:px-0">
            <div className="w-lg bg-white border border-gray-100 px-2 md:px-5 py-10 rounded-md">
                <h1 className="text-center font-bold text-2xl">Register your account</h1>
                <div className="card-body mt-5">
                    <form className="fieldset" onSubmit={handleSubmit(handleRegister)}>
                        <label className="label font-bold">Name</label>
                        <input
                            type="text"
                            className="input w-full bg-gray-100"
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.name?.message}</p>

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
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
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
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/4 cursor-pointer">
                                {
                                    !showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />
                                }
                            </span>
                        </div>
                        <p className="text-red-500">{errors?.password?.message}</p>

                        <button className="btn btn-neutral mt-4">Register</button>

                        <p className="text-center mt-2 font-bold">
                            Already have an account?
                            <Link href={"/login"} className="text-red-500"> Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
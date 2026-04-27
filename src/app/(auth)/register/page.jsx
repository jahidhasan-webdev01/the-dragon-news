"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleRegister = (data) => {
        console.log(data);
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

                        <button className="btn btn-neutral mt-4">Register</button>

                        <p className="text-center mt-2 font-bold">
                            Already have an account?
                            <Link href={"/login"} className="text-red-500">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
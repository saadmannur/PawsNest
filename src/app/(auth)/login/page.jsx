'use client'
import { Button, Separator } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='flex justify-center mt-1'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-center text-3xl font-semibold'>Login Your Account</h2>
                    <form >
                        <fieldset className="fieldset relative">
                            <label className="label">Email</label>
                            <input
                                // {...register("email", {
                                //     required: "This is required"
                                // })}
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                            {/* <p className='text-red-500'>{errors.email?.message}</p> */}

                            <label className="label">Password</label>
                            <input
                                // {...register("password", {
                                //     required: "This is required",
                                //     minLength: {
                                //         value: 8,
                                //         message: "Minimum length 8"
                                //     }
                                // })}
                                type={showPassword ? "text" : "password"}
                                className="input"
                                placeholder="Password"
                            />
                            <span
                                className='absolute top-28 right-4 cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ?
                                        <span className='text-xl'><FaEye /></span> :
                                        <span className='text-xl'><FaEyeSlash /></span>
                                }
                            </span>
                            {/* <p className='text-red-500'>{errors.password?.message}</p> */}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <Button variant='outline' className=' bg-[#f69b03] text-white w-full mt-3'>Login</Button>
                        </fieldset>
                    </form>
                    <div className='flex justify-center items-center gap-3 overflow-hidden'>
                        <Separator></Separator>
                        <div className="whitespace-nowrap">Or signin with google</div>
                        <Separator></Separator>
                    </div>
                    <Button
                        
                        className="w-full my-3" variant="outline">
                        <Icon icon="devicon:google" />
                        Sign in with Google
                    </Button>
                    <p className='text-sm text-gray-400 text-center'>Do not have an account <span className='text-[#f69b03] underline'><Link href={'/signup'}>Sign up</Link></span></p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;
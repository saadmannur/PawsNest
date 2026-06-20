'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Separator } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SignUpPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const validateConfirmPassword = watch('password')

    const handleLoginFunc = async (data) => {
        // console.log(data)
        const { name, email, photo, password, confirmPassword } = data;

        const {data:res , error} = await authClient.signUp.email({
            name: name,
            email: email,
            image: photo,
            password: password,
            confirmPassword: confirmPassword,
            callbackURL: "/"
        })
        // console.log('signup response', {res, error});

        if(error){
            toast.error(error.message, {
                position: 'top-center',
            })
        }

        if(res){
            toast.success("Sign Up Successful", {
                position: 'top-center',
            })
            redirect('/login')
        }
        
    }

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-center text-3xl  font-semibold '>Create An Account</h2>
                    <form onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset ">

                            {/* name */}
                            <label className="label">Name</label>
                            <input
                                {...register("name", {
                                    required: "Enter your name"
                                })}
                                type="name"
                                className="input"
                                placeholder="Name"
                            />
                            <p className='text-red-500'>{errors.name?.message}</p>


                            {/* email */}
                            <label className="label">Email</label>
                            <input
                                {...register("email", {
                                    required: "Enter your email"
                                })}
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                            <p className='text-red-500'>{errors.email?.message}</p>

                            {/* photo url */}
                            <label className="label">Photo Url</label>
                            <input
                                {...register("photo", {
                                    required: "Enter your photo url"
                                })}
                                type="text"
                                className="input"
                                placeholder="Photo url"
                            />
                            <p className='text-red-500'>{errors.photo?.message}</p>


                            {/* password */}
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input
                                    {...register("password", {
                                        required: "Set a password",
                                        minLength: {
                                            value: 8,
                                            message: "Minimum length 8"
                                        },
                                        pattern:{
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                                            message: "Password must contain uppercase, lowercase and a number"
                                        }
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Password"
                                />
                                <span
                                    className='absolute top-2.5 right-2 cursor-pointer'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {
                                        showPassword ?
                                            <span className='text-xl'><FaEye /></span> :
                                            <span className='text-xl'><FaEyeSlash /></span>
                                    }
                                </span>
                            </div>
                            <p className='text-red-500'>{errors.password?.message}</p>


                            {/* confirm password */}
                            <label className="label">Confirm Password</label>
                            <div className='relative'>
                                <input
                                    {...register("confirmPassword", {
                                        required: "Conform password is required",
                                        validate: (value) => value === validateConfirmPassword || "Confirm password must be same",
                                    })}
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Conform Password"
                                />
                                <span
                                    className='absolute top-2.5 right-2  cursor-pointer'
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {
                                        showConfirmPassword ?
                                            <span className='text-xl'><FaEye /></span> :
                                            <span className='text-xl'><FaEyeSlash /></span>
                                    }
                                </span>
                            </div>
                            <p className='text-red-500'>{errors.confirmPassword?.message}</p>


                            <Button type='submit' variant='outline' className=' bg-[#f69b03] text-white w-full mt-3'>Sign up</Button>
                        </fieldset>
                    </form>
                    <div className='flex justify-center items-center gap-3 overflow-hidden'>
                        <Separator></Separator>
                        <div className="whitespace-nowrap">Or sign up with google</div>
                        <Separator></Separator>
                    </div>

                    {/* google sign up */}
                    <Button
                        onClick={handleGoogleSignIn}
                        className="w-full my-3" variant="outline">
                        <Icon icon="devicon:google" />
                        Sign up with Google
                    </Button>
                    <p className='text-sm text-gray-400 text-center'>Already have an account <span className='text-[#f69b03] underline'><Link href={'/login'}>Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
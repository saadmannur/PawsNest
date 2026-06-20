'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Separator } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';


const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLoginFunc = async (data) => {
        // console.log(data)
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        })
        console.log('login response', {res, error})

        if (error) {
            toast.error(error.message, {
                position: 'top-center',
            })
        }

        if (res) {
            toast.success("Login Successful", {
                position: 'top-center',
            })
            redirect('/')
        }
    }

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-center text-3xl font-semibold'>Login Your Account</h2>
                    <form onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset relative">
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

                            {/* password */}
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input
                                    {...register("password", {
                                        required: "Put your password",
                                        minLength: {
                                            value: 8,
                                            message: "Minimum length 8"
                                        },
                                        pattern: {
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

                            <Button type='submit' variant='outline' className=' bg-[#f69b03] text-white w-full mt-3'>Login</Button>
                        </fieldset>
                    </form>
                    <div className='flex justify-center items-center gap-3 overflow-hidden'>
                        <Separator></Separator>
                        <div className="whitespace-nowrap">Or signin with google</div>
                        <Separator></Separator>
                    </div>
                    <Button
                        onClick={handleGoogleSignIn}
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
'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import NavDropdown from '../dropdown/NavDropdown';

const NavSession = () => {

    const pathname = usePathname()
    // console.log(pathname);

    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    // console.log(user);

    const router = useRouter()
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    }

    return (
        <>
            {
                user && pathname !== "/login" ?
                    <div className='flex justify-center items-center gap-2'>
                        <Avatar>
                            <Avatar.Image
                                referrerPolicy='no-referrer'
                                alt={user?.name}
                                src={user?.image}
                            />
                            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                        <h2 className='text-[#f69b03] text-lg font-semibold'>{user?.name}</h2>
                        <NavDropdown handleSignOut={handleSignOut}></NavDropdown>
                    </div> :

                    <div className='space-x-2'>
                        <Link href={'/login'}>
                            <Button variant='outline' className=" text-[#f69b03] font-semibold ">Log In</Button>
                        </Link>
                        <Link href={'/signup'}>
                            <Button variant='outline' className=" text-[#f69b03] font-semibold ">Sign Up</Button>
                        </Link>
                    </div>
            }
        </>
    );
};

export default NavSession;
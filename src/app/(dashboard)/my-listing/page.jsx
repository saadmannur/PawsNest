import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyListingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/pet/email/${user?.email}`);
    const data = await res.json()
    console.log(data)


    return (
        <div>
            this is my listing page
        </div>
    );
};

export default MyListingPage;
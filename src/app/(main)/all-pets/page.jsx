import PetCard from '@/components/allPets/PetCard';
import Searching from '@/components/searchingFiltering/Searching';
import React from 'react';

const getAllPets = async (search, species) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet?search=${search}&species=${species}`, {
        cache: 'no-store',
    });
    const data = await res.json()
    return data
}

const AllPets = async ({ searchParams }) => {
    const params = await searchParams;

    const search = params?.search || '';
    const species = params?.species || '';

    const allPets = await getAllPets(search, species)
    // console.log(allPets)

    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center p-5 '>
                    <h2 className='text-3xl font-bold'>All Pets Are Here </h2>
                    <h2 className='text-3xl font-bold'><span className='text-[#02a25f]'>Choose</span> Your Companies</h2>
                    <p className='text-gray-500 mt-3'>Pets bring unconditional love, endless joy, and loyal companionship, making every house feel more like a home.</p>
                </div>
                <div>
                    <Searching></Searching>
                </div>
                <div className=' p-5  '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            allPets.map(pet => <PetCard key={pet._id}
                                pet={pet}
                            ></PetCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPets;
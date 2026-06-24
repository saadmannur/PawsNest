'use client'
import { Button, Dropdown, Header, Label } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Searching = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [species, setSpecies] = useState(searchParams.get('species') || '')

    const speciesList = ['All', 'Cat', 'Dog', 'Bird', 'Rabbit'];

    // handle search
    const handleSearch = (e) => {
        e.preventDefault();

        router.push(`/all-pets?search=${search.trim()}&species=${species}`);
    };

    // handle dropdown
    const handleSpecies = (value) => {
        const selectedSpecies = value === 'All' ? '' : value;

        setSpecies(selectedSpecies);

        router.push(`/all-pets?search=${search.trim()}&species=${selectedSpecies.trim()}`);
    };

    return (
        <div className='container mx-auto'>


            {/* searching  */}
            <div className='flex justify-center items-center mt-3'>
                <form
                    onSubmit={handleSearch}
                    className='flex gap-2 items-center'>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search here"
                        className="input  md:w-80"
                    />

                    <button
                        type='submit'
                        className='btn bg-[#f69b30] text-white '>Search</button>
                </form>
            </div>

            {/* filtering by dropdown */}
            <div className='flex justify-end items-end my-0'>
                <div className='mr-5 flex items-center gap-2'>
                    <h2 className='text-lg font-semibold '>Sort By:</h2>
                    <Dropdown>
                        <Button aria-label="Menu" variant="outline" className={'rounded-full px-3 h-8'}>
                            {species || 'All Pets'}
                            {<IoMdArrowDropdown />}
                        </Button>
                        <Dropdown.Popover className="min-w-42 mr-5">
                            <Dropdown.Menu >
                                <Dropdown.Section>
                                    <Header>Select Species</Header>
                                    {
                                        speciesList.map((s, i) => <Dropdown.Item
                                            key={i}
                                            id={s}
                                            textValue={s}
                                            onPress={() => handleSpecies(s)}>
                                            <Dropdown.ItemIndicator />
                                            <Label>{s}</Label>
                                        </Dropdown.Item>)
                                    }

                                </Dropdown.Section>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>

            </div>
        </div>
    );
};

export default Searching;
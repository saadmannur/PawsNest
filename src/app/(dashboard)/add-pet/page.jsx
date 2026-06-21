'use client'

import { authClient } from '@/lib/auth-client';
import { Card, FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from '@heroui/react';
import React from 'react';
import { MdOutlinePets } from 'react-icons/md';

const AddPet = () => {

    const { data } = authClient.useSession();
    const ownerEmail = data?.user?.email;

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const pet = Object.fromEntries(formData.entries())
        // console.log(pet)

        const res = await fetch('http://localhost:5000/pet', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(pet)
        })
        const data = await res.json()
        console.log(data)

    }

    return (
        <div className=' max-w-7xl mb-10'>
            <div className='lg:w-4xl text-center p-5 mb-2 border border-gray-300 bg-white rounded-xl'>
                <div className='text-3xl font-bold flex justify-center items-center gap-2'>
                    <MdOutlinePets />
                    <h2>Add a Pet Listing</h2>
                </div>
                <p className='text-gray-500 mt-1'>List a pet for adoption and help them find a loving home</p>
            </div>
            <Card>
                <div className='text-xl font-semibold flex justify-baseline items-center gap-2'>
                    <MdOutlinePets />
                    <h2>Pet Information</h2>
                </div>
                <form
                    onSubmit={handleSubmitForm}
                    className="lg:px-10 space-y-4 w-3xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        {/* Pet Name */}
                        <div className="col-span-1 lg:col-span-2">
                            <TextField name="petName" isRequired>
                                <Label>Pet Name</Label>
                                <Input placeholder="e.g. Buddy" className="rounded-full lg:w-full" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* species */}
                        <div className='col-span-1 lg:col-span-1'>
                            <Select
                                name="species"
                                isRequired
                                className="w-[200] lg:w-full"
                                placeholder="Select Species"
                            >
                                <Label>Species</Label>
                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="dog" textValue="Dog">
                                            Dog
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="cat" textValue="Cat">
                                            Cat
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="bird" textValue="Bird">
                                            Bird
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                        <div className='hidden lg:block col-span-1'></div>

                        {/* Breed */}
                        <div className="col-span-1 lg:col-span-2">
                            <TextField name="breed" isRequired>
                                <Label>Breed</Label>
                                <Input placeholder="e.g. Labrador Retriever" className="rounded-full" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* age */}
                        <div className="col-span-1 lg:col-span-2">
                            <TextField name="age" isRequired>
                                <Label>Age(years)</Label>
                                <Input placeholder="e.g. 2 " className="rounded-full" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Gender */}
                        <div className='col-span-1 lg:col-span-1'>
                            <Select
                                name="gender"
                                isRequired
                                className="w-[200] lg:w-full"
                                placeholder="Select Gender"
                            >
                                <Label>Gender</Label>
                                <Select.Trigger className="rounded-full">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Male" textValue="Male">
                                            Male
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Female" textValue="Female">
                                            Female
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                        <div className='hidden lg:block col-span-1'></div>


                        {/* Health Status */}
                        <div className='col-span-1 lg:col-span-1'>
                            <Select
                                name="healthStatus"
                                isRequired
                                className=" w-[200] lg:w-full"
                                placeholder="Select Status"
                            >
                                <Label>Health Status</Label>
                                <Select.Trigger className="rounded-full">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Healthy" textValue="Healthy">
                                            Healthy
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Stable" textValue="Stable">
                                            Stable
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Critical" textValue="Critical">
                                            Critical
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                        <div className='hidden lg:block col-span-1'></div>

                        {/* Vaccination Status */}
                        <div className='col-span-1 lg:col-span-1'>
                            <Select
                                name="vaccinationStatus"
                                isRequired
                                className=" w-[200] lg:w-full"
                                placeholder="Select Status"
                            >
                                <Label>Vaccination Status</Label>
                                <Select.Trigger className="rounded-full">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Yes" textValue="Yes">
                                            Yes
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="No" textValue="No">
                                            No
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                        <div className='hidden lg:block col-span-1'></div>

                        {/* location */}
                        <div className="col-span-1 lg:col-span-2">
                            <TextField name="location" isRequired>
                                <Label>Location</Label>
                                <Input placeholder="e.g. 22-Road, agra, chittagong" className="rounded-full lg:w-full" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* pet image url */}
                        <div className="col-span-1 lg:col-span-4">
                            <TextField name="petImageUrl" isRequired>
                                <Label>Pet Image Url</Label>
                                <Input placeholder="e.g. https://something" className="rounded-full lg:w-full" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Price */}
                        <div className="col-span-1 lg:col-span-1">
                            <TextField name="adaptionFee" type="number" isRequired>
                                <Label>Adaption Fee (USD)</Label>
                                <Input
                                    type="number"
                                    placeholder="$..35"
                                    className="rounded-full lg:w-full"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                        <div className='hidden lg:block col-span-1'></div>

                        {/* owner email */}
                        <div className="col-span-1 lg:col-span-2">
                            <TextField name="ownerEmail" isRequired>
                                <Label>Owner Email</Label>
                                <Input value={ownerEmail} className="rounded-full" readOnly />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="col-span-1 lg:col-span-4">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe the pet's personality, habits, needs and any experiences..."
                                    className="rounded-full w-[380] lg:w-full"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <div className='lg:flex justify-between items-center gap-5'>
                        <Button
                            type="cancel"
                            variant="outline"
                            className=" rounded-full lg:w-full "
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="outline"
                            className=" rounded-full lg:w-full bg-[#f69b03] text-white"
                        >
                            Add Pet
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddPet;
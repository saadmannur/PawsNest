'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Calendar, Card, DateField, DatePicker, FieldError, Input, Label, TextArea, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { LuClipboardList } from 'react-icons/lu';
import { SiTicktick } from 'react-icons/si';

const PetAdaption = ({ petInfo }) => {
    const { petName, _id } = petInfo;

    const { data } = authClient.useSession();
    const user = data?.user;

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const adaptedPet = Object.fromEntries(formData.entries())
        // console.log(adaptedPet)
        const adaptedPetInfo = {
            ...adaptedPet,
            petId: _id,
            status: "pending",
            requestDate: new Date().toLocaleDateString("en-GB")
        }
        // console.log(adaptedPetInfo);

        const res = await fetch(`http://localhost:5000/adapted-pet`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(adaptedPetInfo)
        });
        const data = await res.json()
        // console.log(data)

        if (data.acknowledged) {
            setIsSubmitted(true);
        }
    }

    return (
        <div className='ml-10 mr-5'>
            {
                isSubmitted ?

                    <div className='ml-10 mr-5'>
                        <Card className="rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
                            <div className="flex flex-col items-center text-center p-10 space-y-5">
                                <div className="w-18 h-18 rounded-full bg-green-100 flex items-center justify-center">
                                    <SiTicktick className="text-green-700 w-9 h-9" strokeWidth={1} />
                                </div>
                                <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full tracking-wide">
                                    Successful
                                </span>
                                <div className="space-y-1">
                                    <h2 className="text-xl font-medium text-gray-900">
                                        Request Submitted
                                    </h2>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Your adoption request for <span className="font-medium text-gray-700">{petName}</span> has been sent to the owner. You can track its status ni My Request
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Link href={'/dashboard'}>
                                        <Button variant='outline' className={'bg-[#f69b03] text-white'}>
                                            <LuClipboardList />
                                            My Request
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </div> :

                    <Card className='rounded-2xl border border-gray-300 shadow'>
                        <div className='flex justify-baseline items-center gap-1'>
                            <span className='text-[#f69b03] text-xl mt-1'><FaRegHeart /></span>
                            <h2 className='text-2xl font-bold'>Request to Adopt {petName}</h2>
                        </div>
                        <form
                            onSubmit={handleSubmitForm}
                            className=" space-y-4 ">

                            <div className="space-y-4">

                                {/* Pet Name */}
                                <div className="">
                                    <TextField name="petName" isRequired>
                                        <Label>Pet Name</Label>
                                        <Input value={petName} className="rounded-full w-full" readOnly />
                                        <FieldError />
                                    </TextField>
                                </div>

                                {/* your Name */}
                                <div className="">
                                    <TextField name="adapterName" isRequired>
                                        <Label>Your Name</Label>
                                        <Input value={user?.name} className="rounded-full w-full" readOnly />
                                        <FieldError />
                                    </TextField>
                                </div>

                                {/* Adapter Email */}
                                <div className="">
                                    <TextField name="adapterEmail" isRequired>
                                        <Label>Your Email</Label>
                                        <Input value={user?.email} className="rounded-full w-full " readOnly />
                                        <FieldError />
                                    </TextField>
                                </div>

                                {/* Pick up date */}
                                <DatePicker className="w-full" name="date">
                                    <Label>Preferred Pickup Date</Label>
                                    <DateField.Group fullWidth>
                                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                        <DateField.Suffix>
                                            <DatePicker.Trigger>
                                                <DatePicker.TriggerIndicator />
                                            </DatePicker.Trigger>
                                        </DateField.Suffix>
                                    </DateField.Group>
                                    <DatePicker.Popover>
                                        <Calendar aria-label="Event date">
                                            <Calendar.Header>
                                                <Calendar.YearPickerTrigger>
                                                    <Calendar.YearPickerTriggerHeading />
                                                    <Calendar.YearPickerTriggerIndicator />
                                                </Calendar.YearPickerTrigger>
                                                <Calendar.NavButton slot="previous" />
                                                <Calendar.NavButton slot="next" />
                                            </Calendar.Header>
                                            <Calendar.Grid>
                                                <Calendar.GridHeader>
                                                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                                </Calendar.GridHeader>
                                                <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                            </Calendar.Grid>
                                            <Calendar.YearPickerGrid>
                                                <Calendar.YearPickerGridBody>
                                                    {({ year }) => <Calendar.YearPickerCell year={year} />}
                                                </Calendar.YearPickerGridBody>
                                            </Calendar.YearPickerGrid>
                                        </Calendar>
                                    </DatePicker.Popover>
                                </DatePicker>

                                {/* Description */}
                                <div className="">
                                    <TextField name="AdapterMessage" isRequired>
                                        <Label>Message To Owner</Label>
                                        <TextArea
                                            placeholder="Write a Message to Owner"
                                            className="rounded-full "
                                        />
                                        <FieldError />
                                    </TextField>
                                </div>
                            </div>

                            {/* Buttons */}

                            <div>
                                <Button
                                    type="submit"
                                    variant="outline"
                                    className=" rounded-full bg-[#f69b03] text-white w-full"
                                >
                                    Adapt {petName}
                                </Button>
                            </div>
                        </form>
                    </Card>
            }
        </div>
    );
};

export default PetAdaption;
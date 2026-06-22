'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Calendar, Card, DateField, DatePicker, FieldError, Input, Label, TextArea, TextField } from '@heroui/react';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const PetAdaption = ({ petInfo }) => {
    const { petName } = petInfo;

    const { data } = authClient.useSession();
        const user = data?.user;

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const adaptedPet = Object.fromEntries(formData.entries())
        // console.log(adaptedPet)

        const res = await fetch(`http://localhost:5000/adapted-pet`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(adaptedPet)
        });
        const data = await res.json()
        console.log(data)
    }

    return (
        <div className='ml-10 mr-5'>
            <Card className='rounded-2xl border border-gray-300 shadow'>
                <div className='flex justify-baseline items-center gap-1'>
                    <span className='text-[#f69b03] text-xl mt-1'><FaRegHeart /></span>
                    <h2 className='text-2xl font-bold'>Request to Adapt {petName}</h2>
                </div>
                <form
                    onSubmit={handleSubmitForm}
                    className=" space-y-4 ">

                    <div className="space-y-4">

                        {/* Pet Name */}
                        <div className="">
                            <TextField name="petName" isRequired>
                                <Label>Pet Name</Label>
                                <Input value={petName} className="rounded-full w-full"  readOnly/>
                                <FieldError />
                            </TextField>
                        </div>

                        {/* your Name */}
                        <div className="">
                            <TextField name="adapterName" isRequired>
                                <Label>Your Name</Label>
                                <Input value={user?.name} className="rounded-full w-full" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Adapter Email */}
                        <div className="">
                            <TextField name="adapterEmail" isRequired>
                                <Label>Your Email</Label>
                                <Input value={user?.email} className="rounded-full w-full " />
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
        </div>
    );
};

export default PetAdaption;
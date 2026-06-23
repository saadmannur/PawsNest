import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from '@heroui/react';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

const EditWithModal = ({ petInfo }) => {

    const { petName, vaccinationStatus, species, petImageUrl, ownerEmail, location, healthStatus, gender, description, age, adaptionFee, breed, } = petInfo;

    return (
        <div>
            <Modal >
                <Button variant='outline' className={'w-full'}><FaRegEdit />Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl w-full max-h-[90vh]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Edit Pet Information</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6 w-full overflow-y-auto">
                                <Surface variant="default">
                                    <form
                                        // onSubmit={handleSubmitForm}
                                        className="lg:px-10 space-y-4 "
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                                            {/* Pet Name */}
                                            <div className="col-span-1 lg:col-span-2">
                                                <TextField name="petName" isRequired defaultValue={petName}>
                                                    <Label>Pet Name</Label>
                                                    <Input placeholder="e.g. Buddy" className="rounded-full lg:w-full" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* species */}
                                            <div className='col-span-1 lg:col-span-2'>
                                                <Select
                                                    defaultValue={species}
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


                                            {/* Breed */}
                                            <div className="col-span-1 lg:col-span-2">
                                                <TextField name="breed" isRequired defaultValue={breed}>
                                                    <Label>Breed</Label>
                                                    <Input placeholder="e.g. Labrador Retriever" className="rounded-full" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* age */}
                                            <div className="col-span-1 lg:col-span-2">
                                                <TextField name="age" isRequired defaultValue={age}>
                                                    <Label>Age(years)</Label>
                                                    <Input placeholder="e.g. 2 " className="rounded-full" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Gender */}
                                            <div className='col-span-1 lg:col-span-2'>
                                                <Select
                                                    defaultValue={gender}
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



                                            {/* Health Status */}
                                            <div className='col-span-1 lg:col-span-2'>
                                                <Select
                                                    defaultValue={healthStatus}
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


                                            {/* Vaccination Status */}
                                            <div className='col-span-1 lg:col-span-2'>
                                                <Select
                                                    defaultValue={vaccinationStatus}
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


                                            {/* location */}
                                            <div className="col-span-1 lg:col-span-2">
                                                <TextField name="location" isRequired defaultValue={location}>
                                                    <Label>Location</Label>
                                                    <Input placeholder="e.g. 22-Road, agra, chittagong" className="rounded-full lg:w-full" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* pet image url */}
                                            <div className="col-span-1 lg:col-span-4">
                                                <TextField name="petImageUrl" isRequired defaultValue={petImageUrl}>
                                                    <Label>Pet Image Url</Label>
                                                    <Input placeholder="e.g. https://something" className="rounded-full lg:w-full" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Price */}
                                            <div className="col-span-1 lg:col-span-2">
                                                <TextField name="adaptionFee" type="number" isRequired defaultValue={adaptionFee}>
                                                    <Label>Adaption Fee (USD)</Label>
                                                    <Input
                                                        type="number"
                                                        placeholder="$..35"
                                                        className="rounded-full lg:w-full"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>


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
                                                <TextField name="description" isRequired defaultValue={description}>
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

                                        <div className='lg:flex justify-between items-center gap-5 space-x-3'>
                                            <Button
                                                type="cancel"
                                                variant="outline"
                                                className=" rounded-full lg:w-full"
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                type="submit"
                                                variant="outline"
                                                className=" rounded-full lg:w-full bg-[#f69b03] text-white"
                                            >
                                                Edit Pet
                                            </Button>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditWithModal;
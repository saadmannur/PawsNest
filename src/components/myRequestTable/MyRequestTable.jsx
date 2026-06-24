import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import {  MdOutlineRemoveRedEye } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';
import { SiTicktick } from 'react-icons/si';
import DeleteRequest from './DeleteRequest';

const MyRequestTable = ({ myAdoptionRequests }) => {
    // console.log("for response",myAdoptionRequests);

    const statusConfig = {
        pending: {
            icon: <CiCircleInfo />,
            className: " bg-orange-100 text-[#f69b03]",
        },
        approved: {
            icon: <SiTicktick />,
            className: " bg-green-100 text-green-700",
        },
        rejected: {
            icon: <RxCrossCircled />,
            className: " bg-red-100 text-red-700",
        }
    }

    return (
        <div className='my-5'>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Pet Name</Table.Column>
                            <Table.Column>Request Date</Table.Column>
                            <Table.Column>Pickup Date</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Actions</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                myAdoptionRequests.map(request => <Table.Row key={request._id}>
                                    <Table.Cell>{request.petName}</Table.Cell>
                                    <Table.Cell>{request.requestDate}</Table.Cell>
                                    <Table.Cell>{request.date}</Table.Cell>
                                    <Table.Cell>
                                        {/* <p className={`${request.status === 'approved' ?
                                            'bg-green-100 text-green-700' :
                                            request.status === 'rejected' ?
                                                'bg-red-100 text-red-700' :
                                                'bg-orange-100 text-[#f69b03]'}
                                            border px-3 rounded-full font-bold text-center mx-auto `}>{request.status}</p> */}

                                        <p className={`border rounded-full font-bold justify-center flex items-center gap-1  ${statusConfig[request.status]?.className}`}>
                                            {statusConfig[request.status]?.icon}
                                            {request.status}</p>

                                    </Table.Cell>
                                    <Table.Cell className={'flex gap-2 justify-end items-end'}>

                                        <div >
                                            <Link href={`/all-pets/${request.petId}`}>
                                                <Button variant='outline'><MdOutlineRemoveRedEye />View</Button>
                                            </Link>
                                        </div>
                                        <div className={` ${request.status === 'pending' ? 'block' : 'hidden'}`}>
                                            <DeleteRequest _id={request._id}></DeleteRequest>
                                        </div>

                                    </Table.Cell>
                                </Table.Row>)
                            }
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default MyRequestTable;
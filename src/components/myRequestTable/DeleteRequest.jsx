'use client'
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const DeleteRequest = ({ _id }) => {

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/adapted-pet/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        });
        const data = await res.json();
        console.log(data)

        if (data.deletedCount > 0) {
            toast.warning("Your Request deleted successfully");
            redirect('/dashboard')

        }
    }

    return (
        <div>
            <AlertDialog>
                <Button variant='outline' className={' text-red-500'}><MdDeleteForever />Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Request permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>Request</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} variant="danger">
                                    Conform Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteRequest;
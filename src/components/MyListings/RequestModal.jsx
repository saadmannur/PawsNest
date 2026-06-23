import { Button, Modal } from '@heroui/react';
import React from 'react';
import { HiUsers } from 'react-icons/hi';
import PetRequestCard from './PetRequestCard';

const RequestModal = ({ adaptionPetRequests }) => {
    return (
        <div>
            <Modal>
                <Button variant='outline' className={'w-full'}><HiUsers />Request</Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading className='flex items-center gap-1 text-2xl font-bold'><HiUsers className='text-[#f69b03] ' />Adaption Request for</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    {
                                        adaptionPetRequests?.map(petRequest => <PetRequestCard
                                            key={petRequest._id}
                                            petRequest={petRequest}
                                        ></PetRequestCard>)
                                    }
                                </div>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default RequestModal;
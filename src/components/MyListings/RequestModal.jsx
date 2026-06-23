import { Button, Modal } from '@heroui/react';
import React from 'react';
import { HiUsers } from 'react-icons/hi';
import PetRequestCard from './PetRequestCard';
import { ImBlocked } from 'react-icons/im';

const RequestModal = ({ adaptionPetRequests, petName }) => {
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
                                        adaptionPetRequests.length === 0 ?
                                            <div className='border border-gray-300 text-black bg-[#FFFFFF] rounded-xl p-2 mb-4 flex flex-col items-center'>
                                                <div className='text-xl text-gray-500 font-semibold flex justify-center items-center '>
                                                    
                                                    <p>No Adaption Request for</p>
                                                </div>
                                                <h2 className='text-xl text-black font-semibold pt-1 mb-3'>{petName}</h2>
                                                <div className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center">
                                                    <ImBlocked className="text-gray-700 w-9 h-9" strokeWidth={1} />
                                                </div>

                                            </div> :

                                            <div>
                                                {
                                                    adaptionPetRequests?.map(petRequest => <PetRequestCard
                                                        key={petRequest._id}
                                                        petRequest={petRequest}
                                                    ></PetRequestCard>)
                                                }
                                            </div>
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
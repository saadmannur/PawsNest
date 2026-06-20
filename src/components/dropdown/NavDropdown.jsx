import { EllipsisVertical } from '@gravity-ui/icons';
import { Button, Dropdown, Header, Separator } from '@heroui/react';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { IoLogOut } from 'react-icons/io5';
import { TbLayoutDashboardFilled } from 'react-icons/tb';

const NavDropdown = ({ handleSignOut }) => {
    return (
        <Dropdown>
            <Button isIconOnly aria-label="Menu" variant="secondary">
                <EllipsisVertical className="outline-none" />
            </Button>
            <Dropdown.Popover className={'bg-[#005a55]'}>
                <Dropdown.Menu>
                    <Dropdown.Section>
                        <Dropdown.Item
                            key={'dashboard'}
                            as={Link}
                            href='/dashboard'
                            className='flex justify-baseline items-center gap-1  text-white font-semibold mt-5 hover:bg-[#f69b03]'
                        >
                            <TbLayoutDashboardFilled />
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item
                            key={'profile'}
                            as={Link}
                            href='/profile'
                            className='flex justify-baseline items-center gap-1  text-white font-semibold hover:bg-[#f69b03]'
                        >
                            <CgProfile />
                            Profile
                        </Dropdown.Item>
                    </Dropdown.Section>
                    <Separator />
                    <Dropdown.Section>
                        <Header className='text-gray-300'>Danger zone</Header>
                        <Dropdown.Item
                            key={'logout'}
                            onClick={handleSignOut}
                            className='flex justify-baseline items-center gap-1  text-white font-semibold hover:bg-[#f69b03]'
                        >
                            <IoLogOut />
                            Log Out
                        </Dropdown.Item>
                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};

export default NavDropdown;
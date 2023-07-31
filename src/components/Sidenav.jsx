import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import {BiSolidBusiness} from 'react-icons/bi';
import { IoSchool } from 'react-icons/io5';
import SidenavMdItem from './SidenavMdItem';
import SideNavItem from './SideNavItem';

const Sidenav = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <SideNavItem id='main' icon={<AiOutlineHome size={20} />} text='Home' handleNav={handleNav} />
                        <SideNavItem id='work' icon={<BiSolidBusiness size={20} />} text='Work' handleNav={handleNav} />
                        <SideNavItem id='education' icon={<IoSchool size={20} />} text='Education' handleNav={handleNav} />
                        <SideNavItem id='projects' icon={<AiOutlineProject size={20} />} text='Projects' handleNav={handleNav} />
                        <SideNavItem id='contact' icon={<AiOutlineMail size={20} />} text='Contact' handleNav={handleNav} />
                    </div>
                ) : (
                    ''
                )}

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <SidenavMdItem id='main' icon={<AiOutlineHome size={20} />} text='Home' />
                    <SidenavMdItem id='work' icon={<BiSolidBusiness size={20} />} text='Work' />
                    <SidenavMdItem id='education' icon={<IoSchool size={20} />} text='Education' />
                    <SidenavMdItem id='projects' icon={<AiOutlineProject size={20} />} text='Projects' />
                    <SidenavMdItem id='contact' icon={<AiOutlineMail size={20} />} text='Contact' />
                </div>
            </div>
        </div>
    )
}

export default Sidenav;
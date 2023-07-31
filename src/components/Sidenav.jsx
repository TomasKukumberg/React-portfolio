import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs'
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
                        <SideNavItem id='#main' icon='AiHome' spanText='Home' handleNav={handleNav} />
                        <SideNavItem id='#timeline' icon='GrProjects' spanText='Timeline' handleNav={handleNav} />
                        <SideNavItem id='#projects' icon='AiProject' spanText='Projects' handleNav={handleNav} />
                        <SideNavItem id='#person' icon='BsPerson' spanText='Resume' handleNav={handleNav} />
                        <SideNavItem id='#contact' icon='AiMail' spanText='Contact' handleNav={handleNav} />
                    </div>
                ) : (
                    ''
                )}

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <SidenavMdItem id='#main' icon='AiHome' handleNav={handleNav} />
                    <SidenavMdItem id='#timeline' icon='GrProjects' handleNav={handleNav} />
                    <SidenavMdItem id='#projects' icon='AiProject' handleNav={handleNav} />
                    <SidenavMdItem id='#person' icon='BsPerson' handleNav={handleNav} />
                    <SidenavMdItem id='#contact' icon='AiMail' handleNav={handleNav} />
                </div>
            </div>
        </div>
    )
}

export default Sidenav
import React from 'react'
import {AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr';
import {BsPerson} from 'react-icons/bs'

const SidenavMdItem = ({id, icon}) => {
    return (
        <a href={id} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            {icon === 'AiHome' && <AiOutlineHome size={20} />}
            {icon === 'GrProjects' && <GrProjects size={20} />}
            {icon === 'AiProject' && <AiOutlineProject size={20} />}
            {icon === 'BsPerson' && <BsPerson size={20} />}
            {icon === 'AiMail' && <AiOutlineMail size={20} />}
        </a>
    )
}

export default SidenavMdItem
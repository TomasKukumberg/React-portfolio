import React from 'react';

const SideNavItem = ({id, icon, text, handleNav}) => {
    return (
        <a href={'#' + id} onClick={handleNav} className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            {icon}
            <span className='pl-4'>{text}</span>
        </a>
    )
}

export default SideNavItem;
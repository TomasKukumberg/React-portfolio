import React from 'react'
import nature from '../assets/nature-person.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img src={nature} alt="" className='w-full h-screen object-cover object-left' />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'> {/*lg:items-start*/}
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Tomáš Kukumberg</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Frontend developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web developer',
                                2000,
                                'Coder',
                                2000,
                                'Tech enthusiast',
                                2000,
                                'CSS and Javascript enjoyer',
                                2000
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaLinkedin className='cursor-pointer' size={20} />
                        <FaGithub className='cursor-pointer' size={20} />
                        <FaFacebook className='cursor-pointer' size={20} />
                        <FaTwitter className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
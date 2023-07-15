import React from 'react'
import TimelineItem from './TimelineItem'

const data = [
    {
        year: '2018-2021',
        title: "Computer science bachelor's degree",
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor vitae quibusdam, distinctio, consequuntur nesciunt itaque, quae eaque repellendus enim ratione amet! Esse maxime ad fugit corrupti aspernatur? Pariatur, laboriosam atque?'
    },
    {
        year: '2021-2023',
        title: "Computer science master's degree",
        duration: '2 years',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor vitae quibusdam, distinctio, consequuntur nesciunt itaque, quae eaque repellendus enim ratione amet! Esse maxime ad fugit corrupti aspernatur? Pariatur, laboriosam atque?'
    },
    {
        year: '2018-2021',
        title: "Computer science bachelor's degree",
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor vitae quibusdam, distinctio, consequuntur nesciunt itaque, quae eaque repellendus enim ratione amet! Esse maxime ad fugit corrupti aspernatur? Pariatur, laboriosam atque?'
    }
]

const Timeline = () => {
    return (
        <div id='timeline' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Timeline</h1>
            {
                data.map((item, idx) => (
                    <TimelineItem 
                        key={idx} 
                        year={item.year} 
                        title={item.title} 
                        duration={item.duration} 
                        details={item.details} 
                    />
                ))
            }
        </div>
    )
}

export default Timeline
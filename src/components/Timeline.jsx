import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({id, data, title}) => {
    return (
        <div id={id} className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>{title}</h1>
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

export default Timeline;
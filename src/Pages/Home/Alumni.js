import React from 'react';
import frame from '../../assets/images/frameAlumni.jpg';

const Alumni = () => {
    return (
        <div className='bg-[#030d42] py-12 pb-20'>
            <div className='text-center md:text-start px-20'>
                <h1 className="text-3xl font-semibold">Our Alumni Works In Top Companies </h1>
            </div>
            <div className='flex flex-col md:flex-row justify-around flex-wrap px-40 md:px-32 pt-12'>
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />

            </div>
            <div className='flex flex-col md:flex-row justify-around flex-wrap px-40 md:px-56 md:pt-10'>

                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
                <img className='rounded-xl w-40 m-3' src={frame} alt="" />
            </div>
        </div>
    );
};

export default Alumni;
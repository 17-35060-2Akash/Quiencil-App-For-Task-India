import React from 'react';
import img1 from '../../assets/images/7.png';

const JoinQuencil = () => {
    return (
        <div className=''>
            <div className="hero bg-[#013574] py-20 px-12 md:px-20 lg:px-12">
                <div className="hero-content flex-col lg:flex-row-reverse border border-white border-dashed p-10 py-7 rounded-md">
                    <img src={img1} className=" rounded-lg w-3/5" alt='' />
                    <div className='text-start pt-20 lg:pt-0'>
                        <h1 className="text-3xl font-semibold ">Why should you join Quencil? </h1>
                        <p className="py-6">No Matter What It Takes! We Will Empower You If You Have The Confidence And Willingness To Study Coding. </p>
                        <p >
                            IIT And Stanford Alumni Created The Content. Instant 1:1 Resolution Of Doubts.
                        </p>
                        <p className="py-6">
                            Each Course Includes 100+ Problems And 10+ Projects For Hands-On Learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinQuencil;
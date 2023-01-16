import React from 'react';
import frame from '../../assets/images/whiteframe1.jpg';

const Founder = () => {
    return (
        <div className=''>
            <div className="hero bg-[#013574] py-20 px-12 md:px-20 lg:px-12">
                <div className="hero-content flex-col lg:flex-row-reverse border border-white border-dashed p-10 py-12 rounded-md">
                    <img src={frame} className=" rounded-lg shadow-2xl" alt='' />
                    <div className='text-start md:pr-16 pr-0 pt-20 lg:pt-0'>
                        <h1 className="text-4xl font-semibold ">Meet Our Founder</h1>
                        <p className="py-4">Our Founder Mr.Kunal Sharma has designed and delivered the Quencil Java Full Stack Developer(JFSD)
                            course, which is a 1000+ hour comprehensive, intensive, uimmersive, Educational based 360° Skills program and is a full one-stop solution to pursue your IT professional goals.</p>
                        <p>
                            The Quencil JFSD Program is structured as a hands-on case study and real-time project-based learning
                            approach that will enable every trained aspirant to improve their analytical and problem-solving skills by
                            structuring, designing, coding, testing, and deploying end-to-end Full Stack software solutions to real-
                            time scenarios using Modeling and DevOps concepts.

                        </p>
                        <button className="btn px-12 bg-white text-[#013574] hover:btn-ghost mt-10 lg:mt-5 rounded-sm hover:text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;
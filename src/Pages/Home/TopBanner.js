import React from 'react';
import bg from '../../assets/images/bannerbg.png';
import computer from '../../assets/images/1.png';
import './home.css';

const TopBanner = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
            className='pb-20 md:pb-0'
        >
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className='flex-start'>
                    <img src={computer} alt='' className="rounded-lg banner-img" />
                </div>
                <div className='text-center md:text-start md:mt-32'>
                    <div className='flex  justify-center'>
                        <h1 className="text-2xl md:text-4xl font-semibold mb-3 ">Learn all IT Courses <br /> from IT Experts </h1>
                    </div>
                    <div className='text-center mt-5 md:mr-14'>
                        <button className="btn btn-ghost ml bg-[#054490] px-4">Enroll now</button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default TopBanner;
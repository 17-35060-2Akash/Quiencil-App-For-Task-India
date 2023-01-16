import React from 'react';
import img1 from '../../assets/images/2.jpg';
import img2 from '../../assets/images/3.jpg';
import img3 from '../../assets/images/1.jpg';
import img4 from '../../assets/images/5.jpg';
import img5 from '../../assets/images/6.jpg';

const CaseStudies = () => {
    return (
        <div className='bg-[#030d42] py-20'>
            <div className='text-start p-10  px-24'>
                <h1 className="text-4xl font-semibold ">Case Studies & Projects </h1>
                <p className="py-4">SOLUTIONS TO REAL-TIME SCENARIOS ON BOTH CLIENT SIDE & SERVER SIDE. </p>
            </div>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 gap-y-0 md:gap-10 md:gap-y-0  lg:gap-32 lg:gap-y-0 md:px-10 lg:px-32'>
                    {/* cards start  */}
                    {/* card - 1 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-start">
                            <div className='mx-auto'>
                                <div className="card-title text-start">PLANNING </div>

                                <div className='text-start py-5'>
                                    <p>Undenstancing The Problem <br /> Statement.    </p>
                                    <p>Ask WHO, WHAT, WHEN, WHERE, <br /> WHY?</p>
                                    <p>Create Clear Business <br /> Objective Statement</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* card - 2 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-start">
                            <div className='mx-auto'>
                                <div className="card-title text-start">REQUIREMENT ANALYSIS </div>

                                <div className='text-start py-5'>
                                    <p>Identify User-Story Elaboratkons</p>
                                    <p>Identify Scope & Scope-Creep</p>
                                    <p> Identify Functional & Non- <br />Functional Requirements </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* card - 3 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={img3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-start">
                            <div className='mx-auto'>
                                <div className="card-title text-start">DESIGN & MODELING  </div>

                                <div className='text-start py-5'>
                                    <p>Use-Case Diagrams</p>
                                    <p>Activity Diagrams </p>
                                    <p>Class Diagrams</p>
                                    <p>Sequence Diagrams</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* card - 4 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={img4} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-start">
                            <div className='mx-auto'>
                                <div className="card-title text-start">CODING & UNIT TESTING  </div>

                                <div className='text-start py-5'>
                                    <p>Develop UI/UX Using Frontend</p>
                                    <p>Technologies</p>
                                    <p>Code Business Logic Using</p>
                                    <p>Backend technologies</p>
                                    <p>Store & Retire Data Using</p>
                                    <p>Database Technologies</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* card - 5 */}
                    <div className="card">
                        <figure className="px-10 pt-10">
                            <img src={img5} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-start">
                            <div className='mx-auto'>
                                <div className="card-title text-start">INTEGRATION <br /> &  DEPLOYMENT</div>

                                <div className='text-start py-5'>
                                    <p>Build</p>
                                    <p>Test </p>
                                    <p>Deploy</p>
                                    <p>Release Java Full-Stack</p>
                                    <p>Product</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* cards end  */}

                </div>


            </div>
        </div>
    );
};

export default CaseStudies;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/quencilLogo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dropdownMenuItems = <>
        {
            <>
                <li><Link to='/' className='py-3 text-sm'>Home</Link></li>
                <li><Link to='/careercamp' className='py-3 text-sm'>Career Camp</Link></li>
                <li tabIndex={0}>
                    <Link to='/technical' className="justify-between py-3 text-sm">
                        Technical Courses
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </Link>
                    <ul className="p-2 bg-gray-800 rounded-lg py-2">
                        <li><Link to='/technical'>Sub menu 1</Link></li>
                        <li><Link to='/technical'>Sub menu 2</Link></li>
                    </ul>
                </li>

                <li tabIndex={0}>
                    <Link to='/nontechnical' className="justify-between py-3 text-sm">
                        Non Technical Courses
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </Link>
                    <ul className="p-2 bg-gray-800 rounded-lg py-2">
                        <li><Link to='/nontechnical'>Sub menu 1</Link></li>
                        <li><Link to='/nontechnical'>Sub menu 2</Link></li>
                    </ul>
                </li>
                <li><Link to='/training' className='py-3 text-sm'>Training Journey</Link></li>
                <li><Link to='/contact' className='py-3 text-sm'>Contact Us</Link></li>
            </>
        }
    </>


    const horizontalMenuItems = <>
        {
            <>
                <li className='py-2.5 px-0.5'><Link to='/'>Home</Link></li>
                <li className='py-2.5 px-0.5'><Link to='/careercamp'>Career Camp</Link></li>
                <li className='py-2.5 px-0.5' tabIndex={0}>
                    <Link to='/technical'>
                        Technical Courses
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </Link>
                    <ul className="p-2 bg-gray-800 rounded-lg">
                        <li className='py-2.5 px-0.5'><Link className='rounded-full'>Sub menu 1</Link></li>
                        <li className='py-2.5 px-0.5'><Link className='rounded-full'>Sub menu 2</Link></li>
                    </ul>
                </li>

                <li className='py-2.5 px-0.5' tabIndex={0}>
                    <Link to='/nontechnical'>
                        Non Technical Courses
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </Link>
                    <ul className="p-2 bg-gray-800 rounded-lg">
                        <li className='py-2.5 px-0.5'><Link to='/nontechnical' className='rounded-full'>Sub menu 1</Link></li>
                        <li className='py-2.5 px-0.5'><Link to='/nontechnical' className='rounded-full'>Sub menu 2</Link></li>
                    </ul>
                </li>

                <li className='py-2.5 px-0.5'><Link to='/training'>Training Journey</Link></li>
                <li className='py-2.5 px-0.5'><Link to='/contact'>Contact Us</Link></li>
            </>
        }
    </>



    return (
        <div className="navbar bg-base-100 md:pr-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        isMenuOpen && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 py-3 shadow bg-base-100 rounded-box w-64 uppercase">
                            {dropdownMenuItems}
                        </ul>
                    }

                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl navbar-start mb-2 flex justify-center -ml-6 md:-ml-8 lg:ml-3">
                    <img className='w-32 mt-1 md:mt-0' src={logo} alt="" />
                </Link>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal uppercase text-sm font-medium">
                    {horizontalMenuItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;
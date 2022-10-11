import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

/**
 * sm:items-center sm:justify-between
 * bg-gradient-to-r from-blue-500 text-slate-700
 */
const Header = () => {
    return (
        <nav className=' nav mb-10 p-5 '>
            <div>
                <NavLink to='/' className='font-bold text-2xl text-black'>
                    Quiz Mania
                </NavLink>
            </div>
            <div className=' '>
                <NavLink className='font-bold mr-2' to='/'>Home</NavLink>            
                <NavLink className='font-bold mr-2' to='/quiz/1'>Quiz</NavLink>
                <NavLink className='font-bold mr-2' to='/statistics'>Show Statistics</NavLink>
                <NavLink className='font-bold mr-2' to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;
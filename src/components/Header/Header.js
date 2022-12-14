import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

/**
 * sm:items-center sm:justify-between
 * bg-gradient-to-r from-blue-500 text-slate-700
 */

//'bg-blue-400 p-3 rounded-md text-white'

const Header = () => {
    return (
        <nav className=' nav mb-10 p-5 '>
            <div className='header'>
                <Link to='/' className=' font-bold text-2xl text-black'>
                    Quiz Mania
                </Link>
            </div>
            <div className='nav-link'>
                <NavLink  to='/home'>Home</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active': 'undefined'} to='/quiz/1'>Quiz</NavLink>
                <NavLink  to='/statistics'>Show Statistics</NavLink>
                <NavLink  to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;
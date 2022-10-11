import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex items-center justify-between bg-gradient-to-r from-blue-500 mb-10 p-5 text-slate-700'>
            <div>
                <NavLink to='/' className='font-bold text-2xl text-black'>
                    Quiz Mania
                </NavLink>
            </div>
            <div>
                <NavLink className='font-bold mr-2' to='/'>Home</NavLink>            
                <NavLink className='font-bold mr-2' to='/quiz'>Quiz</NavLink>
                <NavLink className='font-bold mr-2' to='/statistics'>Show Statistics</NavLink>
            </div>
        </nav>
    );
};

export default Header;
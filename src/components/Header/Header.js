import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gradient-to-r from-blue-500 mb-10 p-5 text-slate-700'>
            <NavLink className='font-bold mr-2' to='/'>Home</NavLink>            
            <NavLink className='font-bold mr-2' to='/quiz'>Quiz</NavLink>
        </nav>
    );
};

export default Header;
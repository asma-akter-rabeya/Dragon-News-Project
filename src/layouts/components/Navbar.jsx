import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="flex gap-5">
                <img src={user} alt="" />
                <button className='btn btn-primary text-white px-10 gap-5'>Log in</button>
            </div>
        </div>
    );
};

export default Navbar;
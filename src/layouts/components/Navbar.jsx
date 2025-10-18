import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import User from '../../assets/user.png'
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext)
    console.log(user)

    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="flex gap-5">
                <img src={User} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary text-white px-10 gap-5'>Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;
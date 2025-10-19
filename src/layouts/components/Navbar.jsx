import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import User from '../../assets/user.png'
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    // console.log(user)

    const handleLogout = () => {
        // console.log('log out')
        logOut()
            .then(() => {
                alert('You logged out successfully')
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className='flex justify-between items-center'>
            <div className=""> {user && user.email} </div>
            <div className="flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="flex gap-5">
                <img src={User} alt="" />
                {
                    user ?
                        <button
                            onClick={handleLogout}
                            className='btn btn-primary text-white px-10 gap-5'>Log Out</button>
                        :
                        <Link to={'/auth/login'} className='btn btn-primary text-white px-10 gap-5'>Log in</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;
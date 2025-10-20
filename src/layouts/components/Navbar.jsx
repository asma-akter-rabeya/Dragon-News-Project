import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import User from '../../assets/user.png'
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const [position, setPosition] = useState('text-left'); // default position

    // Randomly change position every few seconds
    useEffect(() => {
        const positions = ['text-left', 'text-center', 'text-right'];
        const interval = setInterval(() => {
            const randomPosition = positions[Math.floor(Math.random() * positions.length)];
            setPosition(randomPosition);
        }, 3000); // change every 3 seconds

        return () => clearInterval(interval);
    }, []);
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
        <div>
            <div className={` ${position}`}>
                {user && <p className="font-semibold text-secondary">{user.email}</p>}
            </div>
            <div className='flex justify-between items-center'>
                <div></div>
                <div className="flex gap-5 text-accent">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/career'}>Career</NavLink>
                </div>
                <div className="flex gap-5">
                    <img
                        className='w-12 rounded-full'
                        src={user ? user.photoURL : User} alt="" />
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
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center h-fit mt-16 '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-2xl font-semibold text-center py-5'>Register your account</h2>
                    <fieldset className="fieldset">
                        {/* name */}
                        <h2 className="font-bold py-1">Your Name</h2>
                        <input type="text" className="input" placeholder="Enter Your Name" />

                        {/* photo url */}
                        <h2 className="font-bold py-1">Photo URL</h2>
                        <input type="url" className="input" placeholder="Image URL" />

                        {/* email */}
                        <h2 className="font-bold py-1">Email Address</h2>
                        <input type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <h2 className="font-bold py-1">Password</h2>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Register</button>

                        <p className='text-gray-800 text-[14 px] py-5 text-center'>Already Have An Account ?
                            <Link to={'/auth/login'} className='text-secondary underline'> Login</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;
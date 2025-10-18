import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center h-fit mt-16 '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-2xl font-semibold text-center py-5'>Login your account</h2>
                    <fieldset className="fieldset">
                        <h2 className="font-bold py-1">Email Address</h2>
                        <input type="email" className="input" placeholder="Email" />
                        <h2 className="font-bold py-1">Password</h2>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>

                        <p className='text-gray-800 text-[14 px] py-5 text-center'>Dont’t Have An Account ? 
                            <Link to={'/auth/register'} className='text-secondary underline'> Register </Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;
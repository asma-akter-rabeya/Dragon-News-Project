import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState(""); //empty string is a falsy value

    const { signIn } = use(AuthContext);
    const location = useLocation();
    // console.log(location)

    // user jekhane jete chay shekhane pathate chaile
    const navigate = useNavigate(); // it returns a function

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({ email, password })
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(`${location.state ? location.state : "/home"}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage)
                setError(errorCode)
            })
    }

    return (
        <div className='flex justify-center h-fit mt-16 '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold text-center py-5'>Login your account</h2>
                <form
                    onSubmit={handleLogin}
                    className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <h2 className="font-bold py-1">Email Address</h2>
                        <input type="email"
                            required
                            name='email'
                            className="input" placeholder="Email" />
                        {/* password */}
                        <h2 className="font-bold py-1">Password</h2>
                        <input type="password"
                            required
                            name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error ? <p className='text-red-700'>{error}</p> : ''
                        }
                        <button
                            type='submit'
                            className="btn btn-neutral mt-4">Login</button>

                        <p className='text-gray-800 text-[14 px] py-5 text-center'>Dont’t Have An Account ?
                            <Link to={'/auth/register'} className='text-secondary underline'> Register </Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
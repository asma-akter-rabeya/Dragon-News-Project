import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser, setUser, updateUser } = use(AuthContext)
    const [nameError, setNameError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 character!")
            return;
        }
        else {
            setNameError("")
        }
        // const photo = e.target.photo.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user.user)
                updateUser({
                    displayName: name,
                    photoURL: photo

                }).then(() => {

                    setUser({ ...user, displayName: name, photoURL: photo })
                    navigate('/');
                })
                    .catch((error) => {
                        console.log(error)
                    });
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

    }
    return (
        <div className='flex justify-center h-fit mt-16 '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold text-center mt-10'>Register your account</h2>
                <form
                    onSubmit={handleRegister}
                    className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <h2 className="font-bold py-1">Your Name</h2>
                        <input type="text"
                            name='name'
                            required
                            className="input" placeholder="Enter Your Name" />

                        {/* photo url */}
                        <h2 className="font-bold py-1">Photo URL</h2>
                        <input type="url"
                            name='photo'
                            required
                            className="input" placeholder="Image URL" />

                        {/* email */}
                        <h2 className="font-bold py-1">Email Address</h2>
                        <input type="email"
                            required
                            name='email' className="input" placeholder="Email" />
                        {/* password */}
                        <h2 className="font-bold py-1">Password</h2>
                        <input type="password"
                            required
                            name='password' className="input" placeholder="Password" />
                        <button
                            type='submit'
                            className="btn btn-neutral mt-4">Register</button>
                        {
                            nameError ? <p className='text-red-700'>{nameError} </p> : ''
                        }

                        <p className='text-gray-800 text-[14 px] py-5 text-center'>Already Have An Account ?
                            <Link to={'/auth/login'} className='text-secondary underline'> Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
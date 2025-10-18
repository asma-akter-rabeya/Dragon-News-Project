import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 '>Find Us On</h2>

            <div className="join join-vertical w-full ">
                <button className="btn bg-base-100 justify-start join-item"><FaFacebook size={22} color='blue'></FaFacebook> FaceBook</button>
                <button className="btn bg-base-100 justify-start join-item"><FaTwitter size={22} color='cyan'></FaTwitter> Twitter</button>
                <button className="btn bg-base-100 justify-start join-item"> <FaInstagram size={22} color='pink'></FaInstagram> Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;
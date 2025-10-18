import React from 'react';
import swimmingImg from '../../../assets/swimming.png';
import classImg from '../../../assets/class.png';
import playGroundImg from '../../../assets/playground.png';
import bg from '../../../assets/bg.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Q-Zone </h2>
            <div className="space-y-5">
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playGroundImg} alt="" />
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
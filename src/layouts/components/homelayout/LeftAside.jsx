import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className='my-4'>
                <span className="loading loading-bars loading-xl"></span>
                <span className="loading loading-bars loading-xl"></span>
                <span className="loading loading-bars loading-xl"></span>
            </div>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;
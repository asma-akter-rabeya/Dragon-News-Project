import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const {
        title,
        category_id,
        image_url,
        details,
    } = news;
    return (
        <div className='space-y-5 '>
            <img
                className='w-full h-[450px] object-cover rounded'
                src={image_url} alt="" />
            <h2 className='text-2xl'>{title} </h2>
            <p className='text-accent'>{details} </p>

            <Link
                to={`/category/${category_id}`}
                className='flex items-center justify-start w-fit p-2.5 btn btn-secondary'><FaArrowLeft></FaArrowLeft> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;
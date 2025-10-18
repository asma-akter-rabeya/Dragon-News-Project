import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../layouts/components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams(); // dynamic id
    const data = useLoaderData(); // return an array of object. all data are here
    // using use state to show the data ata ui
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
            return;
        }
        else if (id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        } else {
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
    }, [data, id]) // data and id comes from outside
    return (
        <div>
            <h2 className='font-bold mb-5'>
                Total <span className='text-secondary'>{categoryNews.length} </span> news found.
            </h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => <NewsCard 
                        key={news.id}
                        news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
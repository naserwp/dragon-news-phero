import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';


const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    console.log(categoryNews)

    return (
        <div>
            {id && <h2>This is Category News: {categoryNews.length} </h2>}
            {
            Array.isArray(categoryNews) && categoryNews.length > 0 ? categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
            ></NewsCard>) : <p>No news found in this category.</p>
            }
        </div>
    );
};



export default Category;

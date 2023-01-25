import React,{useState,useEffect} from 'react';
import "./featuredArticle.scss";

import getApiData from '../config/newsApi';

function FeaturedArticle({newsData}) {

    const data = newsData.slice(0,4);

    return (
        <div className='featured'>
            <h2>Featured Article</h2>
            <div className="news-content">
                <div className="left">
                    <img src={data[0]?.urlToImage}/>
                    <p className='featured__date'>{data[0]?.publishedAt.split("T")[0]}</p>
                    <h3>{data[0]?.title}</h3>
                    <p className='featured__desc'>{data[0]?.description}</p>
                </div>

                <div className="right">


                </div>
            </div>
        </div>
    )
}

export default FeaturedArticle

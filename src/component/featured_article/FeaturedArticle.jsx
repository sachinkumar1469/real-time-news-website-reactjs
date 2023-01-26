import React,{useState,useEffect} from 'react';
import "./featuredArticle.scss";

import getApiData from '../../config/newsApi';
import FeaturedArticleListItem from './FeaturedArticleListItem';

function FeaturedArticle({newsData}) {

    const data = newsData.slice(0,4);

    return (
        <div className='featured'>
            <h2>Featured Article</h2>
            <div className="news-content">
                <div className="left">
                    <img src={data[0]?.urlToImage}/>
                    <p className='featured__date'>{data[0]?.publishedAt.split("T")[0]}</p>
                    <a>{data[0]?.title}</a>
                    <p className='featured__desc'>{data[0]?.description}</p>
                </div>

                <div className="right">
                    <FeaturedArticleListItem item={data[1]}/>
                    <FeaturedArticleListItem item={data[2]}/>
                    <FeaturedArticleListItem item={data[3]}/>

                </div>
            </div>
        </div>
    )
}

export default FeaturedArticle

import React, { useEffect, useState } from 'react'

import './home.scss';
import Navbar from '../component/Navbar';

import getApiData from '../config/newsApi';

import apiCustomData from '../config/dummyData';

import { Link } from 'react-router-dom';
import FeaturedArticle from '../component/featured_article/FeaturedArticle';
import TopStory from '../component/top_story/TopStory';

function Home({state,dispatch}) {
  // console.log("State in Home",state.user.uid);

  const [newsData,setNewsData] = useState();

  const [error,setError] = useState({err:false,msg:""});
  
  useEffect(()=>{

    // Below provided API will only work in development mode. Api will response only on localhost domain for build version dummy data is used
    // getApiData()
    // .then(data=>{
    //     // console.log(JSON.stringify(data.data.articles));
    //     setNewsData(data.data.articles);
    //     console.log(JSON.stringify(data.data.articles));
    // })
    // .catch(err=>{
    //     setError({
    //     err:true,
    //     msg:"Unable to fetch api data"
    //     });
    //     console.log("err",err,"err");
    // })
    
    setNewsData(apiCustomData);
  },[])
  



  return (
    <div className="home">
      <Navbar/>
      {newsData && <div className="content">
        <FeaturedArticle newsData={newsData}/>
        <TopStory newsData={newsData}/>
      </div>}
    </div>
  )
}

export default Home;

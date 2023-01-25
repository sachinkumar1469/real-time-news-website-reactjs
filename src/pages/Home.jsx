import React, { useEffect, useState } from 'react'

import './home.scss';
import Navbar from '../component/Navbar';

import getApiData from '../config/newsApi';

import dummyData from '../config/dummyData';

import { Link } from 'react-router-dom';
import FeaturedArticle from '../component/FeaturedArticle';

function Home({state,dispatch}) {
  // console.log("State in Home",state.user.uid);

  const [newsData,setNewsData] = useState([]);

  const [error,setError] = useState({err:false,msg:""});
  
  useEffect(()=>{
      // getApiData()
      // .then(data=>{
      //     console.log(JSON.stringify(data.data.articles));
      //     setNewsData(data);
      // })
      // .catch(err=>{
      //     setError({
      //     err:true,
      //     msg:"Unable to fetch api data"
      //     });
      //     console.log("err",err,"err");
      // })
      setNewsData(dummyData);
  },[])
  



  return (
    <div className="home">
      <Navbar/>
      <div className="content">
        <FeaturedArticle newsData={newsData}/>
      </div>
    </div>
  )
}

export default Home;

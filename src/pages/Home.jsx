import React, { useEffect, useState } from 'react'

import './home.scss';
import Navbar from '../component/Navbar';

import getApiData from '../config/newsApi';


import { Link } from 'react-router-dom';

function Home({state,dispatch}) {
  // console.log("State in Home",state.user.uid);

  const [newsData,setNewsData] = useState([]);

  const [error,setError] = useState({err:false,msg:""});

  useEffect(()=>{
    getApiData()
      .then(data=>{
        console.log(data.data.articles);
        setNewsData(data.data.articles);
      })
      .catch(err=>{
        setError({
          err:true,
          msg:"Unable to fetch api data"
        })
      })
  },[])



  return (
    <div className="home">
      <Navbar/>
    </div>
  )
}

export default Home;

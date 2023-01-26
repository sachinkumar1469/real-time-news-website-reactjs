import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { connect } from 'react-redux';

import { Routes,Route,Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { auth } from './config/firebase';
import { authContext } from './context/AuthContext';


// please visit https://sachin-blog.netlify.app/ for live preview
// please visit https://sachin-blog.netlify.app/ for live preview
// please visit https://sachin-blog.netlify.app/ for live preview
// please visit https://sachin-blog.netlify.app/ for live preview
// please visit https://sachin-blog.netlify.app/ for live preview
// please visit https://sachin-blog.netlify.app/ for live preview
// please visit https://sachin-blog.netlify.app/ for live preview
// please visit https://sachin-blog.netlify.app/ for live preview
// please visit https://sachin-blog.netlify.app/ for live preview



function App() {

  const {currUser,setCurrUser} = useContext(authContext);
  // console.log(currUser);

  let route;

  if(currUser){
    route =  (
      <>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Navigate to={"/"}/>}/>
      </>
    ) 
  } else {
    route = (
      <>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Navigate to={"/login"}/>}/>
      </>
    )
  }

  return (
    <div className="App">
      <Routes>
        {route}
      </Routes>
    </div>
  );
}

export default App;


import React, { useEffect } from 'react'

import {HiOutlineArrowSmRight} from 'react-icons/hi';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';


import './login.scss';
import loginPng from '../assets/login.png';

import { auth,signInWithGoogle } from '../config/firebase';
 
function Login() {

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      console.log(user);
      console.log("\n\n STATE_CHANGED \n\n");
    })
  })

  return (
    <div className='login'>
      <div className="form">
        <div className="img">
          <img src={loginPng} alt="" />
        </div>
        <h2>Welcome to Bardeen</h2>
        <p>Let's login in to launch your application</p>

        <div className="input_container">
          <label htmlFor="">
            <input type="text" name="email" id="email" placeholder='Email Address'/>
          </label>
          <label htmlFor="">
            <input type="password" name="password" id="password" placeholder='Password' />
          </label>
        </div>

        <div className="utility_link">
          <p><a href='#'>Create Account</a></p>
          <p><a href='#'>Forgot Password?</a></p>
        </div>

        <div className="signin">
          <button onClick={signInWithGoogle}>
            Sign In
          </button>
        </div>

        <div className="third__party">
          <div className="google">
            
              <FcGoogle/>
            
            <span> Sign In With Google </span>
            <HiOutlineArrowSmRight/>
          </div>
          <div className="github">
            
              <AiFillGithub/>
            
            <span>Sign In With Github</span>
            <HiOutlineArrowSmRight/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login

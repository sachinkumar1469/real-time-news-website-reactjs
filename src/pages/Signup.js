
import React, { useEffect } from 'react'

import {HiOutlineArrowSmRight} from 'react-icons/hi';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';


import './signup.scss';
import loginPng from '../assets/login.png';

import { auth,signInWithGoogle } from '../config/firebase';
 
function Signup() {

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      console.log(user);
      console.log("\n\n STATE_CHANGED \n\n");
    })
  })

  return (
    <div className='signup'>
      <div className="form">
        <div className="img">
          <img src={loginPng} alt="" />
        </div>
        <h2>Welcome to Bardeen</h2>
        <p>Let's Sign up to launch your application</p>

        <div className="input_container">
          <label htmlFor="">
            <input type="text" name="email" id="email" placeholder='Email Address'/>
          </label>
          <label htmlFor="">
            <input type="password" name="password" id="password" placeholder='Password' />
          </label>
          <label htmlFor="">
            <input type="password" name="password" id="password" placeholder='Confirm Password' />
          </label>
        </div>

        <div className="utility_link">
          <p><a href='#'>Already Have An Account</a></p>
        </div>

        <div className="signin">

          <button >
            Sign Up
          </button>

        </div>

        <div className="third__party">

          <div className="google" onClick={signInWithGoogle}>
            <FcGoogle />
            <span> Sign Up With Google </span>
            <HiOutlineArrowSmRight/>
          </div>

          <div className="github">
            <AiFillGithub/>
            <span>Sign Up With Github</span> 
            <HiOutlineArrowSmRight/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Signup

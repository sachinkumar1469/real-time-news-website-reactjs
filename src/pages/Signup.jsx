
import React, { useEffect, useState } from 'react'

import {HiOutlineArrowSmRight} from 'react-icons/hi';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';


import './signup.scss';
import loginPng from '../assets/login.png';

import { auth,signInWithGoogle as signUpWithGoogle } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import useForm from '../custom_hook/form-hook';
 
function Signup() {

  const [email,onEmailChange] = useForm("");
  const [password,onPassChange] = useForm("");
  const [confirmPassword,onConfirmPassChange] = useForm("");
  const [error,setError] = useState({err:false,msg:""})

  function onSignUpWithEmail(){

    if(password.length <6){
      setError({err:true,msg:"Minimum length required of password is five."});
      return;
    }


    if(password !== confirmPassword){
      setError({err:true,msg:"Password Mismatch"});
      return;
    }
    

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  }

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
            <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder='Email Address'
              value={email}
              onChange={onEmailChange}
              />
          </label>
          <label htmlFor="">
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder='Password'
              value={password}
              onChange={onPassChange} />
          </label>
          <label htmlFor="">
            <input 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword" 
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={onConfirmPassChange} />
          </label>
        </div>

        <div className="utility_link">
          <p><a href='#'>Already Have An Account</a></p>
        </div>

        <div className="signin">

          <button onClick={onSignUpWithEmail}>
            Sign Up
          </button>

        </div>

        <div className="third__party">

          <div className="google" onClick={signUpWithGoogle}>
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

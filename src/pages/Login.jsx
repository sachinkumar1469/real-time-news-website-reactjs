
import React, { useContext, useEffect } from 'react'

import {HiOutlineArrowSmRight} from 'react-icons/hi';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';

import useForm from '../custom_hook/form-hook';

import { Link, NavLink } from 'react-router-dom';


import './login.scss';
import loginPng from '../assets/login.png';



import { auth,signInWithGoogle } from '../config/firebase';

import { createUserWithEmailAndPassword } from "firebase/auth";


import { useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';
 
function Login() {

  const [email,onEmailChange] = useForm("");
  const [password,onPassChange] = useForm("");
  
  const navigate = useNavigate();
  const {setCurrUser} = useContext(authContext);

  const singInWithGoogleHandler = e=>{
    let result = signInWithGoogle();
    console.log('result',result);
    result.then((data)=>{
      console.log(data);
      setCurrUser(data.user);
    })
  }

  function onSignInWithEmail(){
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
    <div className='login'>
      <div className="form">
        <div className="img">
          <img src={loginPng} alt="" />
        </div>
        <h2>Welcome to Bardeen</h2>
        <p>Let's login in to launch your application</p>

        <div className="input_container">
          <label htmlFor="">
            <input type="text" name="email" id="email" placeholder='Email Address' value={email} onChange={onEmailChange}/>
          </label>
          <label htmlFor="">
            <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={onPassChange} />
          </label>
          
        </div>

        <div className="utility_link">
          <p><Link to={"/signup"}>Create Account</Link></p>
          <p><a href='#'>Forgot Password?</a></p>
        </div>

        <div className="signin">

          <button onClick={onSignInWithEmail} >
            Sign In
          </button>

        </div>

        <div className="third__party">

          <div className="google" onClick={singInWithGoogleHandler}>
            <FcGoogle />
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

export default Login;



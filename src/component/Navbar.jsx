import React, { useContext } from 'react';
import './navbar.scss';

import logo from '../assets/logo.png';

import { signOutUser } from '../config/firebase';

import { NavLink,Link } from 'react-router-dom';

import {FiInstagram, FiTwitter, FiFacebook, FiLinkedin} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa';

import Button from './button/Button';
import { authContext } from '../context/AuthContext';

function Navbar() {

  const {currUser} = useContext(authContext);

  const logout = (e)=>{
    signOutUser()
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
            <div className="menu__right">
                <a href="#">LEARN</a>
                <NavLink to="/">BLOG</NavLink>
                <a href="#">BOOKMARK</a>
            </div>
            <div className="menu__left">
                <FiTwitter/>
                <FiInstagram/>
                <FiFacebook/>
                <FiLinkedin/>
                <div className="user__profile">
                  <FaUserCircle/>
                </div>
            </div>
            
        </div>
        <div className="user_detail">
          {currUser && <Button onClick={logout}>Logout</Button>}
          {!currUser && <Button> <Link to="/signin">Sign In</Link> </Button>}
            
        </div>
    </div>
  )
}

export default Navbar

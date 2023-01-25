import React from 'react';
import './navbar.scss';

import logo from '../assets/logo.png'

import {FiInstagram, FiTwitter, FiFacebook, FiLinkedin} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
            <div className="menu__right">
                <a href="">LEARN</a>
                <a href="">BLOG</a>
                <a href="">BOOKMARK</a>
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
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar

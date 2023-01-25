import React from 'react';
import './navbar.scss';

import {FiInstagram, FiTwitter, FiFacebook, FiLinkedin} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo"></div>
        <div className="menu">
            <div className="menu__right">
                <a href="">Learn</a>
                <a href="">Blog</a>
                <a href="">Bookmark</a>
            </div>
            <div className="menu__left">
                <FiTwitter/>
                <FiInstagram/>
                <FiFacebook/>
                <FiLinkedin/>
            </div>
            
        </div>
        <div className="user_detail">
            <FaUserCircle/>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar

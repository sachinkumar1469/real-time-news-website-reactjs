import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

function Home({state,dispatch}) {
  // console.log("State in Home",state.user.uid);
  return (
    <div>
      This is Home
      <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Home;

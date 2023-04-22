import React from 'react';
import './Navbar.css';
import {BiUserCircle} from "react-icons/bi"
import {AiFillCaretDown} from "react-icons/ai"


function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
       EDYODA
      </div>
      <div className="profile">
        <span className="learner">Hi Test Learner!</span>
        <BiUserCircle size="25"/>  
      </div>
    </nav>
    <nav className="navbar2">
    <div className="user-id">
       DS031221
       <AiFillCaretDown/>
      </div>
      <div className="program"> 
      Data Scientist Program
      </div>
    </nav>
    </>
  );
}

export default Navbar;


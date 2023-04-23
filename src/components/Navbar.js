import React,{useState} from 'react';
import './Navbar.css';
import {BiUserCircle} from "react-icons/bi"
import {AiFillCaretDown,AiFillCaretUp} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { toggleCaretUp  } from '../Redux/slice/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
function Navbar() {
  const dispatch = useDispatch();
  const { isCaretUp } = useSelector(state => state.home);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleCaretClick = () => {
    dispatch(toggleCaretUp());
     setIsDropdownOpen(!isDropdownOpen);
  };
 
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="nav-logo">
         EDYODA
       </Link>
      </div>
      <div className="profile">
        <span className="learner">Hi Test Learner!</span>
        <BiUserCircle size="25"/>  
      </div>
    </nav>
    <nav className="navbar2">
    <div className="user-id" onClick={handleCaretClick}>
       DS031221
      {isCaretUp ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </div>
      <div className="program"> 
      Data Scientist Program
      </div>
    </nav>
     <nav className='navbar3'>
      {isDropdownOpen &&
        <div className="dropdown-menu">
          <div className="program">
            Select Program
          </div>
          <div className="columns">
            <div className="column">
              ECRD
            </div>
            <div className="column">
              FSR22222
            </div>
            <div className="column">
              DS261121
            </div>
          </div>
        
        </div>
      }
      </nav>
    </>
  );
}

export default Navbar;


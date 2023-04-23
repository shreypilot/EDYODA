import React,{ useState }  from 'react';
import './Sidebar.css';
import { FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { GoFileSubmodule } from 'react-icons/go';
import ModuleSidebar from './ModuleSidebar';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [selected, setSelected] = useState('home');
  const [showModules, setShowModules] = useState(false);
     
  const handleItemClick = (item) => {
    setSelected(item);
    if (item === "module") {
      setShowModules(true);
    } else {
      setShowModules(false);
    }
  };

  return (
    <div className="container">
    <div className="sidebar">
      <nav>
        <ul>
          <li  className={selected === 'home' ? 'selected' : ''}
            onClick={() => handleItemClick('home')}>
            <Link to="/">  
            <FaHome size={25} />
            <span className="nav-text">HOME</span>
            </Link>
          </li>
          <li  className={selected === 'module' ? 'selected' : ''}
            onClick={() => handleItemClick('module')}>
              <Link to="pythonloops">
                <GoFileSubmodule size={25} color="black" />
                <span className="nav-text">MODULES</span>
              </Link>
          </li>
          <li  className={selected === 'instructor' ? 'selected' : ''}
            onClick={() => handleItemClick('instructor')}>
            <Link to="/">
            <FaChalkboardTeacher size={25} />
            <span className="nav-text">INSTRUCTORS</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div> 
       {showModules && 
       <ModuleSidebar />}
     </div>
    
   </div>
   
  );
}

export default Sidebar;



import React from 'react';
import './Sidebar.css';
import { useState } from 'react';
import { FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { GoFileSubmodule } from 'react-icons/go';

function Sidebar() {
  const [selected, setSelected] = useState('home');

  const handleItemClick = (item) => {
    setSelected(item);
  };

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li  className={selected === 'home' ? 'selected' : ''}
            onClick={() => handleItemClick('home')}>
            <FaHome size={25} />
            <span className="nav-text">HOME</span>
          </li>
          <li  className={selected === 'module' ? 'selected' : ''}
            onClick={() => handleItemClick('module')}>
            <GoFileSubmodule size={25} color="black" />
            <span className="nav-text">MODULES</span>
          </li>
          <li  className={selected === 'instructor' ? 'selected' : ''}
            onClick={() => handleItemClick('instructor')}>
            <FaChalkboardTeacher size={25} />
            <span className="nav-text">INSTRUCTORS</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;



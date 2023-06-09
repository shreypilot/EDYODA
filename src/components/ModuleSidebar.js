import React, { useState } from 'react';
import './ModuleSidebar.css';
import { MdPlayCircleOutline } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { TbCodeCircle2 } from 'react-icons/tb';
import { IoIosPlayCircle } from 'react-icons/io';
import {BsQuestionCircleFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { resetCaret } from '../Redux/slice/homeSlice';

function ModuleSidebar() {
  const [selected, setSelected] = useState('python loops');
  const [hovered, setHovered] = useState('');
  const handleItemClick = (item) => {
    setSelected(item);
  };

  const handleItemHover = (item) => {
    setHovered(item);
  };

  return (
    <div className="module-sidebar">
      <nav>
        <ul>
          <li
            className={`nav-item ${
              selected === 'python loops' || hovered === 'python loops'
                ? 'selected'
                : ''
            }`}
            onClick={() => handleItemClick('python loops')}
            onMouseEnter={() => handleItemHover('python loops')}
            onMouseLeave={() => handleItemHover('')}
          >
            <Link to="pythonloops" className="nav-link"  >
            {selected === 'python loops' || hovered === 'python loops' ? (
              <IoIosPlayCircle size={23}  />
            ) : (
              <MdPlayCircleOutline size={23} />
            )}
            <span className="nav-text"> Python Loops</span>
            </Link>
          </li>
          <li
            className={`nav-item ${
              selected === 'Quiz 1: Data types' || hovered === 'Quiz 1: Data types'
                ? 'selected'
                : ''
            }`}
            onClick={() => handleItemClick('Quiz 1: Data types')}
            onMouseEnter={() => handleItemHover('Quiz 1: Data types')}
            onMouseLeave={() => handleItemHover('')}
          >
          <Link to="quiz" className="nav-link"  >

            {selected === 'Quiz 1: Data types' || hovered === 'Quiz 1: Data types' ? (
              <BsQuestionCircleFill size={23}  />
            ) : (
              <AiOutlineQuestionCircle size={23} />
            )}
            <span className="nav-text">Quiz 1:Data Types</span>
            </Link>
          </li>
          <li
            className={`nav-item ${
              selected === 'Assignment-1 : operators|loops' ||
              hovered === 'Assignment-1 : operators|loops'
                ? 'selected'
                : ''
            }`}
            onClick={() => handleItemClick('Assignment-1 : operators|loops')}
            onMouseEnter={() => handleItemHover('Assignment-1 : operators|loops')}
            onMouseLeave={() => handleItemHover('')}
          >
            <Link to="assignment" className="nav-link" >
            {selected === 'Assignment-1 : operators|loops' ||
            hovered === 'Assignment-1 : operators|loops' ? (
              <TbCodeCircle2 size={23} color="black" />
            ) : (
              <TbCodeCircle2 size={23} />
            )}
            <span className="nav-text">
              Assignment-1:
              <br />
              Operators | Loops
            </span>
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default ModuleSidebar;

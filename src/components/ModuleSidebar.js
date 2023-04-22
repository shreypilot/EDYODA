import React from "react";
import './ModuleSidebar.css';
import { AiFillPlayCircle } from 'react-icons/ai';

function ModuleSidebar() {
  return (
    <div className="module-sidebar">
      <nav>
        <ul>
          <li>
            <AiFillPlayCircle size={23}/>
            Python Loops
          </li>
          <li>
            <AiOutlineQuestionCircle/>
            <a href="#">Quiz 1:Data Types</a>
          </li>
          <li>
            <a href="#">Assignment 1:Operators | Loops</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default ModuleSidebar;
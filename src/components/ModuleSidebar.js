import React from "react";
import './ModuleSidebar.css';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {TbCodeCircle2} from 'react-icons/tb';
import {GrCirclePlay} from 'react-icons/gr'
function ModuleSidebar() {
  return (
    <div className="module-sidebar">
      <nav>
        <ul>
          <li>
            <GrCirclePlay size={16}/>
            <span className="nav-text"> Python Loops</span>
          </li>
          <li>
            <AiOutlineQuestionCircle size={16}/>
            <span className="nav-text">Quiz 1:Data Types</span>
          </li>
          <li>
            <TbCodeCircle2 size={16}/>
            <span className="nav-text">Assignment 1:Operators | Loops</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default ModuleSidebar;
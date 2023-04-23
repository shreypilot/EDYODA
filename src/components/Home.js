import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
    <div className="homepage">
      <div className="certifications">
        <h2>Upcoming Certifications</h2>
        <div className="details">
          <div className="certification-details">
            <h4>CERTIFICATION | ATTEMPT 1</h4>
            <h3>DATA ANALYSIS<br/>CERTIFICATION</h3>
            <h4>COMPLETED  | 21 MAR 2022</h4>

          </div>
          <div className="exam-structure">
            <p>Exam Structure</p>
             <ul>
              <li>Round 1</li>
              <ul>
                <li>MCQs</li>
                <li>Coding Section</li>
              </ul>
              <li>Round 2</li>
              <ul>
                <li>Project Section</li>
              </ul>
            </ul>
          </div>
          <div className="exam-details">
            VIEW EXAM DETAILS
          </div>
        </div>
      </div>
      <div className="learning">
        <h1>Continue Learning</h1>
        <div className="learning-details">
          <div className="test-instructors">
             <h2>DATA WRANGLING & <br/> VISUALIZTIONI</h2>
             <h4> Test Instructor</h4>
               <ul>
                 <li>Live session</li>
                 <li>Assignment</li>
                 <li> MCQ Quiz</li>
               </ul>
               </div>
          
          <div className="todays-plan box">
            <h3>DATA TRANFORMATION using Pandas-3</h3>
          </div>
        </div>
      </div>
      </div>
   
    </>
  );
}

export default Home;

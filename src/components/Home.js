import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homepage">
      <div className="certifications">
        <h2>Upcoming Certifications</h2>
        <div className="certification-details">
          <div className="border-box">
            <h3>Data Analysis</h3>
            <p>Exam structure: Multiple choice questions</p>
          </div>
        </div>
      </div>
      <div className="learning">
        <h2>Continue Learning</h2>
        <div className="learning-details">
          <div className="todays-plan box">
            <h3>Today's Plans</h3>
            <p>10:00 AM - 11:00 AM: React Workshop</p>
            <p>1:00 PM - 2:00 PM: JavaScript Study Group</p>
          </div>
          <div className="instructor-plan box">
            <h3>Instructor Plan</h3>
            <p>Next Week: Redux Introduction</p>
            <p>Next Month: Full-Stack Development Bootcamp</p>
          </div>
          <div className="progress-overview box">
            <h3>Progress Overview</h3>
            <p>React Fundamentals: 90%</p>
            <p>JavaScript Basics: 100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

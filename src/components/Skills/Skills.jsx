import "./Skills.css";
// import { useState, useEffect } from 'react';

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <div className="cards">
        <div className="card1">
          <img src="/images/html.jpg" alt="html" />
          <img src="images/css.png" alt="css" />
          <img src="/images/JavaScript-Logo.png" alt="javascript" />
        </div>
        <div className="card2">
          <img src="/images/react.jpg" alt="" />
          <img src="/images/nodejs.png" alt="" />
          <img src="/images/mongo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

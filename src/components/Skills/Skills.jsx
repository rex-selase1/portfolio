import "./Skills.css";
// import { useState, useEffect } from 'react';

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <div className="cards">
        <div className="card1">
          <img src="public/images/html.jpg" alt="html" />
          <img src="public/images/css.png" alt="css" />
          <img src="public/images/JavaScript-logo.png" alt="javascript" />
        </div>
        <div className="card2">
          <img src="public/images/react.jpg" alt="" />
          <img src="public/images/nodejs.png" alt="" />
          <img src="public/images/mongo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

import "./Skills.css";
// import { useState, useEffect } from 'react';
import { projects } from '../../assets/assets';
import { assets } from '../../assets/assets';

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <div className="cards">
        <div className="card1">
          <img src={assets.html} alt="html" />
          <img src={assets.css} alt="css" />
          <img src={assets.javascript} alt="javascript" />
        </div>
        <div className="card2">
          <img src={assets.nodeJs} alt="" />
          <img src={assets.mongo} alt="" />
          <img src={assets.react} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

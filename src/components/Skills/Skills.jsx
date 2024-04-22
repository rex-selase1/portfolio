import "./Skills.css";
// import { useState, useEffect } from 'react';
// import { projects } from "../../assets/assets";
import { assets } from "../../assets/assets";

const Skills = () => {
  console.log(assets[0]);
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <div className="cards">
        <div className="card1">
          <img src={assets[0]} alt="html" />
          <img src={assets[1]} alt="css" />
          <img src={assets[2]} alt="javascript" />
        </div>
        <div className="card2">
          <img src={assets[3]} alt="" />
          <img src={assets[4]} alt="" />
          <img src={assets[5]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

// import  { useState} from 'react';
import './Projects.css';
import { projects } from '../../assets/assets';
import { assets } from '../../assets/assets';


const Projects = () => {
 


   

  return (
    <div id ="projects" className="projects">
      <h1>Projects</h1>
      <div className="cards">
        {projects.map((project,index) => (
          <div className="card" key={project.id}>
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className='languages'>{project.languages}</p>
              <div className="hero-btns">
      <a href=""><i className="fa-brands fa-github"></i></a>
      <a href=""><i className="fa-brands fa-linkedin"></i></a>
      </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
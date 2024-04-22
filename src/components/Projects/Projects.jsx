import  { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/projects');
        const jsonData = await response.json();
        setProjects(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('server down')
      }
    };

    fetchData();
  }, []);

  return (
    <div id ="projects" className="projects">
      <h1>Projects</h1>
      <div className="cards">
        {projects.map((project) => (
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
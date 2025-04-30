import React from 'react';
import './projects.css';
import skywatchImg from '../assets/sky1.png';
import portfolioImg from '../assets/prot1.png';
import tictactoeImg from '../assets/tic1.png';
import amazonCloneImg from '../assets/ama1.png';

const projects = [
  {
    title: "Sky-Watch",
    img: skywatchImg,
    description: "Weather app with live forecasts and dynamic UI.",
    link: "https://github.com/siddu4236/SkyWatch"
  },
  {
    title: "Portfolio",
    img: portfolioImg,
    description: "Responsive portfolio showcasing my work and skills.",
    link: "https://github.com/siddu4236/Portfolio"
  },
  {
    title: "Tic Tac Toe",
    img: tictactoeImg,
    description: "Interactive browser-based Tic Tac Toe game.",
    link: "https://siddu4236.github.io/Tic-Tac-Toe/"
  },
  {
    title: "Amazon Clone",
    img: amazonCloneImg,
    description: "Responsive Amazon clone with carousel and nav bar.",
    link: "https://siddu4236.github.io/Amazon-Clone/"
  }
];

const Projects = () => {
  return (
    <div className="ProjectSlide">
      <div className="head">Projects</div>
      <p>Here are some of my projects I've built recently:</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p className="card-desc">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

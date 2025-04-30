import React from "react";
import "./projects.css";
import skywatchImg from "../assets/sky1.png";
import portfolioImg from "../assets/prot1.png";
import tictactoeImg from "../assets/tic1.png";
import amazonCloneImg from "../assets/ama1.png";
import comingSoonImg from "../assets/cs1.png";

const projects = [
  {
    title: "Sky-Watch",
    img: skywatchImg,
    description:
      "Developed a real-time weather application using weather API , displaying temperature, humidity, and weather conditions with dynamic background and visuals based on real-time data. Built using JavaScript, React, and API integration.",
    link: "https://github.com/siddu4236/SkyWatch",
    skills: ["JavaScript", "ReactJs", "API"],
  },
  {
    title: "Portfolio",
    img: portfolioImg,
    description:
      "Developed a dynamic portfolio with HTML5, CSS3, JavaScript, and React.js, to showcasing skills and projects alongside comprehensive details of education and experiences in web development.",
    link: "https://github.com/siddu4236/Portfolio",
    skills: ["HTML5", "CSS3", "JavaScript", "ReactJs"],
  },
  {
    title: "Tic Tac Toe",
    img: tictactoeImg,
    description:
      "Implemented a classic Tic Tac Toe game using HTML5, CSS3 and JavaScript, merging user-friendly design with smooth functionality for an enjoyable gaming experience.",
    link: "https://siddu4236.github.io/Tic-Tac-Toe/",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Amazon Clone",
    img: amazonCloneImg,
    description:
      "Developed a fully responsive Amazon clone with an exact look-alike UI using HTML, CSS, and JavaScript. Added a collapsible side navigation menu and an automatic image slider for a dynamic browsing experience.",
    link: "https://siddu4236.github.io/Amazon-Clone/",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Coming Soon",
    img: comingSoonImg,
    description: "A new project is currently in the works. Stay tuned!",
    link: "#",
    skills: [],
  },
];

const Projects = () => {
  return (
    <div className="ProjectSlide">
      <div className="head">Projects</div>
      <div className="phead-des">
        Here are some of my projects I've built recently:
      </div>
      <div className="projects-showCase">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.img}
              alt={project.title}
              className={`project-img ${
                project.title === "Coming Soon" ? "coming-soon-img" : ""
              }`}
            />

            <div className="skill-tags">
              {project.skills.map((skill, idx) => (
                <span key={idx} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="ptitle">{project.title}</div>

            <p className="card-desc">{project.description}</p>

            {project.link !== "#" ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Project
              </a>
            ) : (
              <div className="view-btn disabled">Coming Soon</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

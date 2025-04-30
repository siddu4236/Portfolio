import React from "react";
import styled from "styled-components";
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

const ProjectSlide = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const Head = styled.div`
  font-size: 60px;
  text-align: center;
  font-weight: 600;
  margin: 20px auto 0;
  color: #f2f3f4;
`;

const PHeadDes = styled.div`
  font-size: 25px;
  text-align: center;
  color: #b1b2b3;
  margin: 0 auto 50px;
`;

const ProjectsShowCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 2.5rem;
`;

const ProjectCard = styled.div`
  width: 290px;
  background-color: #1e1e1e;
  padding: 25px;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(74, 152, 255, 0.6), 0 0 40px rgba(0, 0, 0, 1.8);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 1rem;
  filter: ${(props) => (props.comingSoon ? "grayscale(100%)" : "none")};
  opacity: ${(props) => (props.comingSoon ? "0.8" : "1")};
  height: ${(props) => (props.comingSoon ? "200px" : "auto")};
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
`;

const SkillPill = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: rgb(74, 152, 255);
  background-color: rgba(133, 76, 230, 0.082);
  padding: 2px 8px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: rgb(177, 178, 179);
`;

const Description = styled.p`
  font-weight: 400;
  color: rgba(177, 178, 179, 0.6);
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ViewButton = styled.a`
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  font-weight: 1000;
  font-family: sans-serif;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 10px;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eaeaea;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #444;
    color: #ccc;
    pointer-events: none;
  }
`;

const Projects = () => {
  return (
    <ProjectSlide>
      <Head>Projects</Head>
      <PHeadDes>Here are some of my projects I've built recently:</PHeadDes>
      <ProjectsShowCase>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage
              src={project.img}
              alt={project.title}
              comingSoon={project.title === "Coming Soon"}
            />
            <SkillTags>
              {project.skills.map((skill, idx) => (
                <SkillPill key={idx}>{skill}</SkillPill>
              ))}
            </SkillTags>
            <Title>{project.title}</Title>
            <Description>{project.description}</Description>
            {project.link !== "#" ? (
              <ViewButton
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </ViewButton>
            ) : (
              <ViewButton as="div" className="disabled">
                Coming Soon
              </ViewButton>
            )}
          </ProjectCard>
        ))}
      </ProjectsShowCase>
    </ProjectSlide>
  );
};

export default Projects;

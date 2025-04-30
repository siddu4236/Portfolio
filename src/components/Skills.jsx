import React from "react";
import styled from "styled-components";
import ps from "../assets/ps.png";
import gth from "../assets/github1.png";

// Styled Components
const SkillSlide = styled.div`
  width: 1100px;
  margin: 0 auto;
  height: 625px;
`;

const Head = styled.div`
  font-size: 60px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: rgb(242, 243, 244);
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;
  color: rgb(177, 178, 179);
  margin: 20px auto 50px auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const SkillBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c1c28;
  color: #d1d1d1;
  border: 2px solid #888;
  border-radius: 20px;
  padding: 15px;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  transition: transform 0.3s ease, border-color 0.3s ease;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    border-color: #4a98ff;
  }
`;

const SkillLogo = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

// Skill Data
const skills = [
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
  { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: gth },
  { name: "Adobe Photoshop", logo: ps },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
];

const Skills = () => {
  return (
    <SkillSlide>
      <Head>Skills</Head>
      <Description>Here are some of my skills on which I have been working on for the past 4 years.</Description>
      <SkillsGrid>
        {skills.map((skill, i) => (
          <SkillBox key={i}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </SkillBox>
        ))}
      </SkillsGrid>
    </SkillSlide>
  );
};

export default Skills;

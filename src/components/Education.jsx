import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import cmrit from "../assets/cmrit.png";
import page from "../assets/page.png";
import swamin from "../assets/swamin.jpg";

const educationData = [
  {
    institution: "CMR Institute of Technology Hyderabad",
    degree: "B.Tech in Computer Science",
    year: "2021 - 2025",
    description:
      "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at CMR Institute Of Technology, Hyderabad with a CGPA of 8.12. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    grade: "CGPA: 7.25/10",
    logo: cmrit,
  },
  {
    institution: "Page Junior College",
    degree: "Intermediate - MPC",
    year: "2019 - 2021",
    description:
      "I completed my Intermediate at Page Jr.College, Kompally where I studied Maths, Physics and Chemistry stream.",
    grade: "Percentage: 82.8%",
    logo: page,
  },
  {
    institution: "shree swaminarayan gurukul international school jadcherla",
    degree: "CBSE",
    year: "2019",
    description:
      "Achieved academic excellence with a strong Percentage and active participation in school-level competitions.",
    grade: "Percentage: 70.4",
    logo: swamin,
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const EducationSection = styled.section`
  max-width: 1100px;
  margin: auto;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin:0;
  margin-top: 20px;
  
  color: rgb(242, 243, 244);

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  border-left: 4px solid rgba(74, 152, 255, 0.2);
  padding-left: 25px;
  margin-right: 10px;
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 30px; /* reduced spacing */
  padding-left: 35px;
`;

const Icon = styled.div`
  position: absolute;
  left: -45px;
  top: 5px;
  width: 40px;
  height: 40px;
  background: linear-gradient(to right, #4a98ff, #8a4eff);
  border-radius: 50%;
  display: grid;
  place-items: center;
  box-shadow: 0 0 15px rgba(138, 78, 255, 0.5);
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
  padding: 4px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 22px 25px;
  border-radius: 20px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 30px rgba(74, 152, 255, 0.3);
  }

  @media (max-width: 600px) {
    padding: 18px;
  }
`;

const Year = styled.span`
  font-size: 12px;
  color: #ccc;
  letter-spacing: 1px;
`;

const Institution = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Degree = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #8a4eff;
  margin: 5px 0;
`;

const Grade = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #4a98ff;
  margin-top: 6px;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #bbb;
  line-height: 1.5;
  margin: 0;
`;
const HeadDes = styled.p`
  font-size: 25px;
  text-align: center;
  color: rgb(177, 178, 179);
  margin: 20px auto 40px auto;
  
`;


const Education = () => {
  return (
    <EducationSection>
      <Title>Education</Title>
      <HeadDes>My education has been a journey of self-discovery and growth. My educational details are as follows.</HeadDes>
      <Timeline>
        {educationData.map((edu, index) => (
          <TimelineItem
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
          >
            <Icon>
              <Logo src={edu.logo} alt={`${edu.institution} logo`} />
            </Icon>
            <Card>
              <Year>{edu.year}</Year>
              <Institution>{edu.institution}</Institution>
              <Degree>{edu.degree}</Degree>
              <Grade>{edu.grade}</Grade>
              <Description>{edu.description}</Description>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationSection>
  );
};

export default Education;

import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import heroImage from "../assets/heropic.png";
import insta from "../assets/insta.png";
import GM from "../assets/gm1.png";
import linkedin from "../assets/linkedin1.png";
import github from "../assets/github1.png";

// Styled Components
const HeroSlide = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  height: 506px;
  display: flex;
`;

const MySelf = styled.div`
  width: 550px;
  height: 506px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 60px;
  color: rgb(242, 243, 244);
  line-height: 68px;
`;

const Typer = styled.div`
  font-weight: 600;
  font-size: 35px;
  display: flex;
  gap: 12px;
  color: rgb(242, 243, 244);
  line-height: 68px;
`;

const TypeEffect = styled.span`
  color: #4a98ff;
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  margin-top: 20px;
  color: rgba(242, 243, 244, 0.584);
`;

const HeroPic = styled.div`
  img {
    height: 450px;
    margin-left: 50px;
    margin-top: -30px;
  }
`;

const Logos = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Logo = styled.a`
  img {
    height: 40px;
    padding-right: 20px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  img:hover {
    transform: translateY(-6px);
    filter: brightness(0) saturate(100%) invert(42%) sepia(82%) saturate(1423%) hue-rotate(186deg) brightness(98%) contrast(95%);
  }
`;

const Hero = () => {
  return (
    <HeroSlide>
      <MySelf>
        <Name>
          Hi, I am <br /> Jampula Siddhartha
        </Name>
        <Typer>
          I am a{" "}
          <TypeEffect>
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "Front End Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </TypeEffect>
        </Typer>
        <Logos>
          <Logo href="mailto:siddujcl99@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={GM} alt="Gmail" />
          </Logo>
          <Logo href="https://www.linkedin.com/in/siddu99" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </Logo>
          <Logo href="https://github.com/siddu4236" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </Logo>
          <Logo href="https://www.instagram.com/jampula_siddartha" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </Logo>
        </Logos>
        <Description>
          I am an aspiring software developer with a solid foundation in programming and a drive to continuously learn and innovate. I aim to contribute to real-world projects, grow as a versatile developer, and create value for the teams and organizations I work with.
        </Description>
      </MySelf>
      <HeroPic>
        <img src={heroImage} alt="Hero" />
      </HeroPic>
    </HeroSlide>
  );
};

export default Hero;

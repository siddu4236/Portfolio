import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  transform: ${({ scrolled }) => (scrolled ? "translateY(8px)" : "translateY(0)")};
  transition: transform 0.2s ease;
  z-index: 1000;
`;

const Navbar = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 55px;
  background-color: #333;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  color: #fff;
  border-radius: 10px;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled(Section)`
  justify-content: flex-start;
`;

const Center = styled(Section)`
  justify-content: center;
`;

const Right = styled(Section)`
  justify-content: flex-end;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  transition: color 0.3s ease;
  &:hover {
    color: #4a98ff;
  }
`;

const ResumeGitHubLink = styled.a`
  text-decoration: none;
  color: #4a98ff;
  border-radius: 50px;
  border: 2px solid #4a98ff;
  padding: 6px 16px;
  margin-left: 15px;
  &:hover {
    transition: color 0.3s ease;
    background-color: #4a98ff;
    color: #fff;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper scrolled={isScrolled}>
      <Navbar>
        {/* Left - Logo */}
        <Left>
          <Logo href="#home" aria-label="Homepage">
            Siddu
          </Logo>
        </Left>

        {/* Center - Main Links */}
        <Center>
          <Links>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#Projects">Projects</Link>
            </li>
            <li>
              <Link href="#certifications">Certifications</Link>
            </li>
            <li>
              <Link href="#Education">Education</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </Links>
        </Center>

        {/* Right - Resume & GitHub */}
        <Right>
          <ResumeGitHubLink href="#resume">Resume</ResumeGitHubLink>
          <ResumeGitHubLink
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </ResumeGitHubLink>
        </Right>
      </Navbar>
    </Wrapper>
  );
};

export default Header;

import { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  transform: ${({ scrolled }) =>
    scrolled ? "translateY(8px)" : "translateY(0)"};
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

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    // Get the element by its id
    const element = document.getElementById(sectionId);
    const offset = sectionId === "home" ? 100 : 70; // For "home" section, no offset (scroll all the way to the top)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset, // Scroll to the element's position, adjusted for the offset
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <Wrapper scrolled={isScrolled}>
      <Navbar>
        {/* Left - Logo */}
        <Left>
          <Logo
            href="#home"
            aria-label="Homepage"
            onClick={(e) => scrollToSection(e, "home")}
          >
            Siddu
          </Logo>
        </Left>

        {/* Center - Main Links */}
        <Center>
          <Links>
            <li>
              <Link href="#home" onClick={(e) => scrollToSection(e, "home")}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#Projects"
                onClick={(e) => scrollToSection(e, "Projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#certifications"
                onClick={(e) => scrollToSection(e, "certifications")}
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                href="#Education"
                onClick={(e) => scrollToSection(e, "Education")}
              >
                Education
              </Link>
            </li>
          </Links>
        </Center>

        {/* Right - Resume & GitHub */}
        <Right>
          <ResumeGitHubLink
            href="https://drive.google.com/file/d/15qxlHlP-zGefxEMIDuENrbKvvEZ5F1Zi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </ResumeGitHubLink>
          <ResumeGitHubLink
            href="https://github.com/siddu4236"
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

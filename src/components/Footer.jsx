import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const FooterContainer = styled.footer`
  background-color:rgba(16, 16, 20, 0.6);
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;
`;

const Left = styled.div`
  font-weight: bold;
`;

const Center = styled.div`
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  gap: 16px;
  font-size: 20px;
`;

const IconLink = styled.a`
  color: white;
  transition: color 0.3s ease;
  &:hover {
    color: #4a98ff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Left>Developed by Jampula Siddhartha</Left>
      <Center>Copyright © {new Date().getFullYear()} SIDDU. All rights reserved.</Center>
      <Right>
        <IconLink href="https://github.com/siddu4236" target="_blank" aria-label="GitHub">
          <FaGithub />
        </IconLink>
        <IconLink href="https://linkedin.com/in/siddu99" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </IconLink>
        <IconLink href="mailto:siddujcl99@gmail.com" aria-label="Email">
          <FaEnvelope />
        </IconLink>
        <IconLink href="https://instagram.com/jampula_siddartha" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </IconLink>
      </Right>
    </FooterContainer>
  );
};

export default Footer;

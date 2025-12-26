// src/components/Footer/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 3rem 0;
  margin-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const FooterLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.75rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Sasi Kumar</h3>
          <p>Full Stack Developer passionate about creating beautiful, functional web applications.</p>
          <SocialLinks>
            <a href="https://github.com/Sasikumaryanapu" target="_blank" rel="nooreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/sasi-kumar16" target="_blank" rel="nooreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com">
              <FiMail size={24} />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
         <FooterLink
  href={`${process.env.PUBLIC_URL}/resume.pdf`}
  download
>
  Download Resume
</FooterLink>

        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <p>Email: sasikumaryanapu16@gmail.com</p>
          <p>Location: Bangalore, India</p>
          <p>Available for freelance work</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Sasi Kumar. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
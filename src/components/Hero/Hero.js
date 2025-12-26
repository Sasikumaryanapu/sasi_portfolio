// src/components/Hero/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';
import sasi from "../../images/Sasii.png";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 5rem 1.5rem 3rem;
  background: ${({ theme }) => `linear-gradient(
    to bottom,
    ${theme.colors.background} 0%,
    ${theme.colors.backgroundSecondary} 100%
  )`};

  @media (max-width: 480px) {
    padding: 4rem 1rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const Content = styled.div`
  text-align: center;
  z-index: 1;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Greeting = styled(motion.span)`
  display: block;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (min-width: 480px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2.5rem;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.primary}40;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 24px;
    height: 24px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    bottom: 1.5rem;
    right: 1.5rem;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    bottom: 1rem;
    right: 1rem;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary}20;
    filter: blur(60px);
    z-index: -1;
  }
`;

const ProfileImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  max-height: 400px;
  object-fit: cover;
`;

const Hero = () => {
  useTheme();

  return (
    <HeroSection id="home">
      <Container>
        <Content>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi there, I'm
          </Greeting>
          
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sasi Kumar
          </Name>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
           With 2 years of professional experience, I design and develop robust, high-performance web applications. Leveraging React, Next.js, Node.js, and APIs, I deliver scalable, user-centric solutions that drive real-world results.
          </Description>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              as="a" 
              href="#contact" 
              variant="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </Button>
            <Button 
              as="a" 
              href="#projects" 
              variant="outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </Button>
          </ButtonGroup>
        </Content>

        <ImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ProfileImage
            src={sasi} // Replace with your profile image
            alt="Sasi Kumar"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          />
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
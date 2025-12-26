import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';

const ScrollButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  outline: none;
  padding: 0;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    bottom: 1rem;
    right: 1rem;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }
`;

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['home', 'about', 'projects', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    let current = 0;
    
    sections.forEach((section, index) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          current = index;
        }
      }
    });
    
    setCurrentSection(current);
    setIsVisible(current < sections.length - 1);
  };

  const scrollToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection < sections.length) {
      const element = document.getElementById(sections[nextSection]);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  if (!isVisible) return null;

  return (
    <ScrollButton
      onClick={scrollToNextSection}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll to next section"
    >
      <FiChevronDown />
    </ScrollButton>
  );
};

export default ScrollIndicator;

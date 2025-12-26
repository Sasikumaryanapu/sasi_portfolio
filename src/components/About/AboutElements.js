import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContactWrapper = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 1;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(100, 100, 255, 0.1) 0%,
      rgba(200, 100, 255, 0.1) 100%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  
  ${ImageWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const AboutContent = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary || '#8b5cf6'}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
  
  .highlight {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const Technologies = styled.div`
  margin-top: 2rem;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 60%;
      height: 3px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary || '#8b5cf6'}
      );
      border-radius: 3px;
    }
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const Tech = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.primary}30;
  }
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: contain;
  margin-bottom: 0.8rem;
  transition: transform 0.3s ease;
  
  ${Tech}:hover & {
    transform: scale(1.1);
  }
`;

export const TechName = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

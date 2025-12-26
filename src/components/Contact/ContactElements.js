import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContactWrapper = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  position: relative;
  z-index: 1;
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary || '#8b5cf6'}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: inline-block;
`;

export const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

export const ContactCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.1);
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -15px rgba(2, 12, 27, 0.2);
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  text-align: left;
`;

export const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.primary}30;
  }
`;

export const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary || '#8b5cf6'}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

export const ContactText = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p, a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    transition: color 0.3s ease;
    display: block;
    margin: 0;
    word-wrap: break-word;
    word-break: break-all;
    overflow-wrap: break-word;
    hyphens: auto;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const EmailButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary || '#8b5cf6'}
  );
  color: white;
  box-shadow: 0 4px 15px -5px ${({ theme }) => `${theme.colors.primary}80`};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-top: 1.5rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px -5px ${({ theme }) => `${theme.colors.primary}80`};
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import saavidya from '../../Assets/projects/saavidya.png'
import flockwise from '../../Assets/projects/flockwise.png'
import yodaskill   from '../../Assets/projects/yodaskill.png'

// Styled Components
const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: inline-block;
`;

const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ProjectImage = styled.div`
  height: 220px;
  background: ${({ theme }) => theme.colors.background};
  background-image: url(${props => props.imageUrl || 'https://via.placeholder.com/600x400'});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 70%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(100, 100, 255, 0.2) 0%,
      rgba(200, 100, 255, 0.2) 100%
    );
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.2);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  will-change: transform, box-shadow;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  height: 100%;
  
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
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px -15px rgba(2, 12, 27, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    ${ProjectImage}::after {
      opacity: 1;
      transform: translateY(0);
    }
    
    ${ProjectImage}::before {
      transform: translateY(100%);
    }
  }
`;


const ProjectContent = styled.div`
  padding: 1.8rem 2rem 2rem;
  position: relative;
  z-index: 2;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  flex: 1;
  display: flex;
  flex-direction: column;
  
  ${ProjectCard}:hover & {
    background: ${({ theme }) => theme.colors.background};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  ${ProjectCard}:hover &::after {
    width: 100%;
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.7;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  
  &::before {
    content: '#';
    font-weight: 700;
    opacity: 0.7;
  }
  
  ${ProjectCard}:hover & {
    background: ${({ theme }) => theme.colors.primary}15;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px -5px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary || '#8b5cf6'} 100%
    );
    z-index: -1;
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    transform: translateX(-100%);
  }
  
  ${props => props.primary ? `
    background: ${props.theme.colors.primary};
    color: white;
    box-shadow: 0 4px 15px -5px ${props.theme.colors.primary}80;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px -5px ${props.theme.colors.primary}80;
      
      &::before {
        transform: translateX(0);
      }
    }
    
    &:active {
      transform: translateY(-1px);
    }
  ` : `
    border: 2px solid ${props.theme.colors.border};
    color: ${props.theme.colors.text};
    
    &:hover {
      background: ${props.theme.colors.background};
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
      transform: translateY(-3px);
      box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.1);
    }
  `}
`;

// Project data
const projects = [
  {
    id: 1,
    title: 'Yodaskill',
    description: 'The Edutech Candidate Assessment and Hiring Platform is a comprehensive solution designed for staffing and recruiting purposes.',
    image: yodaskill,
    tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MySQL', 'Redux-Toolkit'],
    demo: 'https://yodaskill.com/',
    code: '#',
  },
  {
    id: 2,
    title: 'Flockwise',
    description: 'AI Data Platform for E-commerce & D2C Brands to Drive Smarter Growth. Eliminate scattered data and attribution issues with Flockwise, providing accurate data, a single source of truth, and actionable insights for exponential growth.',
    image: flockwise,
    tech: ['Next.JS', 'NodeJS', 'ExpressJS', 'Mongo DB', 'Redux-Toolkit'],
    demo: 'https://getflockwise.com/',
    code: '#',
  },
  {
    id: 3,
    title: 'NCEL E-Procurement',
    description: 'E-procurement website for National Cooperative Exports Limited (NCEL). A comprehensive platform for managing procurement processes online.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Express','Redux-Toolkit'],
    demo: 'http://eprocurement-dev.ncel.co',
    code: '#',
  },
  {
  id: 'saavidya', // Added unique ID
  title: "Saavidya – Sahakar Vidyalaya",
  description: "An educational platform empowering farmers, students, and cooperative members with practical knowledge across 10+ key agricultural commodities. Offers structured learning in 8 Indian languages, covering cultivation practices, post-harvest management, supply chain processes, and global export opportunities.",
  tech: ["ReactJS", "Node.js", "MongoDB", "Express", "Material-UI"], // Changed to array format
  github_url: "https://github.com/Sasikumaryanapu",
  demo_url: "https://savidya.coop/",
  image: saavidya
}
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.5,
    },
  },
  hover: {
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

function Projects() {
  const { theme } = useTheme();

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionHeader>
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle>
            Here are some of my recent projects. Each project was built to solve a specific problem or explore new technologies.
          </SectionSubtitle>
        </SectionHeader>
        
        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <ProjectImage imageUrl={project.image} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    primary
                  >
                    Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
}

export default Projects;

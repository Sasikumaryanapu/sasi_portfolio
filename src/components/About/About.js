import React from "react";
import { motion } from 'framer-motion';
import { stackList } from "../../data/ProjectData";
import sasi from "../../images/Sasii.png";

import {
  Image,
  ImageWrapper,
  AboutContainer,
  AboutContent,
  Technologies,
  Tech,
  TechImg,
  TechName,
  TechGrid,
  ContactWrapper,
} from "./AboutElements";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const techItemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1 * i,
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }),
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

function About() {
  return (
    <ContactWrapper id="about">
      <AboutContainer>
        <ImageWrapper
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Image src={sasi} alt="Sasi Kumar" />
        </ImageWrapper>
        
        <AboutContent
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          
          <motion.p variants={itemVariants}>
            Hello! I'm <span className="highlight">Sasi Kumar</span>, a passionate full-stack developer with expertise in modern web technologies. 
            I specialize in building responsive, performant, and user-friendly web applications.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            With a strong foundation in both frontend and backend development, I bring ideas to life through clean, 
            efficient code and intuitive user interfaces. My experience includes working with React, Node.js, 
            and various databases to create seamless full-stack solutions.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing my knowledge with the developer community.
          </motion.p>
          
          <Technologies>
            <motion.h3 variants={itemVariants}>Tech Stack</motion.h3>
            <TechGrid>
              {stackList.map((stack, index) => (
                <Tech
                  key={index}
                  custom={index}
                  variants={techItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <TechImg src={stack.img} alt={stack.name} loading="lazy" />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
            </TechGrid>
          </Technologies>
        </AboutContent>
      </AboutContainer>
    </ContactWrapper>
  );
}

export default About;

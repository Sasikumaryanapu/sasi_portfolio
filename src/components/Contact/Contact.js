import React from "react";
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import SocialIcon from "../SocialIcon/SocialIcon";
import {
  ContactWrapper,
  ContactContainer,
  SectionTitle,
  SectionSubtitle,
  ContactCard,
  ContactInfo,
  ContactItem,
  ContactIcon,
  ContactText,
  EmailButton
} from "./ContactElements";

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
  },
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

function Contact() {
  return (
    <ContactWrapper id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll get back to you as soon as possible!
          </SectionSubtitle>
        </motion.div>

        <ContactCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactInfo>
            <ContactItem
              variants={itemVariants}
              whileHover="hover"
            >
              <ContactIcon>
                <FiMail />
              </ContactIcon>
              <ContactText>
                <h3>Email</h3>
                <a href="mailto:sasikumaryanapu16@gmail.com">sasikumaryanapu16@gmail.com</a>
              </ContactText>
            </ContactItem>

            <ContactItem
              variants={itemVariants}
              whileHover="hover"
            >
              <ContactIcon>
                <FiMapPin />
              </ContactIcon>
              <ContactText>
                <h3>Location</h3>
                <p>Bangalore, India</p>
              </ContactText>
            </ContactItem>

            <ContactItem
              variants={itemVariants}
              whileHover="hover"
            >
              <ContactIcon>
                <FaTelegramPlane />
              </ContactIcon>
              <ContactText>
                <h3>Social</h3>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <a href="https://linkedin.com/in/sasi-kumar16" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FiLinkedin />
                  </a>
                  <a href=" https://github.com/Sasikumaryanapu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FiTwitter />
                  </a> */}
                </div>
              </ContactText>
            </ContactItem>
          </ContactInfo>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4 }}
          >
          <EmailButton
  href="mailto:sasikumaryanapu16@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Let's Connect
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</EmailButton>
          </motion.div>
        </ContactCard>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: '4rem' }}
        >
          <SocialIcon />
        </motion.div>
      </ContactContainer>
    </ContactWrapper>
  );
}

export default Contact;

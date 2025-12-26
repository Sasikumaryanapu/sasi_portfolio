import React, { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import styled from "styled-components";

const MainContent = styled.div`
  padding-top: 80px; /* To account for fixed header */
`;

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggle={toggle} />
      <MainContent>
        <Hero id="home" />
        <Projects id="projects" />
        <About id="about" />
        <Contact id="contact" />
        <Footer />
      </MainContent>
      <FixSocialIcon />
    </>
  );
}

export default Home;

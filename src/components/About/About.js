import React from "react";
import { stackList } from "../../data/ProjectData";
import sasi from "../../images/Sasii.png"

import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={sasi}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>sasi kumar</strong>  full-stack developer intern. 
            I have  proficiency in some of the following programs: React, Node, mongoDB , Scss , Zustand , HTML, CSS and javascript  . 
            I seek to establish a full time career as a full-stack developer. 
            As someone who understands web application architecture well, I am capable of training others in general web development.
             I've worked with development teams, and can be a good team employee.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

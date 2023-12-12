import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import sasi from "../../images/Sasii.png"
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
          <div>
  <h1>Hello, I'm Sasi Kumar</h1>
  <h5>Your Fullstack Web Developer</h5>
  <p>Passionate about crafting seamless web experiences. From server logic to user interfaces, I bring ideas to life across the entire web stack.</p>
</div>

          </HeroLeft>
          <HeroRight>
            <Image
              src={sasi}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
             <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"/>
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;

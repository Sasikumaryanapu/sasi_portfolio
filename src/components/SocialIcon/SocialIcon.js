import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

// Styled link for each social icon
const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #151418; /* icon color */
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    color: inherit;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05); /* background changes on hover */
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Container for social icons
export const SocialDiv = styled.div`
  margin-top: 2rem;
  display: none;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .item {
    margin: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function SocialIcon() {
  return (
    <SocialDiv>
      <ul>
        <li className="item">
          <SocialLink
            href="https://www.linkedin.com/in/sasi-kumar16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialLink>
        </li>
        <li className="item">
          <SocialLink
            href="https://github.com/Sasikumaryanapu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialLink>
        </li>
      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;

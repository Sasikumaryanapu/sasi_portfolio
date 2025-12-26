// src/components/SocialIcon/FixSocialIcon.js
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  z-index: 999; /* Increased z-index to ensure it stays on top */
  background: transparent;
  pointer-events: auto; /* Make sure it's clickable */

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.backgroundSecondary || '#f8f9fa'};
    color: ${({ theme }) => theme.colors.textSecondary || '#6c757d'};
    font-size: 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  a.linkedin:hover {
    color: #0a66c2;
    background: rgba(10, 102, 194, 0.1);
  }

  a.github:hover {
    color: #000;
    background: rgba(0, 0, 0, 0.05);
  }

  a.email:hover {
    color: #d44638;
    background: rgba(212, 70, 56, 0.1);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sasi-kumar16"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Sasikumaryanapu"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="mailto:sasikumaryanapu16@gmail.com"
            className="email"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
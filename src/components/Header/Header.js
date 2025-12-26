import React, { useState, useEffect } from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { FiDownload } from "react-icons/fi";

const Header = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active link based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, activeLink]);

  const downloadFile = (e) => {
    e.preventDefault();
    const fileUrl = process.env.PUBLIC_URL + "/resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "sasi_kumar_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <Nav className={scrolled ? "scrolled" : ""}>
      <Logo
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveLink("home");
        }}
      >
        <span>SK</span>
      </Logo>

      <NavMenu>
        <NavLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleSetActive("about")}
        >
          About
        </NavLink>
        <NavLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => handleSetActive("projects")}
        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => handleSetActive("contact")}
        >
          Contact
        </NavLink>
      </NavMenu>

      <NavBtn>
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          className="resume-btn"
          download="sasi_kumar_resume.pdf"
        >
          <FiDownload /> Download CV
        </a>
      </NavBtn>

      <Bars onClick={toggle} />
    </Nav>
  );
};

export default Header;

import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
const Header = ({ toggle }) => {

  const downloadFile = () => {
    const fileUrl = process.env.PUBLIC_URL + "/resume.pdf"; 
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "sasi_resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (  
    <div className="Container">
      <Nav>
        <Logo to="/">
         
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
        <a  className="btn PrimaryBtn" onClick={downloadFile}>Resume</a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;

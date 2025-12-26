// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { 
  MoonIcon, 
  SunIcon, 
  Bars3Icon as MenuIcon, 
  XMarkIcon as XIcon 
} from '@heroicons/react/24/outline';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${({ theme, scrolled }) => 
    scrolled 
      ? theme.colors.background + 'cc' 
      : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid ${({ theme, scrolled }) => 
    scrolled ? theme.colors.border + '20' : 'transparent'};
`;

// ... rest of your Navbar component code

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo 
          to="home" 
          smooth={true} 
          duration={500} 
          offset={-80}
          onClick={closeMobileMenu}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {`<SasiKumar />`}
          </motion.span>
        </Logo>

        <NavLinks>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
              spy={true}
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </ThemeToggle>
        </NavLinks>

        <MobileMenuButton 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="w-6 h-6" />
        </MobileMenuButton>
      </NavContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <MobileMenuHeader>
                <Logo 
                  to="home" 
                  smooth={true} 
                  duration={500} 
                  offset={-80} 
                  onClick={closeMobileMenu}
                >
                  {`<SasiKumar />`}
                </Logo>
                <MobileMenuClose 
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <XIcon className="w-6 h-6" />
                </MobileMenuClose>
              </MobileMenuHeader>
              
              <MobileNavLinks>
                {navLinks.map((link) => (
                  <MobileNavLink
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    activeClass="active"
                    spy={true}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </MobileNavLink>
                ))}
                <MobileThemeToggle 
                  onClick={() => {
                    toggleTheme();
                    closeMobileMenu();
                  }}
                >
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                  {theme === 'light' ? (
                    <MoonIcon className="w-5 h-5" />
                  ) : (
                    <SunIcon className="w-5 h-5" />
                  )}
                </MobileThemeToggle>
              </MobileNavLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
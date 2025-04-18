import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} style={{ 
      position: 'fixed', 
      width: '100%', 
      top: 0, 
      zIndex: 1000,
      transition: 'all 0.3s ease-in-out',
      background: scrolled ? '#e0e5ec' : 'transparent',
      boxShadow: scrolled ? '3px 3px 7px #a3b1c6, -3px -3px 7px #ffffff' : 'none',
      padding: '15px 0'
    }}>
      <Container>
        <Navbar.Brand href="#home" className="logo" style={{ fontWeight: 700, fontSize: '1.8rem' }}>
          <span className="accent-text">Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="neu-button"
          style={{ 
            border: 'none',
            padding: '10px'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              className={activeLink === 'home' ? 'active neu-button' : 'neu-button'} 
              onClick={() => onUpdateActiveLink('home')}
              style={{
                margin: '0 5px',
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={activeLink === 'about' ? 'active neu-button' : 'neu-button'}
              onClick={() => onUpdateActiveLink('about')}
              style={{
                margin: '0 5px',
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              className={activeLink === 'skills' ? 'active neu-button' : 'neu-button'} 
              onClick={() => onUpdateActiveLink('skills')}
              style={{
                margin: '0 5px',
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href="#portfolio" 
              className={activeLink === 'portfolio' ? 'active neu-button' : 'neu-button'} 
              onClick={() => onUpdateActiveLink('portfolio')}
              style={{
                margin: '0 5px',
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              className={activeLink === 'contact' ? 'active neu-button' : 'neu-button'} 
              onClick={() => onUpdateActiveLink('contact')}
              style={{
                margin: '0 5px',
                borderRadius: '10px',
                padding: '10px 20px'
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
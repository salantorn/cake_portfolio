import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/scss/main.scss'; 
import myImage from '../assets/images/my.jpg';


const Hero = () => {
  return (
    <section className="section hero" id="home" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <div className="neu-container float">
              <h1>Hello, I'm <span className="accent-text">Salantorn Ketpru</span></h1>
              <h2 className="mb-4">Web Developer & Designer</h2>
              <p className="mb-4">
                Welcome to my portfolio. I create beautiful and functional websites with attention to detail and modern design principles.
              </p>
              <div className="d-flex flex-wrap">
                <a href="mailto:salantornlol@gmail.com" className="neu-button me-3 mb-3">
                  Contact Me
                </a>
                <a href="https://github.com/salantorn" className="neu-button mb-3">
                  View My Work
                </a>
              </div>
              <div className="social-icons mt-4 d-flex">
                {/* ตรงนี้คุณสามารถเพิ่มไอคอนโซเชียลมีเดียของคุณได้ */}
                <a href="https://www.linkedin.com/in/salantorn/" className="neu-icon-button me-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/salantorn" className="neu-icon-button me-3">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.facebook.com/salantron.ketpru.3?locale=th_TH" className="neu-icon-button me-3">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="neu-image-container">
              {/* ตรงนี้คุณสามารถใส่รูปของคุณ */}
              <img 
                src={myImage}
                alt="Your Name" 
                className="img-fluid" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
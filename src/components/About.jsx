import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyImage from '../assets/images/cake1.png';

const About = () => {
  return (
    <section className="section about" id="about">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">About Me</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} md={5} className="mb-4 mb-md-0">
            <div className="neu-image-container">
              {/* ตรงนี้คุณสามารถใส่รูปอีกรูปหนึ่งของคุณ */}
              <img 
                src={MyImage}
                alt="About Me" 
                className="img-fluid" 
              />
            </div>
          </Col>
          <Col xs={12} md={7}>
            <div className="neu-container">
              <h3>Who Am I?</h3>
              <p>
                I am a passionate web developer with a strong focus on creating intuitive and visually appealing interfaces. With expertise in modern frameworks and design principles, I build websites that not only look great but also deliver exceptional user experiences.
              </p>
              
              <div className="info-container mt-4">
                <Row>
                  <Col xs={12} md={6} className="mb-3">
                    <div className="info-item">
                      <strong>Name:</strong> Salantorn Ketpru
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <div className="info-item">
                      <strong>Email:</strong> salantornlol@gmail.com
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <div className="info-item">
                      <strong>Phone:</strong> +66 064 484 7858
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <div className="info-item">
                      <strong>Location:</strong> Pathumthani, Thailand
                    </div>
                  </Col>
                </Row>
              </div>
              
              <div className="mt-4">
                <a href="#" className="neu-button">
                  Download CV
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
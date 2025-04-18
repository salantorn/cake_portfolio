import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      background: '#e0e5ec',
      padding: '30px 0',
      boxShadow: 'inset 0 5px 10px #a3b1c6'
    }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Salantorn Ketpru. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="social-icons d-flex justify-content-center justify-content-md-end">
              <a href="#" className="neu-icon-button me-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="neu-icon-button me-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="neu-icon-button">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
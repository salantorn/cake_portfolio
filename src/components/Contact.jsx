import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรงนี้คุณสามารถเพิ่มโค้ดสำหรับการส่งข้อมูลแบบฟอร์มไปยังเซิร์ฟเวอร์ได้
    console.log(formData);
    alert('Thank you for your message! I will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section contact" id="contact" style={{ background: '#e6ebf2' }}>
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Contact Me</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="neu-container">
              <h3>Get In Touch</h3>
              <p className="mb-4">
                Feel free to reach out if you have any questions or would like to work together.
                I'll get back to you as soon as possible.
              </p>
              
              <div className="contact-info mt-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="neu-icon-button me-3">
                    <a href="https://www.google.com/maps/place/Pathum+Thani,+Thailand/@14.000000,100.000000,10z/data=!3m1!4b1!4m6!3m5!1s0x30e29c2f2f2f2f2f:0x30e29c2f2f2f2f2f!8m2!3d14.000000!4d100.000000!16s%2Fg%2F11c1t1t1t1" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-geo-alt"></i></a>
                  </div>
                  <div>
                    <h5 className="mb-0">Location</h5>
                    <p className="mb-0">Pathumtani,Thailand</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  
                  <div className="neu-icon-button me-3">
                    <a href="mailto:salantornlol@gmail.com">
                    <i className="bi bi-envelope"></i></a>
                  </div>
                  <div>
                    <h5 className="mb-0">Email</h5>
                    <p className="mb-0">salantornlol@gmail.com</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="neu-icon-button me-3">
                    <a href="tel:+66644847858">
                    <i className="bi bi-phone"></i></a>
                  </div>
                  <div>
                    <h5 className="mb-0">Phone</h5>
                    <p className="mb-0">+66 064 484 7858</p>
                  </div>
                </div>
              </div>
              
              <div className="social-icons mt-4 d-flex">
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
          <Col lg={7}>
            <div className="neu-container">
              <h3>Send Message</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        required
                        className="neu-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        required
                        className="neu-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required
                    className="neu-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    required
                    className="neu-input"
                    style={{ minHeight: '150px' }}
                  />
                </Form.Group>
                <Button 
                  type="submit" 
                  className="neu-button"
                  style={{
                    background: 'linear-gradient(145deg, #6d5dfc, #8abdff)',
                    color: '#ffffff',
                    border: 'none'
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
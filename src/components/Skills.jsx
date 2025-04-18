
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// นำเข้ารูปภาพสำหรับแต่ละทักษะ
import htmlCssImage from '../assets/images/html.png';
import javascriptImage from '../assets/images/javascript.png';
import reactImage from '../assets/images/react.png';
import nodeImage from '../assets/images/nodejs.png';
import tailwindImage from '../assets/images/tailwindcss.png';
import bootstrapImage from '../assets/images/bootstrap.png';
import sassImage from '../assets/images/sass.png';
import typescriptImage from '../assets/images/typescript.png';
// ทำเป็น fallback รูปภาพหากไม่พบรูปที่ระบุ
import defaultImage from '../assets/images/my.jpg';
import './Skills.css';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const skillsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Define skills with more detailed information for the enhanced UI
  const skills = [
    {
      name: "HTML/CSS",
      color: "#e34c26",
      description: "Building the structure and style of web pages",
      level: 92,
      icon: "fab fa-html5",
      image: htmlCssImage
    },
    {
      name: "JavaScript",
      color: "#f0db4f",
      description: "Creating interactive and dynamic websites",
      level: 88,
      icon: "fab fa-js",
      image: javascriptImage
    },
    {
      name: "React.js",
      color: "#61dafb",
      description: "Building modern, component-based web applications",
      level: 90,
      icon: "fab fa-react",
      image: reactImage
    },
    {
      name: "Node.js",
      color: "#68a063",
      description: "Developing server-side applications with JavaScript",
      level: 85,
      icon: "fab fa-node-js",
      image: nodeImage
    },
    {
      name: "Tailwind CSS",
      color: "#38bdf8",
      description: "Creating responsive designs with utility-first framework",
      level: 87,
      icon: "fas fa-palette",
      image: tailwindImage
    },
    {
      name: "Bootstrap",
      color: "#7952b3",
      description: "Building responsive sites with pre-built components",
      level: 94,
      icon: "fab fa-bootstrap",
      image: bootstrapImage
    },
    {
      name: "SCSS/SASS",
      color: "#cc6699",
      description: "Advanced styling with CSS preprocessor",
      level: 89,
      icon: "fab fa-sass",
      image: sassImage
    },
    {
      name: "TypeScript",
      color: "#3178c6",
      description: "Strongly typed programming for JavaScript",
      level: 91,
      icon: "fas fa-code",
      image: typescriptImage
    }
  ];

  useEffect(() => {
    // Check if element is in viewport for animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Mouse position tracking for 3D effect
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized rotation values
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5;
      
      setRotation({ x: rotateX, y: rotateY });
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Touch handling 
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0] && containerRef.current) {
        const touch = e.touches[0];
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateY = ((touch.clientX - centerX) / (rect.width / 2)) * 3;
        const rotateX = -((touch.clientY - centerY) / (rect.height / 2)) * 3;
        
        setRotation({ x: rotateX, y: rotateY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Calculate individual card transformations
  const calculateCardTransform = (index) => {
    if (!skillsRef.current[index]) return {};
    
    const isActive = activeSkill === index;
    const rect = skillsRef.current[index].getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    // Distance from mouse to card center
    const deltaX = mousePosition.x - cardCenterX;
    const deltaY = mousePosition.y - cardCenterY;
    
    // Normalize for realistic tilt
    const maxRotate = 12;
    const normDeltaX = (deltaX / (rect.width / 2)) * maxRotate;
    const normDeltaY = (deltaY / (rect.height / 2)) * maxRotate;
    
    return {
      transform: isActive 
        ? `perspective(1000px) rotateX(${-normDeltaY}deg) rotateY(${normDeltaX}deg) scale3d(1.05, 1.05, 1.05)`
        : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.2s ease-out, box-shadow 0.3s ease-out'
    };
  };

  return (
    <div id="skills" ref={sectionRef} className={`skills-section ${isVisible ? 'fade-in' : ''}`}>
      <div className="skills-showcase" ref={containerRef}>
        <Container className="py-5">
          <div className="skills-header text-center mb-5">
            <h2 className="skills-title">Technical Proficiency</h2>
            <div className="animated-bar"></div>
            <p className="skills-subtitle">Hover or tap on each skill to explore details</p>
          </div>

          <div className="skills-scene" 
            style={{ 
              transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
            }}>
            <Row className="skills-grid">
              {skills.map((skill, index) => (
                <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                  <div 
                    ref={el => skillsRef.current[index] = el}
                    className={`skill-card ${activeSkill === index ? 'active' : ''}`}
                    style={{
                      ...calculateCardTransform(index),
                      animationDelay: `${index * 0.1}s`
                    }}
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                    onTouchStart={() => setActiveSkill(index === activeSkill ? null : index)}
                  >
                    <div className="skill-card-inner">
                      <div className="skill-icon-container" style={{ borderColor: skill.color }}>
                        <div className="skill-icon-wrapper" style={{ backgroundColor: `${skill.color}20` }}>
                          <img 
                            src={skill.image} 
                            alt={skill.name} 
                            className="skill-image"
                          />
                        </div>
                      </div>
                      
                      <h3 className="skill-name" style={{ color: skill.color }}>
                        {skill.name}
                      </h3>
                      
                      <p className="skill-description">{skill.description}</p>
                      
                      <div className="skill-level-container">
                        <div className="skill-level-track">
                          <div 
                            className="skill-level-fill" 
                            style={{ 
                              width: `${skill.level}%`, 
                              backgroundColor: skill.color 
                            }}
                          >
                            <div className="skill-level-glow" style={{ backgroundColor: skill.color }}></div>
                          </div>
                        </div>
                        <span className="skill-level-label" style={{ color: skill.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Interactive elements that appear on hover */}
                      <div className="skill-particles">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className="particle"
                            style={{ 
                              backgroundColor: skill.color,
                              animationDelay: `${i * 0.2}s` 
                            }}
                          ></div>
                        ))}
                      </div>
                      
                      <div className="skill-card-overlay" style={{ borderColor: skill.color }}></div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          
          {/* 3D floating decoration elements */}
          <div className="decoration-elements">
            <div className="floating-cube cube-1"></div>
            <div className="floating-cube cube-2"></div>
            <div className="floating-sphere sphere-1"></div>
            <div className="floating-sphere sphere-2"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Skills;

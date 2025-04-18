import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Portfolio.css';

// รูปภาพโปรเจกต์
import expenseTrackerImage from '../assets/images/bootstrap.png';
import webPortfolioImage from'../assets/images/web_port.png';
import flutterPortfolioImage from '../assets/images/flutter_port.png';
import ecommerceImage from '../assets/images/shopee.png';
import capstoneImage from '../assets/images/capstone.png';


// ไอคอน
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);
  const projectRefs = useRef([]);
  
  // โปรเจกต์ต่างๆ
  const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      category: "web",
      description: "A personal finance application for tracking expenses, creating budgets, and visualizing spending habits with interactive charts.",
      technologies: ["React", "Node.js", "Chart.js", "MongoDB"],
      imageUrl: expenseTrackerImage,
      githubUrl: "https://github.com/salantorn/expense-tracker",
      liveUrl: "https://expense-tracker-demo.salantorn.com",
      featured: true
    },
    {
      id: 2,
      title: "Web Portfolio",
      category: "web",
      description: "A responsive portfolio website showcasing projects, skills, and professional experience with a modern design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      imageUrl: webPortfolioImage,
      githubUrl: "https://github.com/salantorn/web-portfolio",
      liveUrl: "https://salantorn.github.io/web-portfolio",
      featured: true
    },
    {
      id: 3,
      title: "Flutter Portfolio",
      category: "app",
      description: "A cross-platform mobile portfolio application built with Flutter, featuring smooth animations and a responsive layout.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider"],
      imageUrl: flutterPortfolioImage,
      githubUrl: "https://github.com/salantorn/flutter_portfolio",
      liveUrl: "https://salantorn.github.io/flutter_portfolio/",
      featured: false
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "web",
      description: "A full-featured e-commerce website with product catalog, shopping cart, user authentication, and payment processing.",
      technologies: ["React", "Redux", "Express", "MongoDB", "Stripe API"],
      imageUrl: ecommerceImage,
      githubUrl: "https://github.com/salantorn/e-commerce",
      liveUrl: "https://shopee.co.th/",
      featured: true
    },
    {
      id: 5,
      title: "Capstone Project",
      category: "design",
      description: "A comprehensive UI/UX design system for a healthcare application, with user flows, wireframes, and interactive prototypes.",
      technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
      imageUrl: capstoneImage,
      githubUrl: "https://www.figma.com/file/capstone-project",
      liveUrl: "https://www.figma.com/design/AAb9cwBSymMnjiOkxF1dIX/Hospital-fabrick-tracking--capstone-project-?node-id=181-1114&t=yQbovDxVhPGICXuQ-0",
      featured: true
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // 3D card effect based on mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Intersection Observer to detect when projects are visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleItems(prev => [...prev, Number(entry.target.dataset.id)]);
        }
      });
    }, { threshold: 0.2 });
    
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Calculate 3D transform for each project card
  const calculate3DTransform = (id) => {
    if (!projectRefs.current[id-1]) return {};
    
    const card = projectRefs.current[id-1];
    const rect = card.getBoundingClientRect();
    
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const maxRotate = 10; // Maximum rotation in degrees
    
    // Distance from mouse to card center
    const deltaX = mousePosition.x - cardCenterX;
    const deltaY = mousePosition.y - cardCenterY;
    
    // Normalize to -1 to 1 range
    const rotateX = (deltaY / (rect.height / 2)) * -maxRotate;
    const rotateY = (deltaX / (rect.width / 2)) * maxRotate;
    
    // Only apply effect if mouse is within a reasonable distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const effectRadius = Math.max(rect.width, rect.height) * 1.5;
    
    if (distance < effectRadius) {
      const intensity = 1 - (distance / effectRadius);
      return {
        transform: `perspective(1000px) rotateX(${rotateX * intensity}deg) rotateY(${rotateY * intensity}deg) scale3d(1.02, 1.02, 1.02)`,
        boxShadow: `
          ${5 + (intensity * 3)}px ${5 + (intensity * 3)}px ${10 + (intensity * 5)}px rgba(163, 177, 198, 0.5),
          ${-5 - (intensity * 3)}px ${-5 - (intensity * 3)}px ${10 + (intensity * 5)}px rgba(255, 255, 255, 0.6)
        `
      };
    }
    
    return {};
  };

  // Generate category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web':
        return <FaCode className="category-icon" />;
      case 'app':
        return <FaMobileAlt className="category-icon" />;
      case 'design':
        return <FaPalette className="category-icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="portfolio-section" id="portfolio" ref={containerRef}>
      <div className="neu-background">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="floating-shape shape4"></div>
        
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <div className="section-header">
                <h2 className="section-title">My Portfolio</h2>
                <div className="title-underline"></div>
                <p className="section-subtitle">Explore my recent projects and creative works</p>
              </div>
            </Col>
          </Row>
          
          <Row className="mb-5">
            <Col className="text-center">
              <div className="portfolio-filters">
                {['all', 'web', 'app', 'design'].map((category) => (
                  <button 
                    key={category}
                    className={`neu-filter-btn ${filter === category ? 'active' : ''}`}
                    onClick={() => setFilter(category)}
                  >
                    <span className="filter-text">
                      {category === 'all' ? 'All Projects' : 
                       category === 'web' ? 'Web Development' : 
                       category === 'app' ? 'App Development' : 'UI/UX Design'}
                    </span>
                    <span className="filter-highlight"></span>
                  </button>
                ))}
              </div>
            </Col>
          </Row>
          
          <Row className="projects-container">
            {filteredProjects.map((project) => (
              <Col 
                xs={12} 
                md={6} 
                lg={4} 
                key={project.id} 
                className={`mb-4 project-col ${visibleItems.includes(project.id) ? 'visible' : ''}`}
              >
                <div 
                  className="project-card" 
                  ref={el => projectRefs.current[project.id-1] = el}
                  data-id={project.id}
                  style={calculate3DTransform(project.id)}
                >
                  <div className="project-img-container">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="project-img" 
                    />
                    <div className="project-overlay">
                      <div className="project-actions">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-action-btn github-btn"
                          aria-label="View GitHub Repository"
                        >
                          <FaGithub />
                          <span>Code</span>
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-action-btn demo-btn"
                          aria-label="View Live Demo"
                        >
                          <FaExternalLinkAlt />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                    {project.featured && <div className="featured-badge">Featured</div>}
                    <div className="category-badge">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech-stack">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="view-github-btn"
                      >
                        <FaGithub /> View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          
          <Row className="mt-5">
            <Col className="text-center">
              <a 
                href="https://github.com/salantorn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-all-btn"
              >
                <span>View All Projects on GitHub</span>
                <FaGithub className="btn-icon" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Portfolio;
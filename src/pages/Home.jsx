import React from 'react';
import ProjectCard from '../components/ProjectCard';
import CTA from '../components/CTA';
import tryonImg from '../assets/projects/tryon/tryon-1.png';
import ecomImg from '../assets/projects/ecommerce/ecom-1.png';

const Home = ({ navigate }) => {
  const projects = [
    {
      id: 'tryon',
      name: 'Try-On Virtualiser',
      description: 'Designed the user interface for a web application that allows users to upload images and visualize clothing items using AI. Targets both consumer and business use cases.',
      techStack: ['Figma', 'UI/UX Design'],
      hasDetails: false,
      liveLink: null,
      image: tryonImg
    },
    {
      id: 'ecommerce',
      name: 'Ecommerce Platform',
      description: 'Built a full-featured ecommerce website with product browsing, cart management, order placement, and admin inventory controls. Demonstrates real-world architecture patterns.',
      techStack: ['React', 'Firebase', 'Vercel'],
      hasDetails: true,
      liveLink: 'https://ecom-school-store.web.app/',
      image: ecomImg
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Available for opportunities</div>
          <h1 className="hero-title">
            Anuoluwapo Nosakhare<br />Oluwadara Festus-Olagbende
          </h1>
          <p className="hero-subtitle">Final Year Computer Science Student</p>
          <p className="hero-role">Fullstack Developer • Product Designer</p>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am a final year Computer Science student with hands-on experience building real-world web applications. I work as a fullstack developer and product designer, with a strong interest in system architecture, system design, and scalable application development.
          </p>
          <p className="about-text">
            I enjoy translating ideas into functional, well-structured digital products. My approach combines technical proficiency with thoughtful design, ensuring that the applications I build are both powerful and user-friendly. I'm passionate about creating solutions that solve real problems and deliver value to users.
          </p>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="projects-description">
              A selection of work showcasing my skills and experience
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={() => navigate(`/projects/${project.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import tryon1 from '../assets/projects/tryon/tryon-1.png';
import tryon2 from '../assets/projects/tryon/tryon-2.png';
import tryon3 from '../assets/projects/tryon/tryon-3.png';

const TryOnProject = ({ navigate }) => {
  const screenshots = [
    { img: tryon1, caption: 'Home Screen' },
    { img: tryon2, caption: 'Upload Interface' },
    { img: tryon3, caption: 'Visualization Result' }
  ];

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        <button onClick={() => navigate('/')} className="back-button">
          <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
          Back to Home
        </button>
        <h1 className="project-detail-title">Try-On Virtualiser</h1>
        <div className="project-detail-tech">
          {['Figma', 'UI/UX Design'].map((tech, idx) => (
            <span key={idx} className="tech-badge-large">{tech}</span>
          ))}
        </div>

        <div className="detail-sections">
          <section className="detail-section">
            <h2>Project Overview</h2>
            <p>Designed the user interface for a group project web application that allows users to upload an image of themselves, select clothing items, and use AI to visualize how the clothes would look on them. The product targets both consumer and business use cases.</p>
          </section>

          <section className="detail-section">
            <h2>Design Showcase</h2>
            <div className="screenshots-grid">
              {screenshots.map((screenshot, idx) => (
                <div key={idx} className="screenshot-item">
                  <img src={screenshot.img} alt={screenshot.caption} />
                  <p className="screenshot-caption">{screenshot.caption}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>Key Design Features</h2>
            <div className="features-grid">
              {[
                'Clean, intuitive upload interface',
                'AI-powered clothing visualization',
                'Responsive design for all devices',
                'Consumer and business use cases'
              ].map((feature, idx) => (
                <div key={idx} className="feature-item">{feature}</div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>What I Learned</h2>
            <div className="learning-item">
              <p><strong>User-centered design:</strong> Focused on creating an intuitive interface that makes complex AI technology accessible to everyday users.</p>
            </div>
            <div className="learning-item">
              <p><strong>Design systems:</strong> Developed a consistent visual language and component library that works across different use cases.</p>
            </div>
            <div className="learning-item">
              <p><strong>Collaborative design:</strong> Worked with a team to align design decisions with technical capabilities and business goals.</p>
            </div>
          </section>

          <section className="detail-section">
            <div className="cta-box">
              <h2>Interested in this project?</h2>
              <p>Let's discuss how I can help with your next project.</p>
              <div className="cta-box-buttons">
                <a href="mailto:anuolu2000@gmail.com" className="btn-cta btn-email">
                  <Mail size={18} />
                  Email Me
                </a>
                <a href="https://wa.me/2348029467548" target="_blank" rel="noopener noreferrer" className="btn-cta btn-whatsapp">
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TryOnProject;
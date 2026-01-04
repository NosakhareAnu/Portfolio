import React from 'react';
import { ExternalLink, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import ecom1 from '../assets/projects/ecommerce/ecom-1.png';
import ecom2 from '../assets/projects/ecommerce/ecom-2.png';
import ecom3 from '../assets/projects/ecommerce/ecom-3.png';
import ecom4 from '../assets/projects/ecommerce/ecom-4.png';

const EcommerceProject = ({ navigate }) => {
  const screenshots = [
    { img: ecom1, caption: 'Home Page' },
    { img: ecom2, caption: 'Shopping Cart' },
    { img: ecom3, caption: 'Orders Page' },
    { img: ecom4, caption: 'Login Page' }
  ];

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        <button onClick={() => navigate('/')} className="back-button">
          <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
          Back to Home
        </button>
        <h1 className="project-detail-title">Ecommerce Platform</h1>
        <div className="project-detail-tech">
          {['React', 'Firebase', 'Vercel'].map((tech, idx) => (
            <span key={idx} className="tech-badge-large">{tech}</span>
          ))}
        </div>
        <a href="https://ecom-school-store.web.app/" target="_blank" rel="noopener noreferrer" className="live-link">
          <ExternalLink size={18} />
          View Live Site
        </a>
        <div className="detail-sections">
          <section className="detail-section">
            <h2>Problem I Solved</h2>
            <p>Created a simple ecommerce platform to connect users with sellers, enabling product listing, ordering, and basic order management without a completed payment gateway. The goal was to demonstrate core ecommerce functionality and real-world architecture in a scalable way.</p>
          </section>
          <section className="detail-section">
            <h2>Full Description</h2>
            <p>This ecommerce website allows users to sign up and log in, browse available products, add items to a cart, and place orders. Prices update dynamically in the cart, providing real-time feedback on purchase totals.</p>
            <p>Business owners can add products, update stock levels, and view customer orders from the backend interface. While payment integration is not fully implemented, the system demonstrates core ecommerce functionality and real-world architecture that can be easily extended with payment processing in the future.</p>
          </section>
          <section className="detail-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              {['User authentication (sign up & login)', 'Product listing and browsing', 'Add to cart functionality', 'Dynamic cart price calculation', 'Order placement system', 'Admin product management', 'Order viewing dashboard', 'Responsive UI design'].map((feature, idx) => (
                <div key={idx} className="feature-item">{feature}</div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>Project Screenshots</h2>
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
            <h2>Technologies Used</h2>
            <div className="tech-detail">
              <h3>React (Frontend)</h3>
              <p>Component-based architecture for building a dynamic and interactive user interface.</p>
            </div>
            <div className="tech-detail">
              <h3>Firebase (Authentication & Database)</h3>
              <p>Handles user authentication and real-time database for products and orders.</p>
            </div>
            <div className="tech-detail">
              <h3>Vercel (Hosting)</h3>
              <p>Fast, reliable deployment with automatic SSL and global CDN.</p>
            </div>
          </section>
          <section className="detail-section">
            <h2>What I Learned</h2>
            <div className="learning-item">
              <p><strong>Structuring a scalable React application:</strong> Learned to organize components, manage file structure, and create reusable code patterns that can grow with the application.</p>
            </div>
            <div className="learning-item">
              <p><strong>Managing state for carts and authentication:</strong> Implemented complex state management to handle user sessions, cart persistence, and dynamic price calculations.</p>
            </div>
            <div className="learning-item">
              <p><strong>Integrating Firebase services:</strong> Gained hands-on experience with Firebase Authentication and Firestore for real-time data synchronization.</p>
            </div>
            <div className="learning-item">
              <p><strong>Building real-world user flows:</strong> Designed and implemented complete user journeys from product discovery to order placement.</p>
            </div>
            <div className="learning-item">
              <p><strong>Designing frontend systems that mirror production ecommerce logic:</strong> Applied industry best practices to create a system architecture that reflects real production ecommerce platforms.</p>
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

export default EcommerceProject;
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Let's Work Together </h2>
        <p className="cta-description">
          Have a project in mind? Let's bring it to life.
        </p>
        <div className="cta-buttons">
          <a href="mailto:anuolu2000@gmail.com" className="btn-cta btn-email">
            <Mail size={20} />
            Email Me
          </a>
          <a href="https://wa.me/2348029467548" target="_blank" rel="noopener noreferrer" className="btn-cta btn-whatsapp">
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
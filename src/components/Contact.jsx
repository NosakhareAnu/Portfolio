import { ArrowUpRight, Mail } from 'lucide-react';
import { contactLinks } from '../data/portfolio';

function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Let’s discuss the work.</h2>
        </div>

        <div className="contact-content">
          <p>
            For roles, collaborations, or a conversation about software and product design, use the contact options below.
          </p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.id}
                className={link.id === 'email' ? 'button button-primary' : 'text-link'}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.id === 'email' && <Mail size={18} aria-hidden="true" />}
                <span>{link.actionLabel}</span>
                {link.id !== 'email' && <ArrowUpRight size={17} aria-hidden="true" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

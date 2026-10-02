import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { contactLinks } from '../data/portfolio';

const email = contactLinks.find((link) => link.id === 'email');
const profileLinks = contactLinks.filter((link) => link.external);

function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email.display);
      setCopied(true);
    } catch {
      window.location.href = email.href;
    }
  };

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel" data-reveal>
          <h2 id="contact-title">Contact</h2>

          <div className="contact-content">
            <p>
              If you’re hiring for a software development role or want to ask about my work, email is the best way to
              reach me.
            </p>

            <div className="contact-email">
              <a className="button button-primary" href={email.href}>
                <Mail size={18} aria-hidden="true" />
                <span>{email.actionLabel}</span>
              </a>
              <button className="button button-secondary" type="button" onClick={copyEmail}>
                {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                <span>{copied ? 'Copied' : 'Copy email'}</span>
              </button>
              <span className="visually-hidden" role="status" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>
            <p className="contact-address">{email.display}</p>

            <div className="contact-links">
              {profileLinks.map((link) => (
                <a key={link.id} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                  <span>{link.actionLabel}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

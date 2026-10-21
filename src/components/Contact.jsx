import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
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
        <div className="contact-panel">
          <div className="contact-heading">
            <h2 id="contact-title">Contact</h2>
            <p className="contact-statement">Have something<br />in mind?</p>
          </div>

          <div className="contact-content">
            <p>
              If you’re hiring for a software development role or want to ask about my work, email is the best way to
              reach me.
            </p>

            <div className="contact-email">
              <a className="contact-address" href={email.href}>
                <span>{email.display}</span><ArrowUpRight size={23} aria-hidden="true" />
              </a>
              <button className="copy-button" type="button" onClick={copyEmail} aria-label={copied ? 'Email address copied' : `Copy email address: ${email.display}`}>
                {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                <span>{copied ? 'Copied' : 'Copy email'}</span>
              </button>
              <span className="visually-hidden" role="status" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>

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

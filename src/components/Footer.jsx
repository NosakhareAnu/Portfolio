import { Link } from 'react-router-dom';
import { contactLinks, profile } from '../data/portfolio';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <Link className="footer-name" to="/">
          {profile.name}
        </Link>
        <nav className="footer-links" aria-label="Professional links">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
              {link.external && <span className="visually-hidden"> (opens in a new tab)</span>}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

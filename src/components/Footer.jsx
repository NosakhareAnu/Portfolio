import { Link } from 'react-router-dom';
import { contactLinks, profile } from '../data/portfolio';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <Link className="footer-name" to="/">
            {profile.name}
          </Link>
          <p>
            {profile.title} · {profile.location}
          </p>
        </div>
        <div className="footer-meta">
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
          <p className="footer-note">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

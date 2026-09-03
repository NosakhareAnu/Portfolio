import { Link } from 'react-router-dom';
import { profile } from '../data/portfolio';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <Link className="footer-name" to="/">
            {profile.name}
          </Link>
          <p>{profile.title}</p>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} {profile.shortName}. Built with care.</p>
      </div>
    </footer>
  );
}

export default Footer;

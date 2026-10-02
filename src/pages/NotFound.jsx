import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { defaultTitle, profile } from '../data/portfolio';

function NotFound() {
  useEffect(() => {
    document.title = `Page not found — ${profile.name}`;
    return () => {
      document.title = defaultTitle;
    };
  }, []);

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="container not-found-content">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">This page is not available.</h1>
        <p>The link may be outdated, or the page may have moved.</p>
        <Link className="button button-primary" to="/">
          <ArrowLeft size={18} aria-hidden="true" />
          Return home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation, profile } from '../data/portfolio';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" to="/" onClick={closeMenu} aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-name">{profile.shortName}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.hash} to={`/#${item.hash}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-nav${isOpen ? ' is-open' : ''}`}
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
        >
          {navigation.map((item) => (
            <Link key={item.hash} to={`/#${item.hash}`} onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, profile } from '../data/portfolio';

function useActiveSection(enabled) {
  const [activeHash, setActiveHash] = useState(null);

  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) return undefined;

    const sections = navigation
      .map((item) => document.getElementById(item.hash))
      .filter(Boolean);

    // A thin band across the upper middle of the viewport decides which section is current.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? activeHash : null;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const activeHash = useActiveSection(pathname === '/');

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 8);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const renderLinks = (onNavigate, tabIndex) =>
    navigation.map((item) => {
      const isActive = activeHash === item.hash;
      return (
        <Link
          key={item.hash}
          to={`/#${item.hash}`}
          className={isActive ? 'is-active' : undefined}
          aria-current={isActive ? 'location' : undefined}
          onClick={onNavigate}
          tabIndex={tabIndex}
        >
          {item.label}
        </Link>
      );
    });

  return (
    <header className={`site-header${isScrolled || isOpen ? ' is-scrolled' : ''}`}>
      <div className="nav-shell">
        <Link className="brand" to="/" onClick={closeMenu} aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            NF
          </span>
          <span className="brand-name">{profile.shortName}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {renderLinks()}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-nav${isOpen ? ' is-open' : ''}`}
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
        >
          {renderLinks(closeMenu, isOpen ? 0 : -1)}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

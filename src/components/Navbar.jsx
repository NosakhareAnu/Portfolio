import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ navigate, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li>
            <button onClick={() => handleNavigation('/')} className="navbar-link">
              Home
            </button>
          </li>
          <li>
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li>
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="navbar-mobile active">
            <button onClick={() => handleNavigation('/')} className="navbar-link">
              Home
            </button>
            <a href="#about" onClick={() => setIsOpen(false)} className="navbar-link">
              About
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="navbar-link">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="navbar-link">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
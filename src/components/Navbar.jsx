import { useState } from "react";
import { content } from "../content/content";
import ThemeToggle from "../ui/Toggle";
import logos from "../assets/logos/index.js"; // Import logos

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">{content.navbar.logo}</div>
        
        {/* Desktop Navigation */}
        <div className="navbar-links">
          {content.navbar.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="navbar-link"
            >
              {link.text}
            </a>
          ))}
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="navbar-mobile">
          <ThemeToggle />
          <button
            className="navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img src={isMenuOpen ? logos.close : logos.menu} alt="Menu" className="navbar-icon" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="container">
            {content.navbar.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="navbar-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
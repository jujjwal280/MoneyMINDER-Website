import { useState, useEffect } from 'react';

export default function Navbar({ isLight, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const scrolled = window.pageYOffset;
        const opacity = Math.min(scrolled / 100, 0.95);
        navbar.style.background = isLight
          ? `rgba(226, 246, 246, ${opacity})`
          : `rgba(18, 18, 18, ${opacity})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLight]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MoneyMINDER AI</div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        <li><a href="#demo" onClick={(e) => handleNavClick(e, '#demo')}><b>Demo</b></a></li>
        <li><a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}><b>Feedback</b></a></li>
        <li><a href="#blogs" onClick={(e) => handleNavClick(e, '#blogs')}><b>Blog</b></a></li>
        <li><a href="#screens" onClick={(e) => handleNavClick(e, '#screens')}><b>App Screen</b></a></li>
        <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}><b>Features</b></a></li>
        <li><a href="#tech" onClick={(e) => handleNavClick(e, '#tech')}><b>Tech Stack</b></a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}><b>About</b></a></li>
      </ul>
      <div className="theme-toggle" onClick={onThemeToggle} title="Toggle Theme">
        {isLight ? '🌞' : '🌙'}
      </div>
    </nav>
  );
}
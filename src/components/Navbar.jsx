import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about','skills', 'achievements', 'organizations', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT ME' },
     { id: 'skills', label: 'SKILLS' },
    { id: 'achievements', label: 'ACHIEVEMENTS' },
    { id: 'organizations', label: 'ORGANIZATIONS' },
    { id: 'projects', label: 'PROJECTS GALLERY' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{
        background: 'linear-gradient(90deg, #FF69B4 0%, #FF85C8 50%, #FFB6D9 100%)',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-14">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center w-full space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 lg:px-6 py-2 font-semibold text-xs lg:text-sm text-white tracking-wider cursor-pointer transition-all duration-200 group"
                style={{
                  animation: 'fadeInDown 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                    activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
                  }`}
                  style={{ transformOrigin: 'center' }}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Right Side */}
          <button
            className="md:hidden text-white p-2 relative z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`block h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`block h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'linear-gradient(180deg, #FF69B4 0%, #FF85C8 100%)'
        }}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative block w-full text-left px-4 py-3 font-semibold text-sm text-white transition-all duration-300 group"
              style={{
                animation: mobileMenuOpen ? 'slideInRight 0.4s ease-out' : 'none',
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'both'
              }}
            >
              {item.label}
              <span 
                className={`absolute bottom-1 left-4 right-4 h-0.5 bg-white transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
                style={{ transformOrigin: 'left' }}
              />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
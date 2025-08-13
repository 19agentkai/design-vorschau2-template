import React, { useState, useEffect } from 'react';
import { Car, Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Start', id: 'hero' },
    { name: 'Leistungen', id: 'services' },
    { name: 'Galerie', id: 'gallery' },
    { name: 'Bewertungen', id: 'reviews' },
    { name: 'Kontakt', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Car className={`h-8 w-8 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
            <div className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <div>Autopflege &</div>
              <div className="text-sm font-medium">Fahrzeugaufbereitung</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Jetzt Angebot anfragen
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-4 py-3 text-lg text-gray-700 hover:text-blue-600 font-medium w-full text-left rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full mt-6 bg-blue-700 text-white px-4 py-4 text-lg rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Jetzt Angebot anfragen
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
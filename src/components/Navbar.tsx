
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    // Removed: case-studies, certifications, knowledge
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="https://10gtechnology.com/images/logo.png" alt="10G Technology" className="h-10" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <Button 
            onClick={scrollToContact}
            className="ml-4 bg-cyber-warning hover:bg-cyber-accent text-cyber-dark font-semibold">
            {t('cta.free-assessment')}
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-cyber-dark"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 text-cyber-dark hover:text-cyber-accent"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <Button 
              onClick={() => {
                toggleMenu();
                scrollToContact();
              }}
              className="mt-2 bg-cyber-warning hover:bg-cyber-accent text-cyber-dark font-semibold">
              {t('cta.free-assessment')}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

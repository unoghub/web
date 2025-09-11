import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Eğer ana sayfada değilsek, önce ana sayfaya git
    if (location.pathname !== '/') {
      navigate('/');
      // Ana sayfa yüklendikten sonra bölüme scroll yap
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Ana sayfadaysak direkt scroll yap
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt={t.common.logo} 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-unog-blue transition-colors"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-gray-700 hover:text-unog-blue transition-colors"
            >
              {t.nav.events}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-unog-blue transition-colors"
            >
              {t.nav.contact}
            </button>
            <Link 
              to="/merch"
              className="text-gray-700 hover:text-unog-blue transition-colors"
            >
              {t.nav.merch}
            </Link>
            <button 
              onClick={() => scrollToSection('patreon')}
              className="text-gray-700 hover:text-unog-blue transition-colors"
            >
              {t.nav.support}
            </button>
            <Link 
              to="/gonullu"
              className="text-gray-700 hover:text-unog-blue transition-colors"
            >
              {t.nav.volunteers}
            </Link>
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs">{language.toUpperCase()}</span>
            </Button>
            
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-unog-blue transition-colors py-2"
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-gray-700 hover:text-unog-blue transition-colors py-2"
              >
                {t.nav.events}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-unog-blue transition-colors py-2"
              >
                {t.nav.contact}
              </button>
              <Link 
                to="/merch"
                className="text-left text-gray-700 hover:text-unog-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.merch}
              </Link>
              <button 
                onClick={() => scrollToSection('patreon')}
                className="text-left text-gray-700 hover:text-unog-blue transition-colors py-2"
              >
                {t.nav.support}
              </button>
              <Link 
                to="/gonullu"
                className="text-left text-gray-700 hover:text-unog-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.volunteers}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


import { useState } from 'react';
import { Menu, X, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">HUAIQS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-huaiqs-blue transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-huaiqs-blue transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-huaiqs-blue transition-colors font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-huaiqs-blue transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Consulta Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-huaiqs-blue transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-huaiqs-blue transition-colors font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left text-gray-700 hover:text-huaiqs-blue transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-gray-700 hover:text-huaiqs-blue transition-colors font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left text-gray-700 hover:text-huaiqs-blue transition-colors font-medium"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple text-white mt-4 w-full"
              >
                Consulta Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

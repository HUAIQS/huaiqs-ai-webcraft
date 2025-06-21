
import { useState } from 'react';
import { Menu, X, Building2, ArrowRight } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative p-2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg shadow-md">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 bg-clip-text text-transparent tracking-tight">
              HUAIQS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-blue-700 transition-colors font-semibold hover:scale-105 transform duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-slate-700 hover:text-blue-700 transition-colors font-semibold hover:scale-105 transform duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-slate-700 hover:text-blue-700 transition-colors font-semibold hover:scale-105 transform duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-slate-700 hover:text-blue-700 transition-colors font-semibold hover:scale-105 transform duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              Consulta Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-700 transition-colors hover:bg-slate-100 rounded-lg"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 pt-4 px-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-slate-700 hover:text-blue-700 transition-colors font-semibold py-2 hover:bg-blue-50 rounded-lg px-3"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left text-slate-700 hover:text-blue-700 transition-colors font-semibold py-2 hover:bg-blue-50 rounded-lg px-3"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-slate-700 hover:text-blue-700 transition-colors font-semibold py-2 hover:bg-blue-50 rounded-lg px-3"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left text-slate-700 hover:text-blue-700 transition-colors font-semibold py-2 hover:bg-blue-50 rounded-lg px-3"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white mt-4 w-full rounded-lg font-semibold"
              >
                Consulta Gratuita
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

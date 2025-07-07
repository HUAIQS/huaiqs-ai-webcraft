
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    servicios: [
      { name: 'Automatización con IA', href: '#servicios' },
      { name: 'Análisis de Datos', href: '#servicios' },
      { name: 'Optimización de Campañas', href: '#servicios' },
      { name: 'Chatbots Inteligentes', href: '#servicios' },
      { name: 'Integración de Sistemas', href: '#servicios' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#nosotros' },
      { name: 'Nuestros Servicios', href: '#servicios' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Recursos', href: '#recursos' },
      { name: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos de Servicio', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'GDPR', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hugo-hurtado-fernández-77904b371', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/hhuaiqs/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-huaiqs-darker text-white border-t border-huaiqs-gray">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple rounded-lg">
                <img src="/lovable-uploads/11aa6506-b8cc-4ec6-9a54-f2d3c0676810.png" alt="HUAIQS Logo" className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold gradient-text">HUAIQS</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos empresas con soluciones de inteligencia artificial personalizadas. 
              Automatizamos procesos, optimizamos operaciones y maximizamos resultados con tecnología de vanguardia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-huaiqs-gray hover:bg-gradient-to-r hover:from-huaiqs-blue hover:to-huaiqs-purple rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="text-gray-300 hover:text-huaiqs-blue transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-300 hover:text-huaiqs-blue transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contacto</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-huaiqs-blue" />
                <a href="mailto:hugo@huaiqs.com" className="text-gray-300 hover:text-white transition-colors">
                  hhuaiqs@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-huaiqs-blue" />
                <a href="tel:+34634782858" className="text-gray-300 hover:text-white transition-colors">
                  +34 634 78 28 58
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-huaiqs-blue" />
                <span className="text-gray-300">Barcelona, España</span>
              </div>
            </div>
            
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan w-full transition-all duration-300"
            >
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-huaiqs-gray">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 HUAIQS. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

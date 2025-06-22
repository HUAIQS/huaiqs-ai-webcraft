
import { Bot, BarChart3, Target, MessageSquareDot, Cog, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Automatización con IA",
      description: "Automatizamos procesos complejos con IA avanzada para que tu equipo se enfoque en lo estratégico.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-huaiqs-blue/10 border-huaiqs-blue/30"
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description: "Transformamos tus datos en información valiosa que impulsa el crecimiento de tu negocio.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-huaiqs-purple/10 border-huaiqs-purple/30"
    },
    {
      icon: Target,
      title: "Optimización de Campañas",
      description: "Maximizamos el ROI de tus campañas con IA y análisis en tiempo real.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10 border-green-500/30"
    },
    {
      icon: MessageSquareDot,
      title: "Chatbots Inteligentes",
      description: "Atención al cliente 24/7 que mejora la experiencia y genera leads calificados.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10 border-orange-500/30"
    },
    {
      icon: Cog,
      title: "Integración de Sistemas",
      description: "Conectamos todos tus sistemas y podemos implementar sistemas RAG para un flujo de trabajo inteligente.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10 border-indigo-500/30"
    },
    {
      icon: TrendingUp,
      title: "Consultoría Estratégica",
      description: "Te guiamos en la transformación digital con estrategias personalizadas y probadas.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-huaiqs-cyan/10 border-huaiqs-cyan/30"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Soluciones completas de IA diseñadas para transformar tu negocio y maximizar resultados.
          </p>
        </div>

        {/* Services Grid - Professional & Minimalist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/5 backdrop-blur-sm border border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-huaiqs-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Single CTA Section - Professional & Minimalist */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-white animate-fade-in max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Negocio?
            </h3>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-semibold mb-6 text-huaiqs-blue">
                Proceso de Selección
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 bg-huaiqs-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <h5 className="text-white font-medium mb-2">Solicitud</h5>
                  <p className="text-gray-400 text-sm">Envíanos tu proyecto con detalles específicos</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-huaiqs-purple rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <h5 className="text-white font-medium mb-2">Evaluación</h5>
                  <p className="text-gray-400 text-sm">Revisamos viabilidad y compatibilidad</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-huaiqs-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <h5 className="text-white font-medium mb-2">Colaboración</h5>
                  <p className="text-gray-400 text-sm">Iniciamos el trabajo conjunto</p>
                </div>
              </div>
            </div>
            
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contactar Equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

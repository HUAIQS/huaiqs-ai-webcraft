
import { Bot, BarChart3, Target, MessageSquareBot, Cog, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Automatización con IA",
      description: "Automatizamos tareas repetitivas y procesos complejos usando inteligencia artificial avanzada.",
      features: ["Automatización de workflows", "Procesamiento de documentos", "Gestión automatizada de emails"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos Inteligente",
      description: "Convertimos tus datos en insights accionables con análisis predictivo y machine learning.",
      features: ["Análisis predictivo", "Dashboard inteligentes", "Reportes automatizados"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Optimización de Campañas",
      description: "Maximizamos el ROI de tus campañas de marketing con IA y análisis en tiempo real.",
      features: ["Segmentación inteligente", "A/B testing automatizado", "Optimización de presupuesto"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageSquareBot,
      title: "Chatbots Inteligentes",
      description: "Chatbots personalizados que mejoran la atención al cliente y generan más leads.",
      features: ["Atención 24/7", "Integración multicanal", "Aprendizaje continuo"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Cog,
      title: "Integración de Sistemas",
      description: "Conectamos y optimizamos todos tus sistemas para un flujo de trabajo seamless.",
      features: ["APIs personalizadas", "Sincronización de datos", "Automatización de procesos"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Consultoría Estratégica",
      description: "Te guiamos en la transformación digital de tu empresa con estrategias personalizadas.",
      features: ["Auditoría de procesos", "Roadmap de implementación", "Training del equipo"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones completas de inteligencia artificial y marketing digital 
            diseñadas para transformar tu negocio y maximizar tus resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-4 mx-auto`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-huaiqs-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center justify-center">
                        <div className="w-2 h-2 bg-huaiqs-blue rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full group-hover:bg-huaiqs-blue group-hover:text-white transition-all duration-300"
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-huaiqs-blue via-huaiqs-purple to-huaiqs-cyan rounded-2xl p-8 md:p-12 text-white animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Revolucionar tu Negocio?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo la IA puede transformar tu empresa
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-huaiqs-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Consulta Gratuita Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

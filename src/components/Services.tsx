
import { Bot, BarChart3, Target, MessageSquareDot, Cog, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Automatización con IA",
      description: "Automatizamos tareas repetitivas y procesos complejos usando inteligencia artificial avanzada para que tu equipo se enfoque en lo estratégico.",
      features: ["Automatización de workflows", "Procesamiento inteligente de documentos", "Gestión automatizada de emails y comunicaciones"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-huaiqs-blue/10 border-huaiqs-blue/30"
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos Inteligente",
      description: "Convertimos tus datos en insights accionables con análisis predictivo y machine learning para decisiones más inteligentes.",
      features: ["Análisis predictivo avanzado", "Dashboards inteligentes en tiempo real", "Reportes automatizados personalizados"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-huaiqs-purple/10 border-huaiqs-purple/30"
    },
    {
      icon: Target,
      title: "Optimización de Campañas",
      description: "Maximizamos el ROI de tus campañas de marketing con IA y análisis en tiempo real para resultados superiores.",
      features: ["Segmentación inteligente de audiencias", "A/B testing automatizado", "Optimización dinámica de presupuesto"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10 border-green-500/30"
    },
    {
      icon: MessageSquareDot,
      title: "Chatbots Inteligentes",
      description: "Chatbots personalizados que mejoran la atención al cliente 24/7 y generan más leads calificados.",
      features: ["Atención al cliente 24/7 automatizada", "Integración multicanal completa", "Aprendizaje continuo y mejora automática"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10 border-orange-500/30"
    },
    {
      icon: Cog,
      title: "Integración de Sistemas",
      description: "Conectamos y optimizamos todos tus sistemas para un flujo de trabajo seamless y sin interrupciones.",
      features: ["APIs personalizadas y robustas", "Sincronización de datos en tiempo real", "Automatización completa de procesos"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10 border-indigo-500/30"
    },
    {
      icon: TrendingUp,
      title: "Consultoría Estratégica",
      description: "Te guiamos en la transformación digital de tu empresa con estrategias personalizadas y probadas.",
      features: ["Auditoría completa de procesos", "Roadmap detallado de implementación", "Training especializado del equipo"],
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones completas de inteligencia artificial y automatización 
            diseñadas para transformar tu negocio y maximizar tus resultados de manera escalable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 dark-card ${service.bgColor} backdrop-blur-sm`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-huaiqs-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center justify-start">
                        <div className="w-2 h-2 bg-huaiqs-blue rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-huaiqs-blue/50 text-huaiqs-blue hover:bg-huaiqs-blue hover:text-white transition-all duration-300 group-hover:shadow-lg"
                  >
                    Solicitar Información
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-huaiqs-blue/20 to-huaiqs-purple/20 backdrop-blur-sm border border-huaiqs-blue/30 rounded-2xl p-8 md:p-12 text-white animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Revolucionar tu Negocio?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita de 30 minutos y descubre cómo la IA puede transformar tu empresa de manera inmediata
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Consulta Gratuita Ahora
              </Button>
              <Button
                onClick={() => window.open('https://calendly.com/huaiqs', '_blank')}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Agendar Llamada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

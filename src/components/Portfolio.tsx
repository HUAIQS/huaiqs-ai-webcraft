
import { ExternalLink, TrendingUp, Users, Clock, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Plus",
      category: "Automatización de Procesos",
      description: "Implementamos un sistema de IA que automatizó el 90% de los procesos de atención al cliente, reduciendo tiempos de respuesta de 24 horas a 2 minutos.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      results: [
        { metric: "ROI", value: "350%" },
        { metric: "Tiempo Ahorrado", value: "85%" },
        { metric: "Satisfacción Cliente", value: "95%" }
      ],
      tags: ["Chatbots", "Automatización", "E-commerce"]
    },
    {
      title: "TechCorp Solutions",
      category: "Análisis Predictivo",
      description: "Desarrollamos un sistema de análisis predictivo que optimizó la cadena de suministro, reduciendo costos operativos en un 40%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      results: [
        { metric: "Reducción Costos", value: "40%" },
        { metric: "Eficiencia", value: "60%" },
        { metric: "Precisión Predicciones", value: "92%" }
      ],
      tags: ["Machine Learning", "Análisis", "Optimización"]
    },
    {
      title: "Marketing Agency Pro",
      category: "Optimización de Campañas",
      description: "Creamos un algoritmo de IA que optimiza automáticamente las campañas publicitarias en tiempo real, mejorando el ROAS en un 280%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: [
        { metric: "ROAS", value: "280%" },
        { metric: "CTR Mejorado", value: "45%" },
        { metric: "Conversiones", value: "190%" }
      ],
      tags: ["Marketing", "IA", "Optimización"]
    }
  ];

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Casos de <span className="gradient-text">Éxito</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo hemos transformado negocios reales con nuestras soluciones de IA, 
            generando resultados medibles y impacto duradero.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="dark-card border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-huaiqs-darker/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-huaiqs-blue/80 backdrop-blur-sm text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-huaiqs-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-huaiqs-blue mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-huaiqs-gray text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-huaiqs-blue text-huaiqs-blue hover:bg-huaiqs-blue hover:text-white"
                >
                  Ver Caso Completo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-huaiqs-blue/20 to-huaiqs-purple/20 backdrop-blur-sm border border-huaiqs-blue/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Quieres Ser Nuestro Próximo Caso de Éxito?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos transformar tu negocio con IA
            </p>
            <Button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan px-8 py-4 text-lg font-semibold"
            >
              Iniciar mi Transformación
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

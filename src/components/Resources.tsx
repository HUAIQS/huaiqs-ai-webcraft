
import { BookOpen, Clock, ArrowRight, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const articles = [
    {
      title: "El Futuro de la Automatización Empresarial con IA",
      excerpt: "Descubre las tendencias que definirán la próxima década en automatización inteligente y cómo preparar tu empresa.",
      category: "Tendencias",
      readTime: "8 min",
      date: "15 Dic 2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "ROI en Proyectos de IA: Cómo Medir el Éxito",
      excerpt: "Métricas clave y metodologías para evaluar el retorno de inversión en implementaciones de inteligencia artificial.",
      category: "Análisis",
      readTime: "6 min",
      date: "12 Dic 2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop"
    },
    {
      title: "Chatbots Inteligentes: Casos de Uso Exitosos",
      excerpt: "Ejemplos reales de empresas que han transformado su atención al cliente con chatbots avanzados.",
      category: "Casos de Uso",
      readTime: "5 min",
      date: "10 Dic 2024",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop"
    },
    {
      title: "Implementación de IA en PYMES: Guía Práctica",
      excerpt: "Estrategias accesibles para pequeñas y medianas empresas que quieren adoptar inteligencia artificial.",
      category: "Guías",
      readTime: "10 min",
      date: "8 Dic 2024",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Guía Completa de IA",
      description: "Todo lo que necesitas saber sobre inteligencia artificial aplicada a negocios.",
      type: "E-book Gratuito"
    },
    {
      icon: TrendingUp,
      title: "Calculadora de ROI en IA",
      description: "Estima el retorno de inversión de tu proyecto de inteligencia artificial.",
      type: "Herramienta"
    },
    {
      icon: Users,
      title: "Webinar Exclusivo",
      description: "Sesión en vivo sobre las últimas tendencias en automatización empresarial.",
      type: "Evento Online"
    }
  ];

  return (
    <section className="py-20 section-darker">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recursos y <span className="gradient-text">Conocimiento</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mantente actualizado con las últimas tendencias, guías prácticas y casos de estudio 
            sobre inteligencia artificial y automatización empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            {articles.filter(article => article.featured).map((article, index) => (
              <Card key={index} className="dark-card border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-huaiqs-darker/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-huaiqs-purple/80 backdrop-blur-sm text-white text-sm rounded-full">
                      Destacado
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-huaiqs-gray rounded-full">{article.category}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-huaiqs-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button variant="outline" className="border-huaiqs-blue text-huaiqs-blue hover:bg-huaiqs-blue hover:text-white">
                    Leer Artículo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resources Sidebar */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Recursos Gratuitos</h3>
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="dark-card border-0 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple rounded-lg">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-huaiqs-blue font-medium">{resource.type}</span>
                        <h4 className="text-white font-semibold mb-1 group-hover:text-huaiqs-blue transition-colors">
                          {resource.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Articles */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Artículos Recientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(article => !article.featured).map((article, index) => (
              <Card key={index} className="dark-card border-0 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-huaiqs-darker/60 to-transparent"></div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="px-2 py-1 bg-huaiqs-gray rounded-full">{article.category}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-huaiqs-blue transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <ArrowRight className="h-4 w-4 text-huaiqs-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;


import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Clock, Award, Target, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CasoExito = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const casesData = {
    'ecommerce-plus': {
      title: "E-commerce Plus",
      category: "Automatización de Procesos",
      client: "E-commerce Plus",
      industry: "Comercio Electrónico",
      duration: "3 meses",
      team: "4 especialistas",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      challenge: "E-commerce Plus enfrentaba un cuello de botella crítico en su atención al cliente. Con más de 10,000 consultas diarias, el tiempo de respuesta promedio era de 24 horas, generando insatisfacción del cliente y pérdida de ventas. El equipo de soporte estaba sobrecargado y los costos operativos se disparaban.",
      solution: "Implementamos un sistema integral de IA conversacional que incluía chatbots inteligentes, clasificación automática de consultas, y un sistema de escalamiento inteligente. La solución integró procesamiento de lenguaje natural avanzado y aprendizaje automático para mejorar continuamente las respuestas.",
      results: [
        { metric: "ROI", value: "350%", description: "Retorno de inversión en 6 meses" },
        { metric: "Tiempo de Respuesta", value: "2 min", description: "Reducción del 95% en tiempo promedio" },
        { metric: "Satisfacción Cliente", value: "95%", description: "Incremento del 40%" },
        { metric: "Consultas Automatizadas", value: "90%", description: "Resolución sin intervención humana" }
      ],
      technologies: ["GPT-4", "Natural Language Processing", "Machine Learning", "API Integration", "Real-time Analytics"],
      testimonial: {
        quote: "La transformación ha sido increíble. No solo hemos mejorado la experiencia del cliente, sino que hemos liberado a nuestro equipo para enfocarse en tareas estratégicas de mayor valor.",
        author: "María González",
        position: "Directora de Operaciones, E-commerce Plus"
      },
      keyFeatures: [
        "Chatbot multilingüe 24/7",
        "Clasificación inteligente de consultas",
        "Sistema de escalamiento automático",
        "Panel de análisis en tiempo real",
        "Integración con CRM existente"
      ]
    },
    'techcorp-solutions': {
      title: "TechCorp Solutions",
      category: "Análisis Predictivo",
      client: "TechCorp Solutions",
      industry: "Tecnología y Logística",
      duration: "4 meses",
      team: "6 especialistas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
      challenge: "TechCorp Solutions luchaba con ineficiencias en su cadena de suministro, experimentando sobrecostos del 25% debido a predicciones inexactas de demanda, exceso de inventario en algunos productos y desabastecimiento en otros. Los métodos tradicionales de forecasting no capturaban la complejidad del mercado.",
      solution: "Desarrollamos un sistema de análisis predictivo avanzado que utiliza algoritmos de machine learning para analizar patrones históricos, tendencias de mercado, estacionalidad y factores externos. El sistema proporciona predicciones precisas de demanda y optimiza automáticamente los niveles de inventario.",
      results: [
        { metric: "Reducción de Costos", value: "40%", description: "Optimización de inventario y logística" },
        { metric: "Eficiencia Operativa", value: "60%", description: "Mejora en procesos automatizados" },
        { metric: "Precisión de Predicciones", value: "92%", description: "Exactitud en forecasting" },
        { metric: "Tiempo de Planificación", value: "75%", description: "Reducción en procesos manuales" }
      ],
      technologies: ["Python", "TensorFlow", "Time Series Analysis", "Big Data Analytics", "Cloud Computing"],
      testimonial: {
        quote: "El sistema predictivo ha revolucionado nuestra operación. Ahora podemos anticiparnos a la demanda con una precisión que nunca habíamos experimentado, lo que se traduce directamente en ahorros significativos.",
        author: "Carlos Mendoza",
        position: "Director de Operaciones, TechCorp Solutions"
      },
      keyFeatures: [
        "Predicción de demanda multi-variable",
        "Optimización automática de inventario",
        "Alertas inteligentes de reabastecimiento",
        "Análisis de tendencias de mercado",
        "Dashboard ejecutivo en tiempo real"
      ]
    },
    'marketing-agency-pro': {
      title: "Marketing Agency Pro",
      category: "Optimización de Campañas",
      client: "Marketing Agency Pro",
      industry: "Marketing Digital",
      duration: "2 meses",
      team: "5 especialistas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      challenge: "Marketing Agency Pro gestionaba más de 200 campañas publicitarias simultáneamente, pero la optimización manual era ineficiente y reactiva. Los ajustes de presupuesto, targeting y creative se realizaban con retraso, perdiendo oportunidades de maximizar el ROAS y desperdiciando presupuesto publicitario.",
      solution: "Creamos un algoritmo de IA que monitorea y optimiza campañas publicitarias en tiempo real. El sistema analiza métricas de rendimiento, ajusta automáticamente presupuestos, optimiza targeting y sugiere mejoras en creativos basándose en análisis predictivo y machine learning.",
      results: [
        { metric: "ROAS Mejorado", value: "280%", description: "Incremento en retorno de inversión publicitaria" },
        { metric: "CTR", value: "45%", description: "Mejora en tasa de clics" },
        { metric: "Conversiones", value: "190%", description: "Aumento en conversiones totales" },
        { metric: "Eficiencia Operativa", value: "70%", description: "Reducción en tiempo de gestión manual" }
      ],
      technologies: ["Machine Learning", "Real-time Bidding", "API Integration", "Data Analytics", "Automated Testing"],
      testimonial: {
        quote: "La automatización inteligente nos ha permitido escalar nuestras operaciones sin aumentar proporcionalmente el equipo. Los resultados para nuestros clientes han mejorado dramáticamente.",
        author: "Ana Ruiz",
        position: "CEO, Marketing Agency Pro"
      },
      keyFeatures: [
        "Optimización automática de pujas",
        "Análisis predictivo de audiencias",
        "A/B testing automatizado",
        "Redistribución inteligente de presupuesto",
        "Reportes automatizados para clientes"
      ]
    }
  };

  const caseData = casesData[id as keyof typeof casesData];

  if (!caseData) {
    return (
      <div className="min-h-screen bg-huaiqs-darker flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Caso no encontrado</h1>
          <Button onClick={() => navigate('/')}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-huaiqs-darker">
      {/* Header */}
      <div className="relative">
        <img 
          src={caseData.image}
          alt={caseData.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-huaiqs-darker via-huaiqs-darker/70 to-transparent"></div>
        
        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="absolute top-8 left-8 border-white/30 text-white hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <span className="px-4 py-2 bg-huaiqs-blue/80 backdrop-blur-sm text-white text-sm rounded-full">
              {caseData.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-2">
              {caseData.title}
            </h1>
            <p className="text-xl text-gray-300">
              Caso de éxito en {caseData.industry}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="dark-card border-huaiqs-blue/30">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-huaiqs-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Cliente</h3>
              <p className="text-gray-300">{caseData.client}</p>
            </CardContent>
          </Card>
          <Card className="dark-card border-huaiqs-purple/30">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-huaiqs-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Duración</h3>
              <p className="text-gray-300">{caseData.duration}</p>
            </CardContent>
          </Card>
          <Card className="dark-card border-huaiqs-cyan/30">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-huaiqs-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Equipo</h3>
              <p className="text-gray-300">{caseData.team}</p>
            </CardContent>
          </Card>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="dark-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Target className="mr-3 h-6 w-6 text-red-400" />
                El Desafío
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">{caseData.challenge}</p>
            </CardContent>
          </Card>

          <Card className="dark-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Zap className="mr-3 h-6 w-6 text-yellow-400" />
                La Solución
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">{caseData.solution}</p>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Resultados <span className="gradient-text">Obtenidos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseData.results.map((result, index) => (
              <Card key={index} className="dark-card border-0 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-huaiqs-blue mb-2">
                    {result.value}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {result.metric}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Características Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseData.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Tecnologías Utilizadas</h2>
          <div className="flex flex-wrap gap-3">
            {caseData.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-huaiqs-blue/20 to-huaiqs-purple/20 border border-huaiqs-blue/30 rounded-full text-white text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <Card className="dark-card border-0 mb-16">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="text-6xl text-huaiqs-blue mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
              {caseData.testimonial.quote}
            </blockquote>
            <div>
              <div className="text-lg font-semibold text-white">
                {caseData.testimonial.author}
              </div>
              <div className="text-gray-400">
                {caseData.testimonial.position}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-huaiqs-blue/20 to-huaiqs-purple/20 backdrop-blur-sm border border-huaiqs-blue/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para Tu Transformación?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a conseguir resultados similares en tu negocio
            </p>
            <Button
              onClick={() => navigate('/#contacto')}
              size="lg"
              className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan px-8 py-4 text-lg font-semibold"
            >
              Solicitar Evaluación Gratuita
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasoExito;


import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Clientes Satisfechos",
      color: "text-huaiqs-blue"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Promedio ROI",
      color: "text-huaiqs-purple"
    },
    {
      icon: Award,
      number: "15+",
      label: "Proyectos Exitosos",
      color: "text-huaiqs-cyan"
    },
    {
      icon: Target,
      number: "90%",
      label: "Tiempo Ahorrado",
      color: "text-green-500"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="gradient-text">HUAIQS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos expertos en transformación digital, especializados en soluciones de 
            inteligencia artificial que revolucionan la forma en que las empresas operan.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Democratizar el acceso a la inteligencia artificial para empresas de todos los tamaños, 
                proporcionando soluciones personalizadas que automatizan procesos, optimizan operaciones 
                y maximizan resultados de manera eficiente y escalable.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la agencia líder en transformación digital con IA en el mercado hispanohablante, 
                reconocida por nuestra innovación, resultados excepcionales y compromiso con el 
                éxito de nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gray-50 rounded-full">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-huaiqs-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excelencia</h4>
              <p className="text-gray-600">
                Buscamos la perfección en cada proyecto, entregando soluciones de la más alta calidad.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-huaiqs-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Colaboración</h4>
              <p className="text-gray-600">
                Trabajamos de la mano con nuestros clientes como socios estratégicos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-huaiqs-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Innovación</h4>
              <p className="text-gray-600">
                Siempre a la vanguardia de las últimas tecnologías y tendencias en IA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

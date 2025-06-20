
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
      color: "text-green-400"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-huaiqs-dark to-huaiqs-darker">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre <span className="gradient-text">HUAIQS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformamos empresas con soluciones de inteligencia artificial que revolucionan 
            la forma en que operan y crecen.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in group bg-huaiqs-gray/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-huaiqs-gray/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple rounded-full group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-huaiqs-blue/10 to-huaiqs-blue/5 backdrop-blur-sm border border-huaiqs-blue/20 rounded-2xl p-8 hover:border-huaiqs-blue/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-huaiqs-blue/20 rounded-full">
                <Target className="h-6 w-6 text-huaiqs-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white">Nuestra Misión</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Democratizar el acceso a la inteligencia artificial, proporcionando soluciones 
              personalizadas que automatizan procesos y maximizan resultados de manera 
              eficiente y escalable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-huaiqs-purple/10 to-huaiqs-purple/5 backdrop-blur-sm border border-huaiqs-purple/20 rounded-2xl p-8 hover:border-huaiqs-purple/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-huaiqs-purple/20 rounded-full">
                <Award className="h-6 w-6 text-huaiqs-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white">Nuestra Visión</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Ser la agencia líder en transformación digital con IA, reconocida por 
              nuestra innovación, resultados excepcionales y compromiso con el éxito 
              de nuestros clientes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-huaiqs-gray/30 to-huaiqs-dark/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Nuestros <span className="gradient-text">Valores</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group bg-huaiqs-gray/20 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-huaiqs-gray/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-huaiqs-blue transition-colors">Excelencia</h4>
              <p className="text-gray-300 leading-relaxed">
                Buscamos la perfección en cada proyecto, entregando soluciones que superen expectativas.
              </p>
            </div>
            <div className="text-center group bg-huaiqs-gray/20 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-huaiqs-gray/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-huaiqs-purple to-huaiqs-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-huaiqs-purple transition-colors">Colaboración</h4>
              <p className="text-gray-300 leading-relaxed">
                Trabajamos como socios estratégicos, construyendo relaciones duraderas basadas en la confianza.
              </p>
            </div>
            <div className="text-center group bg-huaiqs-gray/20 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:bg-huaiqs-gray/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-huaiqs-cyan to-huaiqs-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-huaiqs-cyan transition-colors">Innovación</h4>
              <p className="text-gray-300 leading-relaxed">
                Siempre a la vanguardia, investigando constantemente nuevas formas de crear valor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

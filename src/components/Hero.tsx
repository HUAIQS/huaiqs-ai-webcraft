
import { ArrowRight, Bot, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Automatización 24/7",
    "ROI comprobado +300%",
    "Implementación rápida"
  ];

  return (
    <section id="home" className="min-h-screen hero-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-huaiqs-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-huaiqs-purple/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-huaiqs-cyan/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-huaiqs-blue/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-6 h-6 bg-huaiqs-purple/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-8 animate-fade-in">
                <Zap className="h-4 w-4 mr-2 text-huaiqs-cyan" />
                Agencia Líder en IA y Automatización
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-in">
                Revoluciona tu
                <span className="block gradient-text">
                  Negocio con IA
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Transformamos empresas con soluciones de inteligencia artificial que 
                <span className="text-huaiqs-cyan font-semibold"> automatizan procesos</span>, 
                <span className="text-huaiqs-blue font-semibold"> optimizan operaciones</span> y 
                <span className="text-huaiqs-purple font-semibold"> maximizan ingresos</span>.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button - Solo uno */}
              <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button
                  onClick={() => scrollToSection('contacto')}
                  size="lg"
                  className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {/* Main Visual Card */}
              <div className="relative bg-gradient-to-br from-huaiqs-gray/50 to-huaiqs-dark/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-huaiqs-blue/20 backdrop-blur-sm rounded-xl p-4 border border-huaiqs-blue/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="h-6 w-6 text-huaiqs-blue" />
                      <span className="text-sm text-gray-300">Automatización</span>
                    </div>
                    <div className="text-2xl font-bold text-white">90%</div>
                    <div className="text-xs text-gray-400">Tiempo Ahorrado</div>
                  </div>
                  <div className="bg-huaiqs-purple/20 backdrop-blur-sm rounded-xl p-4 border border-huaiqs-purple/30">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-6 w-6 text-huaiqs-purple" />
                      <span className="text-sm text-gray-300">ROI Promedio</span>
                    </div>
                    <div className="text-2xl font-bold text-white">300%</div>
                    <div className="text-xs text-gray-400">Incremento</div>
                  </div>
                </div>

                {/* Process Flow */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-8 h-8 bg-huaiqs-cyan rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <span className="text-gray-300">Análisis de Procesos</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-8 h-8 bg-huaiqs-blue rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <span className="text-gray-300">Implementación de IA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-8 h-8 bg-huaiqs-purple rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <span className="text-gray-300">Optimización Continua</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-huaiqs-cyan/20 backdrop-blur-sm rounded-full border border-huaiqs-cyan/30 flex items-center justify-center animate-pulse-slow">
                <Zap className="h-8 w-8 text-huaiqs-cyan" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-huaiqs-purple/20 backdrop-blur-sm rounded-full border border-huaiqs-purple/30 flex items-center justify-center animate-float">
                <Bot className="h-6 w-6 text-huaiqs-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 fill-huaiqs-dark" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

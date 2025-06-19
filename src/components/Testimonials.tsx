
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      company: "TechCorp Solutions",
      role: "CEO",
      content: "HUAIQS transformó completamente nuestros procesos de atención al cliente. El chatbot que desarrollaron ha reducido nuestro tiempo de respuesta en un 80% y ha mejorado significativamente la satisfacción de nuestros clientes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Ruiz",
      company: "E-commerce Plus",
      role: "Director de Marketing",
      content: "La optimización de campañas con IA que implementó HUAIQS aumentó nuestro ROI en un 250%. Su enfoque personalizado y atención al detalle son excepcionales. Definitivamente recomiendo sus servicios.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Martín",
      company: "InnovateLab",
      role: "Fundadora",
      content: "Gracias a las soluciones de automatización de HUAIQS, ahora podemos procesar 10 veces más datos en la mitad del tiempo. Su equipo es profesional, innovador y siempre está disponible para resolver cualquier duda.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que Dicen Nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo hemos ayudado a empresas como la tuya a transformar 
            sus operaciones y maximizar sus resultados con inteligencia artificial.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple rounded-full">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-huaiqs-blue font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Quieres Ser el Próximo Caso de Éxito?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a las empresas que ya están transformando sus operaciones con nuestras soluciones de IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Iniciar mi Proyecto
              </button>
              <button
                onClick={() => window.open('https://calendly.com/huaiqs', '_blank')}
                className="border-2 border-huaiqs-blue text-huaiqs-blue hover:bg-huaiqs-blue hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "hola@huaiqs.com",
      link: "mailto:hola@huaiqs.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+34 900 123 456",
      link: "tel:+34900123456"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Madrid, España",
      link: "#"
    }
  ];

  return (
    <section id="contacto" className="py-20 section-darker">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para <span className="gradient-text">Transformar</span> tu Negocio?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a automatizar 
            procesos y maximizar tus resultados con inteligencia artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contáctanos</h3>
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="dark-card border-huaiqs-blue/30 hover:border-huaiqs-blue/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple rounded-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <a 
                          href={item.link}
                          className="text-gray-300 hover:text-huaiqs-blue transition-colors"
                        >
                          {item.info}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* CTA Card */}
            <Card className="border-0 bg-gradient-to-r from-huaiqs-blue/20 to-huaiqs-purple/20 backdrop-blur-sm border border-huaiqs-blue/30 text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-3">Consulta Gratuita</h4>
                <p className="mb-4 text-gray-300">
                  30 minutos de análisis gratuito de tu negocio
                </p>
                <Button 
                  className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan w-full text-white"
                  onClick={() => window.open('https://calendly.com/huaiqs', '_blank')}
                >
                  Agendar Llamada
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="dark-card border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-300">Te contactaremos pronto para discutir tu proyecto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-huaiqs-gray border border-huaiqs-light-gray rounded-lg focus:ring-2 focus:ring-huaiqs-blue focus:border-transparent transition-colors text-white placeholder-gray-400"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-huaiqs-gray border border-huaiqs-light-gray rounded-lg focus:ring-2 focus:ring-huaiqs-blue focus:border-transparent transition-colors text-white placeholder-gray-400"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-huaiqs-gray border border-huaiqs-light-gray rounded-lg focus:ring-2 focus:ring-huaiqs-blue focus:border-transparent transition-colors text-white placeholder-gray-400"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-huaiqs-gray border border-huaiqs-light-gray rounded-lg focus:ring-2 focus:ring-huaiqs-blue focus:border-transparent transition-colors resize-vertical text-white placeholder-gray-400"
                        placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan text-white font-semibold py-4"
                    >
                      Enviar Mensaje
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

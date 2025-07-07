
import { useState } from 'react';
import { supabase } from '@/supabaseClient';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ExternalLink, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('DEBUG')
    const { name, email, company, message } = formData;

    const { error } = await supabase.from('contacto_web').insert([
      {
        nombre: name,
        email: email,
        empresa: company,
        mensaje: message
      }
    ]);

    if (error) {
      console.error('❌ Supabase insert error:', JSON.stringify(error, null, 2));
      alert("Hubo un problema al enviar tu solicitud. Intenta más tarde.");
      return;
    }

    console.log('✅ Formulario enviado correctamente');

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

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado",
      description: `${type} copiado al portapapeles`,
      duration: 2000,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "hhuaiqs@gmail.com",
      link: "mailto:hhuaiqs@gmail.com",
      description: "Respuesta en 24-48 horas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "634 78 28 58",
      link: "tel:+34634782858",
      description: "Lunes a Viernes 9:00-18:00",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Barcelona, España",
      link: "#",
      description: "Zona horaria CET/CEST",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contacto" className="py-20 section-darker">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inicia el <span className="gradient-text">Proceso de Selección</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Para trabajar juntos, primero debes contactar con nuestro equipo. Evaluaremos tu proyecto 
            y si es seleccionado, programaremos una llamada para iniciar la colaboración.
          </p>

          {/* Aviso */}
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertCircle className="h-6 w-6 text-amber-400" />
              <h3 className="text-lg font-semibold text-amber-400">Importante</h3>
            </div>
            <p className="text-gray-300 text-sm">
              No programamos llamadas directamente. Primero necesitamos evaluar tu proyecto 
              para asegurar que podemos ofrecerte la mejor solución de IA para tu negocio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contáctanos</h3>
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-huaiqs-gray border-huaiqs-light-gray overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* Content */}
                      <div className="relative p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`p-4 bg-gradient-to-r ${item.color} rounded-xl shadow-lg`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-lg">{item.title}</h4>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          </div>
                          
                          {/* Copy Button */}
                          {item.title !== "Ubicación" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(item.info, item.title)}
                              className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        
                        {/* Contact Link */}
                        <div className="ml-16">
                          <a 
                            href={item.link}
                            className="text-white font-medium text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-huaiqs-blue hover:to-huaiqs-purple transition-all duration-300 flex items-center group/link"
                          >
                            {item.info}
                            {item.title !== "Ubicación" && (
                              <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-huaiqs-gray border-huaiqs-light-gray shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">
                  Solicita Evaluación de tu Proyecto
                </CardTitle>
                <p className="text-center text-gray-400 text-sm">
                  Comparte los detalles de tu proyecto para comenzar el proceso de selección
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
                    <p className="text-gray-300 mb-4">
                      Hemos recibido tu solicitud. Nuestro equipo la evaluará y te contactaremos pronto.
                    </p>
                    <p className="text-sm text-amber-400">
                      Tiempo de respuesta estimado: 24-48 horas
                    </p>
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
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-huaiqs-gray border border-huaiqs-light-gray rounded-lg focus:ring-2 focus:ring-huaiqs-blue focus:border-transparent transition-colors text-white placeholder-gray-400"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Describe tu Proyecto *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-huaiqs-gray border border-huaiqs-light-gray rounded-lg focus:ring-2 focus:ring-huaiqs-blue focus:border-transparent transition-colors resize-vertical text-white placeholder-gray-400"
                        placeholder="Explica detalladamente tu proyecto, objetivos y presupuesto estimado."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple hover:from-huaiqs-purple hover:to-huaiqs-cyan text-white font-semibold py-4 rounded-lg flex justify-center items-center"
                    >
                      Enviar Solicitud para Evaluación
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Proceso visual */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Nuestro Proceso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["Solicitud", "Evaluación", "Colaboración"].map((etapa, i) => {
              const colores = ["from-huaiqs-blue to-blue-600", "from-huaiqs-purple to-purple-600", "from-huaiqs-cyan to-cyan-600"];
              const descripciones = [
                "Envías tu proyecto para evaluación",
                "Revisamos viabilidad y compatibilidad",
                "Iniciamos el trabajo conjunto"
              ];
              return (
                <div key={i} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colores[i]} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-xl font-bold">{i + 1}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-xl">{etapa}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{descripciones[i]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

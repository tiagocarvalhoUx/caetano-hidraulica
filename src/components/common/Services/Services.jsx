// components/Services/Services.jsx
import React from 'react';
import { CheckCircle, Droplets, Zap, Wrench, Hammer, Home } from 'lucide-react';

const Services = () => {
  const companyServices = [
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Alvenaria",
      description: "Construção e reforma de estruturas em alvenaria com qualidade garantida e acabamento perfeito",
      rating: "Ver mais >"
    },
    {
      icon: <Droplets className="w-12 h-12 text-green-600" />,
      title: "Hidráulica", 
      description: "Instalação e manutenção de sistemas hidráulicos residenciais e comerciais com garantia",
      rating: "Ver mais >"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: "Elétrica",
      description: "Serviços elétricos seguros e certificados para sua casa ou empresa com profissionais qualificados",
      rating: "Ver mais >"
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-600" />,
      title: "Pintura",
      description: "Serviços de pintura residencial e comercial com acabamento impecável e materiais de qualidade",
      rating: "Ver mais >"
    },
    {
      icon: <Hammer className="w-12 h-12 text-green-600" />,
      title: "Reparos",
      description: "Reparos diversos e manutenção preventiva para manter sua casa sempre em perfeito estado",
      rating: "Ver mais >"
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Visita Técnica",
      description: "Avaliação profissional gratuita com orçamento detalhado e sem compromisso para seu projeto",
      rating: "Ver mais >"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {companyServices.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
                  {service.rating}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
// components/Trust/Trust.jsx
import React from 'react';
import { CheckCircle, Clock, User, Shield } from 'lucide-react';

const Trust = () => {
  const trustFeatures = [
    {
      icon: <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />,
      title: "Identidade Checada"
    },
    {
      icon: <Clock className="w-16 h-16 text-green-600 mx-auto mb-4" />,
      title: "Histórico Verificado"
    },
    {
      icon: <User className="w-16 h-16 text-green-600 mx-auto mb-4" />,
      title: "Entrevistas Presenciais"
    },
    {
      icon: <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />,
      title: "Treinamento"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Investimos em segurança e confiança</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          A Doutor Resolve se preocupa com você e por isso todos nossos franqueados possuem Selo Reclame Aqui, são totalmente treinados e certificados.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              {feature.icon}
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
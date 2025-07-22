import React from 'react';
import { CheckCircle, Clock, User, Shield } from 'lucide-react';

const Trust = () => {
  const trustFeatures = [
    {
      icon: <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-blue-900 mx-auto mb-4" />,
      title: "Identidade Checada"
    },
    {
      icon: <Clock className="w-12 h-12 md:w-16 md:h-16 text-blue-900 mx-auto mb-4" />,
      title: "Histórico Verificado"
    },
    {
      icon: <User className="w-12 h-12 md:w-16 md:h-16 text-blue-900 text- mx-auto mb-4" />,
      title: "Entrevistas Presenciais"
    },
    {
      icon: <Shield className="w-12 h-12 md:w-16 md:h-16 text-blue-900 mx-auto mb-4" />,
      title: "Treinamento"
    }
  ];

  return (
    <section className="w-full">
      

      {/* Features Section */}
      <div className="w-full py-12 px-4 md:px-8 lg:px-16 xl:px-0 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                {feature.icon}
                <h3 className="text-gray-800 text-base md:text-lg font-medium">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
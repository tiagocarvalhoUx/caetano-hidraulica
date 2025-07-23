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
      icon: <User className="w-12 h-12 md:w-16 md:h-16 text-blue-900 mx-auto mb-4" />,
      title: "Profissionais Qualificados"
    },
    {
      icon: <Shield className="w-12 h-12 md:w-16 md:h-16 text-blue-900 mx-auto mb-4" />,
      title: "Confiança Garantida"
    }
  ];

  return (
    <section className="w-full">
      {/* Features Section */}
      <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-0 bg-gray-50">
        <div className="w-full max-w-[1170px] mx-auto flex flex-col justify-center items-center">
          {/* Header Section */}
          <div className="w-full px-4 md:px-6 lg:px-4 pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-10 lg:pb-12 flex flex-col justify-center items-center text-center">
            <div className="w-full pb-2 md:pb-3 flex flex-col justify-center items-center">
              <h2 className="text-center text-[#0c2c44] text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold font-['Inter'] leading-tight md:leading-10 mb-4 md:mb-6">
                Investimos em segurança e confiança
              </h2>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <p className="text-center max-w-4xl mx-auto">
                <span className="text-[#090033] text-sm md:text-base lg:text-base font-bold font-['Inter'] leading-relaxed">
                  Caetano Hidráulica Caça Vazamento
                </span>
                <span className="text-[#090033] text-sm md:text-base lg:text-base font-normal font-['Inter'] leading-relaxed">
                  {" "}se preocupa com quem vai até o seu imóvel prestar serviços. Nossos profissionais são todos qualificados e selecionados.
                </span>
              </p>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 xl:gap-8">
              {trustFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center bg-white p-6 md:p-8 lg:p-6 xl:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-gray-800 text-base md:text-lg lg:text-base xl:text-lg font-extralight font-['Inter'] text-center leading-tight">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
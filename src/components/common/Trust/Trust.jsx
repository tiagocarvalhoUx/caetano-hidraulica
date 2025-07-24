import React, { useEffect, useState } from 'react';
import Component1 from "../../../assets/images/Banner/Component1.png";
import Component2 from "../../../assets/images/Banner/Component2.png";
import Component3 from "../../../assets/images/Banner/Component3.png";
import Component4 from "../../../assets/images/Banner/Component4.png";

const Trust = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const trustItems = [
    {
      image: Component1,
      title: "Identidade Checada",
      delay: 0,
      variant: "21",
      dimensions: "w-[41.16px] h-12",
      imageDimensions: "w-[41.14px] h-[41.14px]",
      imagePosition: "left-[0.01px] top-[3.43px]"
    },
    {
      image: Component2,
      title: "Histórico Verificado",
      delay: 200,
      variant: "22",
      dimensions: "w-[41.16px] h-12",
      imageDimensions: "w-[41.14px] h-12",
      imagePosition: "left-[0.01px] top-0"
    },
    {
      image: Component3,
      title: "Problemas Resolvidos",
      delay: 400,
      variant: "23",
      dimensions: "w-12 h-12",
      imageDimensions: "w-[46.29px] h-[41.14px]",
      imagePosition: "left-[1.71px] top-[3.43px]"
    },
    {
      image: Component4,
      title: "Profissionais Qualificados",
      delay: 600,
      variant: "24",
      dimensions: "w-12 h-12",
      imageDimensions: "w-[46.29px] h-[41.14px]",
      imagePosition: "left-[1.71px] top-[3.43px]"
    }
  ];

  return (
    <section className="w-full">

      <div className="desktop-container w-full max-w-[1920px] mx-auto py-[41px] border-t border-b border-[#e7e7e7] flex flex-col justify-start items-center px-4 md:px-0">
        <div className="w-full max-w-[1170px] flex flex-col justify-start items-start gap-[0px]">
          <div className={`self-stretch min-h-px px-[15px] pt-[19px] pb-2.5 flex flex-col justify-start items-start gap-2.5 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'} 
            transition-all duration-[800ms] ease-out`}>
            <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-center text-[#0c2c44] text-2xl md:text-3xl lg:text-4xl font-bold font-['Inter'] leading-8 md:leading-9 lg:leading-10">
                Investimos em segurança e confiança
              </div>
            </div>
              <br />
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-center">
                <span className="text-[#090033] text-base font-semibold font-['Inter'] leading-tight">
                  Caetano Hidráulica Caça Vazamento
                </span>
              
                <span className="text-[#090033] text-base font-semibold font-['Inter'] leading-tight">
                  {" "}se preocupa com quem vai até o seu imóvel prestar serviços. Nossos profissionais são todos qualificados e selecionados.
                </span>
              </div>
            </div>
          </div>
            <br />
          <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-0">
            {trustItems.map((item, index) => (
              <div 
                key={index}
                className={`flex-1 min-h-px px-[15px] pt-5 pb-2.5 flex flex-col justify-start items-start 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'} 
                  transition-all duration-[800ms] ease-out hover:-translate-y-[5px] hover:duration-300`}
                style={{
                  transitionDelay: isVisible ? `${item.delay}ms` : '0ms'
                }}
              >
                <div className="self-stretch flex flex-col justify-start items-center gap-[25.39px]">
                  <div className="flex justify-start items-start">
                    <div data-variant={item.variant} className={`${item.dimensions} relative`}>
                      <div 
                        className={`${item.imageDimensions} ${item.imagePosition} absolute bg-cover bg-no-repeat bg-center`}
                        style={{
                          backgroundImage: `url(${item.image})`
                        }}
                      ></div>
                      {item.variant === "23" && (
                        <div className="w-12 h-[37.72px] left-0 top-[6.86px] absolute"></div>
                      )}
                    </div>
                  </div>
                  <div className="text-center justify-center text-[#0c2c44] text-lg md:text-xl lg:text-2xl font-bold font-['Inter'] leading-relaxed">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
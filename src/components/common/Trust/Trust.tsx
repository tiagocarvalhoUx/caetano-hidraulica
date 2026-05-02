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
      dimensions: "w-[20.58px] h-6",
      imageDimensions: "w-[20.57px] h-[20.57px]",
      imagePosition: "left-[0.005px] top-[1.715px]"
    },
    {
      image: Component2,
      title: "Histórico Verificado",
      delay: 200,
      variant: "22",
      dimensions: "w-[20.58px] h-6",
      imageDimensions: "w-[20.57px] h-6",
      imagePosition: "left-[0.005px] top-0"
    },
    {
      image: Component3,
      title: "Problemas Resolvidos",
      delay: 400,
      variant: "23",
      dimensions: "w-6 h-6",
      imageDimensions: "w-[23.145px] h-[20.57px]",
      imagePosition: "left-[0.855px] top-[1.715px]"
    },
    {
      image: Component4,
      title: "Profissionais Qualificados",
      delay: 600,
      variant: "24",
      dimensions: "w-6 h-6",
      imageDimensions: "w-[23.145px] h-[20.57px]",
      imagePosition: "left-[0.855px] top-[1.715px]"
    }
  ];

  return (
    <section className="w-full">

      <div className="desktop-container w-full max-w-[1920px] mx-auto py-[41px] border-t border-b border-[#e7e7e7] flex flex-col justify-start items-center px-4 md:px-0">
        <div className="w-full max-w-[1170px] flex flex-col justify-start items-center lg:items-start gap-[0px]">
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
          <div className="self-stretch grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 lg:gap-0 px-2 sm:px-4 lg:px-0">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className={`w-full lg:flex-1 min-h-px px-2 sm:px-3 lg:px-[15px] py-4 sm:py-5 lg:pt-5 lg:pb-2.5 flex flex-col justify-start items-center lg:items-start
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}
                  transition-all duration-[800ms] ease-out hover:-translate-y-[5px] hover:duration-300`}
                style={{
                  transitionDelay: isVisible ? `${item.delay}ms` : '0ms'
                }}
              >
                <div className="self-stretch flex flex-col justify-start items-center gap-4 sm:gap-5 lg:gap-[25.39px]">
                  <div className="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0e3e61]/5 lg:bg-transparent lg:w-auto lg:h-auto lg:rounded-none">
                    <div data-variant={item.variant} className={`${item.dimensions} relative`}>
                      <div
                        className={`${item.imageDimensions} ${item.imagePosition} absolute bg-cover bg-no-repeat bg-center`}
                        style={{
                          backgroundImage: `url(${item.image})`
                        }}
                      ></div>
                      {item.variant === "23" && (
                        <div className="w-6 h-[18.86px] left-0 top-[3.43px] absolute"></div>
                      )}
                    </div>
                  </div>
                  <div className="text-center justify-center text-[#0c2c44] text-sm sm:text-base md:text-xl lg:text-2xl font-bold font-['Inter'] leading-tight sm:leading-snug lg:leading-relaxed px-1">
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

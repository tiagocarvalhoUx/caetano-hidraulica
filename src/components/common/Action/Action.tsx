// components/Action/Action.jsx
import React from 'react';
import Number1 from '../../../assets/images/Banner/numero-1.png';
import Number2 from '../../../assets/images/Banner/numero-2.png';
import Number3 from '../../../assets/images/Banner/numero-3.png';
import Logo2 from '../../../assets/images/Banner/logo-homens.png';
import Happy from '../../../assets/images/Banner/Felicidade Garantida.png';

const Action = () => {
  return (
    <section className="mt-[0.07rem]">
      <div className="w-full min-h-[280px] md:min-h-[350px] xl:min-h-[433px] py-[14px] bg-gradient-to-br from-[#5db0ce] to-[#0e3e61] flex flex-col justify-start items-center px-3">
        
        {/* Container principal */}
        <div className="w-full max-w-[224px] sm:max-w-[378px] md:max-w-[504px] lg:max-w-[672px] xl:max-w-[819px] relative">
          
          {/* Título */}
          <div className="w-full pb-[6px] flex flex-col justify-start items-center mb-[22px] md:mb-[34px]">
            <div className="text-center text-white text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold font-['Inter'] leading-tight md:leading-8 px-3">
              É fácil como contar 1-2-3
            </div>
          </div>
          
          {/* Layout triangular no mobile (2+1), horizontal no desktop */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 md:gap-3 mb-[22px] md:mb-[34px]">

            {/* Passo 1 */}
            <div className="px-2 md:px-3 flex flex-col justify-start items-center gap-2 md:gap-[13px]">
              <div className="flex justify-center items-start">
                <img
                  className="w-7 h-7 md:w-[27.5px] md:h-[27.5px] relative"
                  src={Number1}
                  alt="Passo 1"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-center">
                <div className="text-center text-white text-xs sm:text-sm md:text-base font-normal font-['Inter'] leading-snug md:leading-relaxed">
                  Obtenha o preço e o tempo para o serviço desejado.
                </div>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="px-2 md:px-3 flex flex-col justify-start items-center gap-2 md:gap-[13px]">
              <div className="flex justify-center items-start">
                <img
                  className="w-7 h-7 md:w-[27.5px] md:h-[27.5px] relative"
                  src={Number2}
                  alt="Passo 2"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-center">
                <div className="text-center text-white text-xs sm:text-sm md:text-base font-normal font-['Inter'] leading-snug md:leading-relaxed">
                  Agende o melhor dia e horário para realização do serviço.
                </div>
              </div>
            </div>

            {/* Passo 3 - centralizado embaixo no mobile (triangular) */}
            <div className="col-span-2 md:col-span-1 max-w-[260px] mx-auto md:max-w-none px-2 md:px-3 flex flex-col justify-start items-center gap-2 md:gap-[13px]">
              <div className="flex justify-center items-start">
                <img
                  className="w-7 h-7 md:w-[27.5px] md:h-[27.5px] relative"
                  src={Number3}
                  alt="Passo 3"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-center">
                <div className="text-center text-white text-xs sm:text-sm md:text-base font-normal font-['Inter'] leading-snug md:leading-relaxed">
                  Tenha a garantia de 3 meses para os serviços realizados por nossa equipe.
                </div>
              </div>
            </div>
          </div>
          
          {/* Seção de imagens */}
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-[17px] lg:gap-0">
            
            {/* Imagem esquerda */}
            <div className="w-full lg:w-[273px] px-3 flex flex-col justify-start items-center lg:items-start">
              <div className="w-full flex justify-center items-start">
                <img 
                  className="w-full max-w-[105px] sm:max-w-[112px] lg:max-w-[126px] h-auto lg:h-[80.5px] relative object-cover rounded-lg lg:rounded-none" 
                  src={Logo2} 
                  alt="Serviço 1"
                />
              </div>
            </div>
            
            {/* Imagem direita */}
            <div className="w-full lg:w-[546px] px-3 lg:pt-[42px] flex flex-col justify-start items-center lg:items-start">
              <div className="w-full flex justify-center items-start">
                <img 
                  className="w-full max-w-[122.5px] sm:max-w-[140px] lg:max-w-[154px] h-auto lg:h-[40.5px] relative rounded-[5.5px] object-cover" 
                  src={Happy} 
                  alt="Serviço 2"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Action;
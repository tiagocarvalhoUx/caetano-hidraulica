// components/Action/Action.jsx
import React from 'react';
import Number1 from '../../../assets/images/Banner/numero-1.png';
import Number2 from '../../../assets/images/Banner/numero-2.png';
import Number3 from '../../../assets/images/Banner/numero-3.png';
import Logo2 from '../../../assets/images/Banner/logo-homens.png';
import Happy from '../../../assets/images/Banner/Felicidade Garantida.png';

const Action = () => {
  return (
    <section className="mt-[0.1rem]">
      <div className="w-full min-h-[400px] md:min-h-[500px] xl:min-h-[619px] py-5 bg-gradient-to-br from-[#5db0ce] to-[#0e3e61] flex flex-col justify-start items-center px-4">
        
        {/* Container principal */}
        <div className="w-full max-w-[320px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] relative">
          
          {/* Título */}
          <div className="w-full pb-2 flex flex-col justify-start items-center mb-8 md:mb-12">
            <div className="text-center text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold font-['Inter'] leading-tight md:leading-10 px-4">
              É fácil como contar 1-2-3
            </div>
          </div>
          
          {/* Três colunas de passos */}
          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6 md:gap-4 mb-8 md:mb-12">
            
            {/* Passo 1 */}
            <div className="flex-1 px-4 flex flex-col justify-start items-center gap-4 md:gap-[19px]">
              <div className="flex justify-center items-start">
                <img 
                  className="w-16 h-16 md:w-[78px] md:h-[78px] relative" 
                  src={Number1} 
                  alt="Passo 1"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-center">
                <div className="text-center text-white text-base md:text-lg font-normal font-['Inter'] leading-relaxed px-2">
                  Obtenha o preço e o tempo para o serviço<br className="hidden md:block" />
                  <span className="md:hidden"> </span>desejado.
                </div>
              </div>
            </div>
            
            {/* Passo 2 */}
            <div className="flex-1 px-4 flex flex-col justify-start items-center gap-4 md:gap-[19px]">
              <div className="flex justify-center items-start">
                <img 
                  className="w-16 h-16 md:w-[78px] md:h-[78px] relative" 
                  src={Number2} 
                  alt="Passo 2"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-center">
                <div className="text-center text-white text-base md:text-lg font-normal font-['Inter'] leading-relaxed px-2">
                  Agende o melhor dia e horário para realização<br className="hidden md:block" />
                  <span className="md:hidden"> </span>do serviço.
                </div>
              </div>
            </div>
            
            {/* Passo 3 */}
            <div className="flex-1 px-4 flex flex-col justify-start items-center gap-4 md:gap-[19px]">
              <div className="flex justify-center items-start">
                <img 
                  className="w-16 h-16 md:w-[78px] md:h-[78px] relative" 
                  src={Number3} 
                  alt="Passo 3"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-center">
                <div className="text-center text-white text-base md:text-lg font-normal font-['Inter'] leading-relaxed px-2">
                  Tenha a garantia de 3 meses para os serviços<br className="hidden md:block" />
                  <span className="md:hidden"> </span>realizados por nossa equipe.
                </div>
              </div>
            </div>
          </div>
          
          {/* Seção de imagens */}
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-0">
            
            {/* Imagem esquerda */}
            <div className="w-full lg:w-[390px] px-4 flex flex-col justify-start items-center lg:items-start">
              <div className="w-full flex justify-center items-start">
                <img 
                  className="w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[360px] h-auto lg:h-[230px] relative object-cover rounded-lg lg:rounded-none" 
                  src={Logo2} 
                  alt="Serviço 1"
                />
              </div>
            </div>
            
            {/* Imagem direita */}
            <div className="w-full lg:w-[780px] px-4 lg:pt-[60px] flex flex-col justify-start items-center lg:items-start">
              <div className="w-full flex justify-center items-start">
                <img 
                  className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[440px] h-auto lg:h-[115px] relative rounded-[15px] object-cover" 
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
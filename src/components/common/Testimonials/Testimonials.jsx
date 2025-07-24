// components/Testimonials/Testimonials.jsx
import React from 'react';
import { User } from 'lucide-react';
import Avatar from "../../../assets/images/Banner/avatar.png";

const Testimonials = () => {
  return (
    <section>
      <div className="w-full py-8 md:py-12 xl:py-16 2xl:py-20 bg-gradient-to-b from-[#0e3e61] to-[#5db0ce] flex flex-col justify-start items-center">
        <div className="w-full max-w-sm px-4 pt-4 md:max-w-2xl md:px-6 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl xl:px-8 2xl:px-12 xl:pt-6 2xl:pt-8 flex flex-col justify-start items-center gap-8 md:gap-10 xl:gap-12 2xl:gap-16">
          
          {/* Title */}
          <div className="w-full pb-2 xl:pb-1 2xl:pb-2 flex flex-col justify-start items-center">
            <h2 className="text-center text-white text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold font-['Lato'] leading-7 md:leading-9 xl:leading-10 2xl:leading-12">
              O que nossos clientes estão dizendo
            </h2>
          </div>
          
          {/* Testimonials Grid */}
          <div className="w-full pb-4 xl:pb-6 2xl:pb-8 flex flex-col gap-6 md:gap-8 xl:flex-row xl:justify-center xl:items-start xl:gap-8 2xl:gap-12">
            
            {/* Testimonial 1 */}
            <div className="flex-1 px-0 xl:px-4 2xl:px-6 flex flex-col justify-start items-center gap-4 xl:gap-6 2xl:gap-8">
              <div className="w-full flex flex-col justify-start items-center">
                <p className="text-center text-white text-sm md:text-base xl:text-lg 2xl:text-xl font-normal font-['Lato'] leading-tight md:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed">
                  Fiquei surpresa com o funcionamento de tudo, fiz a contratação pelo site, agendando a data desejada, tudo ocorreu como planejado, no horário combinado o profissional estava em minha loja para execução do serviço, e o fez como esperado, apenas após o serviço o pagamento foi realizado em meu cartão, parabéns a todos.
                </p>
              </div>
              
              <div className="w-full flex flex-col justify-center items-center gap-4 xl:gap-4 2xl:gap-6">
                <div className="flex-shrink-0">
                  <img 
                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full object-cover" 
                    src={Avatar} 
                    alt="Renata Figueiroa"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center text-white text-sm md:text-base xl:text-lg 2xl:text-xl font-medium font-['Lato'] leading-tight">
                    Renata Figueiroa, Centro
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="flex-1 px-0 xl:px-4 2xl:px-6 flex flex-col justify-start items-center gap-4 xl:gap-6 2xl:gap-8">
              <div className="w-full flex flex-col justify-start items-center">
                <p className="text-center text-white text-sm md:text-base xl:text-lg 2xl:text-xl font-normal font-['Lato'] leading-tight md:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed">
                  Sou empresária e trabalho fora o dia todo, fui indicado por um amigo a testar o serviço pela sua praticidade, realmente a Caetano Hidráulica Caça Vazamento fez um ótimo trabalho com esse novo site, é muito simples verificar o preço e o tempo para os serviços, mais fácil ainda realizar a contratação e agendamento do serviço.
                </p>
              </div>
              
              <div className="w-full flex flex-col justify-center items-center gap-4 xl:gap-4 2xl:gap-6">
                <div className="flex-shrink-0">
                  <img 
                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full object-cover" 
                    src={Avatar} 
                    alt="Mariana Novaes"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center text-white text-sm md:text-base xl:text-lg 2xl:text-xl font-medium font-['Lato'] leading-tight">
                    Mariana Novaes, Bairro Concórdia
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="flex-1 px-0 xl:px-4 2xl:px-6 flex flex-col justify-start items-center gap-4 xl:gap-6 2xl:gap-8">
              <div className="w-full flex flex-col justify-start items-center">
                <p className="text-center text-white text-sm md:text-base xl:text-lg 2xl:text-xl font-normal font-['Lato'] leading-tight md:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed">
                  Já somos acostumados a solicitar os serviços da Doutor Resolve, mas agora com esse novo site, tudo ficou muito mais prático e fácil, o último serviço que solicitamos, me surpreendeu pela facilidade, fiz a contratação pelo site, no dia e horário combinado a Caetano apareceu para resolver nosso problema, obrigado.
                </p>
              </div>
              
              <div className="w-full flex flex-col justify-center items-center gap-4 xl:gap-4 2xl:gap-6">
                <div className="flex-shrink-0">
                  <img 
                    className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full object-cover" 
                    src={Avatar} 
                    alt="João Marques"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center text-white text-sm md:text-base xl:text-lg 2xl:text-xl font-medium font-['Lato'] leading-tight">
                    João Marques, Bairro Vila Carvalho
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import Torneira from '../../../assets/images/Banner/torneira.png';
import Chaves from '../../../assets/images/Banner/chaves-cruzadas.png';
import House from '../../../assets/images/Banner/casinha.png';

const Services = () => {
  return (
    <div id= "nossos-servicos" className="w-full max-w-[1920px] mx-auto py-8 md:py-10 xl:py-[41px] bg-gradient-to-l from-[#5db0ce] to-white border-t border-b border-[#e7e7e7] flex flex-col justify-start items-center">
      
      {/* Container principal responsivo */}
      <div className="w-full max-w-[1170px] px-4 sm:px-6 lg:px-8 xl:px-0 relative">
        
        {/* Título */}
        <div className="w-full pb-6 md:pb-8 xl:pb-[0.59px] xl:pt-[19px] flex flex-col justify-start items-center">
          <div className="text-center text-[#0e3e61] text-2xl md:text-3xl xl:text-4xl font-bold font-['Lato'] leading-tight xl:leading-10">
            Nossos serviços
          </div>
        </div>
        
        {/* Grid de serviços - Mobile: 1 coluna, Tablet: 2 colunas, Desktop: 3 colunas */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-0">
          
          {/* Serviço 1: Hidráulica */}
          <div className="flex flex-col justify-start items-start min-h-[148px]">
            <div className="flex flex-col sm:flex-row xl:flex-row justify-start sm:justify-center xl:justify-center items-start sm:items-center xl:items-center gap-4 xl:gap-[15px] xl:pl-[15.02px] xl:pr-[0.02px]">
              
              {/* Imagem */}
              <div className="w-full sm:w-[100px] xl:w-[99.98px] flex justify-center sm:justify-start xl:justify-start">
                <img 
                  className="w-[100px] h-[100px] xl:w-[99.98px] xl:h-[99.98px] max-w-[390px] rounded-[10px]" 
                  src={Torneira} 
                  alt="Hidráulica" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full sm:w-auto xl:w-[259.98px] px-0 sm:px-4 xl:px-[15px] pt-0 sm:pt-4 xl:pt-[18px] pb-0 sm:pb-2.5 xl:pb-2.5 flex flex-col justify-start items-start gap-3 xl:gap-[9.40px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="py-px flex justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-xl xl:text-2xl font-bold font-['Inter'] leading-relaxed">
                      Hidráulica
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-left text-[#090033] text-sm font-light font-['Inter'] leading-tight">Instalações de itens práticos em<br/>banheiros: torneiras, vazamentos de pias, registros, válvulas, entre outros.</div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.60px] pb-0.5 flex flex-col justify-start items-start">
                  <div className="h-[17px] flex justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-[#0e3e61] text-sm font-bold font-['Inter'] leading-tight">Ver todos </div>
                    <div className="flex justify-start items-start ml-1">
                      <div className="w-3 h-3.5 relative">
                        <div className="w-[11.50px] h-[12.17px] absolute top-[1.41px] bg-[#0e3e61] transform rotate-45 border-r-2 border-t-2 border-[#0e3e61]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* Serviço 2: Visita Técnica */}
          <div className="flex flex-col justify-start items-start min-h-[148px]">
            <div className="flex flex-col sm:flex-row xl:flex-row justify-start sm:justify-center xl:justify-center items-start sm:items-center xl:items-center gap-4 xl:gap-[15px] xl:pl-[15.02px] xl:pr-[0.02px]">
              
              {/* Imagem */}
              <div className="w-full sm:w-[100px] xl:w-[99.98px] flex justify-center sm:justify-start xl:justify-start">
                <img 
                  className="w-[100px] h-[100px] xl:w-[99.98px] xl:h-[99.98px] max-w-[390px] rounded-[10px]" 
                  src={Chaves}
                  alt="Visita Técnica" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full sm:w-auto xl:w-[259.98px] px-0 sm:px-4 xl:px-[15px] pt-0 sm:pt-4 xl:pt-[18px] pb-0 sm:pb-2.5 xl:pb-2.5 flex flex-col justify-start items-start gap-3 xl:gap-[9.40px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="py-px flex justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-xl xl:text-2xl font-bold font-['Lato'] leading-relaxed">
                      Visita Técnica
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-left text-[#090033] text-sm font-light font-['Inter'] leading-tight">
                    Solicite a visita de um técnico
                    <br className="hidden xl:block"/>
                    especializado em seu imóvel para fazer
                    <br className="hidden xl:block"/>
                    o levantamento do serviço.
                  </div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.60px] pb-0.5 flex flex-col justify-start items-start">
                  <div className="h-[17px] flex justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-[#0e3e61] text-sm font-bold font-['Inter'] leading-tight">Ver todos </div>
                    <div className="flex justify-start items-start ml-1">
                      <div className="w-3 h-3.5 relative">
                        <div className="w-[11.50px] h-[12.17px] absolute top-[1.41px] bg-[#0e3e61] transform rotate-45 border-r-2 border-t-2 border-[#0e3e61]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* Serviço 3: Reparos */}
          <div className="flex flex-col justify-start items-start min-h-[148px] md:col-span-2 xl:col-span-1">
            <div className="flex flex-col sm:flex-row xl:flex-row justify-start sm:justify-center xl:justify-center items-start sm:items-center xl:items-center gap-4 xl:gap-[15px] xl:pl-[15.02px] xl:pr-[0.02px]">
              
              {/* Imagem */}
              <div className="w-full sm:w-[100px] xl:w-[99.98px] flex justify-center sm:justify-start xl:justify-start">
                <img 
                  className="w-[100px] h-[100px] xl:w-[99.98px] xl:h-[99.98px] max-w-[390px] rounded-[10px]" 
                  src={House}
                  alt="Reparos" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full sm:w-auto xl:w-[259.98px] px-0 sm:px-4 xl:px-[15px] pt-0 sm:pt-4 xl:pt-[18px] pb-0 sm:pb-2.5 xl:pb-2.5 flex flex-col justify-start items-start gap-3 xl:gap-[9.40px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="py-px flex justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-xl xl:text-2xl font-bold font-['Inter'] leading-relaxed">
                      Reparos
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-left text-[#090033] text-sm font-light font-['Inter'] leading-tight">
                    Instalações de itens práticos em
                    <br className="hidden xl:block"/>
                    de pias, registros, válvulas, entre outros.
                    
                  </div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.60px] pb-0.5 flex flex-col justify-start items-start">
                  <div className="h-[17px] flex justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-[#0e3e61] text-sm font-bold font-['Inter'] leading-tight">Ver todos </div>
                    <div className="flex justify-start items-start ml-1">
                      <div className="w-3 h-3.5 relative">
                        <div className="w-[11.50px] h-[12.17px] absolute top-[1.41px] bg-[#0e3e61] transform rotate-45 border-r-2 border-t-2 border-[#0e3e61]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Services;
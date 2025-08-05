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
          <div className="flex flex-col justify-start items-start min-h-[104px]">
            <div className="flex flex-col sm:flex-row xl:flex-row justify-start sm:justify-center xl:justify-center items-start sm:items-center xl:items-center gap-3 xl:gap-[11px] xl:pl-[11px] xl:pr-[0.01px]">
              
              {/* Imagem */}
              <div className="w-full sm:w-[70px] xl:w-[70px] flex justify-center sm:justify-start xl:justify-start">
                <img 
                  className="w-[70px] h-[70px] xl:w-[70px] xl:h-[70px] max-w-[273px] rounded-[7px]" 
                  src={Torneira} 
                  alt="Hidráulica" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full sm:w-auto xl:w-[182px] px-0 sm:px-3 xl:px-[11px] pt-0 sm:pt-3 xl:pt-[13px] pb-0 sm:pb-2 xl:pb-2 flex flex-col justify-start items-start gap-2 xl:gap-[7px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="py-px flex justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-lg xl:text-xl font-bold font-['Inter'] leading-relaxed">
                      Hidráulica
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-left text-[#090033] text-xs font-light font-['Inter'] leading-tight">
                    Hidráulica, Residencial, Comercial e Predial.</div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.1px] pb-0.5 flex flex-col justify-start items-start">
                  <div className="h-[12px] flex justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-[#0e3e61] text-xs font-bold font-['Inter'] leading-tight">Ver todos </div>
                    <div className="flex justify-start items-start ml-1">
                      <div className="w-2 h-2.5 relative">
                        <div className="w-[8px] h-[8.5px] absolute top-[1px] bg-[#0e3e61] transform rotate-45 border-r-2 border-t-2 border-[#0e3e61]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* Serviço 2: Visita Técnica */}
          <div className="flex flex-col justify-start items-start min-h-[104px]">
            <div className="flex flex-col sm:flex-row xl:flex-row justify-start sm:justify-center xl:justify-center items-start sm:items-center xl:items-center gap-3 xl:gap-[11px] xl:pl-[11px] xl:pr-[0.01px]">
              
              {/* Imagem */}
              <div className="w-full sm:w-[70px] xl:w-[70px] flex justify-center sm:justify-start xl:justify-start">
                <img 
                  className="w-[70px] h-[70px] xl:w-[70px] xl:h-[70px] max-w-[273px] rounded-[7px]" 
                  src={Chaves}
                  alt="Visita Técnica" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full sm:w-auto xl:w-[182px] px-0 sm:px-3 xl:px-[11px] pt-0 sm:pt-3 xl:pt-[13px] pb-0 sm:pb-2 xl:pb-2 flex flex-col justify-start items-start gap-2 xl:gap-[7px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="py-px flex justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-lg xl:text-xl font-bold font-['Lato'] leading-relaxed">
                      Visita Técnica
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-left text-[#090033] text-xs font-light font-['Inter'] leading-tight">
                    Solicite a visita de um técnico <br />
                    <br className="hidden xl:block"/>
                    especializado em seu imóvel para fazer o <br />
                    <br className="hidden xl:block"/>
                    levantamento do serviço.
                  </div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.1px] pb-0.5 flex flex-col justify-start items-start">
                  <div className="h-[12px] flex justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-[#0e3e61] text-xs font-bold font-['Inter'] leading-tight">Ver todos </div>
                    <div className="flex justify-start items-start ml-1">
                      <div className="w-2 h-2.5 relative">
                        <div className="w-[8px] h-[8.5px] absolute top-[1px] bg-[#0e3e61] transform rotate-45 border-r-2 border-t-2 border-[#0e3e61]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* Serviço 3: Reparos */}
          <div className="flex flex-col justify-start items-start min-h-[104px] md:col-span-2 xl:col-span-1">
            <div className="flex flex-col sm:flex-row xl:flex-row justify-start sm:justify-center xl:justify-center items-start sm:items-center xl:items-center gap-3 xl:gap-[11px] xl:pl-[11px] xl:pr-[0.01px]">
              
              {/* Imagem */}
              <div className="w-full sm:w-[70px] xl:w-[70px] flex justify-center sm:justify-start xl:justify-start">
                <img 
                  className="w-[70px] h-[70px] xl:w-[70px] xl:h-[70px] max-w-[273px] rounded-[7px]" 
                  src={House}
                  alt="Reparos" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full sm:w-auto xl:w-[182px] px-0 sm:px-3 xl:px-[11px] pt-0 sm:pt-3 xl:pt-[13px] pb-0 sm:pb-2 xl:pb-2 flex flex-col justify-start items-start gap-2 xl:gap-[7px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="py-px flex justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-lg xl:text-xl font-bold font-['Inter'] leading-relaxed">
                      Reparos
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-left text-[#090033] text-xs font-light font-['Inter'] leading-tight">
                    Instalações de itens práticos em <br />  
                    <br className="hidden xl:block"/>
                     pias, registros, válvulas, entre outros.
                    
                  </div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.1px] pb-0.5 flex flex-col justify-start items-start">
                  <div className="h-[12px] flex justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-[#0e3e61] text-xs font-bold font-['Inter'] leading-tight">Ver todos </div>
                    <div className="flex justify-start items-start ml-1">
                      <div className="w-2 h-2.5 relative">
                        <div className="w-[8px] h-[8.5px] absolute top-[1px] bg-[#0e3e61] transform rotate-45 border-r-2 border-t-2 border-[#0e3e61]"></div>
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
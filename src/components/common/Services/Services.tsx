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
        
        {/* Grid triangular no mobile (2+1), 2 cols no tablet, 3 cols no desktop */}
        <div className="w-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:gap-8 xl:gap-0 justify-items-center xl:justify-items-stretch">
          
          {/* Serviço 1: Hidráulica */}
          <div className="w-full max-w-[340px] xl:max-w-none flex flex-col justify-start items-center xl:items-start min-h-[104px]">
            <div className="w-full flex flex-col xl:flex-row justify-start xl:justify-center items-center xl:items-center gap-3 xl:gap-[11px] xl:pl-[11px] xl:pr-[0.01px]">
              
              {/* Imagem */}
              <div className="w-full xl:w-[70px] flex justify-center xl:justify-start">
                <img 
                  className="w-[70px] h-[70px] xl:w-[70px] xl:h-[70px] max-w-[273px] rounded-[7px]" 
                  src={Torneira} 
                  alt="Hidráulica" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full xl:w-[182px] px-0 xl:px-[11px] pt-0 xl:pt-[13px] pb-0 xl:pb-2 flex flex-col justify-start items-center xl:items-start gap-2 xl:gap-[7px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-center xl:items-start">
                  <div className="py-px flex justify-center xl:justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-lg xl:text-xl font-bold font-['Inter'] leading-relaxed">
                      Hidráulica
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-center xl:items-start">
                  <div className="self-stretch text-center xl:text-left text-[#090033] text-xs font-light font-['Inter'] leading-tight">
                    Hidráulica, Residencial, Comercial e Predial.</div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.1px] pb-0.5 flex flex-col justify-start items-center xl:items-start">
                  <div className="h-[12px] flex justify-center xl:justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
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
          <div className="w-full max-w-[340px] xl:max-w-none flex flex-col justify-start items-center xl:items-start min-h-[104px]">
            <div className="w-full flex flex-col xl:flex-row justify-start xl:justify-center items-center xl:items-center gap-3 xl:gap-[11px] xl:pl-[11px] xl:pr-[0.01px]">
              
              {/* Imagem */}
              <div className="w-full xl:w-[70px] flex justify-center xl:justify-start">
                <img 
                  className="w-[70px] h-[70px] xl:w-[70px] xl:h-[70px] max-w-[273px] rounded-[7px]" 
                  src={Chaves}
                  alt="Visita Técnica" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full xl:w-[182px] px-0 xl:px-[11px] pt-0 xl:pt-[13px] pb-0 xl:pb-2 flex flex-col justify-start items-center xl:items-start gap-2 xl:gap-[7px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-center xl:items-start">
                  <div className="py-px flex justify-center xl:justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-lg xl:text-xl font-bold font-['Lato'] leading-relaxed">
                      Visita Técnica
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-center xl:items-start">
                  <div className="self-stretch text-center xl:text-left text-[#090033] text-xs font-light font-['Inter'] leading-tight">
                    Solicite a visita de um técnico <br />
                    <br className="hidden xl:block"/>
                    especializado em seu imóvel para fazer o <br />
                    <br className="hidden xl:block"/>
                    levantamento do serviço.
                  </div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.1px] pb-0.5 flex flex-col justify-start items-center xl:items-start">
                  <div className="h-[12px] flex justify-center xl:justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
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
          
          {/* Serviço 3: Reparos - centralizado embaixo (triangular) no mobile/tablet */}
          <div className="w-full max-w-[340px] xl:max-w-none flex flex-col justify-start items-center xl:items-start min-h-[104px] col-span-2 xl:col-span-1 mx-auto">
            <div className="w-full flex flex-col xl:flex-row justify-start xl:justify-center items-center xl:items-center gap-3 xl:gap-[11px] xl:pl-[11px] xl:pr-[0.01px]">
              
              {/* Imagem */}
              <div className="w-full xl:w-[70px] flex justify-center xl:justify-start">
                <img 
                  className="w-[70px] h-[70px] xl:w-[70px] xl:h-[70px] max-w-[273px] rounded-[7px]" 
                  src={House}
                  alt="Reparos" 
                />
              </div>
              
              {/* Conteúdo */}
              <div className="flex-1 w-full xl:w-[182px] px-0 xl:px-[11px] pt-0 xl:pt-[13px] pb-0 xl:pb-2 flex flex-col justify-start items-center xl:items-start gap-2 xl:gap-[7px]">
                
                {/* Título do serviço */}
                <div className="self-stretch flex flex-col justify-start items-center xl:items-start">
                  <div className="py-px flex justify-center xl:justify-start items-start">
                    <div className="text-center text-[#0e3e61] text-lg xl:text-xl font-bold font-['Inter'] leading-relaxed">
                      Reparos
                    </div>
                  </div>
                </div>
                
                {/* Descrição */}
                <div className="self-stretch flex flex-col justify-start items-center xl:items-start">
                  <div className="self-stretch text-center xl:text-left text-[#090033] text-xs font-light font-['Inter'] leading-tight">
                    Instalações de itens práticos em <br />  
                    <br className="hidden xl:block"/>
                     pias, registros, válvulas, entre outros.
                    
                  </div>
                </div>
                
                {/* Link "Ver todos" */}
                <div className="self-stretch pt-[1.1px] pb-0.5 flex flex-col justify-start items-center xl:items-start">
                  <div className="h-[12px] flex justify-center xl:justify-start items-center cursor-pointer hover:opacity-80 transition-opacity">
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

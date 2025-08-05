import React from 'react';
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Seguro from '../../../assets/images/Banner/Site seguro.png';
import Cartoes from '../../../assets/images/Banner/cartoes.png';
import Insta from '../../../assets/images/Banner/instagram.png';
import Youtu from '../../../assets/images/Banner/youtube.png';

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full py-6 md:py-10 bg-[#0e3e61] flex flex-col justify-start items-center">
          <div className="w-full max-w-[1170px] px-4 md:px-0 flex flex-col justify-start items-start">
            <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-0">
              {/* Left Column - Navigation and Description */}
              <div className="w-full lg:w-[780px] lg:px-[15px] flex flex-col justify-start items-start gap-4 lg:gap-2.5">
                {/* Navigation Links */}
                <div className="w-full flex flex-wrap justify-start items-start gap-2 lg:gap-[12.70px]">
                  <div className="flex justify-start items-start">
                    <div className="text-white text-sm font-bold font-['Inter'] leading-tight">Home</div>
                  </div>
                  <div className="text-white text-sm font-light font-['Lato'] leading-tight hidden md:block">⋅</div>
                  <div className="flex justify-start items-start">
                    <div className="text-white text-sm font-bold font-['Inter'] leading-tight">Sobre Caetano Hidráulica</div>
                  </div>
                  <div className="text-white text-sm font-light font-['Lato'] leading-tight hidden md:block">⋅</div>
                  <div className="flex justify-start items-start">
                    <div className="text-white text-sm font-bold font-['Inter'] leading-tight">Serviços</div>
                  </div>
                  <div className="text-white text-sm font-light font-['Lato'] leading-tight hidden md:block">⋅</div>
                  <div className="flex justify-start items-start">
                    <div className="text-white text-sm font-bold font-['Inter'] leading-tight">Termos de Uso</div>
                  </div>
                  <div className="text-white text-sm font-light font-['Lato'] leading-tight hidden md:block">⋅</div>
                  <div className="flex justify-start items-start">
                    <div className="text-white text-sm font-bold font-['Inter'] leading-tight">Webmail</div>
                  </div>
                </div>

                {/* Description Text */}
                <div className="w-full flex flex-col justify-start items-start">
                  <div className="w-full text-justify lg:text-left">
                    <span className="text-white text-sm font-light font-['Inter'] leading-tight">Todos os profissionais de </span>
                    <span className="text-white text-sm font-bold font-['Inter'] leading-tight">Caetano Hidráulica Caça Vazamento</span>
                    <span className="text-white text-sm font-light font-['Inter'] leading-tight"> passam por um rigoroso processo de seleção, com entrevista pessoal, treinamento, aplicação de prova técnica, possuem referências e antecedentes checados, além de anos de experiência na área, tudo isso para fazer um ótimo trabalho em seu imóvel. Fique tranquilo, chame a </span>
                    <span className="text-white text-sm font-bold font-['Inter'] leading-tight">Caetano Hidráulica Caça Vazamento</span>
                    <span className="text-white text-sm font-light font-['Inter'] leading-tight">.</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="w-full pb-5 flex flex-col justify-start items-start">
                  <div className="px-3.5 py-2 bg-[#5db0ce] rounded outline outline-2 outline-offset-[-2px] outline-[#00bbff] flex justify-center items-center cursor-pointer hover:bg-[#4a9bb8] transition-colors">
                    <div className="text-center text-white text-sm font-normal font-['Inter'] leading-tight">Pronto para reparos hidráulicos?</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Social Media */}
              <div className="w-full lg:w-[390px] lg:pl-4 lg:pr-[15px] lg:border-l border-[#ffde00] flex flex-col justify-start items-start gap-4 lg:gap-[5px]">
                <div className="text-white text-sm font-light font-['Lato'] leading-tight">Curta nossa página</div>
                
                <div className="w-full flex flex-col justify-start items-start gap-4 lg:gap-2.5">
                  {/* Instagram Section */}
                  <div className="w-full pt-[5px] pb-1 flex flex-col justify-start items-start gap-3 lg:gap-1.5">
                    <a href="https://www.instagram.com/caetanocacavazamento/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <div >
                        <img src={Insta} alt="Instagram"  />
                      </div>
                      <div className="text-white text-lg font-bold font-['Inter'] leading-tight">/ Caetano Hidráulica</div>
                    </a>
                    
                    {/* YouTube Section */}
                    <div className="text-white text-sm font-light font-['Lato'] leading-tight">Conheça nosso canal</div>
                    <a href="https://www.youtube.com/@caetanohidraulica" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <div >
                        <img src={Youtu} alt="Youtube" />
                      </div>
                      <div className="text-white text-lg font-bold font-['Inter'] leading-tight">/ Caetano Hidráulica</div>
                    </a>
                    
                    {/* Location Section */}
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <div className="text-white text-sm font-light font-['Inter'] leading-tight">Onde estamos</div>
                      <div className="flex items-center gap-3">
                        <a href="https://www.instagram.com/caetanocacavazamento/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <Instagram className="w-6 h-6 text-white" />
                        </a>
                        <a href="mailto:Leandroxexa18@gmail.com" className="hover:opacity-80 transition-opacity">
                          <Mail className="w-6 h-6 text-white" />
                        </a>
                        <a href="https://wa.me/55189816085127" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <Phone className="w-6 h-6 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="w-full px-4 lg:px-[15px] pt-6 lg:pt-[3px] pb-2 lg:pb-0.5 flex flex-col justify-start items-start">
              <div className="w-full flex flex-wrap gap-2 lg:gap-4">
                <div className="flex items-center gap-2">
                  <div className="text-white text-xs font-bold font-['Inter'] leading-[17px]">Manutenção</div>
                  <div className="text-white text-xs font-light font-['Inter'] leading-[17px] hidden lg:block">|</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-white text-xs font-bold font-['Inter'] leading-[17px]">Encanador</div>
                  <div className="text-white text-xs font-light font-['Inter'] leading-[17px] hidden lg:block">|</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-white text-xs font-bold font-['Inter'] leading-[17px]">Bombeiro Hidráulico</div>
                  <div className="text-white text-xs font-light font-['Inter'] leading-[17px] hidden lg:block">|</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-white text-xs font-bold font-['Inter'] leading-[17px]">Manutenção Predial</div>
                  <div className="text-white text-xs font-light font-['Inter'] leading-[17px] hidden lg:block">|</div>
                </div>
                <div className="text-white text-xs font-bold font-['Inter'] leading-[17px]">Manutenção Residencial</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full pt-6 lg:pt-[25px] pb-5 bg-[#13486d] border-t-[5px] border-[#00bbff] flex flex-col justify-start items-center">
          <div className="w-full max-w-[1170px] px-4 lg:px-0 flex flex-col justify-start items-start">
            <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
              <div className="flex-1">
                <span className="text-white text-xs font-light font-['Lato'] leading-[17px]">Copyright © </span>
                <span className="text-white text-xs font-bold font-['Lato'] leading-[17px]">Caetano Hidráulica Caça Vazamento</span>
                <span className="text-white text-xs font-light font-['Lato'] leading-[17px]"> 2025. All right reserved | </span>
                <span className="text-white text-xs font-semibold font-['Lato'] leading-[17px]">Elite Web Designer | (18) 98114-2927</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
  <img 
    src={Seguro}  
    className="w-[70px] h-7 sm:w-[93px] sm:h-9 rounded bg-[url('/src/assets/images/Banner/Site seguro.png')]"
    alt="Site seguro"
  />
  <img 
    src={Cartoes} 
    className="w-[200px] h-[30px] sm:w-[281px] sm:h-[42px] rounded"
    alt="Cartões aceitos"
  />
</div>
              </div>
            </div>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
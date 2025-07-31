import React from "react";
import Torneira2 from "../../../assets/images/Banner/Torneira-2.png";
import Alicate from "../../../assets/images/Banner/Alicate.png";
import Check1 from "../../../assets/images/Banner/check-escuro.svg";

export default function ServiceSection() {
  const whatsappNumber = "+5518981608512";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    
    
    <div className="w-full min-h-screen pt-[34px] pb-7 bg-gradient-to-r from-[#0e3e61] to-[#5db0ce] flex flex-col justify-start items-center overflow-hidden">
      <div className="w-full max-w-[1170px] px-4 md:px-[11px] flex flex-col justify-start items-center gap-[21px]">
        <div className="w-full pl-[3px] pr-[0.4px] pb-[14px] flex justify-start items-start">
          <div className="w-full flex flex-col justify-start items-center gap-[21px]">
            <div className="self-stretch pb-[2.5px] flex flex-col justify-start items-center gap-[9px]">
              <div className="text-center justify-center text-white text-xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-8 px-3">
                Precisa de um técnico para detectar o seu vazamento?
              </div>
              <div className="text-center justify-center text-white text-base md:text-xl font-normal font-['Inter'] leading-normal px-3">
                Solicite uma visita Caetano Hidráulica Caça Vazamento!
              </div>
            </div>
            <div className="self-stretch pl-[3px] pr-[0.4px] pb-[14px] flex justify-start items-start">
              <div className="flex-1 min-h-px flex flex-col md:flex-row gap-3 md:gap-0">
                {/* Card Elétrica */}
                <div className="flex-1 min-h-px px-[8px] py-3 bg-white rounded shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-[#dddddd] flex flex-col justify-start items-center gap-[7px] mx-[6px] md:mx-0">
                  <div
                    data-hover="false"
                    data-variant="6"
                    className="w-[105px] md:w-[134px] flex justify-center items-start"
                  >
                    <img
                      className="w-[105px] h-[105px] md:w-[133px] md:h-[133px] max-w-full relative rounded-[7px]"
                      src={Torneira2}
                      alt="Orçamento Elétrica"
                    />
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-[7px]">
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-[#090033] text-xs font-bold font-['Inter'] uppercase leading-none">
                        Orçamento
                        <br />
                        <br />
                        Caça vazamento
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="self-stretch pt-[1px] pb-[1px] flex justify-start items-center gap-[2px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="16" className="w-[8px] h-[9px] relative">
                            <div
                              
                              className="w-[8px] h-[8px] left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-escuro.svg')] bg-cover bg-no-repeat bg-center"
                              
                            ></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#090033] text-[10px] font-normal font-['Inter'] leading-[12px]">
                          Orçamento descontado no serviço
                        </div>
                      </div>
                      <div className="self-stretch pt-[1px] pb-[1px] flex justify-start items-center gap-[2px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="16" className="w-[8px] h-[9px] relative">
                            <div className="w-[8px] h-[8px] left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-escuro.svg')] bg-cover bg-no-repeat bg-center"></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#090033] text-[10px] font-normal font-['Inter'] leading-[12px]">
                          Agende no melhor dia e horário
                        </div>
                      </div>
                      <div className="self-stretch pt-[1px] pb-[1px] flex justify-start items-center gap-[2px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="16" className="w-[8px] h-[9px] relative">
                            <div className="w-[8px] h-[8px] left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-escuro.svg')] bg-cover bg-no-repeat bg-center"></div>
                            <div><img src={Check1} alt="" className="w-[8px] h-[8px]" /></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#090033] text-[10px] font-normal font-['Inter'] leading-[12px]">
                          Profissionalismo e segurança
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover="false"
                    data-variant="3"
                    className="self-stretch px-[12px] py-[8px] bg-[#0e3e61] hover:bg-[#0e3e61]/90 rounded-md outline outline-1 outline-offset-[-1px] outline-[#cccccc] flex flex-col justify-start items-center transition-colors duration-200 no-underline"
                  >
                    <div className="self-stretch text-center justify-center text-white text-base font-normal font-['Inter'] leading-normal">
                      Solicitar Orçamento
                    </div>
                  </a>
                </div>

                {/* Card Hidráulica */}
                <div className="flex-1 min-h-px px-[8px] py-3 bg-white rounded shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-[#dddddd] flex flex-col justify-start items-center gap-[7px] mx-[6px] md:mx-0">
                  <div
                    data-hover="false"
                    data-variant="7"
                    className="w-[105px] md:w-full flex justify-center items-start"
                  >
                    <img
                      className="w-[105px] h-[105px] md:w-[133px] md:h-[133px] max-w-full relative rounded-[7px]"
                      src={Alicate}
                      alt="Orçamento Hidráulica"
                    />
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-[7px]">
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-[#2ab6c5] text-xs font-bold font-['Inter'] uppercase leading-none">
                        Orçamento
                        <br />
                        <br />
                        Hidráulica
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="self-stretch pt-[1px] pb-[1px] flex justify-start items-center gap-[2px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="17" className="w-[8px] h-[9px] relative">
                            <div className="w-[8px] h-[8px] left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-claro.svg')] bg-cover bg-no-repeat bg-center"></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#2ab6c5] text-[10px] font-normal font-['Inter'] leading-[12px]">
                          Orçamento descontado no serviço
                        </div>
                      </div>
                      <div className="self-stretch pt-[1px] pb-[1px] flex justify-start items-center gap-[2px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="17" className="w-[8px] h-[9px] relative">
                            <div className="w-[8px] h-[8px] left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-claro.svg')] bg-cover bg-no-repeat bg-center"></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#2ab6c5] text-[10px] font-normal font-['Inter'] leading-[12px]">
                          Agende no melhor dia e horário
                        </div>
                      </div>
                      <div className="self-stretch pt-[1px] pb-[1px] flex justify-start items-center gap-[2px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="17" className="w-[8px] h-[9px] relative">
                            <div className="w-[8px] h-[8px] left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-claro.svg')] bg-cover bg-no-repeat bg-center"></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#2ab6c5] text-[10px] font-normal font-['Inter'] leading-[12px]">
                          Profissionalismo e segurança
                        </div>
                      </div>
                    </div>
                  </div>
                  

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover="false"
                    data-variant="4"
                    className="self-stretch px-[12px] py-[8px] bg-[#2ab6c5] hover:bg-[#2ab6c5]/90 rounded-md outline outline-1 outline-offset-[-1px] outline-[#cccccc] flex flex-col justify-start items-center transition-colors duration-200 no-underline"
                  >
                    <div className="self-stretch text-center justify-center text-white text-base font-normal font-['Inter'] leading-normal">
                      Solicitar Orçamento
                    </div>
                  </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
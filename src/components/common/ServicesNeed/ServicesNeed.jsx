import React from "react";
import Torneira2 from "../../../assets/images/Banner/Torneira-2.png";
import Alicate from "../../../assets/images/Banner/Alicate.png";
import Check1 from "../../../assets/images/Banner/check-escuro.svg";

export default function ServiceSection() {
  return (
    
    
    <div className="w-full min-h-screen pt-[49px] pb-10 bg-gradient-to-r from-[#0e3e61] to-[#5db0ce] flex flex-col justify-start items-center overflow-hidden">
      <div className="w-full max-w-[1170px] px-4 md:px-[15px] flex flex-col justify-start items-center gap-[29.99px]">
        <div className="w-full pl-[4.59px] pr-[0.59px] pb-5 flex justify-start items-start">
          <div className="w-full flex flex-col justify-start items-center gap-[30px]">
            <div className="self-stretch pb-[3.60px] flex flex-col justify-start items-center gap-[12.59px]">
              <div className="text-center justify-center text-white text-2xl md:text-4xl font-bold font-['Inter'] leading-tight md:leading-10 px-4">
                Precisa de um técnico para detectar o serviço necessário?
              </div>
              <div className="text-center justify-center text-white text-lg md:text-2xl font-normal font-['Inter'] leading-normal px-4">
                Solicite uma visita Caetano Hidráulica Caça Vazamento!
              </div>
            </div>
            <div className="self-stretch pl-[4.59px] pr-[0.59px] pb-5 flex justify-start items-start">
              <div className="flex-1 min-h-px flex flex-col md:flex-row gap-4 md:gap-0">
                {/* Card Elétrica */}
                <div className="flex-1 min-h-px px-[11px] py-4 bg-white rounded shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-[#dddddd] flex flex-col justify-start items-center gap-2.5 mx-2 md:mx-0">
                  <div
                    data-hover="false"
                    data-variant="6"
                    className="w-[150px] md:w-[191px] flex justify-center items-start"
                  >
                    <img
                      className="w-[150px] h-[150px] md:w-[190px] md:h-[190px] max-w-full relative rounded-[10px]"
                      src={Torneira2}
                      alt="Orçamento Elétrica"
                    />
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-[#090033] text-sm font-bold font-['Inter'] uppercase leading-none">
                        Orçamento
                        <br />
                        <br />
                        Caça vazamento
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="self-stretch pt-0.5 pb-px flex justify-start items-center gap-[2.70px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="16" className="w-3 h-3.5 relative">
                            <div
                              
                              className="w-3 h-3 left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-escuro.svg')] bg-cover bg-no-repeat bg-center"
                              
                            ></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#090033] text-xs font-normal font-['Inter'] leading-[17px]">
                          Orçamento descontado no serviço
                        </div>
                      </div>
                      <div className="self-stretch pt-0.5 pb-px flex justify-start items-center gap-[2.70px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="16" className="w-3 h-3.5 relative">
                            <div className="w-3 h-3 left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-escuro.svg')] bg-cover bg-no-repeat bg-center"></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#090033] text-xs font-normal font-['Inter'] leading-[17px]">
                          Agende no melhor dia e horário
                        </div>
                      </div>
                      <div className="self-stretch pt-0.5 pb-px flex justify-start items-center gap-[2.70px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="16" className="w-3 h-3.5 relative">
                            <div className="w-3 h-3 left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-escuro.svg')] bg-cover bg-no-repeat bg-center"></div>
                            <div><img src={Check1} alt="" /></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#090033] text-xs font-normal font-['Inter'] leading-[17px]">
                          Profissionalismo e segurança
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    data-hover="false"
                    data-variant="3"
                    className="self-stretch px-[17px] py-[11px] bg-[#0e3e61] hover:bg-[#0e3e61]/90 rounded-md outline outline-1 outline-offset-[-1px] outline-[#cccccc] flex flex-col justify-start items-center transition-colors duration-200"
                  >
                    <div className="self-stretch text-center justify-center text-white text-lg font-normal font-['Inter'] leading-normal">
                      Solicitar Orçamento
                    </div>
                  </button>
                </div>

                {/* Card Hidráulica */}
                <div className="flex-1 min-h-px px-[11px] py-4 bg-white rounded shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-[#dddddd] flex flex-col justify-start items-center gap-2.5 mx-2 md:mx-0">
                  <div
                    data-hover="false"
                    data-variant="7"
                    className="w-[150px] md:w-full flex justify-center items-start"
                  >
                    <img
                      className="w-[150px] h-[150px] md:w-[190px] md:h-[190px] max-w-full relative rounded-[10px]"
                      src={Alicate}
                      alt="Orçamento Hidráulica"
                    />
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-[#2ab6c5] text-sm font-bold font-['Inter'] uppercase leading-none">
                        Orçamento
                        <br />
                        <br />
                        Hidráulica
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="self-stretch pt-0.5 pb-px flex justify-start items-center gap-[2.70px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="17" className="w-3 h-3.5 relative">
                            <div className="w-3 h-3 left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-claro.svg')] bg-cover bg-no-repeat bg-center"></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#2ab6c5] text-xs font-normal font-['Inter'] leading-[17px]">
                          Orçamento descontado no serviço
                        </div>
                      </div>
                      <div className="self-stretch pt-0.5 pb-px flex justify-start items-center gap-[2.70px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="17" className="w-3 h-3.5 relative">
                            <div className="w-3 h-3 left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-claro.svg')] bg-cover bg-no-repeat bg-center"></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#2ab6c5] text-xs font-normal font-['Inter'] leading-[17px]">
                          Agende no melhor dia e horário
                        </div>
                      </div>
                      <div className="self-stretch pt-0.5 pb-px flex justify-start items-center gap-[2.70px]">
                        <div className="flex justify-start items-start">
                          <div data-variant="17" className="w-3 h-3.5 relative">
                            <div className="w-3 h-3 left-0 top-[1px] absolute bg-[url('/src/assets/images/Banner/check-claro.svg')] bg-cover bg-no-repeat bg-center"></div>
                          </div>
                        </div>
                        <div className="justify-center text-[#2ab6c5] text-xs font-normal font-['Inter'] leading-[17px]">
                          Profissionalismo e segurança
                        </div>
                      </div>
                    </div>
                  </div>
                  

                  <button
                    data-hover="false"
                    data-variant="4"
                    className="self-stretch px-[17px] py-[11px] bg-[#2ab6c5] hover:bg-[#2ab6c5]/90 rounded-md outline outline-1 outline-offset-[-1px] outline-[#cccccc] flex flex-col justify-start items-center transition-colors duration-200"
                  >
                    <div className="self-stretch text-center justify-center text-white text-lg font-normal font-['Inter'] leading-normal">
                      Solicitar Orçamento
                    </div>
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

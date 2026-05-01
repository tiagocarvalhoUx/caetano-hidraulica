// components/Action/Action.jsx
import React from 'react';
import Geofone from '../../../assets/images/Banner/Geofone.png';
import Pedtec from '../../../assets/images/Banner/Pedtec.png';
import Kit from '../../../assets/images/Banner/Kit estanque.png';
import Camera from '../../../assets/images/Banner/Camera termica.png';
import Happy from '../../../assets/images/Banner/Felicidade Garantida.png';

const Differences = () => {
  return (
    <section id="diferenciais" className="mt-0">
      <div className="w-full min-h-screen py-8 bg-gradient-to-br from-[#5db0ce] to-[#0e3e61] flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
        <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1600px] relative">
          
          {/* Título */}
          <div className="w-full mb-6 2xl:mb-8 flex flex-col justify-start items-center">
            <div className="text-center text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-['Inter'] leading-8 sm:leading-9 lg:leading-10 xl:leading-[3.5rem] 2xl:leading-[4rem]">
              Diferenciais
            </div>
          </div>
          
          {/* Subtítulo */}
          <div className="w-full mb-8 lg:mb-12 2xl:mb-16 text-center text-white text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal font-['Inter'] leading-normal">
            Veja os equipamentos para cada tipo de vazamento
          </div>
          
          {/* Grid de Cards - 2 Colunas Mobile First */}
          <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-8 xl:gap-10 2xl:gap-12 justify-items-center">
            
            {/* Card 1 - Geofone Eletrônico */}
            <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[210px] lg:max-w-[224px] xl:max-w-[196px] 2xl:max-w-[245px] flex flex-col justify-start items-center">
              <div className="w-full h-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[294px] 2xl:min-h-[336px] px-3 py-4 lg:px-3 lg:py-4 2xl:px-4 2xl:py-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-[#e5e5e5] flex flex-col justify-start items-center transition-all duration-300 hover:scale-105 hover:translate-y-[-4px] cursor-pointer group">
                <img
                  className="w-[100px] h-[120px] sm:w-[130px] sm:h-[155px] md:w-[140px] md:h-[168px] lg:w-[154px] lg:h-[182px] xl:w-[140px] xl:h-[168px] 2xl:w-[182px] 2xl:h-[210px] object-contain mb-3 sm:mb-4 2xl:mb-4 group-hover:scale-110 transition-transform duration-300"
                  src={Geofone}
                  alt="Geofone Eletrônico"
                />
                <div className="flex flex-col justify-start items-center text-center px-2">
                  <div className="w-full mb-2 2xl:mb-3 text-center text-[#0e3e61] text-[11px] sm:text-xs md:text-sm lg:text-sm 2xl:text-base font-bold font-['Inter'] uppercase leading-tight tracking-wide">
                    GEOFONE
                    <br />
                    ELETRÔNICO
                  </div>
                  <div className="w-full text-center text-[#666666] text-[10px] sm:text-[11px] md:text-[10px] lg:text-[10px] 2xl:text-xs font-normal font-['Inter'] leading-[12px] sm:leading-[14px] 2xl:leading-[15px]">
                    Localização de vazamentos ocultos em tubulações pressurizadas.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - PDTEC-512 */}
            <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[210px] lg:max-w-[224px] xl:max-w-[196px] 2xl:max-w-[245px] flex flex-col justify-start items-center">
              <div className="w-full h-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[294px] 2xl:min-h-[336px] px-3 py-4 lg:px-3 lg:py-4 2xl:px-4 2xl:py-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-[#e5e5e5] flex flex-col justify-start items-center transition-all duration-300 hover:scale-105 hover:translate-y-[-4px] cursor-pointer group">
                <img
                  className="w-[100px] h-[120px] sm:w-[130px] sm:h-[155px] md:w-[140px] md:h-[168px] lg:w-[154px] lg:h-[182px] xl:w-[140px] xl:h-[168px] 2xl:w-[182px] 2xl:h-[210px] object-contain mb-3 sm:mb-4 2xl:mb-4 group-hover:scale-110 transition-transform duration-300"
                  src={Pedtec}
                  alt="PDTEC-512"
                />
                <div className="flex flex-col justify-start items-center text-center px-2">
                  <div className="w-full mb-2 2xl:mb-3 text-center text-[#0e3e61] text-[11px] sm:text-xs md:text-sm lg:text-sm 2xl:text-base font-bold font-['Inter'] uppercase leading-tight tracking-wide">
                    FOTEC-512
                  </div>
                  <div className="w-full text-center text-[#666666] text-[10px] sm:text-[11px] md:text-[10px] lg:text-[10px] 2xl:text-xs font-normal font-['Inter'] leading-[12px] sm:leading-[14px] 2xl:leading-[15px]">
                    Localiza redes hidráulicas sem acesso à planta, ramais e by-pass.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Kit Estanque */}
            <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[210px] lg:max-w-[224px] xl:max-w-[196px] 2xl:max-w-[245px] flex flex-col justify-start items-center">
              <div className="w-full h-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[294px] 2xl:min-h-[336px] px-3 py-4 lg:px-3 lg:py-4 2xl:px-4 2xl:py-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-[#e5e5e5] flex flex-col justify-start items-center transition-all duration-300 hover:scale-105 hover:translate-y-[-4px] cursor-pointer group">
                <img
                  className="w-[100px] h-[120px] sm:w-[130px] sm:h-[155px] md:w-[140px] md:h-[168px] lg:w-[154px] lg:h-[182px] xl:w-[140px] xl:h-[168px] 2xl:w-[182px] 2xl:h-[210px] object-contain mb-3 sm:mb-4 2xl:mb-4 group-hover:scale-110 transition-transform duration-300"
                  src={Kit}
                  alt="Kit Estanque"
                />
                <div className="flex flex-col justify-start items-center text-center px-2">
                  <div className="w-full mb-2 2xl:mb-3 text-center text-[#0e3e61] text-[11px] sm:text-xs md:text-sm lg:text-sm 2xl:text-base font-bold font-['Inter'] uppercase leading-tight tracking-wide">
                    KIT
                    <br />
                    ESTANQUE
                  </div>
                  <div className="w-full text-center text-[#666666] text-[10px] sm:text-[11px] md:text-[10px] lg:text-[10px] 2xl:text-xs font-normal font-['Inter'] leading-[12px] sm:leading-[14px] 2xl:leading-[15px]">
                    Para redes não pressurizadas como água pluvial e esgoto.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Câmera Termográfica */}
            <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[210px] lg:max-w-[224px] xl:max-w-[196px] 2xl:max-w-[245px] flex flex-col justify-start items-center">
              <div className="w-full h-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[294px] 2xl:min-h-[336px] px-3 py-4 lg:px-3 lg:py-4 2xl:px-4 2xl:py-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-[#e5e5e5] flex flex-col justify-start items-center transition-all duration-300 hover:scale-105 hover:translate-y-[-4px] cursor-pointer group">
                <img
                  className="w-[100px] h-[115px] sm:w-[130px] sm:h-[150px] md:w-[140px] md:h-[160px] lg:w-[154px] lg:h-[175px] xl:w-[140px] xl:h-[161px] 2xl:w-[182px] 2xl:h-[203px] object-contain mb-3 sm:mb-4 2xl:mb-4 group-hover:scale-110 transition-transform duration-300"
                  src={Camera}
                  alt="Câmera Termográfica"
                />
                <div className="flex flex-col justify-start items-center text-center px-2">
                  <div className="w-full mb-2 2xl:mb-3 text-center text-[#0e3e61] text-[11px] sm:text-xs md:text-sm lg:text-sm 2xl:text-base font-bold font-['Inter'] uppercase leading-tight tracking-wide">
                    CÂMERA
                    <br />
                    TERMOGRÁFICA
                  </div>
                  <div className="w-full text-center text-[#666666] text-[10px] sm:text-[11px] md:text-[10px] lg:text-[10px] 2xl:text-xs font-normal font-['Inter'] leading-[12px] sm:leading-[14px] 2xl:leading-[15px]">
                    Visualiza pontos quentes e frios indicando falhas e vazamentos.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Differences;
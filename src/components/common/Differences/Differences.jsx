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
          
          {/* Grid de Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 justify-items-center">
            
            {/* Card 1 - Geofone Eletrônico */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[280px] 2xl:max-w-[350px] flex flex-col justify-start items-center">
              <div className="w-full h-auto min-h-[380px] sm:min-h-[400px] lg:min-h-[420px] 2xl:min-h-[480px] px-3 py-4 lg:px-4 lg:py-5 2xl:px-6 2xl:py-6 bg-white rounded shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] border border-[#dddddd] flex flex-col justify-start items-center">
                <img 
                  className="w-[180px] h-[220px] sm:w-[200px] sm:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[200px] xl:h-[240px] 2xl:w-[260px] 2xl:h-[300px] object-cover mb-4 2xl:mb-6" 
                  src={Geofone} 
                  alt="Geofone Eletrônico"
                />
                <div className="flex flex-col justify-start items-center text-center px-2">
                  <div className="w-full mb-3 2xl:mb-4 text-center text-[#9f9f9f] text-sm lg:text-base 2xl:text-lg font-medium font-['Inter'] uppercase leading-[18px] 2xl:leading-[22px]">
                    GEOFONE ELETRÔNICO
                  </div>
                  <div className="w-full text-center text-[#9f9f9f] text-[11px] sm:text-xs lg:text-sm 2xl:text-base font-normal font-['Inter'] leading-[18px] 2xl:leading-[22px]">
                    Utilizado na localização de vazamentos ocultos e subterrâneos em tubulações de água pressurizadas.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - PDTEC-512 */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[280px] 2xl:max-w-[350px] flex flex-col justify-start items-center">
              <div className="w-full h-auto min-h-[380px] sm:min-h-[400px] lg:min-h-[420px] 2xl:min-h-[480px] px-3 py-4 lg:px-4 lg:py-5 2xl:px-6 2xl:py-6 bg-white rounded shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] border border-[#dddddd] flex flex-col justify-start items-center">
                <img 
                  className="w-[180px] h-[220px] sm:w-[200px] sm:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[200px] xl:h-[240px] 2xl:w-[260px] 2xl:h-[300px] object-cover mb-4 2xl:mb-6" 
                  src={Pedtec} 
                  alt="PDTEC-512"
                />
                <div className="flex flex-col justify-start items-center text-center px-2">
                  <div className="w-full mb-3 2xl:mb-4 text-center text-[#9f9f9f] text-sm lg:text-base 2xl:text-lg font-medium font-['Inter'] uppercase leading-[18px] 2xl:leading-[22px]">
                    PDTEC-512
                  </div>
                  <div className="w-full text-center text-[#9f9f9f] text-[11px] sm:text-xs lg:text-sm 2xl:text-base font-normal font-['Inter'] leading-[18px] 2xl:leading-[22px]">
                    É um equipamento eletrônico projetado para auxiliar na localização de redes hidráulicas em situações em que não há acesso à planta hidráulica, assim como ramais e by-pass.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Kit Estanque */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[280px] 2xl:max-w-[350px] flex flex-col justify-start items-center">
              <div className="w-full h-auto min-h-[380px] sm:min-h-[400px] lg:min-h-[420px] 2xl:min-h-[480px] px-3 py-4 lg:px-4 lg:py-5 2xl:px-6 2xl:py-6 bg-white rounded shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] border border-[#dddddd] flex flex-col justify-start items-center">
                <img 
                  className="w-[180px] h-[220px] sm:w-[200px] sm:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[200px] xl:h-[240px] 2xl:w-[260px] 2xl:h-[300px] object-cover mb-4 2xl:mb-6" 
                  src={Kit} 
                  alt="Kit Estanque"
                />
                <div className="flex flex-col justify-start items-center text-center px-2">
                  <div className="w-full mb-3 2xl:mb-4 text-center text-[#9f9f9f] text-sm lg:text-base 2xl:text-lg font-medium font-['Inter'] uppercase leading-[18px] 2xl:leading-[22px]">
                    KIT ESTANQUE
                  </div>
                  <div className="w-full text-center text-[#9f9f9f] text-[11px] sm:text-xs lg:text-sm 2xl:text-base font-normal font-['Inter'] leading-[18px] 2xl:leading-[22px]">
                    Para esgoto e água pluvial é recomendado para redes não pressurizadas, como de água pluvial e esgoto.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Câmera Termográfica */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[280px] 2xl:max-w-[350px] flex flex-col justify-start items-center">
              <div className="w-full h-auto min-h-[380px] sm:min-h-[400px] lg:min-h-[420px] 2xl:min-h-[480px] px-3 py-4 lg:px-4 lg:py-5 2xl:px-6 2xl:py-6 bg-white rounded shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] border border-[#dddddd] flex flex-col justify-start items-center">
                <img 
                  className="w-[180px] h-[210px] sm:w-[200px] sm:h-[230px] lg:w-[220px] lg:h-[250px] xl:w-[200px] xl:h-[230px] 2xl:w-[260px] 2xl:h-[290px] object-cover mb-4 2xl:mb-6" 
                  src={Camera}
                  alt="Câmera Termográfica"
                />
                <div className="flex flex-col justify-start items-center text-center px-2">
                  <div className="w-full mb-3 2xl:mb-4 text-center text-[#9f9f9f] text-sm lg:text-base 2xl:text-lg font-medium font-['Inter'] uppercase leading-[18px] 2xl:leading-[22px]">
                    CÂMERA TERMOGRÁFICA
                  </div>
                  <div className="w-full text-center text-[#9f9f9f] text-[11px] sm:text-xs lg:text-sm 2xl:text-base font-normal font-['Inter'] leading-[18px] 2xl:leading-[22px]">
                    Ajuda a visualizar os pontos quentes e frios que podem indicar falhas elétricas, falhas mecânicas ou vazamentos de ar e de água.
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
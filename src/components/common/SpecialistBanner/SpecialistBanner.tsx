import React from 'react';
import { Users } from 'lucide-react';

const SpecialistBanner = () => {
  return (
    <section className="w-full">
      <div className="w-full min-h-[180px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Background with diagonal stripes pattern */}
        <div
          className="w-full h-full absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(93, 176, 206, 0.3) 35px, rgba(93, 176, 206, 0.3) 70px)',
            pointerEvents: 'none'
          }}
        />

        {/* Content container */}
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">

            {/* Left text section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
              <div className="flex flex-col gap-3">
                <h2 className="text-[#0e3e61] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold font-['Inter'] leading-tight">
                  Está com problemas de vazamento?
                </h2>
                <p className="text-[#0e3e61] text-base sm:text-lg md:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed">
                  Chame quem é especialista no assunto.
                </p>
              </div>
            </div>

            {/* Right icon section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4 md:gap-6">
              {/* Icon container with circle background */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[#0e3e61]/10">
                <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#0e3e61]" strokeWidth={1.5} />
              </div>

              {/* Text below icon */}
              <div className="text-center">
                <p className="text-[#0e3e61] text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-['Inter'] leading-tight">
                  Profissionais
                </p>
                <p className="text-[#0e3e61] text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-['Inter'] leading-tight">
                  Treinados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistBanner;

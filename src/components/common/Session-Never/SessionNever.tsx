import React from 'react';
import { CheckCircle, Clock, User, Shield } from 'lucide-react';

const SessionNever = () => {
  

  return (
    <section className="w-full mt-[0.13rem]">
      {/* Mobile First - Barra azul com texto */}
      <div className="w-full bg-[#0e4d82] py-4 px-4 md:px-8 lg:px-16 xl:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl xl:text-[27.07px] font-normal font-['Inter']">
              Nunca foi tão fácil solicitar um serviço!
            </h2>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default SessionNever;
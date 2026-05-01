import tecnicoImg from '../../../assets/images/Fotos/tecnico02.png';

const HidraulicaSection = () => {
  const handleCTA = () => {
    const whatsappNumber = "+5518981608512";
    const message = "Olá! Gostaria de solicitar um orçamento para soluções residenciais.";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl w-full">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Background Circle */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-2xl"></div>

            {/* Image Container with Border */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
              <img
                src={tecnicoImg}
                alt="Profissional de Hidráulica"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H9.5C4.81 1.5 1 5.31 1 10C1 14.69 4.81 18.5 9.5 18.5H10.5C15.19 18.5 19 14.69 19 10C19 5.31 15.19 1.5 10.5 1.5ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Soluções Residenciais</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Está com problemas de
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> vazamento?</span>
              </h1>

              {/* Divider Line */}
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </div>

            {/* Subheading */}
            <p className="text-lg text-slate-300 leading-relaxed">
              Chame quem é especialista no assunto.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleCTA}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                  <span>Solicitar Orçamento</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Trust Section */}
            <div className="pt-8 border-t border-slate-700/50">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Profissionais Treinados</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Equipe altamente qualificada e certificada para resolver o seu problema com excelência e garantia.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-300 font-medium">Atendimento Rápido</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-300 font-medium">Garantia 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HidraulicaSection;

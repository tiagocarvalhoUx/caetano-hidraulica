// components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, X, ArrowUp } from 'lucide-react';
import Logo from "../../../assets/images/Logos/caetano-logo.png";
import Whatsapp from "../../../assets/images/Banner/icon-whats.png";
import Banner from "../../../assets/images/Banner/banner.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Monitorar scroll para mostrar/esconder botão "Voltar ao Topo"
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollToTop(scrollTop > 300); // Mostra após 300px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Função para scroll suave para seções
  const scrollToSection = (sectionId) => {
    console.log('Tentando navegar para:', sectionId); // Debug
    const element = document.getElementById(sectionId);
    console.log('Elemento encontrado:', element); // Debug
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn(`Seção com ID "${sectionId}" não encontrada`);
      // Fallback: tentar rolar para o topo se for home
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false); // Fecha o menu mobile após o clique
  };

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    console.log('Abrindo WhatsApp...'); // Debug
    try {
      // Substitua pelo número de telefone da empresa (formato: 5511999999999)
      const phoneNumber = "5518981608512"; // Exemplo: +55 11 99999-9999
      const message = "Olá! Gostaria de contratar os serviços de detecção de vazamentos.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      console.log('URL gerada:', whatsappUrl); // Debug
      window.open(whatsappUrl, '_blank');
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Erro ao abrir WhatsApp:', error);
      // Fallback: tentar apenas o número
      window.open(`https://wa.me/5518981608512`, '_blank');
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        {/* Blue Header Section */}
        <div className="self-stretch w-full max-w-[1920px] mx-auto h-auto min-h-[80px] md:h-[153px] md:min-h-5 p-px bg-gradient-to-b from-[#0d3350] to-[#1d74b6] rounded outline outline-1 outline-offset-[-1px] outline-[#f3fcf9] inline-flex flex-col justify-start items-center relative">
          <div className="container mx-auto px-2 md:px-4">
            <div className="flex items-center justify-between py-2 md:py-4 md:justify-between relative">
              
              {/* Mobile Hamburger Menu - Left Side */}
              <div className="md:hidden flex items-center">
                <button 
                  className="text-white hover:text-blue-200 focus:outline-none z-50"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Logo - Centered on Mobile, Left on Desktop */}
              <div className="flex items-center space-x-4 md:space-x-8 md:flex-1 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
                <div className="text-xl font-bold">
                  <img 
                    src={Logo} 
                    alt="logo-caetano" 
                    className='mt-7 md:mt-[-18px] ml-[80px] md:ml-[-18px] w-[36%] md:w-full sx:hidden' 
                  />
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-semibold">
                  <button 
                    onClick={() => scrollToSection('home')} 
                    className="relative group text-white font-[Inter] cursor-pointer transition-all duration-300 ease-out px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-100">
                      Home
                    </span>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-300 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                  </button>
                  <button 
                    onClick={() => scrollToSection('nossos-servicos')} 
                    className="relative group text-white font-[Inter] cursor-pointer transition-all duration-300 ease-out px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-100">
                      Nossos Serviços
                    </span>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-300 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                  </button>
                  <button 
                    onClick={() => scrollToSection('diferenciais')} 
                    className="relative group text-white font-[Inter] cursor-pointer transition-all duration-300 ease-out px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-100">
                      Diferenciais
                    </span>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-300 to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                  </button>
                  <button 
                    onClick={openWhatsApp} 
                    className="relative group text-white font-[Inter] cursor-pointer transition-all duration-300 ease-out px-4 py-2 rounded-lg bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-400/30 hover:from-green-400/30 hover:to-green-300/30 hover:border-green-300/50 hover:shadow-lg hover:shadow-green-400/20 backdrop-blur-sm"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-green-100 flex items-center gap-2">
                      Como Contratar?
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300/10 to-green-100/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </nav>
              </div>
              
              {/* Desktop Social Icons */}
              <div className="hidden md:flex items-center space-x-4 ml-[15px]">
                <div className="group relative">
                  <Youtube className="w-5 h-5 cursor-pointer text-white transition-all duration-300 group-hover:text-red-400 group-hover:scale-110 group-hover:drop-shadow-lg" />
                  <div className="absolute inset-0 bg-red-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 blur-sm"></div>
                </div>
                <div className="group relative">
                  <Instagram className="w-5 h-5 cursor-pointer text-white transition-all duration-300 group-hover:text-pink-400 group-hover:scale-110 group-hover:drop-shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 blur-sm"></div>
                </div>
                <div className="group relative">
                  <img 
                    src={Whatsapp} 
                    alt="whatsapp" 
                    className='w-15 h-8 cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg filter group-hover:brightness-110' 
                    onClick={openWhatsApp}
                  />
                  <div className="absolute inset-0 bg-green-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 blur-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#0d3350] to-[#1d74b6] z-40 shadow-lg backdrop-blur-md border-t border-white/10">
              <nav className="flex flex-col p-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="group relative text-white py-3 px-4 rounded-lg transition-all duration-300 text-left hover:bg-white/10 backdrop-blur-sm border-b border-blue-400/20 hover:border-blue-300/40"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-100">Home</span>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-300 to-white group-hover:h-6 transition-all duration-300 rounded-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('nossos-servicos')} 
                  className="group relative text-white py-3 px-4 rounded-lg transition-all duration-300 text-left hover:bg-white/10 backdrop-blur-sm border-b border-blue-400/20 hover:border-blue-300/40"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-100">Nossos Serviços</span>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-300 to-white group-hover:h-6 transition-all duration-300 rounded-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('diferenciais')} 
                  className="group relative text-white py-3 px-4 rounded-lg transition-all duration-300 text-left hover:bg-white/10 backdrop-blur-sm border-b border-blue-400/20 hover:border-blue-300/40"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-100">Diferenciais</span>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-300 to-white group-hover:h-6 transition-all duration-300 rounded-full"></div>
                </button>
                <button 
                  onClick={openWhatsApp} 
                  className="group relative text-white py-3 px-4 rounded-lg transition-all duration-300 text-left bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-400/30 hover:from-green-400/30 hover:to-green-300/30 hover:border-green-300/50 backdrop-blur-sm"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-green-100 flex items-center gap-2">
                    Como Contratar?
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </span>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-green-300 to-green-100 group-hover:h-6 transition-all duration-300 rounded-full"></div>
                </button>
                
                {/* Mobile Social Icons */}
                <div className="flex items-center justify-center space-x-8 pt-6 mt-4 border-t border-white/10">
                  <div className="group relative">
                    <Youtube className="w-7 h-7 cursor-pointer text-white transition-all duration-300 group-hover:text-red-400 group-hover:scale-110 group-hover:drop-shadow-lg" />
                    <div className="absolute inset-0 bg-red-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 blur-sm"></div>
                  </div>
                  <div className="group relative">
                    <Instagram className="w-7 h-7 cursor-pointer text-white transition-all duration-300 group-hover:text-pink-400 group-hover:scale-110 group-hover:drop-shadow-lg" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 blur-sm"></div>
                  </div>
                  <div className="group relative">
                    <img 
                      src={Whatsapp} 
                      alt="whatsapp" 
                      className='w-16 h-9 cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg filter group-hover:brightness-110' 
                      onClick={openWhatsApp}
                    />
                    <div className="absolute inset-0 bg-green-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100 blur-sm"></div>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
        
        {/* Banner */}
        <img className="self-stretch h-[345px] shadow-[inset_0px_0px_3px_0px_rgba(50,50,50,0.10)] mt-[-5px] w-[100%]" src={Banner} />
      </header>

      {/* Overlay para fechar o menu quando clicar fora */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Botão Flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="group relative bg-[#25D366] hover:bg-[#20b358] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
          aria-label="Contatar via WhatsApp"
        >
          {/* Ícone do WhatsApp */}
          <svg 
            className="w-6 h-6 md:w-7 md:h-7" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Fale conosco!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </button>
      </div>

      {/* Botão Voltar ao Topo */}
      {showScrollToTop && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={scrollToTop}
            className="group relative bg-gradient-to-b from-[#0d3350] to-[#1d74b6] hover:from-[#1d74b6] hover:to-[#0d3350] text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-blue-300/20 hover:border-blue-200/40"
            aria-label="Voltar ao topo"
          >
            {/* Ícone da Seta para Cima */}
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Voltar ao topo
              <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>

            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
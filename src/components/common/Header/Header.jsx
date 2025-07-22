// components/Header/Header.jsx
import React, { useState } from 'react';
import { Youtube, Instagram, X } from 'lucide-react';
import Logo from "../../../assets/images/Logos/caetano-logo.png";
import Whatsapp from "../../../assets/images/Banner/icon-whats.png";
import Banner from "../../../assets/images/Banner/banner.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                  <a href="#" className="hover:text-blue-200 text-white">Home</a>
                  <a href="#" className="hover:text-blue-200 text-white">Contato</a>
                  <a href="#" className="hover:text-blue-200 text-white">Diferenciais</a>
                  <a href="#" className="hover:text-blue-200 text-white">Como Contratar?</a>
                </nav>
              </div>
              
              {/* Desktop Social Icons */}
              <div className="hidden md:flex items-center space-x-4 ml-[15px]">
                <Youtube className="w-5 h-5 cursor-pointer hover:text-blue-200 text-white" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-200 text-white" />
                <img src={Whatsapp} alt="whatsapp" className='w-15 h-8 cursor-pointer hover:text-blue-200 ' />
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#0d3350] to-[#1d74b6] z-40 shadow-lg">
              <nav className="flex flex-col p-4 space-y-4">
                <a href="#" className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#" className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30" onClick={() => setMobileMenuOpen(false)}>Contato</a>
                <a href="#" className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
                <a href="#" className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30" onClick={() => setMobileMenuOpen(false)}>Como Contratar?</a>
                
                {/* Mobile Social Icons */}
                <div className="flex items-center justify-center space-x-6 pt-4">
                  <Youtube className="w-6 h-6 cursor-pointer hover:text-blue-200 text-white" />
                  <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-200 text-white" />
                  <img src={Whatsapp} alt="whatsapp" className='w-15 h-8 cursor-pointer' />
                </div>
              </nav>
            </div>
          )}
        </div>
        
        {/* Banner */}
        <img className="self-stretch h-[345px] shadow-[inset_0px_0px_3px_0px_rgba(50,50,50,0.10)] mt-[-5px]" src={Banner} />
      </header>

      {/* Overlay para fechar o menu quando clicar fora */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
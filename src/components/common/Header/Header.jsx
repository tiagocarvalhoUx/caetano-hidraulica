// src/components/common/Header/Header.jsx
import React from 'react';
import { X } from 'lucide-react';

import { DesktopNavigation } from '/src/components/common/Header/Navigation/DesktopNavigation.jsx';
import { MobileNavigation } from './Navigation/MobileNavigation';
import SocialIcons from './SocialIcons/SocialIcons';
import { useMobileMenu } from '../../../hooks/useMobileMenu';
import { NAVIGATION_ITEMS } from '../../../data/navigation';

import Logo from '../../../assets/images/logos/caetano-logo.png';
import Banner from '../../../assets/images/banner/Banner.png';

const Header = () => {
  const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();

  return (
    <header className="bg-white shadow-sm">
      {/* Blue Header Section */}
      <div className="self-stretch w-full max-w-[1920px] mx-auto h-auto min-h-[80px] md:h-[153px] md:min-h-5 p-px bg-gradient-to-b from-[#0d3350] to-[#1d74b6] rounded outline outline-1 outline-offset-[-1px] outline-[#f3fcf9] inline-flex flex-col justify-start items-center relative">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between py-2 md:py-4 md:justify-between relative">
            
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex items-center">
              <button 
                className="text-white hover:text-blue-200 focus:outline-none z-50"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo and Navigation */}
            <div className="flex items-center space-x-4 md:space-x-8 md:flex-1 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
              <div className="text-xl font-bold">
                <img 
                  src={Logo} 
                  alt="Caetano Hidráulica" 
                  className='mt-7 md:mt-[-18px] ml-[80px] md:ml-[-18px] w-[36%] md:w-full sx:hidden' 
                />
              </div>
              
              <DesktopNavigation items={NAVIGATION_ITEMS} />
            </div>
            
            {/* Desktop Social Icons */}
            <SocialIcons className="hidden md:flex" />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileNavigation 
          isOpen={mobileMenuOpen}
          items={NAVIGATION_ITEMS}
          onClose={closeMobileMenu}
        />
      </div>
      
      {/* Banner */}
      <img 
        className="self-stretch h-[345px] shadow-[inset_0px_0px_3px_0px_rgba(50,50,50,0.10)] mt-[-5px]" 
        src={Banner}
        alt="Banner principal"
      />

      {/* Overlay para fechar menu mobile */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;
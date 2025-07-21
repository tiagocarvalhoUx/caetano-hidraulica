// src/components/common/Header/Navigation/MobileNavigation.jsx
import React from 'react';
import { Youtube, Instagram } from 'lucide-react';
import WhatsappIcon from '../../../../assets/images/Banner/icon-whats.png';

 export const MobileNavigation = ({ isOpen, items, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#0d3350] to-[#1d74b6] z-40 shadow-lg">
      <nav className="flex flex-col p-4 space-y-4">
        {items.map((item) => (
          <a 
            key={item.id}
            href={item.href} 
            className="text-white hover:text-blue-200 py-2 border-b border-blue-400/30 transition-colors" 
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
        
        {/* Mobile Social Icons */}
        <div className="flex items-center justify-center space-x-6 pt-4">
          <Youtube className="w-6 h-6 cursor-pointer hover:text-blue-200 text-white" />
          <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-200 text-white" />
          <img src={WhatsappIcon} alt="whatsapp" className='w-15 h-8 cursor-pointer' />
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
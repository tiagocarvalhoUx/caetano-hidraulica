// src/components/common/Header/SocialIcons/SocialIcons.jsx
import React from 'react';
import { Youtube, Instagram } from 'lucide-react';
import WhatsappIcon from '../../../../assets/images/Banner/icon-whats.png';

const SocialIcons = ({ className = "" }) => {
  return (
    <div className={`items-center space-x-4 ml-[15px] ${className}`}>
      <Youtube className="w-5 h-5 cursor-pointer hover:text-blue-200 text-white transition-colors" />
      <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-200 text-white transition-colors" />
      <img 
        src={WhatsappIcon} 
        alt="WhatsApp" 
        className="w-15 h-8 cursor-pointer hover:opacity-80 transition-opacity" 
      />
    </div>
  );
};

export default SocialIcons;
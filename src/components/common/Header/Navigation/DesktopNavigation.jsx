// src/components/common/Header/Navigation/DesktopNavigation.jsx
import React, { useState } from 'react';

export const DesktopNavigation = ({ items }) => {
  return (
    <nav className="hidden md:flex space-x-8 text-sm font-semibold">
      {items.map((item) => (
        <a 
          key={item.id}
          href={item.href} 
          className="hover:text-blue-200 text-white transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
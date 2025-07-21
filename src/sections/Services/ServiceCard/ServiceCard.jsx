// src/components/sections/Services/ServiceCard/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div className="flex items-start space-x-4 p-6 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
      <div className="flex-shrink-0">
        <IconComponent className={`w-12 h-12 ${service.iconColor} group-hover:scale-110 transition-transform duration-200`} />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-green-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {service.description}
        </p>
        <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors hover:underline">
          {service.rating}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
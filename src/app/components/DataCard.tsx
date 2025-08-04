"use client";

import React from 'react';

interface DataCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick?: () => void;
}

const DataCard: React.FC<DataCardProps> = ({ title, icon, description, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {/* Gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
      
      <div className="p-6">
        <div className="flex items-start gap-5">
          {/* Icon container with subtle glow */}
          <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300 shadow-inner">
            <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
              {icon}
            </div>
          </div>
          
          {/* Text content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Animated arrow indicator */}
        <div className="mt-4 flex justify-end">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
            <svg 
              className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </button>
  );
};

export default DataCard;
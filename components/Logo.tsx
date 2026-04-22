import React from 'react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path
          d="M16 2L4 8V14C4 21.5 9 27.5 16 30C23 27.5 28 21.5 28 14V8L16 2Z"
          fill="url(#logo-gradient)"
        />
        <path
          d="M16 8L10 11V15C10 19 12.5 22.5 16 24C19.5 22.5 22 19 22 15V11L16 8Z"
          fill="white"
          fillOpacity="0.3"
        />
      </svg>
      <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        Monstarlab
      </span>
    </div>
  );
}

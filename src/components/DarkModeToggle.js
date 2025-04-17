'use client';

import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full p-1 bg-gray-100 dark:bg-slate-800 transition-all duration-300
        hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle dark mode"
    >
      {/* Track background */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 dark:opacity-100 
          transition-opacity duration-300`} />
      </div>

      {/* Thumb with icon */}
      <div className={`relative flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-slate-700 
        shadow-md transform transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}>
        
        {isDarkMode ? (
          <MoonIcon className="w-4 h-4 text-purple-400" />
        ) : (
          <SunIcon className="w-4 h-4 text-orange-400" />
        )}
      </div>

      {/* Stars for dark mode effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`absolute w-1 h-1 bg-white rounded-full opacity-0 dark:opacity-100 
            transition-opacity duration-300`}
            style={{
              top: `${Math.random() * 60 + 20}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          />
        ))}
      </div>
    </button>
  );
}
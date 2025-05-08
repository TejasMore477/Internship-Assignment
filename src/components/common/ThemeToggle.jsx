import React from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = ({ isDarkTheme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed top-4 right-4 p-1 rounded-full ${
        isDarkTheme 
          ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" 
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      } transition-colors duration-200`}
    >
      {isDarkTheme ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

export default ThemeToggle; 
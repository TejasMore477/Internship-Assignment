import React from 'react';

const NavItem = ({ item, isActive, isLight, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center h-12 w-12 rounded-full transition-colors duration-200
        ${isActive
          ? isLight
            ? "bg-[#4F6EF7]/10"
            : "bg-[#B6FF6C]/10"
          : isLight
            ? "hover:bg-[#4F6EF7]/5"
            : "hover:bg-[#B6FF6C]/5"}
      `}
    >
      <span
        className={`transition-colors duration-200
          ${isActive
            ? isLight
              ? "text-[#4F6EF7]"
              : "text-[#B6FF6C]"
            : isLight
              ? "text-gray-400 group-hover:text-[#4F6EF7]"
              : "text-gray-300 group-hover:text-[#B6FF6C]"}
        `}
      >
        {item.icon}
      </span>
    </button>
  );
};

export default NavItem; 
import React from 'react';

const Header = ({ isDarkTheme, userName = "Chhavi" }) => {
  return (
    <div className="flex items-center justify-start gap-5 mb-2">
      <div>
        <h2 className={`${isDarkTheme ? "text-white" : "text-[#232532]"} text-xl md:text-2xl font-bold leading-tight`}>
          Hello {userName}!
        </h2>
        <p className={`${isDarkTheme ? "text-gray-400" : "text-gray-500"} text-sm md:text-base`}>
          Ready for the trip?
        </p>
      </div>
      <div className="size-10 md:size-12 rounded-full bg-[#FF7F3F] flex items-center justify-center text-white font-semiBold text-lg md:text-xl">
        {userName.charAt(0)}
      </div>
    </div>
  );
};

export default Header; 
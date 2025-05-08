import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const DestinationInput = ({ isDarkTheme, value, onChange }) => {
  return (
    <div>
      <label className={`block text-base font-medium mb-2 ${isDarkTheme ? "text-white" : "text-black"}`}>
        Where would you like to go?
      </label>
      <div className="relative">
        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkTheme ? "text-gray-400" : "text-black"}`}>
          <FaLocationDot color={isDarkTheme ? "#9CA3AF" : "#000000"} />
        </span>
        <input
          type="text"
          placeholder="Enter Destination"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full pl-10 pr-4 py-2 rounded-lg ${
            isDarkTheme 
              ? "bg-[#23232B] text-white placeholder-gray-400" 
              : "bg-white text-black placeholder-gray-400 border border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-[#3643FB]`}
          style={{ height: "44px" }}
          required
        />
      </div>
    </div>
  );
};

export default DestinationInput; 
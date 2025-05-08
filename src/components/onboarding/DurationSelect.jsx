import React from 'react';

const DurationSelect = ({ isDarkTheme, value, onChange }) => {
  return (
    <div className="sm:mt-0 mt-4">
      <label className={`block text-base font-medium mb-2 ${isDarkTheme ? "text-white" : "text-black"}`}>
        How long will you stay?
      </label>
      <div className="relative">
        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkTheme ? "text-gray-400" : "text-black"}`}>
          <svg
            width="18"
            height="18"
            fill="none"
            stroke={isDarkTheme ? "currentColor" : "black"}
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full pl-10 pr-4 py-2 rounded-lg ${
            isDarkTheme 
              ? "bg-[#23232B] text-white" 
              : "bg-white text-black border border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-[#3643FB]`}
          style={{ height: "44px" }}
          required
        >
          <option value="" disabled>
            Select Duration
          </option>
          <option value="1-3 days">1-3 days</option>
          <option value="4-7 days">4-7 days</option>
          <option value="1-2 weeks">1-2 weeks</option>
          <option value=">2 weeks">More than 2 weeks</option>
        </select>
      </div>
    </div>
  );
};

export default DurationSelect; 
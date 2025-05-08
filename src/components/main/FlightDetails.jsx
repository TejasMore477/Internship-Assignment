import React from 'react';

const FlightDetails = ({ isDarkTheme, flightData }) => {
  const {
    date = "26.01.2025, 10:50 am",
    from = { code: "DEL", city: "Delhi, India" },
    to = { code: "NRT", city: "Narita, Tokyo" },
    backgroundImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  } = flightData || {};

  return (
    <div
      className="mt-6 rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${isDarkTheme ? "bg-[#2B2E3A]/70" : "bg-[#4F6EF7]/80"} rounded-xl p-4 md:p-6 flex flex-col gap-2 relative`}>
        <div className="flex justify-between items-start">
          <div className="text-white">
            <h2 className="font-semibold text-lg md:text-xl leading-none">
              Flight Details
            </h2>
            <span className="font-extralight text-sm md:text-base leading-none">
              {date}
            </span>
          </div>
          <button className={`${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"} text-xs md:text-sm cursor-pointer border-b-[0.5px]`}>
            See all
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <span className="mt-1 text-white font-semibold flex flex-col text-sm md:text-base">
                {from.code}{" "}
                <span className={`${isDarkTheme ? "text-gray-300" : "text-gray-200"} text-xs md:text-sm`}>
                  {from.city}
                </span>
              </span>
              <span className={`${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"} font-bold text-xl`}>→</span>
              <span className="text-white font-semibold flex flex-col text-sm md:text-base">
                {to.code}{" "}
                <span className={`${isDarkTheme ? "text-gray-300" : "text-gray-200"} text-xs md:text-sm`}>
                  {to.city}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails; 
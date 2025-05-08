import React from 'react';

const AccommodationCard = ({ isDarkTheme, hotel }) => {
  return (
    <div className={`min-w-[280px] md:min-w-0 ${isDarkTheme ? "bg-[#232532]" : "bg-white"} rounded-xl overflow-hidden shadow-lg my-2 ${!isDarkTheme && "border border-gray-100"}`}>
      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-40 md:h-48 w-full object-cover"
      />
      <div className="p-3 md:p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className={`${isDarkTheme ? "bg-[#232532] text-[#B6FF6C]" : "bg-white text-[#4F6EF7] border border-[#4F6EF7]/20"} text-xs md:text-sm px-2 py-0.5 rounded font-semibold`}>
            {hotel.rating} Very Good
          </span>
        </div>
        <h3 className={`${isDarkTheme ? "text-white" : "text-[#232532]"} text-sm md:text-base font-semibold leading-tight mb-1`}>
          {hotel.name}
        </h3>
        <div className="text-xs md:text-sm text-gray-400 mb-1">
          Check in: {hotel.checkIn}
        </div>
        <div className="text-xs md:text-sm text-gray-400 mb-1">
          Check out: {hotel.checkOut}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-400"}`}>
            {hotel.nights} Nights
          </span>
          <span
            className={`text-xs md:text-sm px-2 py-0.5 rounded ${
              hotel.status === "Confirmed"
                ? isDarkTheme
                  ? "bg-[#B6FF6C]/20 text-[#B6FF6C]"
                  : "bg-[#B6FF6C]/20 text-[#4F6EF7] border border-[#4F6EF7]/20"
                : "bg-orange-200/20 text-orange-400"
            }`}
          >
            {hotel.status}
          </span>
        </div>
      </div>
    </div>
  );
};

const AccommodationList = ({ isDarkTheme, accommodations = [] }) => {
  return (
    <div className="mb-4 mt-4">
      <div className="flex justify-between items-center mb-1">
        <h2 className={`${isDarkTheme ? "text-white" : "text-[#232532]"} text-lg md:text-xl font-semibold`}>
          Accomodation
        </h2>
        <button className={`${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"} text-xs md:text-sm`}>
          See all
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {accommodations.map((hotel, idx) => (
          <AccommodationCard key={idx} isDarkTheme={isDarkTheme} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default AccommodationList; 
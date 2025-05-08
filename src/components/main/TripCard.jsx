import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineGroup } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";

const TripCard = ({ isDarkTheme, tripData }) => {
  const {
    destination = "TOKYO",
    dateRange = "27.01.2025 - 02.02.2025",
    duration = "8 Days",
    groupSize = "4 (2M,2F)",
    activities = "14",
    image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  } = tripData || {};

  return (
    <div className={`${isDarkTheme ? "bg-[#23232B]" : "bg-white"} rounded-xl p-0 overflow-hidden relative shadow-md`}>
      <div className="relative">
        <img
          src={image}
          alt={destination}
          className="w-full h-60 md:h-80 lg:h-96 object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isDarkTheme ? "from-black/80" : "from-black/60"} to-transparent`} />
        <div className="absolute top-4 left-4">
          <div className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {destination}
          </div>
          <div className="text-gray-200 font-medium text-sm md:text-base mt-1">
            {dateRange}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="text-white/80 text-2xl font-bold">
            <GoArrowUpRight />
          </span>
        </div>
        <div className="absolute bottom-3 left-4 right-4 text-white/80 flex justify-between text-xs md:text-sm">
          <div className="flex items-start gap-1">
            <span className={`text-xl pt-1 ${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"}`}>
              <LuClock4 />
            </span>
            <span className="text-[1rem] font-medium flex flex-col">
              {duration}{" "}
              <span className="text-xs font-extralight">Duration</span>
            </span>
          </div>
          <div className="flex items-start gap-1">
            <span className={`text-xl pt-1 ${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"}`}>
              <MdOutlineGroup />
            </span>
            <span className="text-[1rem] font-medium flex flex-col">
              {groupSize}{" "}
              <span className="text-xs font-extralight">Group Size</span>
            </span>
          </div>
          <div className="flex items-start gap-1">
            <span className={`text-xl pt-1 ${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"}`}>
              <LuNotebookText />
            </span>
            <span className="text-[1rem] font-medium flex flex-col">
              {activities}{" "}
              <span className="text-xs font-extralight">Activities</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard; 
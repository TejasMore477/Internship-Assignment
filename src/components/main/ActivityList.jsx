import React from 'react';

const ActivityCard = ({ isDarkTheme, activity }) => {
  return (
    <div className={`${isDarkTheme ? "bg-[#232532]" : "bg-white"} rounded-xl flex gap-3 p-3 md:p-4 items-center ${!isDarkTheme && "border border-gray-100"}`}>
      <img
        src={activity.image}
        alt={activity.title}
        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className={`${isDarkTheme ? "text-white" : "text-[#232532]"} text-sm md:text-base font-semibold mb-1 leading-tight`}>
          {activity.title}
        </h4>
        <div className={`text-xs md:text-sm ${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"} mb-0.5`}>
          Timing: {activity.timing}
        </div>
        <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-400"} mb-0.5`}>
          Duration: {activity.duration}
        </div>
        <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-400"}`}>
          Pick up: {activity.pickup}
        </div>
      </div>
    </div>
  );
};

const DayPlanTabs = ({ isDarkTheme }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <button className={`${isDarkTheme ? "bg-[#232532] text-[#B6FF6C]" : "bg-[#E8EDFB] text-[#4F6EF7]"} text-xs md:text-sm px-3 py-1 rounded font-semibold`}>
        Day Plan
      </button>
      <span className={`${isDarkTheme ? "bg-[#232532] text-[#B6FF6C]" : "bg-[#E8EDFB] text-[#4F6EF7]"} text-xs md:text-sm px-2 py-1 rounded`}>
        14 Activities
      </span>
    </div>
  );
};

const DateTabs = ({ isDarkTheme, selectedDate = 0 }) => {
  const dates = [
    "MON 27",
    "TUE 28",
    "WED 29",
    "THU 30",
    "FRI 31",
    "SAT 1",
    "SUN 2",
  ];

  return (
    <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
      {dates.map((date, i) => (
        <button
          key={i}
          className={`px-3 py-1 mb-2 rounded text-xs md:text-sm font-semibold whitespace-nowrap ${
            i === selectedDate
              ? isDarkTheme
                ? "bg-[#B6FF6C] text-[#232532]"
                : "bg-[#4F6EF7] text-white"
              : isDarkTheme
                ? "bg-[#232532] text-white"
                : "bg-[#E8EDFB] text-[#232532]"
          }`}
        >
          {date}
        </button>
      ))}
    </div>
  );
};

const ActivityList = ({ isDarkTheme, activities = [], selectedDate = 0 }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className={`${isDarkTheme ? "text-white" : "text-[#232532]"} text-lg md:text-xl font-semibold`}>
          Activities
        </h2>
        <button className={`${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"} text-xs md:text-sm`}>
          See all
        </button>
      </div>

      <DayPlanTabs isDarkTheme={isDarkTheme} />
      <DateTabs isDarkTheme={isDarkTheme} selectedDate={selectedDate} />

      <div className="mb-2 mt-5">
        <div className="flex items-center gap-2 mb-2">
          <span className={`${isDarkTheme ? "bg-[#B6FF6C] text-[#232532]" : "bg-[#4F6EF7] text-white"} text-xs md:text-sm px-2 py-0.5 rounded font-semibold`}>
            Day 1
          </span>
          <span className={`text-xs md:text-sm ${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"}`}>
            27.01.2025
          </span>
          <span className={`text-xs md:text-sm ${isDarkTheme ? "text-[#B6FF6C]" : "text-[#4F6EF7]"}`}>
            • 3 Activities
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {activities.map((activity, idx) => (
            <ActivityCard key={idx} isDarkTheme={isDarkTheme} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityList; 
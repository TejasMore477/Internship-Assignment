import React from 'react';
import { FaPerson } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";

const GroupSelector = ({ isDarkTheme, selectedGroup, onSelect }) => {
  const groups = [
    { id: "Solo", icon: FaPerson },
    { id: "Couple", icon: BiMaleFemale },
    { id: "Family", icon: MdFamilyRestroom },
    { id: "Friends", icon: GiThreeFriends }
  ];

  return (
    <div className="sm:mt-0 mt-4">
      <label className={`block text-base font-medium mb-2 ${isDarkTheme ? "text-white" : "text-black"}`}>
        Who are you traveling with?
      </label>
      <div className="grid grid-cols-2 gap-3">
        {groups.map(({ id, icon: Icon }) => (
          <button
            type="button"
            key={id}
            onClick={() => onSelect(id)}
            className={`flex items-center justify-center gap-2 py-2 rounded-lg border-2 ${
              selectedGroup === id
                ? isDarkTheme
                  ? "border-[#3643FB] bg-[#3643FB] text-white"
                  : "border-[#3643FB] bg-[#E6E9FF] text-black"
                : isDarkTheme
                  ? "bg-[#23232B] border-transparent text-white"
                  : "bg-white border-gray-300 text-black"
            } transition-colors`}
            style={{ height: "44px" }}
          >
            <span>
              <Icon color={isDarkTheme ? "#FFFFFF" : "#000000"} />
            </span>
            {id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GroupSelector; 
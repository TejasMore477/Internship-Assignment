import React, { useState } from "react";
import ThemeToggle from "../common/ThemeToggle";
import OnboardingHeader from "./OnboardingHeader";
import DestinationInput from "./DestinationInput";
import DurationSelect from "./DurationSelect";
import GroupSelector from "./GroupSelector";
import ContinueButton from "./ContinueButton";

const ResponsiveLightThemeOnboarding = ({ isDarkTheme, setIsDarkTheme, onComplete }) => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [group, setGroup] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div 
      className={`min-h-screen min-w-full flex items-center justify-center ${
        isDarkTheme 
          ? "bg-gradient-to-b from-gray-900 to-black" 
          : "bg-white"
      }`}
    >
      <ThemeToggle isDarkTheme={isDarkTheme} onToggle={() => setIsDarkTheme(!isDarkTheme)} />

      <div
        className={`w-full h-screen sm:h-full max-w-[353px] md:max-w-md sm:rounded-2xl p-6 pt-14 sm:pt-0 md:p-8 flex flex-col gap-9 ${
          isDarkTheme ? "text-white" : "text-black"
        }`}
        style={{ gap: "36px" }}
      >
        <OnboardingHeader isDarkTheme={isDarkTheme} />
        
        <form
          className="flex flex-col gap-6 h-full justify-between"
          onSubmit={handleContinue}
        >
          <div>
            <DestinationInput 
              isDarkTheme={isDarkTheme}
              value={destination}
              onChange={setDestination}
            />
            
            <DurationSelect 
              isDarkTheme={isDarkTheme}
              value={duration}
              onChange={setDuration}
            />
            
            <GroupSelector 
              isDarkTheme={isDarkTheme}
              selectedGroup={group}
              onSelect={setGroup}
            />
          </div>

          <ContinueButton />
        </form>
      </div>
    </div>
  );
};

export default ResponsiveLightThemeOnboarding; 
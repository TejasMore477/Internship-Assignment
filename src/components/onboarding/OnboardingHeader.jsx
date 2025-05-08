import React from 'react';

const OnboardingHeader = ({ isDarkTheme }) => {
  return (
    <div>
      <h2 className={`text-[1.40rem] mb-1 ${isDarkTheme ? "text-white" : "text-black"}`}>
        Plan Your Journey, Your Way!
      </h2>
      <p className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
        Let's create your personalised travel experience
      </p>
    </div>
  );
};

export default OnboardingHeader; 
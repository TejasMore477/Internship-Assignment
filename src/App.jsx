import React, { useState } from 'react';
import LightThemeOnboarding from './components/onboarding/ResponsiveLightThemeOnboarding';
import ResponsiveThemeMain from './components/main/ResponsiveThemeMain';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const handleOnboardingComplete = () => {
    setShowMain(true);
  };

  return (
    <div>
      {!showMain ? (
        <LightThemeOnboarding 
          isDarkTheme={isDarkTheme} 
          setIsDarkTheme={setIsDarkTheme}
          onComplete={handleOnboardingComplete}
        />
      ) : (
        <ResponsiveThemeMain 
          isDarkTheme={isDarkTheme} 
          setIsDarkTheme={setIsDarkTheme}
        />
      )}
    </div>
  );
};

export default App; 

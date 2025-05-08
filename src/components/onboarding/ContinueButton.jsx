import React from 'react';

const ContinueButton = () => {
  return (
    <button
      type="submit"
      className="w-full mt-4 bg-[#3643FB] text-white font-semibold rounded-lg hover:bg-[#2D38D9] transition-colors"
      style={{
        height: "44px",
        borderRadius: "8px",
        padding: "10px",
        gap: "10px",
      }}
    >
      Continue
    </button>
  );
};

export default ContinueButton; 
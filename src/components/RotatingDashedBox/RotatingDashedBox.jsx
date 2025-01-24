import React from "react";

const RotatingDashedBox = () => {
  return (
    <div className="absolute h-3 w-3 rounded-full border-dashed border-white border  left-0 top-auto transform -translate-y-[42%] animate-rotateme transition-all duration-200 ease-[cubic-bezier(0.98,0.57,1,1)]" />
  );
};

export default RotatingDashedBox;

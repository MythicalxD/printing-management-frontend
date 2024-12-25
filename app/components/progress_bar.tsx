import React from "react";

interface ProgressProps {
  value: number; // Current progress value
  max?: number; // Maximum progress value
}

export const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
  const progressPercentage = Math.min((value / max) * 100, 100); // Ensure it doesn't exceed 100%

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
      ></div>
    </div>
  );
};

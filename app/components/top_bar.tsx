"use client";
import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';

type TopBarProps = {
  title: string;
};

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <div className="h-16 bg-glass-light backdrop-blur-sm shadow-md flex justify-between items-center px-6">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        <AiOutlineBell size={24} />
        <img
          src="/profile.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
      </div>
    </div>
  );
};

export default TopBar;
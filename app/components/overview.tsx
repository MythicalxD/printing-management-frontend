// OverviewPanel.tsx
import React from 'react';

const OverviewPanel = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <div className="bg-glass-light backdrop-blur-sm p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Jobs In Progress</h2>
        <p className="text-3xl font-bold mt-2">0</p>
      </div>
      <div className="bg-glass-light backdrop-blur-sm p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Completed Jobs</h2>
        <p className="text-3xl font-bold mt-2">0</p>
      </div>
      <div className="bg-glass-light backdrop-blur-sm p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Pending Requests</h2>
        <p className="text-3xl font-bold mt-2">0</p>
      </div>
    </div>
  );
};

export default OverviewPanel;

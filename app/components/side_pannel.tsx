// SidePanel.tsx
import Link from 'next/link';
import React from 'react';
import { AiOutlineDashboard, AiOutlineHistory } from 'react-icons/ai';
import { MdOutlineInventory2 } from 'react-icons/md';

const SidePanel = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 backdrop-blur-md flex flex-col justify-between shadow-lg text-black">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Printing Manager</h1>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 p-2 hover:bg-gray-300 rounded-md bg-gray-200 text-black">
              <AiOutlineDashboard size={24} />
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="flex items-center gap-4 p-2 hover:bg-gray-300 rounded-md bg-gray-200 text-black">
              <MdOutlineInventory2 size={24} />
              <Link href="/inventory">Inventory</Link>
            </li>
            <li className="flex items-center gap-4 p-2 hover:bg-gray-300 rounded-md bg-gray-200 text-black">
              <AiOutlineHistory size={24} />
              <Link href="/history">History</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4">
        <button className="w-full bg-red-600 py-2 rounded-md hover:bg-red-700">Logout</button>
      </div>
    </div>
  );
};

export default SidePanel;
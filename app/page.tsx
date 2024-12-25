"use client";
import React, { useEffect, useState } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  opacity: number;
};

const Home = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles for background effect
    const generateParticles = () => {
      const particlesArray: Particle[] = Array.from({ length: 50 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        opacity: Math.random(),
      }));
      setParticles(particlesArray);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);

    return () => {
      window.removeEventListener("resize", generateParticles);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 overflow-hidden">
      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            className="absolute bg-orange-400 rounded-full blur-md animate-pulse"
          ></div>
        ))}
      </div>

      <header className="text-center max-w-4xl mx-auto mt-12">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-orange-500">AST Enterprises</span>
        </h1>
        <p className="text-lg font-medium text-gray-700 mb-6">
          Streamline your printing workflows with ease. Manage tasks, track progress, and monitor
          inventory—all in one place.
        </p>
        <div className="space-x-4">
          <a
            href="/dashboard"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-orange-600 transition transform"
          >
            Go to Dashboard
          </a>
          <a
            href="/inventory"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-300 transition transform"
          >
            Manage Inventory
          </a>
        </div>
      </header>

      <main className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">Job Management</h3>
          <p className="text-gray-600">
            Assign and track printing jobs with detailed instructions and real-time updates.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">Inventory Tracking</h3>
          <p className="text-gray-600">
            Monitor material usage, track waste, and ensure optimal stock levels.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">Progress Reporting</h3>
          <p className="text-gray-600">
            Generate detailed reports on job completion, material usage, and expenses.
          </p>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-600 py-6 bg-gray-100 absolute bottom-0 w-full">
        <p className="mb-2">&copy; 2024 AST Enterprises. All rights reserved.</p>
        <p className="text-sm">
          For more information, visit our website at
          <a
            href="https://astenterprises.live"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline ml-1"
          >
            astenterprises.live
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;

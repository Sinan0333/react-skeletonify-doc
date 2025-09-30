import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gray-900 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/Gemini_Generated_Image_audmq3audmq3audm.png" 
                alt="React Skeletonify Logo" 
                className="h-10 w-10 rounded-lg bg-gray-800 p-1"
              />
              <div>
                <h1 className="text-xl font-bold text-white">React Skeletonify</h1>
                <p className="text-sm text-slate-400">Documentation Site</p>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/docs" 
              className={`transition-colors ${
                isActive('/docs') 
                  ? 'text-white border-b-2 border-slate-500' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Documentation
            </Link>
            <Link 
              to="/examples" 
              className={`transition-colors ${
                isActive('/examples') 
                  ? 'text-white border-b-2 border-slate-500' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Examples
            </Link>
            <Link 
              to="/api" 
              className={`transition-colors ${
                isActive('/api') 
                  ? 'text-white border-b-2 border-slate-500' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              API Reference
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
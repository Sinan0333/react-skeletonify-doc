import React from 'react';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/Gemini_Generated_Image_audmq3audmq3audm.png" 
              alt="React Skeletonify Logo" 
              className="h-24 w-24 rounded-2xl shadow-2xl bg-slate-800 p-2"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            React Skeletonify
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Create beautiful, accessible skeleton loading screens for your React applications. 
            Improve user experience with smooth loading states that match your design system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/docs" 
              className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/examples" 
              className="border border-slate-600 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-center"
            >
              View Documentation
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code className="h-6 w-6 text-slate-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Easy Integration</h3>
              <p className="text-slate-400">
                Drop-in components that work seamlessly with your existing React codebase.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-slate-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
              <p className="text-slate-400">
                Lightweight and optimized for fast loading times and smooth animations.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-slate-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accessible</h3>
              <p className="text-slate-400">
                Built with accessibility in mind, supporting screen readers and keyboard navigation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
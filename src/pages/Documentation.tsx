import React from 'react';
import { Book, Download, Code2, Settings } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-xl text-slate-300">
            Complete guide to using React Skeletonify in your projects
          </p>
        </div>

        <div className="space-y-12">
          {/* Installation Section */}
          <section className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Download className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Installation</h2>
            </div>
            <div className="space-y-4">
              <p className="text-slate-300">Install React Skeletonify using your preferred package manager:</p>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600">
                <code className="text-slate-300 font-mono">npm install react-skeletonify</code>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600">
                <code className="text-slate-300 font-mono">yarn add react-skeletonify</code>
              </div>
            </div>
          </section>

          {/* Quick Start Section */}
          <section className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Quick Start</h2>
            </div>
            <div className="space-y-4">
              <p className="text-slate-300">Get started with a basic skeleton loader:</p>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                <pre className="text-slate-300 font-mono text-sm">
{`import { Skeleton } from 'react-skeletonify';

function MyComponent() {
  return (
    <div>
      <Skeleton height={20} width="100%" />
      <Skeleton height={16} width="80%" />
      <Skeleton height={16} width="60%" />
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Configuration Section */}
          <section className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Settings className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Configuration</h2>
            </div>
            <div className="space-y-4">
              <p className="text-slate-300">Customize the appearance and behavior of your skeleton loaders:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-slate-600">
                  <h3 className="text-slate-200 font-semibold mb-2">Props</h3>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• height: number | string</li>
                    <li>• width: number | string</li>
                    <li>• borderRadius: number</li>
                    <li>• animation: 'pulse' | 'wave'</li>
                  </ul>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-slate-600">
                  <h3 className="text-slate-200 font-semibold mb-2">Themes</h3>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• Light theme support</li>
                    <li>• Dark theme support</li>
                    <li>• Custom color schemes</li>
                    <li>• CSS variable overrides</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
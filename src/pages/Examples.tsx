import React, { useState } from 'react';
import { Play, Copy, Eye } from 'lucide-react';

export default function Examples() {
  const [activeExample, setActiveExample] = useState(0);

  const examples = [
    {
      title: "Card Skeleton",
      description: "Perfect for loading card-based layouts",
      code: `<div className="bg-white p-6 rounded-lg shadow">
  <Skeleton height={200} width="100%" borderRadius={8} />
  <Skeleton height={24} width="70%" className="mt-4" />
  <Skeleton height={16} width="100%" className="mt-2" />
  <Skeleton height={16} width="80%" className="mt-1" />
</div>`
    },
    {
      title: "List Item Skeleton",
      description: "Great for loading lists and feeds",
      code: `<div className="flex items-center space-x-4 p-4">
  <Skeleton height={48} width={48} borderRadius={24} />
  <div className="flex-1">
    <Skeleton height={16} width="60%" />
    <Skeleton height={14} width="40%" className="mt-2" />
  </div>
</div>`
    },
    {
      title: "Table Skeleton",
      description: "Ideal for data tables and grids",
      code: `<div className="space-y-3">
  {[...Array(5)].map((_, i) => (
    <div key={i} className="flex space-x-4">
      <Skeleton height={16} width="20%" />
      <Skeleton height={16} width="30%" />
      <Skeleton height={16} width="25%" />
      <Skeleton height={16} width="15%" />
    </div>
  ))}
</div>`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Examples</h1>
          <p className="text-xl text-slate-300">
            Real-world examples and use cases for React Skeletonify
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Example List */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700">
                <h2 className="text-lg font-semibold text-white">Choose Example</h2>
              </div>
              <div className="space-y-1 p-2">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExample(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeExample === index
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="font-medium">{example.title}</div>
                    <div className="text-sm text-slate-400 mt-1">{example.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Code Display */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white">
                  {examples[activeExample].title}
                </h3>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-2 px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors">
                    <Copy className="h-4 w-4" />
                    <span className="text-sm">Copy</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 py-1.5 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors">
                    <Play className="h-4 w-4" />
                    <span className="text-sm">Run</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                  <pre className="text-slate-300 font-mono text-sm">
                    <code>{examples[activeExample].code}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            <div className="mt-8 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center space-x-2 p-6 border-b border-slate-700">
                <Eye className="h-5 w-5 text-slate-400" />
                <h3 className="text-lg font-semibold text-white">Preview</h3>
              </div>
              <div className="p-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-gray-600 text-sm mb-4">
                    Live preview would render here with actual skeleton components
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-200 h-4 rounded animate-pulse"></div>
                    <div className="bg-gray-200 h-4 w-3/4 rounded animate-pulse"></div>
                    <div className="bg-gray-200 h-4 w-1/2 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
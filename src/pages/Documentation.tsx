import { Download, Code2, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
              <h2 className="text-2xl font-semibold text-white">
                Installation
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-slate-300">
                Install React Skeletonify using your preferred package manager:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600">
                <code className="text-slate-300 font-mono">
                  npm install react-skeletonify
                </code>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600">
                <code className="text-slate-300 font-mono">
                  yarn add react-skeletonify
                </code>
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
              <p className="text-slate-300">
                Import the CSS file and wrap your components with
                SkeletonWrapper:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                <pre className="text-slate-300 font-mono text-sm">
                  {`import { SkeletonWrapper } from 'react-skeletonify';
import "react-skeletonify/dist/index.css";

function ProfileCard({ loading }) {
  return (
    <SkeletonWrapper loading={loading}>
      <div className="card">
        <img src="/profile.jpg" alt="Profile" />
        <h3>Jane Doe</h3>
        <p>Frontend Developer</p>
      </div>
    </SkeletonWrapper>
  );
}`}
                </pre>
              </div>
              <p className="text-slate-300 mt-4">
                That's it! When loading is true, React Skeletonify automatically
                creates skeleton placeholders that match your component
                structure.
              </p>
            </div>
          </section>

          {/* Configuration Section */}
          <section className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Settings className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                Configuration
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-slate-300">
                Use SkeletonProvider to set global configuration for all
                skeleton loaders in your app:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                <pre className="text-slate-300 font-mono text-sm">
                  {`import { SkeletonProvider } from 'react-skeletonify';

function App() {
  return (
    <SkeletonProvider
      config={{
        animation: "animation-1",
        borderRadius: "8px",
        animationSpeed: 2,
        background: "#e0e0e0",
        exceptTags: ["button", "input"]
      }}
    >
      <YourApp />
    </SkeletonProvider>
  );
}`}
                </pre>
              </div>
              <div className="mt-4">
                <Link
                  to="/api"
                  className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-colors group">
                  <span>
                    View all configuration options in the API Reference
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

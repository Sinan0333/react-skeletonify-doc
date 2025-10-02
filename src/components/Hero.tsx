import { ArrowRight, Code, Globe, Hammer } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/react-skeletonify-non-bg-big.png"
              alt="React Skeletonify Logo"
              className="h-40 w-44"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            React Skeletonify
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Smart and dynamic skeleton loaders that automatically match your
            component structure. Stop manually creating skeletons - wrap your
            components and let React Skeletonify do the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/docs"
              className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors flex items-center justify-center space-x-2 shadow-lg">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/docs"
              className="border border-slate-600 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-center">
              View Documentation
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code className="h-6 w-6 text-slate-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Automatic Skeleton Creation
              </h3>
              <p className="text-slate-400">
                Simply wrap your components with SkeletonWrapper - no manual
                skeleton coding required.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="h-6 w-6 text-slate-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Global Configuration
              </h3>
              <p className="text-slate-400">
                Set consistent styles across your entire app with
                SkeletonProvider configuration.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
              <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Hammer className="h-6 w-6 text-slate-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Highly Customizable
              </h3>
              <p className="text-slate-400">
                Control animations, colors, border radius, and exclude specific
                elements with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

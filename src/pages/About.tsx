import React from 'react';
import { Github, ExternalLink, Heart, Award, Coffee, Users } from 'lucide-react';

export default function About() {
  const achievements = [
    { icon: Users, label: "50k+ Downloads", description: "Monthly npm downloads" },
    { icon: Award, label: "Top 1% Package", description: "React ecosystem ranking" },
    { icon: Heart, label: "500+ Stars", description: "GitHub community support" },
    { icon: Coffee, label: "2+ Years", description: "Active development" }
  ];

  const team = [
    {
      name: "Sinan M P",
      role: "Creator & Lead Developer",
      bio: "Full-stack developer passionate about creating developer tools that improve user experience. Created React Skeletonify to simplify skeleton loading state implementation in React applications.",
      github: "sinan0333",
      portfolio: "dev.to/sinan0333",
      avatar: "SM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/Gemini_Generated_Image_audmq3audmq3audm.png" 
              alt="React Skeletonify Logo" 
              className="h-24 w-24 rounded-2xl shadow-2xl bg-slate-800 p-2"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">About React Skeletonify</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A smart and dynamic skeleton loader library that automatically matches your component structure.
            Stop creating manual skeletons - wrap your components and let React Skeletonify handle the rest.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h2 className="text-3xl font-semibold text-white mb-6">Our Story</h2>
            <div className="prose prose-slate prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                React Skeletonify was created to solve a common problem: creating skeleton loaders for every component
                is tedious and time-consuming. Instead of manually crafting skeleton screens, developers needed a
                solution that could automatically generate them based on component structure.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The library uses an intelligent wrapper component (SkeletonWrapper) that analyzes your component's
                DOM structure and creates matching skeleton placeholders automatically. Combined with global configuration
                through SkeletonProvider, it offers consistent loading states across your entire application.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                React Skeletonify improves perceived performance, keeps layouts consistent during loading, and provides
                a professional user experience. It's lightweight, highly customizable, and works seamlessly with any
                React application.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Achievements</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.label}</h3>
                <p className="text-slate-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Creator</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-slate-400 mb-4">{member.role}</p>
                </div>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={`https://github.com/${member.github}`}
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a 
                    href={`https://${member.portfolio}`}
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Portfolio</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* License Section */}
        <section className="mb-16">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h2 className="text-3xl font-semibold text-white mb-6">License & Usage</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">MIT License</h3>
                <p className="text-slate-300 mb-4">
                  React Skeletonify is released under the MIT License, which means you can use it freely in 
                  both personal and commercial projects.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 border border-slate-600">
                  <code className="text-slate-300 font-mono text-sm">
                    Copyright (c) 2024 React Skeletonify Team
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Commercial Use</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ Use in commercial projects</li>
                  <li>✅ Modify and distribute</li>
                  <li>✅ Private use</li>
                  <li>✅ No attribution required</li>
                </ul>
                <p className="text-slate-400 text-sm mt-4">
                  While attribution isn't required, we appreciate it when you mention React Skeletonify 
                  in your project credits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-6">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/react-skeletonify/react-skeletonify"
              className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors flex items-center justify-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>GitHub Repository</span>
            </a>
            <button className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
              Email Us
            </button>
            <button className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
              Join Discord
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
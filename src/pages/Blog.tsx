import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "React Skeletonify v2.0 - Major Performance Improvements",
      excerpt: "We're excited to announce the release of React Skeletonify v2.0 with significant performance improvements, new animation options, and better TypeScript support.",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Release Notes",
      featured: true
    },
    {
      title: "Building Better Loading States: A Complete Guide",
      excerpt: "Learn how to create engaging loading experiences that keep users engaged. This comprehensive guide covers best practices, common pitfalls, and advanced techniques.",
      author: "Mike Rodriguez",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Tutorial"
    },
    {
      title: "Optimizing Skeleton Screens for Mobile Performance",
      excerpt: "Mobile users expect fast, responsive experiences. Discover how to optimize your skeleton screens for mobile devices and improve perceived performance.",
      author: "Emily Johnson",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Performance"
    },
    {
      title: "Accessibility in Loading States: What You Need to Know",
      excerpt: "Making your loading states accessible is crucial for inclusive design. Learn about ARIA labels, screen reader support, and motion preferences.",
      author: "David Park",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Accessibility"
    },
    {
      title: "Advanced Animation Techniques with React Skeletonify",
      excerpt: "Go beyond basic pulse animations. Explore wave effects, staggered animations, and custom CSS transitions to create unique loading experiences.",
      author: "Lisa Wang",
      date: "November 20, 2024",
      readTime: "10 min read",
      category: "Tutorial"
    },
    {
      title: "Case Study: Reducing Bounce Rate with Better Loading States",
      excerpt: "How TechCorp reduced their bounce rate by 23% by implementing contextual skeleton screens. A detailed analysis of the implementation and results.",
      author: "Alex Thompson",
      date: "November 15, 2024",
      readTime: "12 min read",
      category: "Case Study"
    }
  ];

  const categories = ["All", "Tutorial", "Release Notes", "Performance", "Accessibility", "Case Study"];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-slate-300" />
            </div>
            <h1 className="text-4xl font-bold text-white">Blog</h1>
          </div>
          <p className="text-xl text-slate-300">
            Tutorials, release notes, and insights from the React Skeletonify team
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  category === "All"
                    ? "bg-slate-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
              <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                {posts[0].category}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{posts[0].title}</h2>
            <p className="text-slate-300 text-lg mb-6">{posts[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-slate-400">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{posts[0].date}</span>
                </div>
                <span>{posts[0].readTime}</span>
              </div>
              <button className="flex items-center space-x-2 bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors">
                <span>Read More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <article key={index} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-slate-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2 mt-2 text-slate-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <button className="mt-4 text-slate-300 hover:text-white transition-colors flex items-center space-x-2">
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Stay Updated</h2>
          <p className="text-slate-300 mb-6">
            Subscribe to our newsletter to get the latest tutorials, release notes, and tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"
            />
            <button className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
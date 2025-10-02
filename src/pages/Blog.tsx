import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const posts = [
    {
      title: "Building Dynamic Skeleton Loaders in React the Easy Way",
      excerpt:
        "Skeleton loaders keep users engaged while data is being fetched, but writing custom skeletons for every component quickly becomes repetitive.",
      author: "Sinan Mp",
      date: "Sep 29",
      readTime: "3 min read",
      category: "react, javascript, webdev, frontend",
      featured: true,
      link: "https://dev.to/sinan0333/building-dynamic-skeleton-loaders-in-react-the-easy-way-1fae",
    },
    {
      title: "How to Create Smart and Dynamic Skeleton Loaders in React",
      excerpt:
        "Learn how to add smart, dynamic skeleton loaders in React. Simplify loading states, reduce boilerplate, and improve your app's UI/UX…",
      author: "Sinan M P",
      date: "Sep 29",
      readTime: "3 min read",
      category: "React, Front End Development, Skeleton Loading",
      featured: true,
      link: "https://medium.com/@sinan0333/how-to-create-smart-and-dynamic-skeleton-loaders-in-react-fba84e6af8f6",
    },
  ];

  const categories = [
    "All",
    "Tutorial",
    "UX Design",
    "Configuration",
    "Case Study",
  ];

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
            Tutorials, release notes, and insights from the React Skeletonify
            team
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                onClick={() => setSelectedCategory(category)}
                key={category}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  category === selectedCategory
                    ? "bg-slate-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {posts
          .filter((post) => post.featured)
          .map((post) => (
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {post.title}
                </h2>
                <p className="text-slate-300 text-lg mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-slate-400">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={post.link} target="_blank">
                    <button className="flex items-center space-x-2 bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <article
                key={index}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
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
          <h2 className="text-2xl font-semibold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-300 mb-6">
            Subscribe to our newsletter to get the latest tutorials, release
            notes, and tips delivered to your inbox.
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

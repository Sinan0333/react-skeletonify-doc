import { useState } from "react";
import {
  Copy,
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  MapPin,
  ShoppingCart,
  Star,
  Heart,
} from "lucide-react";
import { SkeletonWrapper } from "react-skeletonify";

export default function Examples() {
  const [activeExample, setActiveExample] = useState(0);
  const [showSkeleton, setShowSkeleton] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleSkeleton = (index: number) => {
    setShowSkeleton((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const examples = [
    {
      title: "User Profile Card",
      description: "Complete profile card with avatar and contact info",
      code: `import { SkeletonWrapper } from 'react-skeletonify';
import 'react-skeletonify/dist/index.css';

function ProfileCard({ loading }) {
  return (
    <SkeletonWrapper loading={loading}>
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            src="/avatar.jpg"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg">
              Jane Doe
            </h3>
            <p className="text-gray-600">
              Frontend Developer
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>jane.doe@example.com</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </SkeletonWrapper>
  );
}`,
      preview: (loading: boolean) => (
        <SkeletonWrapper
          loading={loading}
          overrideConfig={{ borderRadius: "15px", textTagsMargin: "2px 0" }}>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <User className="w-8 h-8 text-black" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 text-gray-900">
                  Jane Doe
                </h3>
                <p className="text-sm text-gray-600">Frontend Developer</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span>jane.doe@example.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </SkeletonWrapper>
      ),
    },
    {
      title: "Product Card",
      description: "E-commerce product with image, price, and actions",
      code: `import { SkeletonWrapper } from 'react-skeletonify';

function ProductCard({ loading }) {
  return (
    <SkeletonWrapper
      loading={loading}
      overrideConfig={{
        exceptTags: ["button"],
        borderRadius: "12px"
      }}
    >
      <div className="bg-white rounded-lg overflow-hidden">
        <img
          src="/product.jpg"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">
            Premium Wireless Headphones
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            High-quality sound with active noise cancellation
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              $199.99
            </span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </SkeletonWrapper>
  );
}`,
      preview: (loading: boolean) => (
        <SkeletonWrapper
          loading={loading}
          overrideConfig={{ exceptTags: ["button"], borderRadius: "12px" }}>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500">
              <ShoppingCart className="w-16 h-16 text-white opacity-50" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Premium Wireless Headphones
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                High-quality sound with active noise cancellation
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-blue-600">
                  $199.99
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </SkeletonWrapper>
      ),
    },
    {
      title: "Blog Post Card",
      description: "Article preview with metadata and tags",
      code: `import { SkeletonWrapper } from 'react-skeletonify';

function BlogCard({ loading }) {
  return (
    <SkeletonWrapper
      loading={loading}
      overrideConfig={{
        animation: "animation-2",
        exceptTags: ["a"]
      }}
    >
      <article className="bg-white p-6 rounded-lg">
        <div className="flex items-center space-x-2 mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
            Tutorial
          </span>
          <span className="text-gray-500 text-sm">
            5 min read
          </span>
        </div>
        <h2 className="text-xl font-bold mb-2">
          Getting Started with React Skeletonify
        </h2>
        <p className="text-gray-600 mb-4">
          Learn how to create beautiful skeleton loaders
          in your React applications with zero overrideConfiguration.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            March 15, 2024
          </span>
          <a href="#" className="text-blue-600 hover:underline">
            Read more →
          </a>
        </div>
      </article>
    </SkeletonWrapper>
  );
}`,
      preview: (loading: boolean) => (
        <SkeletonWrapper
          loading={loading}
          overrideConfig={{ animation: "animation-2", exceptTags: ["a"] }}>
          <article className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-600">
                Tutorial
              </span>
              <span className="text-sm text-gray-500">5 min read</span>
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              Getting Started with React Skeletonify
            </h2>
            <p className="text-gray-600 mb-4">
              Learn how to create beautiful skeleton loaders in your React
              applications with zero overrideConfiguration.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">March 15, 2024</span>
              <a href="#" className="text-blue-600 hover:underline">
                Read more →
              </a>
            </div>
          </article>
        </SkeletonWrapper>
      ),
    },
    {
      title: "Notification List",
      description: "Multiple notification items with timestamps",
      code: `import { SkeletonWrapper } from 'react-skeletonify';

function NotificationList({ loading }) {
  const notifications = [
    { text: "New comment on your post", time: "2m ago" },
    { text: "John liked your photo", time: "1h ago" },
    { text: "New follower: Sarah", time: "3h ago" }
  ];

  return (
    <SkeletonWrapper loading={loading}>
      <div className="bg-white rounded-lg divide-y">
        {notifications.map((notif, i) => (
          <div key={i} className="p-4 hover:bg-gray-50">
            <p className="text-gray-900 mb-1">
              {notif.text}
            </p>
            <span className="text-sm text-gray-500">
              {notif.time}
            </span>
          </div>
        ))}
      </div>
    </SkeletonWrapper>
  );
}`,
      preview: (loading: boolean) => (
        <SkeletonWrapper loading={loading}>
          <div className="bg-white rounded-lg divide-y shadow-sm">
            {[
              { text: "New comment on your post", time: "2m ago" },
              { text: "John liked your photo", time: "1h ago" },
              { text: "New follower: Sarah", time: "3h ago" },
            ].map((notif, i) => (
              <div key={i} className="p-4 hover:bg-gray-50 transition-colors">
                <p className="mb-1 text-gray-900">{notif.text}</p>
                <span className="text-sm text-gray-500">{notif.time}</span>
              </div>
            ))}
          </div>
        </SkeletonWrapper>
      ),
    },
    {
      title: "Review Card",
      description: "User review with rating and avatar",
      code: `import { SkeletonWrapper } from 'react-skeletonify';

function ReviewCard({ loading }) {
  return (
    <SkeletonWrapper
      loading={loading}
      overrideConfig={{
        borderRadius: "8px",
        animation: "animation-2"
      }}
    >
      <div className="bg-white p-6 rounded-lg">
        <div className="flex items-start space-x-3 mb-3">
          <img
            src="/reviewer.jpg"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h4 className="font-semibold">Michael Chen</h4>
            <div className="flex items-center mt-1">
              {[1,2,3,4,5].map(star => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-2">
          Absolutely love this product! The quality exceeded
          my expectations and it arrived quickly.
        </p>
        <span className="text-sm text-gray-500">
          Verified Purchase • 2 days ago
        </span>
      </div>
    </SkeletonWrapper>
  );
}`,
      preview: (loading: boolean) => (
        <SkeletonWrapper
          loading={loading}
          overrideConfig={{ borderRadius: "8px", animation: "animation-2" }}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 text-gray-900">
                  Michael Chen
                </h4>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
            <p className="text-gray-700 mb-2">
              Absolutely love this product! The quality exceeded my expectations
              and it arrived quickly.
            </p>
            <span className="text-sm text-gray-500">
              Verified Purchase • 2 days ago
            </span>
          </div>
        </SkeletonWrapper>
      ),
    },
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Live Examples</h1>
          <p className="text-xl text-slate-300">
            Interactive examples showing real components with skeleton states.
            Toggle to see the transformation!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden sticky top-24">
              <div className="p-6 border-b border-slate-700">
                <h2 className="text-lg font-semibold text-white">
                  Choose Example
                </h2>
              </div>
              <div className="space-y-1 p-2">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExample(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeExample === index
                        ? "bg-slate-700 text-white"
                        : "text-slate-300 hover:bg-slate-700/50"
                    }`}>
                    <div className="font-medium">{example.title}</div>
                    <div className="text-sm text-slate-400 mt-1">
                      {example.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white">
                  {examples[activeExample].title}
                </h3>
                <button
                  onClick={() => copyToClipboard(examples[activeExample].code)}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors">
                  <Copy className="h-4 w-4" />
                  <span className="text-sm">Copy Code</span>
                </button>
              </div>
              <div className="p-6">
                <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                  <pre className="text-slate-300 font-mono text-sm">
                    <code>{examples[activeExample].code}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-slate-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Live Preview
                  </h3>
                </div>
                <button
                  onClick={() => toggleSkeleton(activeExample)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    showSkeleton[activeExample]
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}>
                  {showSkeleton[activeExample] ? (
                    <>
                      <EyeOff className="h-4 w-4" />
                      <span className="text-sm font-medium">Hide Skeleton</span>
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4" />
                      <span className="text-sm font-medium">Show Skeleton</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-8 bg-gradient-to-br from-slate-700 to-slate-800">
                <div className="max-w-md mx-auto">
                  {examples[activeExample].preview(showSkeleton[activeExample])}
                </div>
              </div>
              <div className="p-4 bg-slate-750 border-t border-slate-700">
                <p className="text-slate-400 text-sm text-center">
                  {showSkeleton[activeExample]
                    ? "🎭 Skeleton mode active - This is how users see content while loading"
                    : "✨ Normal mode - This is the final rendered content"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

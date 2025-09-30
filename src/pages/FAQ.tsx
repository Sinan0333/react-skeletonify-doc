import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How does React Skeletonify work?",
      answer: "React Skeletonify works by replacing your content with animated placeholder elements while data is loading. It uses CSS animations and React components to create smooth loading states that match your UI structure. The library automatically detects when content is ready and seamlessly transitions from skeleton to actual content."
    },
    {
      question: "How do I exclude certain elements from skeleton loading?",
      answer: "You can exclude elements by wrapping them in a SkeletonTheme provider with the 'enabled' prop set to false, or by conditionally rendering skeleton components only when needed. You can also use the 'skip' prop on individual Skeleton components to exclude specific elements from the loading state."
    },
    {
      question: "How does this compare to static loading spinners?",
      answer: "Unlike static spinners, React Skeletonify provides contextual loading states that match your actual content structure. This gives users a better sense of what's coming and reduces perceived loading time. Studies show that skeleton screens can make loading feel up to 30% faster compared to blank screens or spinners."
    },
    {
      question: "Can I customize the animation speed and style?",
      answer: "Yes! You can customize animation duration, easing, colors, and even disable animations entirely. Use the SkeletonTheme provider to set global defaults, or override individual skeleton components with custom props. The library supports both pulse and wave animations out of the box."
    },
    {
      question: "Is React Skeletonify accessible?",
      answer: "Absolutely. The library includes proper ARIA labels, respects prefers-reduced-motion settings, and works with screen readers. Skeleton elements are announced as 'loading' to assistive technologies, and the library automatically handles focus management during transitions."
    },
    {
      question: "What's the bundle size impact?",
      answer: "React Skeletonify is lightweight at just 3.2KB gzipped. It has zero dependencies beyond React and uses modern CSS features for animations. The library is tree-shakeable, so you only bundle the components you actually use."
    },
    {
      question: "Can I use it with Next.js and SSR?",
      answer: "Yes, React Skeletonify works perfectly with Next.js, Gatsby, and other SSR frameworks. The library handles hydration gracefully and includes utilities for server-side rendering. You can even pre-render skeleton states for faster initial page loads."
    },
    {
      question: "How do I handle different screen sizes?",
      answer: "The library is fully responsive by default. You can use CSS media queries, Tailwind responsive classes, or pass different props based on screen size. The SkeletonTheme provider also accepts responsive configuration objects for breakpoint-specific styling."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-slate-300" />
            </div>
            <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl text-slate-300">
            Common questions about React Skeletonify and how to use it effectively
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6 border-t border-slate-700">
                  <p className="text-slate-300 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Still have questions?</h2>
          <p className="text-slate-300 mb-6">
            Can't find what you're looking for? Feel free to reach out to our community or create an issue on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors">
              Join Discord Community
            </button>
            <button className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
              Create GitHub Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
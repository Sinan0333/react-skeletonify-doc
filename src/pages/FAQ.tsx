import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is React Skeletonify?",
      answer:
        "React Skeletonify is a lightweight React package for creating dynamic skeleton loaders. It automatically generates skeletons for your components by simply wrapping them, saving time and reducing boilerplate code.",
    },
    {
      question:
        "How is React Skeletonify different from other skeleton libraries?",
      answer:
        "Unlike traditional skeleton libraries where you design skeletons for each component manually, React Skeletonify dynamically creates skeletons by wrapping components. You can also configure styles globally and locally with minimal effort.",
    },
    {
      question: "How do I install React Skeletonify?",
      answer:
        "You can install it using npm or yarn:\n```bash\nnpm install react-skeletonify\n```\n or \n```bash\nyarn add react-skeletonify\n```",
    },
    {
      question: "Do I need to design skeletons separately for each component?",
      answer:
        "No. That’s the main advantage of React Skeletonify. You only need to wrap your existing component with `SkeletonWrapper`, and it will generate the skeleton automatically.",
    },
    {
      question: "Can I customize the skeleton styles?",
      answer:
        "Yes, you can customize styles both globally (using `SkeletonProvider`) and locally (using props on `SkeletonWrapper`). This includes color, border radius, animation speed, and excluded tags.",
    },
    {
      question: "What are tag groups in React Skeletonify?",
      answer:
        "Tag groups are predefined sets of HTML elements like `TEXT_TAGS`, `STRUCTURE_TAGS`, `LIST_TAGS`, and `FORM_TAGS`. You can use these to easily exclude or include certain elements from skeleton rendering.",
    },
    {
      question: "Does it support animations?",
      answer:
        "Yes, React Skeletonify comes with built-in shimmer animations for a smooth loading experience. You can also adjust the animation duration and style.",
    },
    {
      question: "Is React Skeletonify beginner-friendly?",
      answer:
        "Absolutely! The package is designed to be simple. Even beginners can set up skeleton loaders in minutes without writing repetitive skeleton components.",
    },
    {
      question: "Can I use it with existing projects?",
      answer:
        "Yes. React Skeletonify works seamlessly with existing projects. Just install the package, wrap your components, and you’re ready to go.",
    },
    {
      question: "What license does React Skeletonify use?",
      answer:
        "React Skeletonify is open-source and licensed under the MIT License, so you can use it freely in personal and commercial projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-slate-300" />
            </div>
            <h1 className="text-4xl font-bold text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-slate-300">
            Common questions about React Skeletonify and how to use it
            effectively
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors">
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6 border-t border-slate-700">
                  <p className="text-slate-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-300 mb-6">
            Can't find what you're looking for? Feel free to reach out to our
            community or create an issue on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={"https://www.linkedin.com/in/mohammed-sinan-mp"}
              target="_blank">
              <button className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors">
                Connect With Creator
              </button>
            </Link>
            <Link
              to={"https://github.com/Sinan0333/react-skeletonify/issues"}
              target="_blank">
              <button className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
                Create GitHub Issue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

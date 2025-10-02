import {
  GitBranch,
  Users,
  Code,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import useGetPackageDetails from "../hooks/useGetPackageDetails";

export default function Contributing() {
  const { contributorsCount, pullCount, starsCount } = useGetPackageDetails();
  const steps = [
    {
      title: "Fork the Repository",
      description:
        "Start by forking the React Skeletonify repository to your GitHub account.",
      code: "git clone https://github.com/Sinan0333/react-skeletonify.git",
    },
    {
      title: "Set Up Development Environment",
      description:
        "Install dependencies and set up the development environment.",
      code: "npm install && npm run dev",
    },
    {
      title: "Create a Feature Branch",
      description: "Create a new branch for your feature or bug fix.",
      code: "git checkout -b feature/your-feature-name",
    },
    {
      title: "Make Your Changes",
      description:
        "Implement your feature or fix following our coding standards.",
      code: "# Make your changes and test thoroughly",
    },
    {
      title: "Run Tests",
      description: "Ensure all tests pass and add new tests for your changes.",
      code: "npm test && npm run test:coverage",
    },
    {
      title: "Submit Pull Request",
      description:
        "Push your changes and create a pull request with a clear description.",
      code: "git push origin feature/your-feature-name",
    },
  ];

  const guidelines = [
    {
      title: "Code Style",
      items: [
        "Use TypeScript for all new code",
        "Follow ESLint and Prettier configurations",
        "Use meaningful variable and function names",
        "Add JSDoc comments for public APIs",
      ],
    },
    {
      title: "Testing",
      items: [
        "Write unit tests for all new features",
        "Maintain test coverage above 90%",
        "Test accessibility features",
        "Include integration tests for complex features",
      ],
    },
    {
      title: "Documentation",
      items: [
        "Update README.md for new features",
        "Add examples to the documentation site",
        "Include TypeScript type definitions",
        "Write clear commit messages",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-slate-300" />
            </div>
            <h1 className="text-4xl font-bold text-white">
              Contributing Guide
            </h1>
          </div>
          <p className="text-xl text-slate-300">
            Help us make React Skeletonify better for everyone. Here's how you
            can contribute.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
            <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GitBranch className="h-6 w-6 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {contributorsCount}
            </h3>
            <p className="text-slate-300">Contributors</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
            <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{pullCount}</h3>
            <p className="text-slate-300">Pull Requests</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
            <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {starsCount}
            </h3>
            <p className="text-slate-300">GitHub Stars</p>
          </div>
        </div>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Getting Started
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 mb-4">{step.description}</p>
                    <div className="bg-gray-900 rounded-lg p-4 border border-slate-600">
                      <code className="text-slate-300 font-mono text-sm">
                        {step.code}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coding Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Coding Guidelines
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {guideline.title}
                </h3>
                <ul className="space-y-3">
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Issue Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Types of Contributions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">
                  Good First Issues
                </h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Documentation improvements</li>
                <li>• Adding new examples</li>
                <li>• Fixing typos and formatting</li>
                <li>• Writing tests for existing features</li>
                <li>• Improving error messages</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="h-6 w-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">
                  Advanced Contributions
                </h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• New animation types</li>
                <li>• Performance optimizations</li>
                <li>• Accessibility improvements</li>
                <li>• Framework integrations</li>
                <li>• Core architecture changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-slate-300 mb-6">
            Connect with other contributors and maintainers. Get help, share
            ideas, and collaborate on making React Skeletonify better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={"https://github.com/Sinan0333/react-skeletonify/discussions"}
              target="_blank">
              <button className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
                GitHub Discussions
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Code, Zap, Settings2, Tag, Palette, Package } from "lucide-react";
import useGetPackageDetails from "../hooks/useGetPackageDetails";
import useGetDocDetails from "../hooks/useGetDocDetails";
import convertDate from "../utils/convertDate";

export default function ApiReference() {
  const { version } = useGetPackageDetails();
  const { lastUpdatedAt } = useGetDocDetails();

  const hooks = [
    {
      name: "useSkeleton",
      description: "Hook to access the skeleton configuration context",
      returns: "SkeletonConfig",
      usage: "const config = useSkeleton();",
    },
  ];

  const components = [
    {
      name: "SkeletonWrapper",
      description:
        "Smart wrapper component that automatically creates skeleton placeholders for your components",
      props: [
        {
          name: "loading",
          type: "boolean",
          default: "false",
          description: "Controls whether to show skeleton or actual content",
        },
        {
          name: "children",
          type: "ReactNode",
          default: "-",
          description: "The component to wrap with skeleton functionality",
        },
        {
          name: "overrideConfig",
          type: "SkeletonConfig",
          default: "{}",
          description: "Optional configuration to override global settings",
        },
        {
          name: "style",
          type: "CSSProperties",
          default: "{}",
          description: "Inline style overrides",
        },
      ],
    },
    {
      name: "SkeletonProvider",
      description:
        "Provider component for setting global skeleton configuration across your entire app",
      props: [
        {
          name: "config",
          type: "SkeletonConfig",
          default: "{}",
          description: "Global configuration object",
        },
        {
          name: "children",
          type: "ReactNode",
          default: "-",
          description: "Your app components",
        },
        {
          name: "style",
          type: "CSSProperties",
          default: "{}",
          description: "Inline style overrides",
        },
      ],
    },
  ];

  const configOptions = [
    {
      name: "animation",
      type: '"animation-1" | "animation-2"',
      default: '"animation-1"',
      description: "Choose animation style",
    },
    {
      name: "animationSpeed",
      type: "number",
      default: "3",
      description: "Animation duration in seconds",
    },
    {
      name: "background",
      type: "string",
      default: '"#aeaeae"',
      description: "Background color for skeleton elements",
    },
    {
      name: "border",
      type: "string",
      default: '"none"',
      description: "Border style for skeleton elements",
    },
    {
      name: "borderRadius",
      type: "string",
      default: '"0"',
      description: "Border radius for skeleton elements",
    },
    {
      name: "textTagsMargin",
      type: "string",
      default: '"0"',
      description: "Margin for text tags in skeleton elements",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional CSS class names",
    },
    {
      name: "style",
      type: "CSSProperties",
      default: "{}",
      description: "Inline style overrides",
    },
    {
      name: "exceptTags",
      type: "string[]",
      default: "[]",
      description: "Array of HTML tags to exclude from skeleton rendering",
    },
    {
      name: "exceptTagGroups",
      type: "HtmlTagGroup[]",
      default: "[]",
      description:
        "Array of HTML tag groups to exclude from skeleton rendering",
    },
  ];

  const htmlTagGroups = [
    {
      name: "TEXT_TAGS",
      description: "Text & Content",
      tags: [
        "p",
        "span",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "b",
        "strong",
        "i",
        "em",
        "u",
        "mark",
        "small",
        "sup",
        "sub",
        "abbr",
        "cite",
        "q",
        "blockquote",
        "code",
        "pre",
        "samp",
        "kbd",
        "var",
        "time",
        "br",
        "wbr",
      ],
    },
    {
      name: "STRUCTURE_TAGS",
      description: "Sectioning / Structure",
      tags: [
        "html",
        "head",
        "body",
        "main",
        "header",
        "footer",
        "nav",
        "section",
        "article",
        "aside",
      ],
    },
    {
      name: "METADATA_TAGS",
      description: "Metadata",
      tags: ["base", "link", "meta", "style", "title"],
    },
    {
      name: "LIST_TAGS",
      description: "Lists",
      tags: ["ul", "ol", "li", "dl", "dt", "dd"],
    },
    {
      name: "TABLE_TAGS",
      description: "Tables",
      tags: [
        "table",
        "caption",
        "thead",
        "tbody",
        "tfoot",
        "tr",
        "th",
        "td",
        "col",
        "colgroup",
      ],
    },
    {
      name: "FORM_TAGS",
      description: "Forms & Inputs",
      tags: [
        "form",
        "input",
        "textarea",
        "button",
        "label",
        "select",
        "option",
        "optgroup",
        "fieldset",
        "legend",
        "datalist",
        "output",
        "meter",
        "progress",
      ],
    },
    {
      name: "MEDIA_TAGS",
      description: "Media",
      tags: [
        "img",
        "audio",
        "video",
        "source",
        "track",
        "picture",
        "iframe",
        "embed",
        "object",
        "map",
        "area",
        "canvas",
      ],
    },
    {
      name: "INTERACTIVE_TAGS",
      description: "Interactive",
      tags: ["details", "summary", "dialog", "script", "noscript", "template"],
    },
    {
      name: "MISC_TAGS",
      description: "Other / Inline semantics",
      tags: ["ins", "del", "s", "bdi", "bdo", "ruby", "rt", "rp"],
    },
  ];

  const defaultBackgrounds = [
    { animation: "animation-1", background: "#aeaeae" },
    { animation: "animation-2", background: "#e5e5e5" },
    // { animation: "animation-3", background: "hsl(210, 20%, 90%)" },
  ];

  const animations = [
    {
      name: "animation-1",
      description: "Pulse/fade effect that transitions opacity",
      keyframes:
        "0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; }",
    },
    {
      name: "animation-2",
      description: "Shimmer/wave effect with moving background",
      keyframes: "100% { background-position: -100% 0; }",
    },
    // {
    //   name: "animation-3",
    //   description: "Color alternating effect between light shades",
    //   keyframes: "0% { background-color: hsl(200, 20%, 80%); } 100% { background-color: hsl(200, 20%, 95%); }",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                API Reference
              </h1>
              <p className="text-xl text-slate-300">
                Complete API documentation for all components, hooks, and
                utilities
              </p>
            </div>
            {/* <div className="flex flex-col items-end space-y-2">
              <div className="bg-slate-700 px-4 py-2 rounded-lg">
                <span className="text-slate-400 text-sm">Package Version</span>
                <p className="text-white font-semibold">v2.0.0</p>
              </div>
              <div className="text-slate-400 text-sm text-right">
                <p>Last Updated</p>
                <p className="text-slate-300">October 2, 2025</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="space-y-12">
          {/* Package Exports Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">
                Package Exports
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              {/* <div className="mb-4">
                <p className="text-slate-300 mb-3">
                  Install the latest version:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto mb-4">
                  <pre className="text-slate-300 font-mono text-sm">
                    {`npm install react-skeletonify@latest`}
                  </pre>
                </div>
              </div> */}
              <p className="text-slate-300 mb-4">
                All exported components, hooks, and types from
                react-skeletonify:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                <pre className="text-slate-300 font-mono text-sm">
                  {`import {
  SkeletonWrapper,
  SkeletonProvider,
  useSkeleton,
  type SkeletonConfig
} from 'react-skeletonify';

// Don't forget to import the CSS
import 'react-skeletonify/dist/index.css';`}
                </pre>
              </div>
            </div>
          </section>

          {/* Components Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">Components</h2>
            </div>

            <div className="space-y-8">
              {components.map((component, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <div className="p-6 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {component.name}
                    </h3>
                    <p className="text-slate-300">{component.description}</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-700">
                        <tr>
                          <th className="text-left p-4 text-slate-200 font-medium">
                            Prop
                          </th>
                          <th className="text-left p-4 text-slate-200 font-medium">
                            Type
                          </th>
                          <th className="text-left p-4 text-slate-200 font-medium">
                            Default
                          </th>
                          <th className="text-left p-4 text-slate-200 font-medium">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {component.props.map((prop, propIndex) => (
                          <tr
                            key={propIndex}
                            className="border-t border-slate-700">
                            <td className="p-4 text-slate-300 font-mono text-sm">
                              {prop.name}
                            </td>
                            <td className="p-4 text-slate-400 font-mono text-sm">
                              {prop.type}
                            </td>
                            <td className="p-4 text-slate-400 font-mono text-sm">
                              {prop.default}
                            </td>
                            <td className="p-4 text-slate-300 text-sm">
                              {prop.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hooks Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">Hooks</h2>
            </div>

            <div className="space-y-8">
              {hooks.map((hook, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <div className="p-6 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {hook.name}
                    </h3>
                    <p className="text-slate-300 mb-3">{hook.description}</p>
                    <div className="bg-gray-900 rounded-lg p-3 border border-slate-600">
                      <code className="text-slate-300 font-mono text-sm">
                        {hook.usage}
                      </code>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-750">
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 text-sm">Returns:</span>
                      <code className="text-slate-300 font-mono text-sm">
                        {hook.returns}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Configuration Options Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Settings2 className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">
                Configuration Options
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-2">
                  SkeletonConfig
                </h3>
                <p className="text-slate-300">
                  Configuration object accepted by both SkeletonProvider and
                  SkeletonWrapper
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="text-left p-4 text-slate-200 font-medium">
                        Option
                      </th>
                      <th className="text-left p-4 text-slate-200 font-medium">
                        Type
                      </th>
                      <th className="text-left p-4 text-slate-200 font-medium">
                        Default
                      </th>
                      <th className="text-left p-4 text-slate-200 font-medium">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {configOptions.map((option, index) => (
                      <tr key={index} className="border-t border-slate-700">
                        <td className="p-4 text-slate-300 font-mono text-sm">
                          {option.name}
                        </td>
                        <td className="p-4 text-slate-400 font-mono text-sm">
                          {option.type}
                        </td>
                        <td className="p-4 text-slate-400 font-mono text-sm">
                          {option.default}
                        </td>
                        <td className="p-4 text-slate-300 text-sm">
                          {option.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* HTML Tag Groups Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Tag className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">
                HTML Tag Groups
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <p className="text-slate-300 mb-6">
                Available tag groups that can be used with the{" "}
                <span className="font-mono text-slate-200">
                  exceptTagGroups
                </span>{" "}
                configuration option:
              </p>
              <div className="space-y-4">
                {htmlTagGroups.map((group, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 border border-slate-600 rounded-lg p-4">
                    <div className="flex items-baseline space-x-3 mb-3">
                      <code className="text-slate-200 font-semibold text-sm">
                        {group.name}
                      </code>
                      <span className="text-slate-400 text-sm">
                        {group.description}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-xs font-mono text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Default Backgrounds Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Palette className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">
                Default Backgrounds
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700">
                <p className="text-slate-300">
                  Default background colors for each animation style:
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="text-left p-4 text-slate-200 font-medium">
                        Animation
                      </th>
                      <th className="text-left p-4 text-slate-200 font-medium">
                        Default Background
                      </th>
                      <th className="text-left p-4 text-slate-200 font-medium">
                        Preview
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {defaultBackgrounds.map((item, index) => (
                      <tr key={index} className="border-t border-slate-700">
                        <td className="p-4 text-slate-300 font-mono text-sm">
                          {item.animation}
                        </td>
                        <td className="p-4 text-slate-400 font-mono text-sm">
                          {item.background}
                        </td>
                        <td className="p-4">
                          <div
                            className="w-20 h-8 rounded border border-slate-600"
                            style={{ backgroundColor: item.background }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Animations Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">
                Animation Styles
              </h2>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <p className="text-slate-300 mb-6">
                Available CSS animations with their keyframe definitions:
              </p>
              <div className="space-y-4">
                {animations.map((anim, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 border border-slate-600 rounded-lg p-4">
                    <div className="flex items-baseline space-x-3 mb-2">
                      <code className="text-slate-200 font-semibold text-sm">
                        {anim.name}
                      </code>
                      <span className="text-slate-400 text-sm">
                        {anim.description}
                      </span>
                    </div>
                    <div className="bg-gray-950 rounded-lg p-3 border border-slate-700">
                      <code className="text-slate-400 font-mono text-xs">
                        @keyframes react-skeletonify-{anim.name} {"{"}
                        <br />
                        <span className="ml-4">{anim.keyframes}</span>
                        <br />
                        {"}"}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-slate-900 border border-slate-600 rounded-lg">
                <p className="text-slate-300 text-sm">
                  <span className="font-semibold">Note:</span> The package
                  automatically applies the{" "}
                  <code className="text-slate-200 font-mono text-xs">
                    .react-skeletonify
                  </code>{" "}
                  class with these animations. Import the CSS file to enable
                  skeleton styles:
                </p>
                <div className="mt-3 bg-gray-950 rounded p-3 border border-slate-700">
                  <code className="text-slate-400 font-mono text-xs">
                    import 'react-skeletonify/dist/index.css';
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Examples Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">
                Usage Examples
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Basic Usage
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                  <pre className="text-slate-300 font-mono text-sm">
                    {`import { SkeletonWrapper } from 'react-skeletonify';
import "react-skeletonify/dist/index.css";

function MyComponent({ loading }) {
  return (
    <SkeletonWrapper loading={loading}>
      <div>
        <h1>Title</h1>
        <p>Content goes here</p>
      </div>
    </SkeletonWrapper>
  );
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  With Global Configuration
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                  <pre className="text-slate-300 font-mono text-sm">
                    {`import { SkeletonProvider } from 'react-skeletonify';

function App() {
  return (
    <SkeletonProvider
      config={{
        animation: "animation-1",
        animationSpeed: 3,
        background: "#aeaeae",
        border: "none",
        borderRadius: "8px",
        textTagsMargin: "0",
        exceptTags: ["button"],
        exceptTagGroups: ["FORM_TAGS"]
      }}
    >
      <YourApp />
    </SkeletonProvider>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Version Information Footer */}
          <section>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Package className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Documentation Status
                  </h3>
                  <div className="space-y-2 text-slate-300 text-sm">
                    <p>
                      <span className="font-semibold text-slate-200">
                        Current Package Version:
                      </span>{" "}
                      v{version}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-200">
                        Documentation Last Updated:
                      </span>{" "}
                      {convertDate(lastUpdatedAt)}
                    </p>
                    <p className="text-slate-400 mt-3">
                      This documentation is maintained for the latest stable
                      release. If you're using an older version, some features
                      may not be available. Always use the latest version for
                      the best experience and newest features.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">
                      Documentation Up to Date
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

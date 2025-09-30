import React from 'react';
import { Code, FileText, Zap, Settings2 } from 'lucide-react';

export default function ApiReference() {
  const components = [
    {
      name: 'Skeleton',
      description: 'The main skeleton component for creating loading placeholders',
      props: [
        { name: 'height', type: 'number | string', default: '16', description: 'Height of the skeleton element' },
        { name: 'width', type: 'number | string', default: '100%', description: 'Width of the skeleton element' },
        { name: 'borderRadius', type: 'number', default: '4', description: 'Border radius in pixels' },
        { name: 'animation', type: "'pulse' | 'wave' | 'none'", default: "'pulse'", description: 'Animation type' },
        { name: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
      ]
    },
    {
      name: 'SkeletonTheme',
      description: 'Provider component for customizing skeleton appearance globally',
      props: [
        { name: 'baseColor', type: 'string', default: '#ebebeb', description: 'Base color of skeleton elements' },
        { name: 'highlightColor', type: 'string', default: '#f5f5f5', description: 'Highlight color for animations' },
        { name: 'borderRadius', type: 'number', default: '4', description: 'Default border radius' },
        { name: 'duration', type: 'number', default: '1.2', description: 'Animation duration in seconds' },
      ]
    }
  ];

  const hooks = [
    {
      name: 'useSkeletonTheme',
      description: 'Hook to access current skeleton theme configuration',
      returns: 'SkeletonThemeConfig',
      example: 'const theme = useSkeletonTheme();'
    },
    {
      name: 'useSkeletonAnimation',
      description: 'Hook to control skeleton animation state',
      returns: '{ isAnimating: boolean, toggle: () => void }',
      example: 'const { isAnimating, toggle } = useSkeletonAnimation();'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">API Reference</h1>
          <p className="text-xl text-slate-300">
            Complete API documentation for all components, hooks, and utilities
          </p>
        </div>

        <div className="space-y-12">
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
                <div key={index} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <div className="p-6 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white mb-2">{component.name}</h3>
                    <p className="text-slate-300">{component.description}</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-700">
                        <tr>
                          <th className="text-left p-4 text-slate-200 font-medium">Prop</th>
                          <th className="text-left p-4 text-slate-200 font-medium">Type</th>
                          <th className="text-left p-4 text-slate-200 font-medium">Default</th>
                          <th className="text-left p-4 text-slate-200 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {component.props.map((prop, propIndex) => (
                          <tr key={propIndex} className="border-t border-slate-700">
                            <td className="p-4 text-slate-300 font-mono text-sm">{prop.name}</td>
                            <td className="p-4 text-slate-400 font-mono text-sm">{prop.type}</td>
                            <td className="p-4 text-slate-400 font-mono text-sm">{prop.default}</td>
                            <td className="p-4 text-slate-300 text-sm">{prop.description}</td>
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

            <div className="space-y-6">
              {hooks.map((hook, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-2">{hook.name}</h3>
                  <p className="text-slate-300 mb-4">{hook.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-slate-200 font-medium mb-2">Returns</h4>
                      <code className="text-slate-400 font-mono text-sm bg-gray-900 px-2 py-1 rounded">
                        {hook.returns}
                      </code>
                    </div>
                    <div>
                      <h4 className="text-slate-200 font-medium mb-2">Example</h4>
                      <code className="text-slate-400 font-mono text-sm bg-gray-900 px-2 py-1 rounded">
                        {hook.example}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Utilities Section */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-slate-700 w-10 h-10 rounded-lg flex items-center justify-center">
                <Settings2 className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white">Utilities</h2>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">CSS Variables</h3>
              <p className="text-slate-300 mb-6">
                Customize the appearance using CSS custom properties:
              </p>
              <div className="bg-gray-900 rounded-lg p-4 border border-slate-600 overflow-x-auto">
                <pre className="text-slate-300 font-mono text-sm">
{`:root {
  --skeleton-base-color: #ebebeb;
  --skeleton-highlight-color: #f5f5f5;
  --skeleton-border-radius: 4px;
  --skeleton-duration: 1.2s;
}`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
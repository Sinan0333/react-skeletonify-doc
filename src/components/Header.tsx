import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: "/docs", label: "Documentation" },
    // { path: "/examples", label: "Examples" },
    { path: "/api", label: "API Reference" },
    { path: "/faq", label: "FAQ" },
    { path: "/blog", label: "Blog" },
    { path: "/contributing", label: "Contributing" },
    { path: "/about", label: "About" },
  ];

  const externalLinks = [
    {
      name: "NPM",
      link: "https://www.npmjs.com/package/react-skeletonify",
      img: "/npm.png",
    },
    {
      name: "GitHub",
      link: "https://github.com/Sinan0333/react-skeletonify",
      img: "/github.png",
    },
  ];

  return (
    <header className="bg-gray-900 shadow-lg border-b border-gray-700 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img
                src="/react-skeletonify-non-bg-big.png"
                alt="React Skeletonify Logo"
                className="h-9 w-10 1"
              />
              <div className="block">
                <h1 className="text-xl font-bold text-white">
                  React Skeletonify
                </h1>
                <p className="text-sm text-slate-400">v2.0.0</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-white border-b-2 border-slate-500"
                    : "text-slate-300 hover:text-white"
                }`}>
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              {externalLinks.map((link) => (
                <Link to={link.link} target="_blank">
                  <img
                    src={link.img}
                    alt={link.name}
                    className="h-8 w-8 hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 border-b border-gray-700 shadow-lg z-50">
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "text-white bg-slate-800 border-l-4 border-slate-500"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}>
                  {link.label}
                </Link>
              ))}
              {externalLinks.map((link) => (
                <Link to={link.link} target="_blank">
                  <img
                    src={link.img}
                    alt={link.name}
                    className="h-8 w-8 hover:opacity-80 transition-opacity ml-4"
                  />
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

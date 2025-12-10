import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router DOM se Link import
import { Search, ChevronDown, Menu, X } from 'lucide-react'; // Icons
import logo from "../assets/logo.png"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown ke liye items ki list
  const serviceItems = [
    "Data Analysis",
    "AutoCAD",
    "Image Editing",
    "Mobile App Development",
    "SEO Service",
    "Social Media Services",
    "UI/UX Design",
    "Web Development"
  ];

  return (
    <header className="w-full bg-white shadow-md relative z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* --- Logo Section --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex gap-1">
              <img src={logo} className='h-10' alt="" />
              {/* Main Logo Text */}
              <div className='flex flex-col'>
                <span className="text-2xl font-bold text-blue-900 leading-tight">
                  LEVITE
                </span>
                <span className="text-xs font-semibold text-gray-500 tracking-widest">
                  TECH PRIVATE LIMITED
                </span>
              </div>
            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center space-x-18">
            <Link to="/" className="text-gray-800 hover:text-blue-700 font-bold text-sm uppercase transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-700 font-bold text-sm uppercase transition-colors">
              About
            </Link>

            {/* SERVICES Dropdown (Hover Effect) */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center gap-1 text-gray-800 group-hover:text-blue-700 font-bold text-sm uppercase transition-colors outline-none">
                Services
                <ChevronDown size={16} className="mt-0.5" />
              </button>

              {/* The Dropdown Menu */}
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-blue-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100 last:border-none uppercase transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Approach Removed as requested */}

            <Link to="/contact" className="text-gray-800 hover:text-blue-700 font-bold text-sm uppercase transition-colors">
              Contact Us
            </Link>
          </div>


          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Content --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" className="block px-3 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 hover:text-blue-600 uppercase">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 hover:text-blue-600 uppercase">
              About
            </Link>

            {/* Mobile Services Section */}
            <div className="px-3 py-3">
              <span className="block text-base font-bold text-gray-800 uppercase mb-2">Services</span>
              <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                {serviceItems.map((item, index) => (
                  <Link
                    key={index}
                    to={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="block text-sm font-medium text-gray-600 hover:text-blue-600 uppercase"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="block px-3 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 hover:text-blue-600 uppercase">
              Contact Us
            </Link>

            <div className="mt-4 px-3 flex items-center gap-3">
              <button className="p-2 bg-blue-800 text-white rounded w-10 h-10 flex items-center justify-center">
                <Search size={18} />
              </button>
              <Link to="/quote" className="flex-1 text-center bg-[#987d26] text-white px-4 py-2 rounded font-bold uppercase text-sm">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
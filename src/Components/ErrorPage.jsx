import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, MoveLeft, AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50 font-sans">
      <div className="text-center">
        
        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-blue-100 opacity-75"></div>
            <div className="relative bg-blue-50 p-4 rounded-full">
              <AlertTriangle size={64} className="text-blue-900" />
            </div>
          </div>
        </div>

        {/* Big 404 Text */}
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        
        {/* Main Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 -mt-12 mb-4 relative z-10">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 max-w-md mx-auto mb-8 text-base md:text-lg">
          Oops! Lagta hai aap kisi aisi jagah aa gaye hain jo exist nahi karti. 
          Link check karein ya home page par wapis jayein.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Go Back Button */}
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-900 hover:text-blue-900 transition-all duration-300 group"
          >
            <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          {/* Home Button (Primary Color) */}
          <Link 
            to="/" 
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 shadow-lg hover:shadow-blue-900/30 transition-all duration-300"
          >
            <Home size={20} />
            Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
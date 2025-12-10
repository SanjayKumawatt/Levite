import React from 'react';
// import { ArrowRight } from 'lucide-react'; // Agar icon chahiye to uncomment kar lena
import hero from "../assets/hero.png";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#4c1d95] via-[#3b82f6] to-[#06b6d4] flex items-center overflow-hidden font-sans">
      
      {/* --- Background Floating Elements --- */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-200 opacity-20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-white opacity-30 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* --- Left Content (Updated Text) --- */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide leading-tight uppercase">
              One Source, <br />
              Limitless <br />
              Possibilities
            </h1>
            
            <p className="text-sm md:text-base font-medium text-blue-100 uppercase tracking-wide max-w-lg leading-relaxed">
              Transforming ideas into high-impact digital realities. 
              From initial concept to final code, we engineer your path to digital success with absolute precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Button 1 */}
              <Link to={"/contact"}> 
              <button className="bg-[#987d26] hover:bg-[#856d20] text-white px-8 py-3.5 rounded font-bold uppercase text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Launch Your Project
              </button>
              </Link>
              
              
            </div>
          </div>

          {/* --- Right Content (Image) --- */}
          <div className="relative flex justify-center md:justify-end">
            <img 
              src={hero}
              alt="Digital Solutions Illustration" 
              className="w-full max-w-md md:max-w-lg object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* --- Bottom Wave Shape --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-0">
        <svg 
          className="relative block w-full h-[60px] md:h-[100px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
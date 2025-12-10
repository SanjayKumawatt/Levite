import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Checkmark icon ke liye
import img from "../assets/about.png";

const AboutSection = () => {
  
  // Features list based on the image
  const features = [
    "Digital Marketing",
    "Mobile App Development",
    "Web Development",
    "Social Media Services"
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden font-sans">
      
      {/* --- Background Network Pattern (Connected Lines) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
           <defs>
              <pattern id="about-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                 <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                 <path d="M0 100 L100 0" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5"/>
              </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12">
          <h3 className="text-blue-900 font-bold text-lg md:text-xl uppercase tracking-wider">
            Who We Are
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase mt-2 relative inline-block pb-4">
            About Levite Tech
            {/* Gold Underline */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Side: Illustration --- */}
          <div className="flex justify-center">
            <img 
              src={img} 
              alt="Levite Tech Team" 
              className="w-full max-w-md object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* --- Right Side: Content Card --- */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg shadow-2xl border-t-4 border-blue-600 relative">
            
            <h3 className="text-2xl font-bold text-blue-900 mb-2">ABOUT US</h3>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-6 tracking-wide">
              Welcome to Levite Tech: Unleashing Innovation in the Digital World
            </p>

            <div className="space-y-4 text-gray-600 text-justify text-sm leading-relaxed">
              <p>
                Welcome to <span className="font-bold text-blue-800">Levite Tech Private Limited</span>, where innovation meets excellence in the realm of Information Technology. Established with a vision to transform ideas into digital realities, we are a dynamic and forward-thinking IT company dedicated to delivering cutting-edge solutions.
              </p>
              <p>
                We have extended our expertise across Mobile App Development, Web Design, and Digital Marketing to serve as your one-stop source for infinite solutions. Our team is committed to crafting success stories through code and creativity.
              </p>
            </div>

            {/* --- Features Grid (Checkmarks) --- */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 group">
                  <CheckCircle2 size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-gray-700 uppercase group-hover:text-blue-800 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
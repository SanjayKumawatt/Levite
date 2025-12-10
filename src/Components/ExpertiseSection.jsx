import React from 'react';
import { FileCode2, Layers, MonitorSmartphone, Code2 } from 'lucide-react';

const ExpertiseSection = () => {
  
  // Tech Stack items positioned in a circle
  // Angle calculate kiya hai: 360 deg / 8 items = 45 deg per item
  const techItems = [
    { name: 'PHP', color: 'text-indigo-600', angle: 0, icon: <span className="font-bold text-lg">PHP</span> },
    { name: 'HTML', color: 'text-orange-600', angle: 45, icon: <FileCode2 size={24} /> },
    { name: 'Bootstrap', color: 'text-purple-700', angle: 90, icon: <span className="font-bold text-2xl">B</span> },
    { name: 'ASP.NET', color: 'text-blue-700', angle: 135, icon: <span className="font-bold text-sm">ASP.NET</span> },
    { name: 'WordPress', color: 'text-slate-700', angle: 180, icon: <span className="font-serif font-bold text-2xl">W</span> },
    { name: 'Angular', color: 'text-red-600', angle: 225, icon: <span className="font-bold text-sm">ANGULAR</span> },
    { name: 'React/Code', color: 'text-blue-400', angle: 270, icon: <Code2 size={24} /> },
    { name: 'SQL/Data', color: 'text-blue-500', angle: 315, icon: <Layers size={24} /> },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden font-sans">
      
      {/* --- Background Lines (Consistent with previous sections) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="expert-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                 <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#expert-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Title --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase relative inline-block pb-4">
            Our Expertise
            {/* Yellow Underline */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Side: Person Pointing Image --- */}
          <div className="flex justify-center md:justify-start relative">
             {/* Blob Background for Image */}
             <div className="absolute top-10 left-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10"></div>
             
             <img 
               src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
               alt="Expertise Presentation" 
               className="w-full max-w-sm md:max-w-md object-cover drop-shadow-lg"
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }} // Slight creative cut
             />
          </div>

          {/* --- Right Side: Circular Tech Diagram --- */}
          <div className="flex justify-center items-center py-10">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
              
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-900 opacity-20"></div>
              
              {/* Inner Ring */}
              <div className="absolute inset-[15%] rounded-full border border-blue-400 opacity-40"></div>

              {/* Center Circle (Blue Hub) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#003c71] rounded-full shadow-xl flex flex-col items-center justify-center text-white z-10 border-4 border-white">
                 <MonitorSmartphone size={32} className="mb-1" />
                 <span className="text-[10px] font-bold uppercase tracking-wider">Solutions</span>
              </div>

              {/* Orbiting Tech Icons */}
              {techItems.map((item, index) => {
                // Calculation logic for circular positioning
                // radius = 150px (approx for desktop)
                // We use CSS transform to rotate the container, then rotate the icon back so it stays upright
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-110 hover:shadow-blue-200"
                    style={{
                      transform: `rotate(${item.angle}deg) translate(140px) rotate(-${item.angle}deg)`
                    }}
                  >
                    <div className={`${item.color}`}>
                      {item.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
      
      {/* Responsive Fix for Orbiting Items on smaller screens */}
      <style>{`
        @media (max-width: 640px) {
          .absolute[style*="translate(140px)"] {
             transform: rotate(var(--tw-rotate)) translate(110px) rotate(calc(var(--tw-rotate) * -1)) !important;
          }
        }
      `}</style>

    </section>
  );
};

export default ExpertiseSection;
import React from 'react';
import { 
  ChevronRight, 
  Ruler, 
  Cuboid, 
  Layers, 
  Building2, 
  PenTool, 
  Home, 
  CheckCircle2 
} from 'lucide-react';

import img1 from "../assets/cad/img1.jpg";
import img2 from "../assets/cad/img2.jpg";

const AutoCAD = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      
      {/* --- 1. Page Banner --- */}
      <div className="relative w-full h-64 md:h-80 bg-[#001835] flex items-center overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 opacity-20">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="cad-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                      <circle cx="20" cy="20" r="1" fill="#3b82f6" />
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cad-grid)" />
             </svg>
        </div>
        
        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
           <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">AutoCAD Services</h1>
           <div className="flex items-center text-gray-300 text-sm font-semibold uppercase tracking-wide">
              <span>Home</span>
              <ChevronRight size={16} className="mx-2 text-[#d4af37]" />
              <span>Services</span>
              <ChevronRight size={16} className="mx-2 text-[#d4af37]" />
              <span className="text-[#d4af37]">AutoCAD</span>
           </div>
        </div>
      </div>

      {/* --- 2. Experience Section (05 Years) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop" 
                alt="Architecture Design" 
                className="rounded-lg shadow-xl w-full h-64 object-cover transform translate-y-8" 
              />
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                alt="Interior Design" 
                className="rounded-lg shadow-xl w-full h-64 object-cover" 
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border-2 border-[#d4af37] opacity-30 rounded-lg"></div>
          </div>

          {/* Right: Text Content */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              
              
              
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Architecture design plays a critical role in shaping the built environment and influencing the quality of life. It combines technical expertise, creativity, and social responsibility to create buildings that are functional, safe, and sustainable.
            </p>

            {/* List Items (Construction, Architecture, Interior) */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Construction</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Collaborating closely with engineers and contractors to ensure structure meets functional needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                   <Ruler size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Architecture</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Designing aesthetic and robust structures that stand the test of time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                   <Home size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Interior</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Crafting internal spaces that optimize space and enhance the user experience.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* --- 3. Why AutoCAD Section (Blue Background) --- */}
      <section className="bg-[#1e3a8a] py-16 text-white relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left Title */}
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Why <br />
                    <span className="bg-red-600 px-2 py-1 rounded text-white inline-block text-3xl align-middle mr-2">A</span>
                    AutoCAD?
                 </h2>
              </div>

              {/* Right Content */}
              <div className="space-y-6 text-blue-100">
                 <p>
                    AutoCAD is a widely used computer-aided design (CAD) software developed by Autodesk. It offers a range of tools and functionalities for creating, editing, and documenting 2D and 3D designs across various industries.
                 </p>
                 
                 <div className="space-y-3">
                    <div className="flex items-start gap-3">
                       <CheckCircle2 className="text-[#d4af37] flex-shrink-0 mt-1" size={20} />
                       <p><span className="font-bold text-white">Versatility:</span> Used in architecture, engineering, construction, and manufacturing.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <CheckCircle2 className="text-[#d4af37] flex-shrink-0 mt-1" size={20} />
                       <p><span className="font-bold text-white">2D and 3D Design:</span> Supports precise drafting and detailed modeling.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <CheckCircle2 className="text-[#d4af37] flex-shrink-0 mt-1" size={20} />
                       <p><span className="font-bold text-white">Productivity Tools:</span> Automates tasks to streamline workflows and increase efficiency.</p>
                    </div>
                 </div>
              </div>

            </div>
         </div>
      </section>

      {/* --- 4. Featured Services Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
         
         <div className="text-center mb-12">
            <h3 className="text-blue-900 font-bold uppercase tracking-wider">What We Offer</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2">
               Our Featured Services
               <span className="block w-16 h-1 bg-[#d4af37] mx-auto mt-4"></span>
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: 3D Modeling */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="h-56 overflow-hidden relative">
                  <img 
                    src={img1} 
                    alt="3D Modeling & CAD" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
               </div>
               <div className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-900 mb-4 -mt-12 relative z-10 shadow-md border-4 border-white">
                     <Cuboid size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3D Modeling & CAD</h3>
                  <p className="text-gray-500 text-sm">Detailed 3D renders for architectural visualization and product design.</p>
               </div>
            </div>

            {/* Service 2: 2D Design */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="h-56 overflow-hidden relative">
                  <img 
                    src={img2} 
                    alt="2D Design & Layout" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
               </div>
               <div className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-900 mb-4 -mt-12 relative z-10 shadow-md border-4 border-white">
                     <PenTool size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2D Design & Layout</h3>
                  <p className="text-gray-500 text-sm">Precise floor plans, blueprints, and technical layouts for construction.</p>
               </div>
            </div>

            {/* Service 3: 2D to 3D Conversion */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
               <div className="h-56 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop" 
                    alt="2D to 3D Conversion" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
               </div>
               <div className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-900 mb-4 -mt-12 relative z-10 shadow-md border-4 border-white">
                     <Layers size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2D to 3D Conversion</h3>
                  <p className="text-gray-500 text-sm">Transforming flat sketches into immersive 3D walkthrough models.</p>
               </div>
            </div>

         </div>
      </div>

    </div>
  );
};

export default AutoCAD;
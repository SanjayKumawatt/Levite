import React from 'react';
import {
   TrendingUp,
   Lightbulb,
   Users,
   ClipboardList,
   Search,
   Cpu,
   MonitorCheck,
   ChevronRight
} from 'lucide-react';

import img from "../assets/about.png";

// Pehle banaya hua AboutSection import karein
import AboutSection from '../Components/AboutSection';
import { Link } from 'react-router-dom';

const About = () => {
   return (
      <div className="font-sans">

         {/* --- 1. Page Banner (Based on Image Top) --- */}
         <div className="relative w-full h-64 md:h-80 bg-[#001835] flex items-center overflow-hidden">
            {/* Abstract Background Overlay */}
            <div className="absolute inset-0 opacity-20">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                     <pattern id="banner-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#banner-grid)" />
               </svg>
            </div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
               <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">About Us</h1>
               <div className="flex items-center text-gray-300 text-sm font-semibold uppercase tracking-wide">
                  <span>Home</span>
                  <ChevronRight size={16} className="mx-2 text-[#d4af37]" />
                  <span className="text-[#d4af37]">About Us</span>
               </div>
            </div>
         </div>

         {/* --- 2. Existing "Who We Are" Section (Integration) --- */}
         {/* Ye wahi section hai jo pehle banaya tha, yahan perfect fit hoga */}
         <AboutSection />

         {/* --- 3. Core Values Section (3 Icons) --- */}
         <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                  {/* Value 1: Expertise */}
                  <div className="group p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                     <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                        <TrendingUp size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        Our team consists of highly skilled professionals with expertise in various domains,
                        including software development, data analytics, cybersecurity, and cloud computing.
                     </p>
                  </div>

                  {/* Value 2: Innovation */}
                  <div className="group p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                     <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                        <Lightbulb size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        Innovation is at the heart of everything we do. We embrace new technologies
                        and methodologies to develop innovative solutions that drive business growth and success.
                     </p>
                  </div>

                  {/* Value 3: Client-Centric */}
                  <div className="group p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                     <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                        <Users size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric Approach</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">
                        We believe in building long-term relationships with our clients based on trust,
                        transparency, and mutual respect.
                     </p>
                  </div>

               </div>
            </div>
         </section>

         {/* --- 4. Work Flow & Team Section (Blue Background) --- */}
         <section className="bg-[#3b6db3] text-white py-16 md:py-24 relative overflow-hidden">

            {/* Background Overlay Circle (Design element) */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

               {/* Work Flow Header */}
               <div className="text-center mb-16">
                  <span className="text-blue-200 uppercase tracking-widest text-xs font-bold">Work Flow</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Our Working Process</h2>
               </div>

               {/* Process Steps (Circles) */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 relative">
                  {/* Connector Line (Hidden on mobile) */}
                  <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-blue-400/50 -z-10"></div>

                  {/* Step 1: Planning */}
                  <div className="flex flex-col items-center text-center">
                     <div className="w-24 h-24 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 relative hover:scale-110 transition-transform">
                        <ClipboardList size={36} className="text-[#64ffda]" />
                        {/* Dotted border effect simulation */}
                        <div className="absolute inset-1 rounded-full border border-dashed border-white/40"></div>
                     </div>
                     <h4 className="font-bold text-lg">Planning</h4>
                  </div>

                  {/* Step 2: Research */}
                  <div className="flex flex-col items-center text-center">
                     <div className="w-24 h-24 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 relative hover:scale-110 transition-transform">
                        <Search size={36} className="text-[#64ffda]" />
                        <div className="absolute inset-1 rounded-full border border-dashed border-white/40"></div>
                     </div>
                     <h4 className="font-bold text-lg">Research</h4>
                  </div>

                  {/* Step 3: Optimizing */}
                  <div className="flex flex-col items-center text-center">
                     <div className="w-24 h-24 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 relative hover:scale-110 transition-transform">
                        <Cpu size={36} className="text-[#64ffda]" />
                        <div className="absolute inset-1 rounded-full border border-dashed border-white/40"></div>
                     </div>
                     <h4 className="font-bold text-lg">Optimizing</h4>
                  </div>

                  {/* Step 4: Results */}
                  <div className="flex flex-col items-center text-center">
                     <div className="w-24 h-24 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 relative hover:scale-110 transition-transform">
                        <MonitorCheck size={36} className="text-[#64ffda]" />
                        <div className="absolute inset-1 rounded-full border border-dashed border-white/40"></div>
                     </div>
                     <h4 className="font-bold text-lg">Results</h4>
                  </div>
               </div>

               {/* Bottom Section: Image + Text */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                  {/* Left: Image */}
                  <div className="relative">
                     <div className="absolute -inset-4 border-2 border-white/20 rounded-lg transform rotate-3"></div>
                     <img
                        src={img}
                        alt="Team Collaboration"
                        className="rounded-lg shadow-2xl relative w-full h-auto object-cover transform transition-transform hover:-rotate-1"
                     />
                  </div>

                  {/* Right: Text Content */}
                  <div className="md:pl-8">
                     <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        We offer the best design services in town.
                     </h3>
                     <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-6 border-l-4 border-[#d4af37] pl-4">
                        Set clear goals and expectations. Everyone has his responsibilities to meet.
                        Make sure everyone on the team knows what they are working towards is expected of them.
                     </p>
                     <Link to={"/contact"}>
                        <button className="bg-[#d4af37] hover:bg-[#b59326] text-white px-8 py-3 rounded font-bold uppercase text-sm shadow-lg transition-transform transform hover:-translate-y-1">
                           Join Our Team

                        </button>
                     </Link>
                  </div>

               </div>

            </div>
         </section>

      </div>
   );
};

export default About;
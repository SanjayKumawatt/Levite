import React from 'react';
import { 
  Database, 
  BrainCircuit, 
  Bot, 
  PieChart, 
  Target, 
  FileDown, 
  Filter, 
  Search, 
  ChevronRight 
} from 'lucide-react';

const DataAnalysis = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      
      {/* --- 1. Page Banner --- */}
      <div className="relative w-full h-64 md:h-80 bg-[#001835] flex items-center overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 opacity-20">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="data-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#data-grid)" />
             </svg>
        </div>
        
        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
           <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Data Analysis</h1>
           <div className="flex items-center text-gray-300 text-sm font-semibold uppercase tracking-wide">
              <span>Home</span>
              <ChevronRight size={16} className="mx-2 text-[#d4af37]" />
              <span>Services</span>
              <ChevronRight size={16} className="mx-2 text-[#d4af37]" />
              <span className="text-[#d4af37]">Data Analysis</span>
           </div>
        </div>
      </div>

      {/* --- 2. Intro & Services Cards --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase relative inline-block pb-4">
            Our Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 font-medium max-w-3xl mx-auto">
            Transforming Complexity into Clarity with Data Analysis.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Big Data Consulting */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#3b6db3] h-20 relative flex justify-center items-end pb-0">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center absolute -bottom-8 shadow-md border-4 border-white">
                  <Database size={28} className="text-[#3b6db3]" />
               </div>
            </div>
            <div className="pt-12 pb-8 px-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3">Big Data Consulting</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Big data consulting involves providing expert advice, guidance, and solutions to businesses looking to leverage big data.
              </p>
            </div>
          </div>

          {/* Card 2: Machine Learning */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#3b6db3] h-20 relative flex justify-center items-end pb-0">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center absolute -bottom-8 shadow-md border-4 border-white">
                  <BrainCircuit size={28} className="text-[#3b6db3]" />
               </div>
            </div>
            <div className="pt-12 pb-8 px-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3">Machine Learning</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Machine learning has revolutionized various industries and applications, empowering organizations to extract valuable insights from data.
              </p>
            </div>
          </div>

          {/* Card 3: Artificial Intelligence */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#3b6db3] h-20 relative flex justify-center items-end pb-0">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center absolute -bottom-8 shadow-md border-4 border-white">
                  <Bot size={28} className="text-[#3b6db3]" />
               </div>
            </div>
            <div className="pt-12 pb-8 px-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3">Artificial Intelligence</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Artificial intelligence continues to advance rapidly, transforming industries, driving innovation, and reshaping the way we live.
              </p>
            </div>
          </div>

          {/* Card 4: Data Visualization */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#3b6db3] h-20 relative flex justify-center items-end pb-0">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center absolute -bottom-8 shadow-md border-4 border-white">
                  <PieChart size={28} className="text-[#3b6db3]" />
               </div>
            </div>
            <div className="pt-12 pb-8 px-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3">Data Visualization</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Data visualization is a powerful tool for exploring, analyzing, and communicating data effectively across different domains.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* --- 3. Process Section --- */}
      <div className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase relative inline-block pb-4">
                Our Work Process
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></span>
              </h2>
              <p className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto">
                Distinctively grow go forward manufactured products and optimal networks. 
                Enthusiastically disseminate user-centric outsourcing.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Step 1 */}
              <div className="border border-gray-100 rounded-lg p-6 hover:shadow-xl transition-shadow text-center group">
                 <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                    <Target size={40} className="text-orange-400 group-hover:scale-110 transition-transform" />
                 </div>
                 <h4 className="text-xl font-bold text-gray-800 mb-2">Define Objectives</h4>
                 <p className="text-sm text-gray-500">Clearly define the objectives and goals of the analysis.</p>
              </div>

              {/* Step 2 */}
              <div className="border border-gray-100 rounded-lg p-6 hover:shadow-xl transition-shadow text-center group">
                 <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                    <FileDown size={40} className="text-blue-500 group-hover:scale-110 transition-transform" />
                 </div>
                 <h4 className="text-xl font-bold text-gray-800 mb-2">Data Collection</h4>
                 <p className="text-sm text-gray-500">Gather the relevant data needed for analysis.</p>
              </div>

              {/* Step 3 */}
              <div className="border border-gray-100 rounded-lg p-6 hover:shadow-xl transition-shadow text-center group">
                 <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                    <Filter size={40} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                 </div>
                 <h4 className="text-xl font-bold text-gray-800 mb-2">Data Cleaning</h4>
                 <p className="text-sm text-gray-500">Clean the raw data to ensure accuracy, consistency, and completeness.</p>
              </div>

              {/* Step 4 */}
              <div className="border border-gray-100 rounded-lg p-6 hover:shadow-xl transition-shadow text-center group">
                 <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                    <Search size={40} className="text-green-500 group-hover:scale-110 transition-transform" />
                 </div>
                 <h4 className="text-xl font-bold text-gray-800 mb-2">Data Exploration</h4>
                 <p className="text-sm text-gray-500">Explore the dataset to gain a preliminary understanding of its characteristics.</p>
              </div>

           </div>
        </div>
      </div>

    </div>
  );
};

export default DataAnalysis;
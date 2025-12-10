import React from 'react';
import { 
  Smartphone, 
  Layout, 
  Monitor, 
  RefreshCw, 
  FileCode, 
  MonitorSmartphone,
  ArrowRight
} from 'lucide-react';

// --- REUSABLE COMPONENT: Section Header ---
const SectionHeader = ({ title }) => (
  <div className="text-center mb-16 relative">
    <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] uppercase inline-block relative pb-3 z-10 tracking-wide">
      {title}
    </h2>
    {/* Yellow underline */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-500"></div>
  </div>
);

// --- REUSABLE COMPONENT: Service Card (Design from image) ---
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg border border-[#D4A017] hover:shadow-xl transition-all duration-300 flex flex-col items-start group">
    {/* Icon Container */}
    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
      {title}
      {/* Small decorative line under title */}
      <span className="block h-0.5 w-12 bg-gray-200 mt-2"></span>
    </h3>
    
    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const UiUxDesignPage = () => {
  const services = [
    {
      title: "High-Fidelity Prototype",
      description: "We create a prototype to demonstrate the behavior of the application and show how it would work in reality. We design fully interactive prototypes to give you an idea of the workflow of your project.",
      icon: <Smartphone size={28} />
    },
    {
      title: "Wireframes",
      description: "We design wireframes to provide you an outline of a mobile or web app by demonstrating content, structure and functionality that will exist on your app's and software's pages.",
      icon: <Layout size={28} />
    },
    {
      title: "Mobile and Web User Interface Design",
      description: "We deliver our best efforts to ingeniously convert your ideas and thoughts into a clear and fully functional design. We design user interfaces that conform to what the user requires and understands.",
      icon: <Monitor size={28} />
    },
    {
      title: "Cross-Platform Compatibility",
      description: "Focusing on the core principles of UI design and functionality implementation, we design and deliver responsive and cross-platform compatible designs to ensure that it works across different platforms.",
      icon: <MonitorSmartphone size={28} />
    },
    {
      title: "Technical Design",
      description: "Our team can also create a technical design that helps our clients understand the technical workflow of the project. In technical design, we define technology stack for all the components of the app.",
      icon: <FileCode size={28} />
    },
    {
      title: "Software Redesign",
      description: "If you already have an app or a website but it does not look appealing or professional, we can help you by re-designing the entire website or application. We make your software look engaging and beautiful.",
      icon: <RefreshCw size={28} />
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      
      {/* ================= HERO SECTION ================= */}
      {/* Dark Slate/Blue Background to match image */}
      <section className="bg-[#1e293b] pt-20 pb-20 md:pt-32 md:pb-32 relative overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              UI/UX DESIGN <br />
              SERVICES
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
              We are specialized in creating beautiful and smooth UI/UX designs that provide better user experience by incorporating effective collaboration, streamlined projects which strive for better results.
            </p>
            
            {/* LINKED BUTTON */}
            <div>
              <a 
                href="/contact" 
                className="inline-block bg-[#D4A017] hover:bg-[#b88a12] text-white px-8 py-3.5 rounded-md font-bold text-sm uppercase transition-all shadow-lg hover:shadow-orange-500/20"
              >
                Schedule a call
              </a>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-full max-w-lg">
                {/* Abstract UI Elements Graphic */}
                <div className="relative z-10 mx-auto w-64 h-[400px] bg-gray-900 rounded-[2rem] border-4 border-gray-700 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
                   <div className="text-white font-bold text-2xl animate-pulse">UI / UX</div>
                   <div className="mt-4 flex gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                   </div>
                </div>
                
                {/* Floating Elements mimicking the image */}
                <div className="absolute top-10 right-0 md:-right-10 bg-white p-4 rounded-lg shadow-lg animate-bounce duration-[3000ms]">
                   <div className="w-32 h-2 bg-gray-200 rounded mb-2"></div>
                   <div className="w-20 h-2 bg-blue-500 rounded"></div>
                </div>
                <div className="absolute bottom-20 left-0 md:-left-10 bg-white p-4 rounded-lg shadow-lg">
                   <div className="flex gap-2 items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-bold text-gray-700">User Flow</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Bottom Curve (Optional decorative divider) */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="OUR EXCLUSIVE SERVICES" />
          
          {/* 2-Column Grid as per image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default UiUxDesignPage;
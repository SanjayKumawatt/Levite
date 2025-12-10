import React from 'react';
import { CheckCircle, ArrowRight, Code, Smartphone, Layers, Box } from 'lucide-react';
import img1 from "../assets/mobile/img1.png";
import img2 from "../assets/mobile/img2.png";

// --- REUSABLE COMPONENT: Section Header with Blue Underline ---
const SectionHeader = ({ title }) => (
  <div className="text-center mb-12 relative">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase inline-block relative pb-3 z-10">
      {title}
    </h2>
    {/* Blue underline effect */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></div>
  </div>
);

// --- REUSABLE COMPONENT: Linked Button ---
const LinkButton = ({ text, href, className }) => (
  <a 
    href={href} 
    className={`inline-block px-8 py-3 rounded-md font-bold text-sm uppercase transition-transform hover:-translate-y-0.5 ${className}`}
  >
    {text}
  </a>
);

// --- REUSABLE COMPONENT: Technology Card ---
const TechCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg border-2 border-orange-300 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4 p-3 bg-orange-50 rounded-full text-orange-500">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed font-medium">
      {description}
    </p>
  </div>
);

// --- REUSABLE COMPONENT: Process Step ---
// isReversed flips the layout for alternating steps
const ProcessStep = ({ number, title, description, isReversed }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
    {/* Text Content */}
    <div className={`w-full md:w-1/2 text-center ${isReversed ? 'md:text-left' : 'md:text-right'}`}>
      <h4 className="text-blue-800 font-bold text-lg uppercase mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
    
    {/* Hexagonal Icon Placeholder (Simulating the image style) */}
    <div className="relative flex-shrink-0 z-10">
        <div className="w-20 h-20 bg-blue-900 text-orange-400 flex items-center justify-center font-bold text-2xl relative overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
           {/* Placeholder for the specific icon graphic in the image */}
           <span>{number}</span>
           <div className="absolute bottom-0 left-0 w-full h-1/3 bg-blue-800 opacity-50"></div>
        </div>
    </div>

     {/* Balancing empty space for the other side */}
    <div className="hidden md:block w-full md:w-1/2"></div>
  </div>
);


const MobileAppDevelopmentPage = () => {
  return (
    <div className="font-sans bg-white">
      
      {/* ================= HERO SECTION ================= */}
      {/* Using the dark blue color from the image header */}
      <section className="bg-[#2C4A78] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Mobile App Development Company
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
              We build high-quality, robust, and scalable mobile applications that deliver superior user experiences and drive business growth.
              {/* (Note: Replaced generic placeholder text from image with relevant text, as image text was blurry/lorem ipsum style) */}
            </p>
            
            {/* LINKED BUTTON as requested */}
            <div className="pt-4">
              <LinkButton 
                text="Let's Talk" 
                href="/contact"  // Replace with your actual contact link
                className="bg-orange-500 text-white hover:bg-orange-600"
              />
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full md:w-1/2 flex justify-center">
             {/* Replace this div with your actual isometric illustration image tag */}
            <img src={img1} alt="" />
            
          </div>
        </div>
      </section>


      {/* ================= SOLUTIONS SECTION ================= */}
      <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="MOBILE APPLICATION DEVELOPMENT (IOS & ANDROID)" />

          <div className="flex flex-col md:flex-row items-center gap-16 mt-12">
            {/* Left Content Text & List */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Mobile App Solutions at True Value Infosoft
              </h3>
              <p className="text-gray-600 mb-6">
                Here are some of the mobile app solutions offered by our company:
              </p>
              
              {/* Using a grid for the list to match the compact look */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-700 font-medium">
                {[
                  "Cost effective solutions",
                  "Scalable application",
                  "Safe and secure mobility solutions",
                  "Mobile Application Development",
                  "End-to-end Business Apps",
                  "Mobile Device Management",
                  "Customer Relationship Management Apps",
                  "Enterprise and Corporate Apps",
                  "Enterprise Resource Planning Apps"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </section>


      {/* ================= TECHNOLOGIES SECTION ================= */}
      <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="TECHNOLOGIES WE LEVERAGE" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Using Lucide icons as placeholders for the specific orange icons in the image */}
            <TechCard 
              icon={<Code size={32} />}
              title="React Native"
              description="A popular JavaScript framework for building natively rendering mobile applications for iOS and Android."
            />
            <TechCard 
              icon={<Smartphone size={32} />}
              title="Swift for iOS"
              description="A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS."
            />
            <TechCard 
              icon={<layers size={32} />} // Using generic icon, Kotlin logo is specific
              title="Kotlin for Android"
              description="A modern, statically typed programming language that boosts productivity and increases developer happiness."
            />
            <TechCard 
              icon={<Box size={32} />} // Using generic icon, Flutter logo is specific
              title="Flutter"
              description="A UI toolkit from Google for creating beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."
            />
          </div>
        </div>
      </section>


      {/* ================= PROCESS SECTION ================= */}
      <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="OUR MOBILE APPLICATION DEVELOPMENT PROCESS" />
          
          <div className="mt-16 relative">
            {/* Vertical connecting line (simulated) - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-orange-200 transform -translate-x-1/2 -z-10"></div>

            <ProcessStep 
              number="01"
              title="DISCOVERY & PLANNING"
              description="We understand your business requirements and objectives, then strategize to create the most efficient mobile application."
              isReversed={false}
            />
             <ProcessStep 
              number="02"
              title="DESIGN & DEVELOPMENT"
              description="Leveraging the latest UI/UX trends, we design and develop a mobile app that is both aesthetically pleasing and functional."
              isReversed={true} // Flipped layout for the middle step
            />
             <ProcessStep 
              number="03"
              title="TESTING & DEPLOYMENT"
              description="We conduct thorough testing to ensure the mobile app is bug-free and fully functional before deployment."
              isReversed={false}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default MobileAppDevelopmentPage;
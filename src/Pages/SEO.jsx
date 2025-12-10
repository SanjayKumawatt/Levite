import React from 'react';
import { 
  Search, 
  BarChart, 
  Globe, 
  Target, 
  Cloud, 
  TrendingUp, 
  Zap, 
  Link as LinkIcon, 
  FileText, 
  Layout,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

import img1 from "../assets/seo/img1.png";
import img2 from "../assets/seo/img2.png";

// --- REUSABLE COMPONENT: Section Header ---
const SectionHeader = ({ title }) => (
  <div className="text-center mb-16 relative">
    <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] uppercase inline-block relative pb-3 z-10">
      {title}
    </h2>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-500"></div>
  </div>
);

// --- REUSABLE COMPONENT: Process Card (Yellow Border) ---
const ProcessCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg border border-yellow-400 hover:shadow-lg transition-shadow text-center flex flex-col items-center group">
    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-100 transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const SeoServicePage = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-[#0F2868] to-[#1E40AF] pt-20 pb-20 md:pt-32 md:pb-28 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Improve Your <br />
              <span className="text-yellow-400">Website Ranking</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-lg leading-relaxed">
              Search Engine Optimization (SEO) is a crucial aspect of digital marketing aimed at improving a website's visibility and ranking on search engine results pages (SERPs).
            </p>
            <div className="pt-4">
              <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3.5 rounded-md font-bold text-sm uppercase transition-all shadow-lg inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
             {/* Hero Image Placeholder - Replace with SEO Isometric Graphic */}
             <div className="relative w-full max-w-md">
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                   <div className="text-center font-bold text-6xl text-white opacity-90 tracking-widest">SEO</div>
                   <div className="mt-4 h-2 w-full bg-blue-400/30 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-yellow-400 rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Curved Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>
      </section>

      {/* ================= SERVICE INTRO ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="OUR SEO SERVICES" />

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-[#1E3A8A] mb-4">
                Search Engine <span className="text-yellow-500">Optimization</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We, at our Agency, are not just any random search engine optimization company, but we specialize in offering unique strategies to make your website optimized in the best possible way.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['WEBSITE SEO AUDIT', 'KEYWORD RESEARCH', 'SEO STRATEGY'].map((item, idx) => (
                   <li key={idx} className="flex items-center text-gray-700 font-bold text-sm tracking-wide">
                     <span className="w-2 h-2 bg-[#1E3A8A] mr-3"></span> {/* Square bullet from image */}
                     {item}
                   </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
               {/* Placeholder for Dashboard/Analytics Image */}
               <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARKETING STRATEGY GRID ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Text */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-6">
              Our Marketing <span className="text-yellow-500">Strategy</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We leverage data-driven insights to build a roadmap that aligns with your business goals. From technical audits to content planning, our strategy ensures sustainable growth.
            </p>
          </div>

          {/* Right Grid - Replicating the 2x2 layout from image */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
               <Target size={40} className="text-orange-500 mb-4" />
               <h4 className="font-bold text-orange-500 text-lg">Keyword Ranking</h4>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
               <Globe size={40} className="text-blue-600 mb-4" />
               <h4 className="font-bold text-blue-600 text-lg">Site Ranking</h4>
            </div>

            {/* Card 3 - Blue Background as per image */}
            <div className="bg-[#1E3A8A] p-8 rounded-lg shadow-sm flex flex-col items-center text-center text-white">
               <Cloud size={40} className="text-white mb-4" />
               <h4 className="font-bold text-white text-lg">Cloud Storage</h4>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
               <BarChart size={40} className="text-red-500 mb-4" />
               <h4 className="font-bold text-orange-500 text-lg">Seo Brands</h4>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SEO PROCESS SECTION ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="OUR SEO PROCESS" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProcessCard 
              icon={<Search />}
              title="Keyword Research"
              description="Identify relevant keywords and phrases that your target audience is likely to use when searching for products."
            />
            <ProcessCard 
              icon={<FileText />}
              title="Optimized Content"
              description="Create high-quality, informative, and engaging content that incorporates target keywords naturally."
            />
            <ProcessCard 
              icon={<Layout />}
              title="URL Structure"
              description="Use descriptive and user-friendly URLs that include target keywords whenever possible. Keep URLs concise."
            />
            <ProcessCard 
              icon={<LinkIcon />}
              title="Internal Linking"
              description="Link related pages and content within your website to improve navigation and distribute link equity."
            />
            <ProcessCard 
              icon={<Zap />}
              title="Page Speed Optimization"
              description="Improve website loading times by optimizing images, reducing server response times, and leveraging browser caching."
            />
            <ProcessCard 
              icon={<TrendingUp />}
              title="Backlink Building"
              description="Earn high-quality backlinks from reputable and relevant websites to improve your site's authority."
            />
          </div>
        </div>
      </section>

      {/* ================= AGENCY PROMO SECTION ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">
              Work With The <br />
              Best <span className="text-yellow-600">SEO Agency</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              SEO is no longer a method of link-building. Some of the deciding factors for a website to rank higher are architecturally sound coding, faster loading speed of the sites, website responsiveness across devices, and insightful content.
            </p>
            <div className="pt-2">
               <a href="/about" className="text-[#1E3A8A] font-bold border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors">
                 Learn More About Us
               </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
             {/* Placeholder for the person holding tablet image */}
             <div className="w-full h-80 bg-gray-900 rounded-lg overflow-hidden relative flex items-center justify-center">
                 <img src={img2} alt="" />
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SeoServicePage;
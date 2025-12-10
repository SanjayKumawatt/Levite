import React from 'react';
import { 
  Megaphone, 
  PenTool, 
  Users, 
  ArrowRight, 
  ThumbsUp, 
  BarChart, 
  Globe 
} from 'lucide-react';

import img from "../assets/social.png";

// --- REUSABLE COMPONENT: Section Header ---
const SectionHeader = ({ title }) => (
  <div className="text-center mb-16 relative">
    <h2 className="text-2xl md:text-3xl font-bold text-[#2E1065] uppercase inline-block relative pb-3 z-10 tracking-wide">
      {title}
    </h2>
    {/* Yellow underline */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-500"></div>
  </div>
);

// --- REUSABLE COMPONENT: Service Card (Yellow Border) ---
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg border-2 border-yellow-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group h-full">
    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-100 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

// --- REUSABLE COMPONENT: Feature Item ---
const FeatureItem = ({ title, description }) => (
  <div className="flex gap-4 mb-6">
    <div className="flex-shrink-0 mt-1">
      <div className="w-6 h-6 rounded-full bg-[#4a148c] flex items-center justify-center text-white">
        <ArrowRight size={14} />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const SocialMediaPage = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      
      {/* ================= HERO SECTION ================= */}
      {/* Deep Purple Background as per image */}
      <section className="bg-[#4a148c] pt-20 pb-20 md:pt-32 md:pb-32 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Web Socialize Your <br />
              <span className="text-white">Social Media</span>
            </h1>
            <p className="text-purple-200 text-lg max-w-lg leading-relaxed">
              When more than half the public is on social media, it becomes extremely essential that you create a social media page for your brand and get the required social media marketing services.
            </p>
            
            <div className="pt-6">
              <a 
                href="/contact" 
                className="inline-block bg-[#D4A017] hover:bg-[#b88a12] text-white px-8 py-3 rounded-md font-bold text-sm uppercase transition-transform hover:-translate-y-1 shadow-lg"
              >
                Start Now
              </a>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-full max-w-md">
                {/* 3D Phone Illustration Placeholder */}
                <div className="relative z-10 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-[2.5rem] p-4 shadow-2xl border-4 border-purple-300/30 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                   <div className="bg-white rounded-[2rem] overflow-hidden h-96 relative flex flex-col items-center pt-8">
                      <div className="w-32 h-6 bg-gray-100 rounded-full mb-6"></div>
                      <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <Megaphone size={32} className="text-purple-600"/>
                      </div>
                      <div className="space-y-2 w-3/4">
                        <div className="h-2 bg-gray-100 rounded w-full"></div>
                        <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-100 rounded w-full"></div>
                      </div>
                      {/* Social Icons Float */}
                      <div className="absolute bottom-10 flex gap-4">
                         <div className="w-10 h-10 bg-blue-600 rounded-lg text-white flex items-center justify-center">f</div>
                         <div className="w-10 h-10 bg-pink-500 rounded-lg text-white flex items-center justify-center">ig</div>
                         <div className="w-10 h-10 bg-sky-400 rounded-lg text-white flex items-center justify-center">t</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO / EXPERIENCE SECTION ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="SOCIAL MEDIA MARKETING" />

          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2E1065] mb-6 leading-snug">
                5 Years Of Experiences In Social Media Marketing Services
              </h3>
              <p className="text-gray-600 mb-8 text-sm">
                Apart from these eminent tasks, social media optimization is a major task that we offer to you in terms of account optimization and reputation management.
              </p>

              <div className="space-y-2">
                <FeatureItem 
                  title="Optimization Engine Rank" 
                  description="Our team has some bright and enthusiastic professionals who take social media optimization serious."
                />
                <FeatureItem 
                  title="Higher Customer Satisfaction" 
                  description="Our professionals not only create strategies for the SMO but also augment the services."
                />
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full md:w-1/2 flex justify-center">
            <img src={img} alt="" />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="WE PROVIDE THE BEST SERVICE FOR YOU" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<BarChart size={32} />}
              title="Strategy Development"
              description="Choose the social media platforms that are most relevant to your target audience and align with your business objectives. Popular platforms include Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok."
            />
            
            <ServiceCard 
              icon={<PenTool size={32} />}
              title="Content Creation"
              description="Develop a content strategy that outlines the types of content you'll create (e.g., articles, videos, images, infographics) and the topics/themes that resonate with your audience."
            />
            
            <ServiceCard 
              icon={<Users size={32} />}
              title="Engagement and Community Building"
              description="Monitor your social media channels regularly and actively engage with your audience by responding to comments, messages, and mentions. Encourage conversations around your brand."
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default SocialMediaPage;
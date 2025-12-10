import React from 'react';
import { Link } from 'react-router-dom'; // Sirf ye line add ki hai links ke liye

import img1 from "../assets/services/img1.avif";
import img2 from "../assets/services/img2.avif";
import img3 from "../assets/services/img3.jpg";
import img4 from "../assets/services/img4.avif";
import img5 from "../assets/services/img5.avif";
import img6 from "../assets/services/img6.avif";
import img7 from "../assets/services/img7.avif";
import img8 from "../assets/services/img8.jpg";

const ServicesSection = () => {
  // Services ka data (Sab kuch same hai jaisa tumne diya)
  const services = [
    {
      id: 1,
      title: 'Data Analysis',
      image: img1 
    },
    {
      id: 2,
      title: 'Mobile App Development',
      image: img2
    },
    {
      id: 3,
      title: 'SEO Service',
      image: img3
    },
    {
      id: 4,
      title: 'Social Media Services',
      image: img4
    },
    {
      id: 5,
      title: 'UI/UX Design',
      image: img5
    },
    {
      id: 6,
      title: 'Web Development',
      image: img6
    },
    {
      id: 7,
      title: 'AutoCAD',
      image: img7
    },
    {
      id: 8,
      title: 'Image Editing',
      image: img8
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#f8faff] overflow-hidden font-sans">
      
      {/* --- Background Subtle Network Pattern (SVG) --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                  </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Title --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase relative inline-block pb-4">
            Our Exclusive Services
            {/* Yellow Underline */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#d4af37]"></span>
          </h2>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            // Yahan div ko hata kar Link laga diya hai
            <Link 
              to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} // Dynamic URL logic
              key={service.id}
              className="group relative w-full h-64 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Service Background Image */}
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Service Title */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Linkedin,
    Twitter,
    Instagram,
    Phone,
    Mail,
    MapPin,
    ChevronsRight,
    MessageCircle
} from 'lucide-react';
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-[#001835] text-white pt-16 pb-8 font-sans border-t border-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- Top Section: 4 Columns --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Company Info */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <Link to="/" className="flex gap-2">


                            <img src={logo} className='h-10' alt="" />

                            <div className='flex flex-col'>

                                <span className="text-3xl font-extrabold text-white tracking-wide">
                                    LEVITE <span className="text-[#d4af37]">TECH</span>
                                </span>
                                <span className="text-[10px] font-semibold text-gray-400 tracking-[0.2em] uppercase">
                                    Private Limited
                                </span>
                            </div>
                        </Link>

                        {/* Description Text (Uppercased as per image) */}
                        <p className="text-xs leading-relaxed text-gray-300 uppercase tracking-wide">
                            After all, the purpose of Levite Tech is not just to help
                            you with an efficient digital marketing service but
                            also with a service that is comfortable and reliable.
                        </p>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white uppercase mb-6 relative inline-block">
                            Our Services
                            {/* Optional tiny underline */}
                            <span className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-[#d4af37]"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Data Analysis",
                                "Mobile App Development",
                                "SEO Service",
                                "Social Media Services",
                                "UI/UX Design",
                                "Web Development"
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                                        className="group flex items-center text-sm text-gray-300 hover:text-[#d4af37] transition-colors"
                                    >
                                        <ChevronsRight size={16} className="mr-2 text-blue-500 group-hover:text-[#d4af37] transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white uppercase mb-6 relative inline-block">
                            Useful Links
                            <span className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-[#d4af37]"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About", path: "/about" },
                                { name: "Contact Us", path: "/contact" },

                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="group flex items-center text-sm text-gray-300 hover:text-[#d4af37] transition-colors"
                                    >
                                        <ChevronsRight size={16} className="mr-2 text-blue-500 group-hover:text-[#d4af37] transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Get In Touch (Social Icons) */}
                    <div>
                        <h3 className="text-lg font-bold text-white uppercase mb-6 relative inline-block">
                            Get In Touch
                            <span className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-[#d4af37]"></span>
                        </h3>


                        <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <MapPin size={20} className="text-[#d4af37]" /> Address:
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed ml-7">
                            Door No. 24-83-11/1,sanat, Nagar Revenue Ward-61, Pedagantyada,  <br />
                            Visakhapatnam, Pedagantyada, Andhra Pradesh, India, 530044
                        </p>




                        {/* Email */}

                        <h4 className="text-lg mt-3 font-bold text-white mb-2 flex items-center gap-2">
                            <Mail size={20} className="text-[#d4af37]" /> Email:
                        </h4>
                        <p className="text-gray-300 text-sm ml-7">
                            contact@levitetech.in
                        </p>


                    </div>

                </div>

                {/* --- Divider --- */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* --- Bottom Copyright Section --- */}
                <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} <span className="text-white font-bold">LEVITE TECH</span> | All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import {
    Monitor,
    Database,
    Layers,
    Code,
    ArrowRight,
    Cpu,
    Globe
} from 'lucide-react';

import img1 from "../assets/web/img1.webp";
import img2 from "../assets/web/img2.jpg";
import img3 from "../assets/web/img3.png";
import img4 from "../assets/web/img4.png";



// --- REUSABLE COMPONENT: Section Header ---
const SectionHeader = ({ title }) => (
    <div className="text-center mb-16 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] uppercase inline-block relative pb-3 z-10 tracking-wide">
            {title}
        </h2>
        {/* Blue/Yellow underline */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-500"></div>
    </div>
);

// --- REUSABLE COMPONENT: Dark Blue Service Card ---
const ServiceCard = ({ title, icon }) => (
    <div className="bg-[#0F172A] p-8 rounded-lg border border-gray-700 hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center shadow-lg group">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-white uppercase tracking-wide">
            {title}
        </h3>
    </div>
);

// --- REUSABLE COMPONENT: Tech Row (Text + Image) ---
const TechRow = ({ title, content, imageAlt, isReversed }) => (
    <div className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        {/* Text Side */}
        <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-500 pl-4">
                {title}
            </h3>
            <div className="text-gray-600 space-y-4 leading-relaxed">
                {content}
            </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 bg-blue-50 rounded-2xl flex items-center justify-center overflow-hidden border border-blue-100">
                <img src={img3} alt="" />
            </div>
        </div>
    </div>
);

const WebDevelopmentPage = () => {
    return (
        <div className="font-sans bg-white text-gray-800">

            {/* ================= HERO SECTION ================= */}
            <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-gray-900 overflow-hidden">
                {/* Background Image Placeholder (Office Scene) */}
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-0">
                    {/* Use an actual <img> tag here with object-cover */}
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 relative z-10">

                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            Web Development <br />
                            <span className="text-yellow-400 text-3xl md:text-4xl">Services</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-lg">
                            We build robust, scalable, and secure web applications tailored to your business needs using the latest technologies.
                        </p>
                        <div className="pt-4">
                            <a href="/contact" className="inline-block bg-[#D4A017] hover:bg-[#b88a12] text-white px-8 py-3 rounded font-bold uppercase transition-transform hover:scale-105 shadow-lg">
                                Start Now
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative">
                        {/* 3D Character Illustration Placeholder */}
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-[80px] opacity-20"></div>
                            {/* Simulated 3D Character */}
                            <div className="relative z-10 w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl border border-gray-600 flex items-center justify-center text-gray-400">
                                <img src={img1} alt="" />                </div>
                            {/* Floating Tech Icons */}
                            <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-2 rounded-lg font-bold shadow-lg animate-bounce">HTML</div>
                            <div className="absolute bottom-10 -left-8 bg-blue-500 text-white p-2 rounded-lg font-bold shadow-lg animate-bounce delay-150">CSS</div>
                            <div className="absolute top-1/2 -right-10 bg-yellow-400 text-black p-2 rounded-lg font-bold shadow-lg animate-pulse">JS</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES WE OFFERED (Dark Blue Cards) ================= */}
            <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="SERVICES WE OFFERED" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            title="Front-End Development"
                            icon={<Monitor size={32} />}
                        />
                        <ServiceCard
                            title="Back-End Development"
                            icon={<Database size={32} />}
                        />
                        <ServiceCard
                            title="Full-Stack Development"
                            icon={<Layers size={32} />}
                        />
                        <ServiceCard
                            title="Custom Web Development"
                            icon={<Code size={32} />}
                        />
                    </div>
                </div>
            </section>

            {/* ================= TECHNOLOGIES AND TOOLS ================= */}
            <section className="py-16 px-4 md:px-12 lg:px-24 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="TECHNOLOGIES AND TOOLS" />

                    {/* Row 1: HTML and CSS */}
                    <TechRow
                        title="HTML and CSS"
                        imageAlt="Person coding HTML/CSS layout"
                        content={
                            <>
                                <p className="mb-4">
                                    <strong>Responsive Design:</strong> Ensure that your website is designed responsively, meaning it should adapt its layout and content to different screen sizes and devices. This is achieved using CSS media queries.
                                </p>
                                <p>
                                    <strong>Performance Optimization:</strong> Optimize your HTML and CSS for performance to ensure fast page load times and a smooth browsing experience. Minify and concatenate CSS files.
                                </p>
                            </>
                        }
                    />

                    {/* Row 2: JavaScript (Reusing component) */}
                    <TechRow
                        title="JavaScript"
                        imageAlt="JavaScript coding visualization"
                        isReversed={false} // Image shows left-align text in screenshot too, but usually alternating looks good. Keep false to match image strictly.
                        content={
                            <>
                                <p className="mb-4">
                                    JavaScript is one of the programming languages that has become an essential part of web development services. There are several benefits due to which we make use of JavaScript while developing your website.
                                </p>
                                <p>
                                    Our experts make use of this technology for incorporating dynamic elements and interactive options into the website. This is highly useful when there is a need for including any specific logic on the client side.
                                </p>
                            </>
                        }
                    />

                    {/* Row 3: Frameworks */}
                    <TechRow
                        title="Frameworks"
                        imageAlt="React/Vue/Angular Logos"
                        content={
                            <>
                                <p className="mb-4">
                                    We utilize modern frameworks to build scalable and maintainable applications. From <strong>React</strong> and <strong>Angular</strong> for the frontend to <strong>Node.js</strong> and <strong>Django</strong> for the backend.
                                </p>
                                <p>
                                    Frameworks allow us to speed up the development process while ensuring code quality, security, and performance standards are met for your custom web application.
                                </p>
                            </>
                        }
                    />

                </div>
            </section>

        </div>
    );
};

export default WebDevelopmentPage;
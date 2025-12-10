import React from 'react';
import { ArrowRight, CheckCircle, Layers, Image as ImageIcon, Scissors, Sun, Box } from 'lucide-react';
import img1 from "../assets/imageedit/img1.png";
import img2 from "../assets/imageedit/img2.png";
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
        <div className={`p-4 rounded-full mb-4 ${color} bg-opacity-20`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
            {description}
        </p>

    </div>
);

const StepItem = ({ number, title, desc }) => (
    <div className="flex gap-4 mb-8">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFC107] flex items-center justify-center text-white font-bold text-lg">
            {number}
        </div>
        <div>
            <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    </div>
);

const ImageEditingPage = () => {
    const services = [
        {
            title: "Image Masking",
            description: "Image masking is a versatile technique that offers precise control over image selection, transparency, and editing, making it an essential tool.",
            icon: <Layers size={32} className="text-[#D87D7D]" />,
            color: "bg-[#FBE4E4]"
        },
        {
            title: "Clipping Path",
            description: "Clipping path is a valuable tool in the arsenal of graphic designers and photographers, enabling them to achieve precise cutouts.",
            icon: <Scissors size={32} className="text-[#D94F4F]" />,
            color: "bg-[#FDECEC]"
        },
        {
            title: "Multi-clipping Path",
            description: "Multi-clipping paths are a powerful tool in image editing, offering advanced capabilities for isolating and editing multiple areas.",
            icon: <Box size={32} className="text-[#D87D7D]" />,
            color: "bg-[#FBE4E4]"
        },
        {
            title: "Remove Layers",
            description: "Remove layer is an art to correct your current image with new effect by overlapping a new layer.",
            icon: <Layers size={32} className="text-[#E6B800]" />,
            color: "bg-[#FFF8E1]"
        },
        {
            title: "Shadow Making",
            description: "Whether you're a photographer, e-commerce business, or graphic designer, adding realistic shadows to your images can make them stand out.",
            icon: <Sun size={32} className="text-[#FF6B00]" />,
            color: "bg-[#FFF3E0]"
        },
        {
            title: "Shadow Making",
            description: "Whether you're a photographer, e-commerce business, or graphic designer, adding realistic shadows to your images can make them stand out.",
            icon: <ImageIcon size={32} className="text-[#5D4037]" />,
            color: "bg-[#EFEBE9]"
        }
    ];

    return (
        <div className="font-sans text-gray-800">

            {/* --- HERO / SERVICES SECTION --- */}
            <section className="py-16 px-4 md:px-12 lg:px-24 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-left mb-12">
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Photo Editing Company</h5>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                            Our Most Popular <span className="text-[#FFC107]">Photo</span><br />
                            <span className="text-[#FFC107]">Editing</span> Services
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Left Text */}
                    <div className="w-full md:w-1/2">
                        <h5 className="text-sm font-bold text-gray-500 uppercase mb-2">About Us</h5>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                            Edit Your Photo In <span className="text-[#FFC107]">Seconds With</span><br />
                            <span className="text-[#FFC107]">Photodit</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Image Editing Services For Ecommerce Businesses And Pros, From Product Photographers To Amazon Sellers To Global Brands.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Because A Quick Product Shoot Can Easily Turn Into A Week Or More Of Editing And Formatting Your Images. Let Us Look After The Edits, So You Can Get Back To The Work That Needs You.
                        </p>
                        <Link to={"/contact"}>
                            <button className="bg-[#9A7B4F] hover:bg-[#826640] text-white px-8 py-3 rounded-md font-bold transition-colors">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Right Image Placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center">

                        <img src={img1} alt="" />
                    </div>
                </div>
            </section>

            {/* --- HOW IT WORKS SECTION --- */}
            <section className="py-16 px-4 md:px-12 lg:px-24 bg-[#111111] text-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2">
                        <h5 className="text-[#FFC107] font-bold uppercase tracking-wide mb-2">How We Works</h5>
                        <h2 className="text-3xl font-extrabold text-white mb-10">How It Works</h2>

                        <StepItem
                            number="01"
                            title="Request a quote"
                            desc="Request a quote for the images you need edited — we'll get back to you within 45 minutes."
                        />
                        <StepItem
                            number="02"
                            title="Our Photoshop Expert"
                            desc="Our Photoshop Expert will consult with you and understand every detail of your project."
                        />
                        <StepItem
                            number="03"
                            title="Delivery within 24 hours"
                            desc="Delivery within 24 hours with a dedicated project manager who ensures until you will get satisfied."
                        />
                    </div>

                    {/* Right Image Placeholder */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Decorative Circle */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#EF5350] rounded-full z-0 opacity-80"></div>

                        {/* Image Container */}
                        <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden border border-gray-700 h-64 md:h-80 w-full flex items-center justify-center">
                            <img src={img2} alt="" />             </div>

                        {/* Floating Elements simulation */}
                        <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-blue-600 rounded-full z-20"></div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ImageEditingPage;
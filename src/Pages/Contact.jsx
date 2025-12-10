import React, { useState } from 'react';
import {
    MapPin,
    Mail,
    Send,
    ChevronRight,
    CheckCircle,
    Loader2
} from 'lucide-react';

const Contact = () => {
    // 1. State banaya taaki user ko pata chale message ja raha hai ya chala gaya
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    // Form data store karne ke liye
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        subject: '',
        message: ''
    });

    const serviceOptions = [
        "Data Analysis", "AutoCAD", "Image Editing", "Mobile App Development",
        "SEO Service", "Social Media Services", "UI/UX Design", "Web Development", "Other / Custom Inquiry"
    ];

    // Input changes handle karne ke liye
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 2. Submit function (Main Logic)
    const handleSubmit = (e) => {
        e.preventDefault(); // Ye browser ke default alert/refresh ko rokega

        setIsSubmitting(true);

        // Fake network request (Simulate kar rahe hain ki message ja raha hai)
        setTimeout(() => {
            console.log("Form Data Submitted:", formData); // Backend ke liye data yahan hai
            setIsSubmitting(false);
            setIsSent(true);
            
            // Form clear kar do
            setFormData({ name: '', email: '', service: '', subject: '', message: '' });

            // 5 second baad success message hata do (Optional)
            setTimeout(() => setIsSent(false), 5000);
        }, 2000);
    };

    return (
        <div className="font-sans bg-gray-50 min-h-screen">

            {/* --- 1. Page Banner --- */}
            <div className="relative w-full h-64 md:h-80 bg-[#001835] flex items-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#contact-grid)" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Contact Us</h1>
                    <div className="flex items-center text-gray-300 text-sm font-semibold uppercase tracking-wide">
                        <span>Home</span>
                        <ChevronRight size={16} className="mx-2 text-[#d4af37]" />
                        <span className="text-[#d4af37]">Contact</span>
                    </div>
                </div>
            </div>

            {/* --- 2. Main Content Section --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Info */}
                    <div>
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Get in touch</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
                            Let's Talk About Your Project
                        </h2>
                        <p className="text-gray-600 mb-10 leading-relaxed">
                            We are here to answer any questions you may have about our experiences.
                            Reach out to us and we'll respond as soon as we can.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Our Location</h4>
                                    <p className="text-gray-600 mt-1 text-sm leading-relaxed max-w-xs">
                                        Door No. 24-83-11/1, Sanat Nagar Revenue Ward-61,
                                        Pedagantyada, Visakhapatnam, Andhra Pradesh, India, 530044.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center text-[#987d26]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Email Address</h4>
                                    <p className="text-gray-600 mt-1 text-sm">
                                        contact@levitetech.in
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        
                        {/* --- SUCCESS MESSAGE UI (Alert ki jagah ye dikhega) --- */}
                        {isSent && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700 animate-fade-in">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                                <div>
                                    <p className="font-bold">Message Sent!</p>
                                    <p className="text-sm">Thank you. We will contact you shortly.</p>
                                </div>
                            </div>
                        )}

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                                        placeholder="John Doe" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email*</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                                        placeholder="john@example.com" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Requirement For*</label>
                                    <select 
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" disabled>Select Service</option>
                                        {serviceOptions.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors" 
                                        placeholder="Project Inquiry" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                                <textarea 
                                    rows="4" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors resize-none" 
                                    placeholder="Tell us about your project..." 
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting} // Button disable jab tak bhej raha hai
                                className={`w-full font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all transform 
                                    ${isSubmitting ? 'bg-blue-800 cursor-not-allowed' : 'bg-[#001835] hover:bg-blue-900 hover:-translate-y-1 text-white'}
                                `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
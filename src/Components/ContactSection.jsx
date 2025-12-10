import React, { useState } from 'react';
import { 
    MapPin, 
    Mail, 
    Loader2, 
    CheckCircle 
} from 'lucide-react';

const ContactSection = () => {
  // 1. States for Form Logic
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Browser refresh roko
    setIsSubmitting(true);

    // Fake API Call (2 seconds)
    setTimeout(() => {
        console.log("Form Data:", formData);
        setIsSubmitting(false);
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Hide success message after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <section className="relative py-16 md:py-24 bg-gray-900 text-white overflow-hidden font-sans">
      
      {/* --- Background Image & Overlay --- */}
      <div className="absolute inset-0 z-0">
        <img 
           src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
           alt="Contact Background" 
           className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Title --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase relative inline-block pb-4">
            Get In Touch
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* --- Left Side: Contact Info Box --- */}
          <div className="border border-[#d4af37] rounded-lg p-8 h-fit shadow-lg bg-gray-900/50 backdrop-blur-sm">
            <div className="space-y-8">
              
              {/* Address */}
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <MapPin size={20} className="text-[#d4af37]" /> Address:
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed ml-7">
                    Door No. 24-83-11/1, Sanat Nagar Revenue Ward-61, <br />
                    Pedagantyada, Visakhapatnam, Andhra Pradesh, India, 530044
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Mail size={20} className="text-[#d4af37]" /> Email:
                </h4>
                <p className="text-gray-300 text-sm ml-7">
                  contact@levitetech.in
                </p>
              </div>

            </div>
          </div>

          {/* --- Right Side: Contact Form --- */}
          <div>
            
            {/* Success Message UI (Dark Theme Compatible) */}
            {isSent && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded text-green-400 flex items-center gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5" />
                    <div>
                        <p className="font-bold text-sm">Message Sent Successfully!</p>
                        <p className="text-xs text-green-300">We will get back to you soon.</p>
                    </div>
                </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name*" 
                    required
                    className="w-full bg-transparent border border-[#d4af37] text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-[#d4af37] placeholder-gray-400 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*" 
                    required
                    className="w-full bg-transparent border border-[#d4af37] text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-[#d4af37] placeholder-gray-400 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  className="w-full bg-transparent border border-[#d4af37] text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-[#d4af37] placeholder-gray-400 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Your Message*" 
                  required
                  className="w-full bg-transparent border border-[#d4af37] text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-[#d4af37] placeholder-gray-400 transition-all resize-none"
                ></textarea>
              </div>

              {/* Button with Loading Logic */}
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`
                    w-full sm:w-auto flex items-center justify-center gap-2 font-bold py-3 px-8 rounded shadow-lg transition-all transform uppercase tracking-wide text-sm
                    ${isSubmitting ? 'bg-[#856d20] cursor-wait opacity-80' : 'bg-[#987d26] hover:bg-[#856d20] hover:-translate-y-1 text-white'}
                  `}
                >
                  {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin" size={18} />
                        Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
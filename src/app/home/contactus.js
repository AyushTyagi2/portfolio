"use client";
import Image from "next/image";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/myzedaan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: "", email: "", company: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>

      <section id="contact" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0">
              <Image 
                src="https://drive.google.com/uc?export=view&id=1JSRmyahiOck_A5cYWh0KBQOQ7STkGWhq" 
                alt="get in touch" 
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                className="opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            </div>
            
            <div className="relative text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                  <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                    Let's Chat
                  </span>
                  <br />
                  <span className="text-white">Online</span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your vision to life? Let's connect and create something extraordinary together.
              </p>
              
              <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Get in Touch
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div id="contact-form" className="min-h-screen flex items-center py-20">
            <div className="container mx-auto px-6 max-w-4xl">
              {/* Success Message */}
              {submitted && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl backdrop-blur-sm animate-fade-in">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-400 font-semibold">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                </div>
              )}

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Drop a Message
                    </span>
                  </h2>
                  <p className="text-gray-400 text-lg">I'd love to hear about your project</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:border-white/30"
                        required
                      />
                    </div>
                    <div className="group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:border-white/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:border-white/30"
                    />
                  </div>

                  <div className="group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:border-white/30"
                      required
                    />
                  </div>

                  <div className="group">
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-xl py-4 px-6 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:border-white/30 resize-none"
                      rows="6"
                      required
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-w-[180px]"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center">
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Your Website. All rights reserved.
              </p>
              <div className="mt-4 flex justify-center space-x-6">
               

                <a href="https://www.linkedin.com/in/ayush-tyagi-37154b2a4/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://github.com/AyushTyagi2" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
  <span className="sr-only">Instagram</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a1.13 1.13 0 11-2.26 0 1.13 1.13 0 012.26 0z" />
  </svg>
</a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default ContactSection;
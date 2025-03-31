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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Show loading state
  
    try {
      const response = await fetch("https://formspree.io/f/myzedaan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", company: "", subject: "", message: "" });
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
  

  return (
    <section id="contact" className="bg-gray-900 text-gray-300 ">
      <div className="container ">
        {/* Hero Section */}
        <div className="relative h-[500px] md:h-[600px] mb-12 overflow-hidden">

          <Image src="https://drive.google.com/uc?export=view&id=1JSRmyahiOck_A5cYWh0KBQOQ7STkGWhq
" alt = "get in touch" layout="fill" objectFit="cover" quality={100} />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Let's Chat Online
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Reach out anytime, anywhere - I'm ready to collaborate!
            </p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Get in touch
            </button>
          </div>
        </div>

        {/* Contact Info & Form */}
        <div className="mx-auto px-6">
         

          {/* Contact Form */}
          <div className="">
            <h2 className="text-3xl font-bold mb-6">Drop a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-3 px-6 focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-3 px-6 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-3 px-6 focus:ring-2 focus:ring-blue-500 mb-4"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-3 px-6 focus:ring-2 focus:ring-blue-500 mb-4"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-3 px-6 focus:ring-2 focus:ring-blue-500 mb-6"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg w-full md:w-auto transition duration-300 item-center  justify-between"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
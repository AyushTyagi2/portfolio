"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import DeveloperJourney from "./type";

const Topsection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3, // Stagger the children's animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial position slightly below
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contribution"
      className="bg-gray-900 text-gray-300 py-20 font-sans overflow-hidden"
    >
      <motion.div // Animate the container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content (Responsive, Animated) */}
          <motion.div // Animate the text content
            variants={itemVariants}
            className="md:order-1 order-2"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-montserrat">
              PASSIONATE COMPUTER <br /> SCIENCE MAJOR
            </h1>
            <p className="text-lg mb-6 opacity-80 font-lato leading-relaxed">
            I'm a deeply passionate coder and innovator, always striving to create impactful projects that blend creativity with functionality.
             With expertise in full-stack development and a keen eye for detail, I continuously push the boundaries of technology. Always eager to learn and collaborate,
             
              I'm on a mission to build something extraordinary. 🚀
            </p>
            <button 
              className="px-8 py-3 bg-transparent border-2 border-emerald-400 text-emerald-400 font-bold uppercase tracking-wide hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              style={{
                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
              }}
            >
              EXPLORE
            </button>

            {/* Skills & Traits Section (Responsive, Animated) */}
            <motion.div // Animate the skills section
              variants={itemVariants}
              className="mt-10"
            >
              <h1 className="text-2xl font-semibold mb-4 text-blue-400 font-montserrat">
                SKILLS & TRAITS
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["INNOVATIVE", "TECH-SAVVY", "ADAPTIVE", "PRECISE"].map(
                  (trait, index) => (
                    <motion.div // Animate each skill
                      key={index}
                      variants={itemVariants}
                      className="bg-gray-800 p-4 rounded-lg text-center font-medium hover:bg-gray-700 transition-all duration-300 font-lato"
                    >
                      {trait}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image (Animated) */}
          <motion.div // Animate the image container
            variants={itemVariants}
            className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg z-auto md:order-2 order-1"
          >
            
            <Image
              src="/my.jpg"
              alt="Workspace"
              fill={true}
              style={{ objectFit: "contain" }}
              className="rounded"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </motion.div>
        </div>
      </motion.div>
      <div className="pt-20 h-70[px]">
      <DeveloperJourney/>
      </div>
    </section>
  );
};

export default Topsection;
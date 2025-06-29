"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Public Entry Device",
      description:
        "An innovative project featuring a dynamic web application with vibrant frontend and robust backend solutions.",
      image: "/ped.png",
      link: "https://ped-xi.vercel.app",
    },
    {
      title: "Dating Platform",
      description:
        "A modern dating application designed for seamless interaction and smart matchmaking.",
      image: "/date.jpeg",
      link: "https://e-dating-seven.vercel.app/",
    },
    {
      title: "Dynamic Railway System",
      description:
        "A real-time railway analytics platform with powerful data visualization tools.",
      image: "/rails.jpeg",
      link: "https://github.com/ayush87919/Project_CS201.git",
    },
    {
      title: "Larry - A versatile language agent",
      description:
        "Larry is a prototype for a bigger project jarvis.ai which is one of the most ambitious project of mine.",
      image: "/jarvis.jpg",
      link: "https://github.com/AyushTyagi2/Larry",
    },
    {
      title: "EvoDist: Codon-Based Evolutionary Distance Predictor",
      description:
        "A powerful bioinformatics tool for estimating evolutionary distances between species using codon usage patterns.",
      image: "/nucliec.jpeg",
      link: "https://github.com/ayush87919/EvoDist",
    },
    {
      title: "Aneurysm Detector",
      description:
        "An AI-driven aneurysm detector for accurate aneurysm detection and rupture prediction.",
      image: "/aneurysm.jpg",
      link: "https://github.com/AyushTyagi2/Aneurysms_Detection.git",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="bg-gray-900 text-gray-300 py-5 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4"
      >
        <h2 className="text-center text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-montserrat">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 border border-gray-700"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-400 transition duration-300"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { IoLogoGithub, IoLink } from "react-icons/io5";
// import motul from "../assets/projects/Motul.png";
// import discussion from "../assets/projects/Discussion.png";
// import recipe from "../assets/projects/Recipe.png";
// import snake from "../assets/projects/Snake.png";
// import crypto from "../assets/projects/Crypto.png";


// // Project Data
// const projects = [
//   {
//     title: "Motul",
//     description: "A full-stack web application for managing tasks, built with React and Node.js.",
//     liveDemo: "https://mellifluous-begonia-c7d5c3.netlify.app/",
//     github: "https://github.com/Krishna6438/Engine-Oil-and-Lubricants-Website",
//     image: motul,
//   },
//   {
//     title: "Discussion Forum",
//     description: "A personal portfolio website built with React and Tailwind CSS.",
//     liveDemo: "https://github.com/user/project-two",
//     github: "https://github.com/Krishna6438/Discussion-Platform",
//     image: discussion,
//   },
//   {
//     title: "Recipe-Blog Website",
//     description: "A real-time chat application built with Node.js, Socket.io, and MongoDB.",
//     liveDemo: "https://www.live-demo-three.com",
//     github: "https://github.com/Krishna6438/RecepieBlog",
//     image: recipe,
//   },
//   {
//     title: "Snake Game",
//     description: "A real-time chat application built with Node.js, Socket.io, and MongoDB.",
//     liveDemo: "https://github.com/user/project-two",
//     github: "https://github.com/user/project-three",
//     image: snake,
//   },
//   {
//     title: "CryptoGrapher",
//     description: "A real-time chat application built with Node.js, Socket.io, and MongoDB.",
//     liveDemo: "https://github.com/user/project-two",
//     github: "https://github.com/user/project-three",
//     image: crypto,
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-6 rounded-lg shadow-xl max-w-6xl mx-auto mt-16">
//       <motion.h2
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center text-4xl font-semibold mb-10"
//       >
//         My Projects
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="project-card bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="relative overflow-hidden rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
//               />
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
//                 <p className="text-white text-xl font-semibold">View Project</p>
//               </div>
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.title}</h3>
//             <p className="text-sm text-gray-400 mb-4">{project.description}</p>

//             <div className="flex justify-between">
//               <a
//                 href={project.liveDemo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
//               >
//                 <IoLink className="mr-2" size={18} /> Live Demo
//               </a>
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
//               >
//                 <IoLogoGithub className="mr-2" size={18} /> GitHub
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLogoGithub, IoLink } from "react-icons/io5";
import motul from "../assets/projects/Motul.png";
import discussion from "../assets/projects/Discussion.png";
import recipe from "../assets/projects/Recipe.png";
import snake from "../assets/projects/Snake.png";
import crypto from "../assets/projects/Crypto.png";

// Project Data
const projects = [
  {
    title: "Motul",
    description: "A full-stack web application for managing tasks, built with React and Node.js.",
    liveDemo: "https://mellifluous-begonia-c7d5c3.netlify.app/",
    github: "https://github.com/Krishna6438/Engine-Oil-and-Lubricants-Website",
    image: motul,
  },
  {
    title: "Discussion Forum",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    liveDemo: "https://github.com/user/project-two",
    github: "https://github.com/Krishna6438/Discussion-Platform",
    image: discussion,
  },
  {
    title: "Recipe-Blog Website",
    description: "A real-time chat application built with Node.js, Socket.io, and MongoDB.",
    liveDemo: "https://www.live-demo-three.com",
    github: "https://github.com/Krishna6438/RecepieBlog",
    image: recipe,
  },
  {
    title: "Snake Game",
    description: "A simple and fun snake game built with HTML, CSS, and JavaScript.",
    liveDemo: "https://github.com/user/project-two",
    github: "https://github.com/user/project-three",
    image: snake,
  },
  {
    title: "CryptoGrapher",
    description: "A cryptocurrency tracker with real-time updates using APIs.",
    liveDemo: "https://github.com/user/project-two",
    github: "https://github.com/user/project-three",
    image: crypto,
  },
];

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Toggle the active card
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-6 rounded-lg shadow-xl max-w-6xl mx-auto mt-16">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl font-semibold mb-10"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group ${
              activeCard === index ? "active" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg transition-opacity duration-300 ${
                  activeCard === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white text-xl font-semibold">View Project</p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>

            <div className="flex justify-between">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                <IoLink className="mr-2" size={18} /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                <IoLogoGithub className="mr-2" size={18} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


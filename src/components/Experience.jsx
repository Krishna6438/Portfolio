import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Community Development Project (CDP)",
    role: "Intern",
    organization: "Jan Chetna Sewa Samiti",
    duration: "June - July 2023",
    details: [
      "Assisted in planning and executing awareness campaigns on AIDS prevention and support.",
      "Facilitated educational workshops to inform and engage local communities.",
      "Collaborated with team members to develop impactful advocacy strategies.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200 py-12 px-6 rounded-lg shadow-lg max-w-6xl mx-auto mt-16">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl font-bold text-gray-300 uppercase mb-10 tracking-wide"
      >
        Experience
      </motion.h2>

      <div className="relative flex flex-col space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline Line */}
            <div className="relative">
              <div
                className={`w-2 h-2 rounded-full bg-gray-500 absolute -left-1 top-0`}
              ></div>
              {index < experiences.length - 1 && (
                <div className="w-1 bg-gray-500 h-full absolute left-0 top-2"></div>
              )}
            </div>

            {/* Arrow or Line */}
            <div className="flex-grow border-l-2 border-gray-500 pl-4">
              {/* Card Content */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <p className="text-lg font-medium text-gray-300 mt-2">
                  {exp.role} at {exp.organization}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 text-sm flex items-start space-x-2"
                    >
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-1"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

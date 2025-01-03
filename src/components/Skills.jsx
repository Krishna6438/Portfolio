import React from "react";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "Django", "Ruby on Rails", "Spring Boot"],
    },
    {
        category: "Databases",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
    },
    {
        category: "DevOps & Tools",
        skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Nginx"],
    },
    {
        category: "Other Skills",
        skills: ["GraphQL", "REST APIs", "TypeScript", "Webpack", "Testing (Jest)"],
    },
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200 py-12 px-6 rounded-lg shadow-lg max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center text-4xl font-bold text-gray-300 uppercase mb-10 tracking-wide"
            >
                My Skills
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                    },
                }}
            >
                {skills.map((group, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full h-72 bg-gradient-to-t from-gray-800 to-gray-700 rounded-xl shadow-lg transform perspective-1000"
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Front Side */}
                        <div
                            className="absolute w-full h-full bg-gradient-to-tr from-gray-800 to-gray-700 rounded-xl flex flex-col justify-center items-center"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                                {group.category}
                            </h3>
                            <p className="text-sm text-gray-400">Hover to explore skills</p>
                        </div>

                        {/* Back Side */}
                        <div
                            className="absolute w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl flex flex-col justify-center items-center"
                            style={{
                                transform: "rotateY(180deg)",
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <h3 className="text-xl font-semibold text-gray-300 mb-4">
                                {group.category} Skills
                            </h3>
                            <ul className="flex flex-wrap justify-center gap-2">
                                {group.skills.map((skill, idx) => (
                                    <motion.li 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                        key={idx}
                                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium shadow-md cursor-pointer "
                                    >
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;

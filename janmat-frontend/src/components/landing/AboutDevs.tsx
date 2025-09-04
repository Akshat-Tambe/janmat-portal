// src/components/landing/AboutDevelopers.tsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const developers = [
  {
    name: "Ayush Sahu",
    currentDesignation: "Frontend Developer at Zarthi",
    role: "Frontend Developer | Flutter & React Enthusiast",
    desc: "Enthusiastic about building responsive and scalable UIs with React and Flutter. Skilled in modern frontend tools and passionate about cloud technologies and software engineering.",
    img: "https://via.placeholder.com/150",
    github: "https://github.com/ayush",
    linkedin: "https://linkedin.com/in/ayush",
    email: "mailto:ayush@example.com",
    portfolio: "https://your-portfolio-link.com",
    skills: ["React", "Vite", "Tailwind CSS", "Flutter", "Firebase"],
    interests: ["Frontend design", "Open-source", "Software engineering"],
  },
  {
    name: "Bhumi Singh",
    currentDesignation: "Java Developer at Cloud Nexus",
    role: "Frontend Developer",
    desc: "Focused on building clean and reusable components in React. Skilled in UI/UX implementation, responsive design, and collaborative development.",
    img: "https://via.placeholder.com/150",
    github: "https://github.com/bhumi",
    linkedin: "https://linkedin.com/in/bhumi",
    email: "mailto:bhumi@example.com",
    portfolio: "https://portfolio-link.com", // added for consistency
    skills: ["React", "Tailwind CSS", "JavaScript", "UI/UX", "Java"],
    interests: ["Frontend design", "Open-source", "Software engineering"],
  },
  {
    name: "Akshat Tambe",
    currentDesignation: "Backend Developer at Zarthi",
    role: "Backend Developer",
    desc: "Specialized in backend development with Node.js and Firebase. Built secure APIs and handled scalable data structures for the voting platform.",
    img: "https://via.placeholder.com/150",
    github: "https://github.com/akshat",
    linkedin: "https://linkedin.com/in/akshat",
    email: "mailto:akshat@example.com",
    portfolio: "https://portfolio-link.com",
    skills: ["Java", "Firebase", "APIs", "Databases", "Spring Boot"],
    interests: ["Backend architecture", "Cloud services", "Cybersecurity"],
  },
];

const AboutDevelopers: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-gray-50 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Meet the Developers
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          This project was designed and developed by a passionate team of
          Computer Science engineers specializing in frontend, backend, and
          cloud technologies.
        </p>

        {/* Developer Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {developers.map((dev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col h-full p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300"
            >
              {/* Avatar */}
              <img
                src={dev.img}
                alt={dev.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-100"
              />

              {/* Name + Role */}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {dev.name}
              </h3>
              <p className="text-sm text-gray-500">{dev.currentDesignation}</p>
              <p className="text-sm text-blue-600 font-medium">{dev.role}</p>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm line-clamp-4">
                {dev.desc}
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {dev.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Interests */}
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {dev.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-md"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-auto pt-5">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={dev.email}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={dev.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutDevelopers;

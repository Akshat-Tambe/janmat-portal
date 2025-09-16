// src/components/landing/AboutDevelopers.tsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import ayush from "../../assets/Ayush.png";
import { useEffect } from "react";

const developers = [
  {
    name: "Ayush Sahu",
    currentDesignation: "Frontend Developer at Zarthi",
    role: "Frontend Developer | Flutter & React Enthusiast",
    desc: "Enthusiastic about building responsive and scalable UIs with React and Flutter. Skilled in modern frontend tools and passionate about cloud technologies and software engineering.",
    img: ayush,
    github: "https://github.com/Ayushsahu373",
    linkedin: "https://www.linkedin.com/in/ayush-sahu-694161239/",
    email: "mailto:ayush.dev.373@gmail.com",
    portfolio: "instagram.com/its_ayu.shh",
    skills: ["React", "Vite", "Tailwind CSS", "Flutter", "Firebase"],
    interests: ["Frontend design", "Open-source", "Software engineering"],
  },
  {
    name: "Bhumi Singh",
    currentDesignation: "Java Developer at Cloud Nexus",
    role: "Java Developer | Full-Stack Enthusiast",
    desc: " Contributed to full-stack development by designing client-side and server-side architectures, building responsive UIs, developing APIs, managing databases, and ensuring security. Collaborated with teams to deliver efficient and scalable software solutions",
    img: "https://via.placeholder.com/150",
    github: "https://github.com/Bhumi145",
    linkedin: "https://www.linkedin.com/in/bhumi-singh-05a8bb253",
    email: "mailto:singhbhumi733@gmail.com",
    portfolio: "https://portfolio-link.com",
    skills: ["React.js", "Node.js", "MYSQL", "Spring Boot", "Java"],
    interests: ["Backend design", "Full-stack development", "Software engineering"],
  },
  {
    name: "Akshat Tambe",
    currentDesignation: "Backend Developer at Zarthi",
    role: "Backend Developer | Java and spring boot Enthusiast",
    desc: "Backend developer skilled in Java and Spring Boot, focused on building scalable REST APIs and seamless database integrations. Passionate about microservices, cloud technologies, and writing clean, efficient code.",
    img: "https://via.placeholder.com/150",
    github: "https://github.com/akshat",
    linkedin: "https://linkedin.com/in/akshat",
    email: "mailto:tambeakshat6@gmail.com",
    portfolio: "https: //www.linkedin.com/in/akshat-tambe-2b65a9259/",
    skills: ["Java", "Spring Boot", "C", "Database Design", "Open-Source", "Software Engineering"],
    interests: ["Backend architecture", "Cloud services", "Cybersecurity"],
  },
];

const AboutDevelopers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 80);
  }, []);

  return (
    <section id="contact" className="relative min-h-screen max-h-screen flex items-center justify-center px-6 py-16 md:py-24">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto text-center z-10"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 line-height[1.2]">
          Meet the Developers
        </h2>
        <p className="text-lg text-gray-200 mb-16 max-w-2xl mx-auto">
          This project was designed and developed by a passionate team of
          Computer Science engineers specializing in frontend, backend, and
          cloud technologies.
        </p>

        {/* Developer Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {developers.map((dev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col h-full p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-white/20"
            >
              {/* Avatar */}
              <div className="relative mx-auto w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + Role */}
              <h3 className="mt-2 text-xl font-semibold text-white">{dev.name}</h3>
              <p className="text-sm text-gray-300">{dev.currentDesignation}</p>
              <p className="text-sm text-purple-300 font-medium">{dev.role}</p>

              {/* Description */}
              <p className="mt-3 text-gray-200 text-sm line-clamp-4">{dev.desc}</p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {dev.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-purple-600/30 text-purple-200 rounded-full shadow-sm"
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
                    className="px-2 py-0.5 text-xs bg-gray-700/40 text-gray-200 rounded-md"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-5 mt-auto pt-5 text-gray-200">
                <a href={dev.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Github className="w-5 h-5 hover:scale-110 transition-transform" />
                </a>
                <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
                </a>
                <a href={dev.email} className="hover:text-white transition-colors">
                  <Mail className="w-5 h-5 hover:scale-110 transition-transform" />
                </a>
                <a href={dev.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Globe className="w-5 h-5 hover:scale-110 transition-transform" />
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

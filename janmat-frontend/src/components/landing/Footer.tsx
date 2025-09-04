// src/components/landing/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-12 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-transparent opacity-40"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Branding */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">VoteSecure</span>. All
          rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          {["About", "Contact", "Privacy Policy", "Terms"].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
              className="relative group"
            >
              <span className="text-gray-400 group-hover:text-white transition">
                {link}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all"></span>
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5">
          {[Facebook, Twitter, Linkedin, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-gray-400 hover:text-white shadow-md transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

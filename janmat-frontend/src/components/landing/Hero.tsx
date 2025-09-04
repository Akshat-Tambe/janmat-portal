// src/components/landing/Hero.tsx
import React from "react";
import Button from "../common/Button";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 px-6 text-center overflow-hidden"
    >
      {/* Decorative background blobs with floating animation */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-40"
      ></motion.div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Voting Logo"
          className="w-24 mx-auto mb-6 drop-shadow-md"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
        />

        {/* Headline */}
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
        >
          Secure{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Online Voting
          </span>{" "}
          Platform
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          Cast your vote from anywhere — with complete{" "}
          <span className="font-semibold text-gray-800">security, transparency,</span> and{" "}
          <span className="font-semibold text-gray-800">trust.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            onClick={() => (window.location.href = "/register")}
            className="px-6 py-3 text-lg rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            Get Started
          </Button>
          <Button
            variant="secondary"
            onClick={() => (window.location.href = "/login")}
            className="px-6 py-3 text-lg rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            Login
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

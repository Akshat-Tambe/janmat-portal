// src/components/landing/Hero.tsx
import React from "react";
import Button from "../common/Button";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen md:h-screen flex items-center justify-center px-6 text-center overflow-hidden bg-transparent"

    >
      {/* Decorative floating blobs */}


      {/* Hero Content */}
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
          className="w-28 mx-auto mb-6 drop-shadow-2xl"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
        />

        {/* Headline */}
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
        >
          Secure <span className="text-white">Online Voting</span> Platform
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          Cast your vote from anywhere — with complete{" "}
          <span className="font-semibold text-white">security, transparency,</span> and{" "}
          <span className="font-semibold text-white">trust.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            onClick={() => (window.location.href = "/register")}
            className="px-6 py-3 text-lg rounded-xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-300"
          >
            Get Started
          </Button>
          <Button
            variant="secondary"
            onClick={() => (window.location.href = "/login")}
            className="px-6 py-3 text-lg rounded-xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-300"
          >
            Login
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

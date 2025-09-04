// src/pages/SplashScreen.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png"; // replace with your actual logo path
import { useNavigate } from "react-router-dom";

const SplashScreen: React.FC = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      navigate("/landing"); // redirect to landing page
    }, 2500); // 2.5s splash duration

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <img src={Logo} alt="App Logo" className="w-28 h-28 mb-4 drop-shadow-lg" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-3xl font-bold text-white tracking-wide"
        >
          Secure Online Voting
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default SplashScreen;

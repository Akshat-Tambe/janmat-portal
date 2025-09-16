// src/components/landing/Features.tsx
import React from "react";
import { Shield, BarChart2, Smartphone, Server } from "lucide-react";
import { motion } from "framer-motion";

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  gradient: string;
};


const features: Feature[] = [
  {
    icon: <Shield className="w-10 h-10 text-blue-400" aria-hidden="true" />,
    title: "Security",
    desc: "End-to-end encryption ensures safe and secure votes.",
    gradient: "from-blue-700 via-blue-600 to-blue-500",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-green-400" aria-hidden="true" />,
    title: "Transparency",
    desc: "View live results, fully auditable with no manipulation.",
    gradient: "from-green-700 via-green-600 to-green-500",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-purple-400" aria-hidden="true" />,
    title: "Accessibility",
    desc: "Vote from any device with a simple and intuitive interface.",
    gradient: "from-purple-700 via-purple-600 to-purple-500",
  },
  {
    icon: <Server className="w-10 h-10 text-red-400" aria-hidden="true" />,
    title: "Scalability",
    desc: "Robust system designed to handle large-scale elections.",
    gradient: "from-red-700 via-red-600 to-red-500",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="relative min-h-screen md:h-screen flex items-center justify-center px-6 text-center overflow-hidden bg-transparent"

    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto text-center z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Why Choose <span className="text-white">VoteSecure?</span>
        </h2>
        <p className="text-gray-200 text-lg mb-14">
          Built with cutting-edge technology to ensure trust, security, and ease of use.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 rounded-2xl shadow-xl cursor-pointer transition-transform transform border border-white/20 backdrop-blur-md"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="mb-4 mx-auto flex items-center justify-center rounded-xl w-16 h-16"
              >
                {f.icon}
              </motion.div>
              <h3 className="font-semibold text-lg text-white">{f.title}</h3>
              <p className="text-gray-200 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>


  );
};

export default Features;

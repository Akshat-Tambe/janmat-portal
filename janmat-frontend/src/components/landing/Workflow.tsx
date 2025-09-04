// src/components/landing/Workflow.tsx
import React from "react";
import { motion } from "framer-motion";

type Step = { step: string; title: string; desc: string; gradient: string };

const steps: Step[] = [
  {
    step: "1",
    title: "Register",
    desc: "Sign up with your credentials.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    step: "2",
    title: "Verify",
    desc: "Confirm your eligibility securely.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    step: "3",
    title: "Vote",
    desc: "Cast your vote with one click.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    step: "4",
    title: "View Results",
    desc: "Track results in real time.",
    gradient: "from-orange-500 to-red-500",
  },
];

const Workflow: React.FC = () => {
  return (
    <section
      id="workflow"
      className="py-24 bg-gradient-to-b from-gray-50 to-white px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          How It{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Works
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-14"
        >
          A simple and secure process designed for everyone.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md cursor-pointer relative z-10 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${s.gradient} text-white flex items-center justify-center text-lg font-bold mb-4 shadow-lg`}
                aria-hidden="true"
              >
                {s.step}
              </div>
              <h3 className="font-semibold text-lg text-gray-800">{s.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SVG Connectors (desktop only) */}
        <div className="hidden md:flex justify-between items-center max-w-5xl mx-auto mt-12 relative">
          {steps.slice(0, -1).map((_, i) => (
            <motion.svg
              key={i}
              className="flex-1 mx-2"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 100 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: i * 0.3 }}
            >
              <defs>
                <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <line
                x1="0"
                y1="3"
                x2="100"
                y2="3"
                stroke={`url(#grad-${i})`}
                strokeWidth="6"
                strokeLinecap="round"
              />
            </motion.svg>
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default Workflow;

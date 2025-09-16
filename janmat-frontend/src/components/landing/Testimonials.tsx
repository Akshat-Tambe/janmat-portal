// src/components/landing/Testimonials.tsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "This platform made our university elections smooth and transparent. Highly recommended!",
    name: "Ananya Sharma",
    role: "Student Leader",
  },
  {
    quote: "Secure and easy to use. We trust it for our organizational decision-making.",
    name: "Rajesh Kumar",
    role: "NGO Director",
  },
  {
    quote: "VoteSecure gave us confidence in the integrity of our voting process.",
    name: "Meera Iyer",
    role: "Community Organizer",
  },
];


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-100 mb-12"
        >
          Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Communities</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl shadow-md border border-white/20 flex flex-col h-full bg-white/10 backdrop-blur-md text-left justify-between"
            >
              <p className="italic text-gray-200 leading-relaxed mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-100">{t.name}</p>
                  <p className="text-gray-300 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Testimonials;

// src/components/landing/Features.tsx
import React, { type JSX } from "react";
import { Shield, BarChart2, Smartphone, Server } from "lucide-react";
import { motion } from "framer-motion";

type Feature = {
  icon: JSX.Element;
  title: string;
  desc: string;
  gradient: string;
};

const features: Feature[] = [
  {
    icon: <Shield className="w-10 h-10 text-blue-600" aria-hidden="true" />,
    title: "Security",
    desc: "End-to-end encryption ensures safe and secure votes.",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-green-600" aria-hidden="true" />,
    title: "Transparency",
    desc: "View live results, fully auditable with no manipulation.",
    gradient: "from-green-50 to-green-100",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-purple-600" aria-hidden="true" />,
    title: "Accessibility",
    desc: "Vote from any device with a simple and intuitive interface.",
    gradient: "from-purple-50 to-purple-100",
  },
  {
    icon: <Server className="w-10 h-10 text-red-600" aria-hidden="true" />,
    title: "Scalability",
    desc: "Robust system designed to handle large-scale elections.",
    gradient: "from-red-50 to-red-100",
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            VoteSecure?
          </span>
        </h2>
        <p className="text-lg text-gray-600 mb-14">
          Built with cutting-edge technology to ensure trust, security, and ease
          of use.
        </p>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 rounded-2xl shadow-md bg-gradient-to-br ${f.gradient} cursor-pointer transition-transform`}
            >
              {/* Icon wrapper with subtle pulse */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="mb-4 mx-auto flex items-center justify-center rounded-xl bg-white/70 w-16 h-16 shadow-sm"
              >
                {f.icon}
              </motion.div>

              <h3 className="font-semibold text-lg text-gray-800">
                {f.title}
              </h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;

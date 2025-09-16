// src/components/landing/Workflow.tsx

import { motion } from "framer-motion";

type Step = { step: string; title: string; desc: string; gradient: string };

const steps: Step[] = [
  { step: "1", title: "Register", desc: "Sign up with your credentials.", gradient: "from-blue-500 to-indigo-500" },
  { step: "2", title: "Verify", desc: "Confirm your eligibility securely.", gradient: "from-green-500 to-emerald-500" },
  { step: "3", title: "Vote", desc: "Cast your vote with one click.", gradient: "from-purple-500 to-pink-500" },
  { step: "4", title: "View Results", desc: "Track results in real time.", gradient: "from-orange-500 to-red-500" },
];


const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="relative min-h-screen md:h-screen flex items-center justify-center px-6 text-center overflow-hidden bg-transparent"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-100 mb-4"
        >
          How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Works</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 text-lg mb-14"
        >
          A simple and secure process designed for everyone.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md cursor-pointer relative z-10 bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${s.gradient} text-white flex items-center justify-center text-lg font-bold mb-4 shadow-lg`}
              >
                {s.step}
              </div>
              <h3 className="font-semibold text-lg text-white">{s.title}</h3>
              <p className="text-gray-200 mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Workflow;

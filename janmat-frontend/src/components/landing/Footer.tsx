// src/components/landing/Footer.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Dialog from "../common/Dialog";
import Privacy from "../common/Privacy"
import Terms from "../common/Terms"
import { Link } from "react-router-dom";
import AboutContent from "../common/About";


const Footer: React.FC = () => {
    const floatingCircles = Array.from({ length: 12 });

    // Dialog state
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const [openTerms, setOpenTerms] = useState(false);

    const [openAbout, setOpenAbout] = useState(false);


    return (
        <footer className="relative bg-transparent text-gray-300 py-16 px-6 overflow-hidden">
            {/* Animated Background Circles */}
            {floatingCircles.map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 15, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut",
                    }}
                    className="absolute rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20"
                    style={{
                        width: `${Math.random() * 60 + 40}px`,
                        height: `${Math.random() * 60 + 40}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        zIndex: 0,
                    }}
                />
            ))}

            {/* Footer Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
            >
                {/* Branding */}
                <p className="text-sm text-gray-400 text-center md:text-left">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-white">Jan-Mat</span>. All rights reserved.
                </p>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                    <button onClick={() => setOpenAbout(true)} className="relative group">
                        <span className="text-gray-400 group-hover:text-white transition">About</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all"></span>
                    </button>

                    <Link to="/contact" className="relative group">
                        <span className="text-gray-400 group-hover:text-white transition">Contact</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all"></span>
                    </Link>

                    {/* Privacy Policy -> Dialog */}
                    <button onClick={() => setOpenPrivacy(true)} className="relative group">
                        <span className="text-gray-400 group-hover:text-white transition">Privacy Policy</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all"></span>
                    </button>

                    {/* Terms -> Dialog */}
                    <button onClick={() => setOpenTerms(true)} className="relative group">
                        <span className="text-gray-400 group-hover:text-white transition">Terms</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all"></span>
                    </button>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-5 mt-4 md:mt-0">
                    {[Facebook, Twitter, Linkedin, Mail].map((Icon, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-gray-400 hover:text-white shadow-lg transition-all"
                        >
                            <Icon size={20} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Dialogs */}
            <Dialog
                open={openAbout}
                onClose={() => setOpenAbout(false)}
                title="About Jan-Mat"
                content={<AboutContent />}
            />

            <Dialog
                open={openPrivacy}
                onClose={() => setOpenPrivacy(false)}
                title="Privacy Policy"
                content={<Privacy />}
                containsCheckbox
            />
            <Dialog
                open={openTerms}
                onClose={() => setOpenTerms(false)}
                title="Terms of Service"
                content={<Terms />}
                containsCheckbox
            />
        </footer>
    );
};

export default Footer;

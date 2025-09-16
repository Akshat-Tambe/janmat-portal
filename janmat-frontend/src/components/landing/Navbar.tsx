import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", color: "from-purple-500 to-pink-500" },
  { name: "Features", href: "#features", color: "from-purple-500 to-pink-500" },
  { name: "How It Works", href: "#workflow", color: "from-purple-500 to-pink-500" },
  { name: "Testimonials", href: "#testimonials", color: "from-purple-500 to-pink-500" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home"); // current section

  // Track current section using IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // section is 50% visible
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-9 h-9" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Jan-Mat
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, y: -2 }}
              className="relative font-medium cursor-pointer"
            >
              <a
                href={link.href}
                className={`relative transition-colors ${active === link.href
                  ? "text-white font-semibold"
                  : "text-gray-700 hover:text-white"
                  }`}
              >
                {link.name}

                {/* Unique gradient underline for hover or active */}
                <motion.span
                  layout
                  className={`absolute left-0 -bottom-1 h-1 rounded-full bg-gradient-to-r ${link.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: active === link.href ? "100%" : 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 shadow-2xl z-[1000] p-6 flex flex-col overflow-y-auto"
            >
              {/* Logo + Close */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <img src={Logo} alt="Logo" className="w-8 h-8" />
                  <span className="text-lg font-bold text-white">VoteSecure</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
                  <X size={26} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-6 mt-8 relative z-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-medium hover:underline hover:decoration-pink-400 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Auth buttons */}
              <div className="mt-auto flex flex-col gap-4 pt-6 relative z-10">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-900 transition text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center hover:from-pink-600 hover:to-purple-600 transition"
                >
                  Register
                </Link>
              </div>
            </motion.div>

          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

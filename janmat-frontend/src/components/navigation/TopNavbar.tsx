import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Dashboard", path: "/admin/dashboard", color: "from-blue-500 to-cyan-500" },
  { name: "Elections", path: "/admin/elections", color: "from-purple-500 to-pink-500" },
  { name: "Create Election", path: "/admin/create-election", color: "from-green-500 to-emerald-500" },
  { name: "Candidates", path: "/admin/candidates", color: "from-yellow-500 to-orange-500" },
  { name: "Results", path: "/admin/results", color: "from-indigo-500 to-blue-500" },
  { name: "Profile", path: "/admin/profile", color: "from-red-500 to-pink-500" },
];

const TopNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link to="/admin/dashboard" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Admin Panel
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative font-medium cursor-pointer"
              >
                <Link
                  to={link.path}
                  className={`relative transition-colors ${isActive
                    ? "text-white font-semibold"
                    : "text-gray-700 hover:text-white"
                    }`}
                >
                  {link.name}
                  {/* Gradient underline */}
                  <motion.span
                    layout
                    className={`absolute left-0 -bottom-1 h-1 rounded-full bg-gradient-to-r ${link.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            );
          })}
          {/* Logout button */}
          <Link
            to="/logout"
            className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg 
                       bg-gradient-to-r from-red-500 to-pink-500 
                       text-white font-semibold shadow-md
                       hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <LogOut size={18} />
            Logout
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-2xl z-[1000] p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold text-blue-400">
                Admin Panel
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-gray-300 text-lg font-medium hover:text-white transition ${location.pathname === link.path ? "text-white" : ""
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Logout */}
              <Link
                to="/logout"
                onClick={() => setIsOpen(false)}
                className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                           bg-gradient-to-r from-red-500 to-pink-500 
                           text-white font-semibold shadow-md
                           hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <LogOut size={18} />
                Logout
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopNavbar;

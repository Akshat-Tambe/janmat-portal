// src/components/navigation/TopNavbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Elections", path: "/admin/elections" },
    { name: "Create Election", path: "/admin/create-election" },
    { name: "Candidates", path: "/admin/candidates" },
    { name: "Results", path: "/admin/results" },
    { name: "Profile", path: "/admin/profile" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-primary">
            Admin Panel
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-text-secondary hover:text-primary transition font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/logout"
              className="text-danger hover:brightness-90 transition font-medium"
            >
              Logout
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-text-secondary hover:text-primary focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-4 py-2 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-text-secondary hover:text-primary transition font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/logout"
              className="text-danger hover:brightness-90 transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Logout
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopNavbar;

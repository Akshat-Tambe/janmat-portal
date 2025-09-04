// src/components/navigation/TopNavbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const TopNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Elections", path: "/admin/elections" },
    { name: "Create Election", path: "/admin/create-election" },
    { name: "Candidates", path: "/admin/candidates" },
    { name: "Results", path: "/admin/results" },
    { name: "Profile", path: "/admin/profile" },
  ];

  return (
    <>
      {/* Top Nav */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo / Brand */}
            <div className="flex-shrink-0 text-2xl font-bold text-primary tracking-wide">
              Admin Panel
            </div>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center space-x-6">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative font-medium transition text-text-secondary hover:text-primary
                      ${
                        isActive
                          ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                          : ""
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                to="/logout"
                className="ml-4 px-4 py-1 rounded-full bg-red-100 text-danger hover:bg-red-200 transition font-medium"
              >
                Logout
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setDrawerOpen(true)}
                className="text-text-secondary hover:text-primary focus:outline-none"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition ${
          drawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            drawerOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <span className="text-xl font-bold text-primary">Admin Panel</span>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-gray-600 hover:text-primary"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col px-4 py-6 space-y-4">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-2 py-2 rounded font-medium transition ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setDrawerOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to="/logout"
              className="mt-auto block px-2 py-2 rounded font-medium text-danger hover:bg-red-100"
              onClick={() => setDrawerOpen(false)}
            >
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;

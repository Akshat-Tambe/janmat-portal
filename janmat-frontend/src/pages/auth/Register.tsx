// src/pages/auth/Register.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { motion } from "framer-motion";

const Register: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempted with:", form);
    // TODO: hook into your backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 to-purple-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-800"
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Create Your Account
        </h1>
        <p className="text-gray-400 text-sm text-center mb-8">
          Join <span className="text-white font-semibold">Jan-Mat</span> today and be part of the change.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="primary" size="md" className="w-full">
            Register
          </Button>
        </form>

        {/* Links */}
        <div className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

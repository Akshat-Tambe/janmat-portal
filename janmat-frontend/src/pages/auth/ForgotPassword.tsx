// src/pages/auth/ForgotPassword.tsx
import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { motion } from "framer-motion";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    // TODO: hook up with backend reset API
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
          Forgot Your Password?
        </h1>
        <p className="text-gray-400 text-sm text-center mb-8">
          Enter your registered email below, and we’ll send you a reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" variant="primary" size="md" className="w-full">
            Send Reset Link
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;

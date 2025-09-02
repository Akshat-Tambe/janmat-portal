import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "info" | "success";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  disabled,
  ...props
}) => {
  const base =
    "px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    info: "bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-400",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",
  };

  return (
    <button
      className={`${base} ${variants[variant]}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, textarea = false, ...props }) => {
  const baseClass =
    "w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200";

  const borderClass = error ? "border-red-500" : "border-gray-300";

  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 font-medium text-gray-700">{label}</label>}
      {textarea ? (
        <textarea className={`${baseClass} ${borderClass}`} {...props} />
      ) : (
        <input className={`${baseClass} ${borderClass}`} {...props} />
      )}
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, textarea = false, ...props }) => {
  const baseClass =
    "w-full rounded-xl bg-gray-900/40 border px-4 py-3 text-white placeholder-gray-400 shadow-md " +
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300";

  const borderClass = error
    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
    : "border-gray-700";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          className={`${baseClass} ${borderClass} resize-none`}
          rows={4}
          {...props}
        />
      ) : (
        <input className={`${baseClass} ${borderClass}`} {...props} />
      )}
      {error && (
        <span className="text-red-400 text-xs mt-1">{error}</span>
      )}
    </div>
  );
};

export default Input;
